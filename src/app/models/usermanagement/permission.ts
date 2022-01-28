import { BaseModel } from './base-model';

export class Permission extends BaseModel {
    id: number;
    title: string;
    level: number;
    parentId: number;
    isSelected: boolean;
    name: string;
    _children: Permission[];
    sirano:number;
    Grup:number;
    SubGrup:number;
    GrupName:string;

    clear(): void {
        this.id = undefined;
        this.title = '';
        this.level = 1;
        this.parentId = undefined;
        this.isSelected = false;
        this.name = '';
        this._children = [];
        this.Grup= undefined;
        this.SubGrup =undefined;
        this.GrupName ='';
	}
}
