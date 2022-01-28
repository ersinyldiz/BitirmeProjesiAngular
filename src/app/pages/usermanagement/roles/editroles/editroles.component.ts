import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/usermanagement/permission';
import { Role } from 'src/app/models/usermanagement/role';
import { UserControlService } from 'src/app/services/usercontrol.service';
import { ToastyService } from 'ng2-toasty';
// RxJS
import { Observable, of, Subscription } from 'rxjs';
// Lodash
import { each, find, some } from 'lodash';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { Roltanimlari } from 'src/app/models/usermanagement/roltanimlari';

@Component({
    selector: 'app-editroles',
    templateUrl: './editroles.component.html',
    styleUrls: ['./editroles.component.scss']
})
export class EditrolesComponent implements OnInit {

    hasFormErrors = false;
    loadingAfterSubmit = false;
    viewLoading = false;
    islemTuru: number;

    role: Role;
    allPermissions: Permission[];
    rolePermissions: Permission[] = [];
    roltanimlari: Roltanimlari;

    permissions: number[] = [];

    constructor(private dataservis: UserControlService, private toastr: ToastyService) {

        this.role = new Role();
        this.dataservis.getIslemTuru().subscribe(value => {
            this.islemTuru = value;
            if (this.islemTuru === IslemTuru.Edit && this.dataservis.Rolselected.length > 0) {
                this.role.id = this.dataservis.Rolselected[0].id;
                this.role.title = this.dataservis.Rolselected[0].RolAdi;
                this.permissions = this.dataservis.Rolselected[0].permissions.split(',').map(function (item) {
                    return parseInt(item, 10);
                });

                this.role.permissions = this.permissions;
                this.role.isCoreRole = false;
                this.loadPermissions();
            } else {
                this.role.id = 0;
                this.role.title = '';
                this.role.permissions = [];
                this.role.isCoreRole = false;
                this.loadPermissions();
            }
        });
        this.dataservis.getPermission().subscribe(pagedData => {
            this.allPermissions = [];
            this.allPermissions = pagedData;
            this.loadPermissions();
        });
    }

    ngOnInit() {

    }

    loadPermissions() {
        this.rolePermissions = [];
        if (!this.allPermissions) {
            return;
        }

        const GrupPermissions = this.allPermissions.map(item => item.GrupName).filter((value, index, self) => self.indexOf(value) === index)
        GrupPermissions.forEach((Grupelement) => {
            const rootGrupPermission = new Permission();
            rootGrupPermission.clear();
            rootGrupPermission.GrupName = Grupelement;
            rootGrupPermission._children = [];

            const mainPermissions = this.allPermissions.filter(el => !el.parentId && el.GrupName === Grupelement);
            mainPermissions.forEach((element: Permission) => {
                const hasUserPermission = this.role.permissions.some(t => t === element.id);
                const rootPermission = new Permission();
                rootPermission.clear();
                rootPermission.isSelected = hasUserPermission;
                rootPermission._children = [];
                rootPermission.id = element.id;
                rootPermission.level = element.level;
                rootPermission.parentId = element.parentId;
                rootPermission.name = element.name;
                rootPermission.title = element.title;
                rootPermission.Grup = element.Grup;
                const children = this.allPermissions.filter(el => el.parentId && el.parentId === element.id);
                children.forEach(child => {
                    const hasUserChildPermission = this.role.permissions.some(t => t === child.id);
                    const childPermission = new Permission();
                    childPermission.clear();
                    childPermission.isSelected = hasUserChildPermission;
                    childPermission._children = [];
                    childPermission.id = child.id;
                    childPermission.level = child.level;
                    childPermission.Grup = child.Grup;
                    childPermission.parentId = child.parentId;
                    childPermission.name = child.name;
                    childPermission.title = child.title;
                    rootPermission._children.push(childPermission);
                });
                rootGrupPermission._children.push(rootPermission);
            });
            this.rolePermissions.push(rootGrupPermission);
        });
    }

