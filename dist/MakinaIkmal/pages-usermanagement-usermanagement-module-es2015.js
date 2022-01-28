(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usermanagement-usermanagement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usermanagement/usermanagement.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usermanagement/usermanagement.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/pages/usermanagement/usermanagement.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/usermanagement/usermanagement.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJtYW5hZ2VtZW50L3VzZXJtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/usermanagement/usermanagement.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/usermanagement/usermanagement.component.ts ***!
  \******************************************************************/
/*! exports provided: UsermanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementComponent", function() { return UsermanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsermanagementComponent = class UsermanagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsermanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usermanagement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usermanagement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usermanagement/usermanagement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usermanagement.component.css */ "./src/app/pages/usermanagement/usermanagement.component.css")).default]
    })
], UsermanagementComponent);



/***/ }),

/***/ "./src/app/pages/usermanagement/usermanagement.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/usermanagement/usermanagement.module.ts ***!
  \***************************************************************/
/*! exports provided: UsermanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementModule", function() { return UsermanagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _usermanagement_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usermanagement.routing */ "./src/app/pages/usermanagement/usermanagement.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _usermanagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usermanagement.component */ "./src/app/pages/usermanagement/usermanagement.component.ts");






let UsermanagementModule = class UsermanagementModule {
};
UsermanagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _usermanagement_routing__WEBPACK_IMPORTED_MODULE_3__["UsermanagementRoutes"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [_usermanagement_component__WEBPACK_IMPORTED_MODULE_5__["UsermanagementComponent"]]
    })
], UsermanagementModule);



/***/ }),

/***/ "./src/app/pages/usermanagement/usermanagement.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/usermanagement/usermanagement.routing.ts ***!
  \****************************************************************/
/*! exports provided: UsermanagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementRoutes", function() { return UsermanagementRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


const routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Kullanıcı Yönetimi ',
            status: false
        },
        children: [
            {
                // Eklenen Sayfalar Buraya Eklenecek
                path: 'menu',
                loadChildren: () => Promise.all(/*! import() | usermanagement-menu-menu-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("usermanagement-menu-menu-module")]).then(__webpack_require__.bind(null, /*! ../usermanagement/menu/menu.module */ "./src/app/pages/usermanagement/menu/menu.module.ts")).then(m => m.MenuModule)
            },
            {
                // Eklenen Sayfalar Buraya Eklenecek
                path: 'rolles',
                loadChildren: () => Promise.all(/*! import() | usermanagement-roles-roles-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("usermanagement-roles-roles-module")]).then(__webpack_require__.bind(null, /*! ../usermanagement/roles/roles.module */ "./src/app/pages/usermanagement/roles/roles.module.ts")).then(m => m.RolesModule)
            },
            {
                path: 'passchange',
                loadChildren: () => Promise.all(/*! import() | passwordchange-passwordchange-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("passwordchange-passwordchange-module")]).then(__webpack_require__.bind(null, /*! ./passwordchange/passwordchange.module */ "./src/app/pages/usermanagement/passwordchange/passwordchange.module.ts")).then(m => m.PasswordChangeModule)
            },
            {
                path: 'user',
                loadChildren: () => Promise.all(/*! import() | kullanicibilgileri-kullanicibilgileri-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("kullanicibilgileri-kullanicibilgileri-module")]).then(__webpack_require__.bind(null, /*! ./kullanicibilgileri/kullanicibilgileri.module */ "./src/app/pages/usermanagement/kullanicibilgileri/kullanicibilgileri.module.ts")).then(m => m.KullaniciBilgileriModule)
            }
        ]
    }
];
const UsermanagementRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=pages-usermanagement-usermanagement-module-es2015.js.map