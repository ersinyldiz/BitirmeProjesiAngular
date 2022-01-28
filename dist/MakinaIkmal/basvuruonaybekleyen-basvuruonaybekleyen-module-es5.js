function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basvuruonaybekleyen-basvuruonaybekleyen-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMuhtarBasvuruonaybekleyenBasvuruonaybekleyenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Muhtar Onayı Bekleyen Başvurular'\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-xl-12\" style=\"margin-bottom:10px;\">\r\n          <div class=\"btn-group\" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n            data-original-title=\".btn-xlg\">\r\n            <button type=\"button\" (click)=\"onayla()\" [disabled]=\"dataservis.buttonDisabled\"\r\n              class=\"btn dropdown-disabled btn-outline-success tanimIslemBtn\">\r\n              <i class=\"icofont icofont-tick-boxed\"></i>Seçilen Başvuruları Onayla\r\n            </button>\r\n            <button type=\"button\" (click)=\"reddet()\" [disabled]=\"dataservis.buttonDisabled\"\r\n              class=\"btn dropdown-disabled btn-outline-danger tanimIslemBtn\">\r\n              <i class=\"icofont icofont-close-squared-alt\"></i>Seçilen Başvuruları İptal Et/Sil\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-md-12 col-xl-12\">\r\n        <div class=\"row\">\r\n          <dx-data-grid id=\"gridPerformansTakip\" #gridPerformansTakip *ngIf=\"rows.length>0 ? true : false\"\r\n            style=\"height: 490px;overflow-y: hidden !important;\" [dataSource]=\"rows\" [allowColumnReordering]=\"true\"\r\n            [rowAlternationEnabled]=\"true\" [showBorders]=\"true\" (onContentReady)=\"contentReady($event)\"\r\n            [selectedRowKeys]=\"[]\" [allowColumnResizing]=\"true\" [columnHidingEnabled]=\"true\" [wordWrapEnabled]=\"true\"\r\n            (onSelectionChanged)=\"onSelectionChanged($event)\">\r\n            <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n            <dxo-selection mode=\"multiple\"></dxo-selection>\r\n            <dxo-paging [pageSize]=\"dataservis.size\"></dxo-paging>\r\n            <dxo-pager [showInfo]=\"true\" [showNavigationButtons]=\"true\" [showPageSizeSelector]=\"true\"></dxo-pager>\r\n            <dxo-search-panel [visible]=\"true\" [highlightCaseSensitive]=\"false\">\r\n            </dxo-search-panel>\r\n            <dxo-group-panel [visible]=\"true\"></dxo-group-panel>\r\n            <dxo-grouping [contextMenuEnabled]=\"true\" expandMode=\"rowClick\"></dxo-grouping>\r\n            <dxo-column-chooser [enabled]=\"true\" mode=\"select\"></dxo-column-chooser>\r\n            <dxo-header-filter [groupInterval]=\"1000\" [visible]=\"true\" [allowSearch]=\"true\">\r\n            </dxo-header-filter>\r\n            <dxo-export [enabled]=\"true\"></dxo-export>\r\n            <dxi-column dataField=\"SiraNo\" [sortIndex]=\"0\" sortOrder=\"desc\" caption=\"S.N\" dataType=\"number\"\r\n              alignment=\"right\" [width]=\"100\"></dxi-column>\r\n            <dxi-column dataField=\"Durum\" caption=\"Durum\" [alignment]=\"'center'\" [width]=\"100\"\r\n              cellTemplate=\"tagCellTemplate\"></dxi-column>\r\n            <dxi-column dataField=\"TcNo\" caption=\"T.C Kimlik\" dataType=\"string\"></dxi-column>\r\n            <dxi-column dataField=\"Ad\" caption=\"Adi\" dataType=\"string\">\r\n            </dxi-column>\r\n            <dxi-column dataField=\"Soyad\" caption=\"Soyadi\" dataType=\"string\"></dxi-column>\r\n            <dxi-column dataField=\"Aciklama\" caption=\"Açıklama\" dataType=\"string\"></dxi-column>\r\n            <dxi-column dataField=\"BasvuruTarih\" caption=\"Tarih\" dataType=\"datetime\"></dxi-column>\r\n            <dxi-column dataField=\"IlAdi\" caption=\"İl\" dataType=\"string\"></dxi-column>\r\n            <dxi-column dataField=\"IlceAdi\" caption=\"İlçe\" dataType=\"string\"></dxi-column>\r\n            <dxi-column dataField=\"MahalleAdi\" caption=\"Mahalle\" dataType=\"string\"></dxi-column>\r\n            <div *dxTemplate=\"let d of 'tagCellTemplate'\">\r\n              <label style=\"width:100%\"\r\n                class=\"label {{d.value==0 ? 'label-warning':d.value==1 ? 'label-success':d.value==2 ? 'label-danger' : 'label-warning'}}\">{{d.value==0\r\n                ? 'Onay Bekliyor':d.value==1 ? 'Onaylandı' : d.value==2 ? 'Onaylanmadı' : d.value==3\r\n                ? 'Geri Gönderildi' : ''}}</label>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<ng2-toasty [position]=\"dataservis.toastposition\"></ng2-toasty>";
    /***/
  },

  /***/
  "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: BasvuruOnayBekleyenRoutingModule */

  /***/
  function srcAppPagesMuhtarBasvuruonaybekleyenBasvuruonaybekleyenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasvuruOnayBekleyenRoutingModule", function () {
      return BasvuruOnayBekleyenRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basvuruonaybekleyen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basvuruonaybekleyen.component */
    "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.ts");

    var routes = [{
      path: '',
      component: _basvuruonaybekleyen_component__WEBPACK_IMPORTED_MODULE_3__["BasvuruOnayBekleyenComponent"],
      data: {
        breadcrumb: 'Muhtar Onayı Bekleyen Başvurular',
        status: false
      }
    }];

    var BasvuruOnayBekleyenRoutingModule = function BasvuruOnayBekleyenRoutingModule() {
      _classCallCheck(this, BasvuruOnayBekleyenRoutingModule);
    };

    BasvuruOnayBekleyenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasvuruOnayBekleyenRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMuhtarBasvuruonaybekleyenBasvuruonaybekleyenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL211aHRhci9iYXN2dXJ1b25heWJla2xleWVuL2Jhc3Z1cnVvbmF5YmVrbGV5ZW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BasvuruOnayBekleyenComponent */

  /***/
  function srcAppPagesMuhtarBasvuruonaybekleyenBasvuruonaybekleyenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasvuruOnayBekleyenComponent", function () {
      return BasvuruOnayBekleyenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var devextreme_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! devextreme/localization */
    "./node_modules/devextreme/localization.js");
    /* harmony import */


    var devextreme_localization__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(devextreme_localization__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var devextreme_localization_messages_tr_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! devextreme/localization/messages/tr.json */
    "./node_modules/devextreme/localization/messages/tr.json");

    var devextreme_localization_messages_tr_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! devextreme/localization/messages/tr.json */
    "./node_modules/devextreme/localization/messages/tr.json", 1);
    /* harmony import */


    var src_app_services_muhtarislemleri_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/muhtarislemleri.service */
    "./src/app/services/muhtarislemleri.service.ts");
    /* harmony import */


    var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @rxweb/reactive-form-validators */
    "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js");
    /* harmony import */


    var src_app_models_basvurular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/basvurular */
    "./src/app/models/basvurular.ts");

    var BasvuruOnayBekleyenComponent =
    /*#__PURE__*/
    function () {
      function BasvuruOnayBekleyenComponent(dataservis, toastr, formBuilder) {
        var _this = this;

        _classCallCheck(this, BasvuruOnayBekleyenComponent);

        this.dataservis = dataservis;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.rows = [];
        this.collapsed = false;

        this.contentReady = function (e) {
          if (!_this.collapsed) {
            _this.collapsed = true;
            e.component.expandRow(['SiraNo']);
          }
        };

        Object(devextreme_localization__WEBPACK_IMPORTED_MODULE_4__["loadMessages"])(devextreme_localization_messages_tr_json__WEBPACK_IMPORTED_MODULE_5__);
        Object(devextreme_localization__WEBPACK_IMPORTED_MODULE_4__["locale"])(navigator.language);
      }

      _createClass(BasvuruOnayBekleyenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var basvuruOnay = new src_app_models_basvurular__WEBPACK_IMPORTED_MODULE_8__["BasvuruOnayClass"]();
          this.form = this.formBuilder.formGroup(basvuruOnay);
          this.veriGetir();
          this.dataservis.getSayfayiYenile().subscribe(function (value) {
            if (value) {
              _this2.veriGetir();
            }
          });
        }
      }, {
        key: "veriGetir",
        value: function veriGetir() {
          var _this3 = this;

          this.dataservis.selected = [];
          this.dataservis.buttonDisabled = true;
          this.dataservis.GetBasvurularByMuhtarOnayiBekleyen().subscribe(function (pagedData) {
            _this3.rows = pagedData;

            _this3.dataservis.SayfayiYenile.next(false);
          });
        }
      }, {
        key: "onSelectionChanged",
        value: function onSelectionChanged(e) {
          if (e.selectedRowsData.length > 0) {
            this.gridNo = 1;
            this.dataservis.buttonDisabled = false;
            this.dataservis.selected = e.selectedRowsData;
          }

          this.form.get('kayitlar').setValue(e.selectedRowsData);
        }
      }, {
        key: "onayla",
        value: function onayla() {
          var _this4 = this;

          if (this.dataservis.selected.length === 0) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Uyarı!',
            text: 'Bu Başvurular Onaylansın mı ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Evet',
            cancelButtonText: 'Hayır'
          }).then(function (result) {
            if (result.value) {
              _this4.dataservis.Onayla(_this4.form.value).subscribe(function (pagedData) {
                if (pagedData.SonucMesaji === '0000') {
                  _this4.toastr.success({
                    title: 'Sonuç Mesajı',
                    msg: 'Seçmiş Olduğunuz Başvurular Başarı ile Onaylanmıştır.',
                    timeout: 5000,
                    theme: 'default'
                  });

                  _this4.veriGetir();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Sonuç',
                    confirmButtonText: 'Tamam',
                    html: pagedData.SonucMesaji
                  });
                }
              });
            }
          });
        }
      }, {
        key: "reddet",
        value: function reddet() {
          var _this5 = this;

          if (this.dataservis.selected.length === 0) {
            return;
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Uyarı!',
            text: 'Bu Başvurular İptal Edilip Silinsin mi ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Evet',
            cancelButtonText: 'Hayır'
          }).then(function (result) {
            if (result.value) {
              _this5.dataservis.Reddet(_this5.form.value).subscribe(function (pagedData) {
                if (pagedData.SonucMesaji === '0000') {
                  _this5.toastr.success({
                    title: 'Sonuç Mesajı',
                    msg: 'Seçmiş Olduğunuz Başvurular Başarı ile Silinmiştir.',
                    timeout: 5000,
                    theme: 'default'
                  });

                  _this5.veriGetir();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Sonuç',
                    confirmButtonText: 'Tamam',
                    html: pagedData.SonucMesaji
                  });
                }
              });
            }
          });
        }
      }]);

      return BasvuruOnayBekleyenComponent;
    }();

    BasvuruOnayBekleyenComponent.ctorParameters = function () {
      return [{
        type: src_app_services_muhtarislemleri_service__WEBPACK_IMPORTED_MODULE_6__["MuhtarIslemleriService"]
      }, {
        type: ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"]
      }, {
        type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxFormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPerformansTakip', {
      static: false
    })], BasvuruOnayBekleyenComponent.prototype, "dataGridPerformansTakip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPerformansTakipGecmis', {
      static: false
    })], BasvuruOnayBekleyenComponent.prototype, "dataGridPerformansTakipGecmis", void 0);
    BasvuruOnayBekleyenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basvuruonaybekleyen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basvuruonaybekleyen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basvuruonaybekleyen.component.scss */
      "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.scss")).default]
    })], BasvuruOnayBekleyenComponent);
    /***/
  },

  /***/
  "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.module.ts ***!
    \********************************************************************************/

  /*! exports provided: BasvuruOnayBekleyenModule */

  /***/
  function srcAppPagesMuhtarBasvuruonaybekleyenBasvuruonaybekleyenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasvuruOnayBekleyenModule", function () {
      return BasvuruOnayBekleyenModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/fesm2015/devextreme-angular.js");
    /* harmony import */


    var _basvuruonaybekleyen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basvuruonaybekleyen.component */
    "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.component.ts");
    /* harmony import */


    var _basvuruonaybekleyen_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./basvuruonaybekleyen-routing.module */
    "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen-routing.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var BasvuruOnayBekleyenModule = function BasvuruOnayBekleyenModule() {
      _classCallCheck(this, BasvuruOnayBekleyenModule);
    };

    BasvuruOnayBekleyenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _basvuruonaybekleyen_routing_module__WEBPACK_IMPORTED_MODULE_6__["BasvuruOnayBekleyenRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTemplateModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxBulletModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_basvuruonaybekleyen_component__WEBPACK_IMPORTED_MODULE_5__["BasvuruOnayBekleyenComponent"]]
    })], BasvuruOnayBekleyenModule);
    /***/
  }
}]);
//# sourceMappingURL=basvuruonaybekleyen-basvuruonaybekleyen-module-es5.js.map