    isSelectedChanged($event, permission: Permission, grupindx) {
        if (permission._children.length === 0 && permission.isSelected) {
            const _root = find(this.rolePermissions[grupindx]._children, (item: Permission) => item.id === permission.parentId);
            if (_root && !_root.isSelected) {
                _root.isSelected = true;
            }
            return;
        }

        if (permission._children.length === 0 && !permission.isSelected) {
            const _root = find(this.rolePermissions[grupindx]._children, (item: Permission) => item.id === permission.parentId);
            if (_root && _root.isSelected) {
                if (!some(_root._children, (item: Permission) => item.isSelected === true)) {
                    _root.isSelected = false;
                }
            }
            return;
        }

        if (permission._children.length > 0 && permission.isSelected) {
            each(permission._children, (item: Permission) => item.isSelected = true);
            return;
        }

        if (permission._children.length > 0 && !permission.isSelected) {
            each(permission._children, (item: Permission) => {
                item.isSelected = false;
            });
            return;
        }
    }


    onSubmit() {
        this.hasFormErrors = false;
        this.loadingAfterSubmit = false;
        /** check form */
        if (!this.isTitleValid()) {
            this.toastr.success({
                title: 'Sonuç Mesajı',
                msg: 'Rol Adı Boş Olamaz',
                timeout: 5000,
                theme: 'default'
            });
            return;
        }

        this.dataservis.loading = true;
        const editedRole = this.prepareRole();

        this.roltanimlari = new Roltanimlari();
        this.roltanimlari.RolAdi = editedRole.title;
        this.roltanimlari.permissions = editedRole.permissions;

        if (this.islemTuru === IslemTuru.Edit) {
            this.roltanimlari.id = editedRole.id;
            this.dataservis.UpdateRolTanimlari(this.roltanimlari).subscribe(pagedData => {
                if (pagedData.SonucMesaji === '0000') {
                    this.toastr.success({
                        title: 'Sonuç Mesajı',
                        msg: 'Kayıt Başarı ile Eklenmiştir.',
                        timeout: 5000,
                        theme: 'default'
                    });
                    this.dataservis.SayfayiYenile.next(true);
                    this.closeMyModal();
                    this.dataservis.loading = false;
                } else {
                    this.toastr.success({
                        title: 'Sonuç Mesajı',
                        msg: pagedData.SonucMesaji,
                        timeout: 5000,
                        theme: 'default'
                    });
                    this.dataservis.loading = false;
                }
            });
        }
        if (this.islemTuru === IslemTuru.New) {
            this.dataservis.AddRolTanimlari(this.roltanimlari).subscribe(pagedData => {
                if (pagedData.SonucMesaji === '0000') {
                    this.toastr.success({
                        title: 'Sonuç Mesajı',
                        msg: 'Kayıt Başarı ile Eklenmiştir.',
                        timeout: 5000,
                        theme: 'default'
                    });
                    this.dataservis.SayfayiYenile.next(true);
                    this.closeMyModal();
                    this.dataservis.loading = false;
                } else {
                    this.toastr.success({
                        title: 'Sonuç Mesajı',
                        msg: pagedData.SonucMesaji,
                        timeout: 5000,
                        theme: 'default'
                    });
                    this.dataservis.loading = false;
                }
            });
        }
    }

    isTitleValid(): boolean {
        return (this.role && this.role.title && this.role.title.length > 0);
    }

    prepareRole(): Role {
        const _role = new Role();
        _role.id = this.role.id;
        _role.permissions = this.preparePermissionIds();
        _role.title = this.role.title;
        _role.isCoreRole = this.role.isCoreRole;
        return _role;
    }

    preparePermissionIds(): number[] {
        const result = [];

        each(this.rolePermissions, (_main: Permission) => {
            each(_main._children, (_root: Permission) => {
                if (_root.isSelected) {
                    result.push(_root.id);
                    each(_root._children, (_child: Permission) => {
                        if (_child.isSelected) {
                            result.push(_child.id);
                        }
                    });
                }
            });
        });
        return result;
    }

    closeMyModal() {
        const element = document.getElementById('modalekran');
        element.children[0].classList.remove('md-show');
        this.dataservis.buttonDisabled = true;
    }
}
