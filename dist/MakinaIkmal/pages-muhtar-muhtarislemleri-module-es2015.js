(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-muhtar-muhtarislemleri-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/muhtarislemleri.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/muhtarislemleri.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/muhtar/muhtarislemleri.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/muhtar/muhtarislemleri.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL211aHRhci9tdWh0YXJpc2xlbWxlcmkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/muhtar/muhtarislemleri.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/muhtar/muhtarislemleri.component.ts ***!
  \***********************************************************/
/*! exports provided: MuhtarIslemleriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuhtarIslemleriComponent", function() { return MuhtarIslemleriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MuhtarIslemleriComponent = class MuhtarIslemleriComponent {
    constructor() { }
    ngOnInit() {
    }
};
MuhtarIslemleriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-muhtarislemleri',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./muhtarislemleri.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/muhtar/muhtarislemleri.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./muhtarislemleri.component.scss */ "./src/app/pages/muhtar/muhtarislemleri.component.scss")).default]
    })
], MuhtarIslemleriComponent);



/***/ }),

/***/ "./src/app/pages/muhtar/muhtarislemleri.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/muhtar/muhtarislemleri.module.ts ***!
  \********************************************************/
/*! exports provided: MuhtarIslemleriModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuhtarIslemleriModule", function() { return MuhtarIslemleriModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _muhtarislemleri_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muhtarislemleri.routing */ "./src/app/pages/muhtar/muhtarislemleri.routing.ts");
/* harmony import */ var _muhtarislemleri_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./muhtarislemleri.component */ "./src/app/pages/muhtar/muhtarislemleri.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let MuhtarIslemleriModule = class MuhtarIslemleriModule {
};
MuhtarIslemleriModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _muhtarislemleri_routing__WEBPACK_IMPORTED_MODULE_3__["MuhtarIslemleriRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_muhtarislemleri_component__WEBPACK_IMPORTED_MODULE_4__["MuhtarIslemleriComponent"]]
    })
], MuhtarIslemleriModule);



/***/ }),

/***/ "./src/app/pages/muhtar/muhtarislemleri.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/muhtar/muhtarislemleri.routing.ts ***!
  \*********************************************************/
/*! exports provided: MuhtarIslemleriRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuhtarIslemleriRoutingModule", function() { return MuhtarIslemleriRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Muhtar İşlemleri ',
            status: false
        },
        children: [
            {
                path: 'BasvuruOnayBekleyen',
                loadChildren: () => Promise.all(/*! import() | basvuruonaybekleyen-basvuruonaybekleyen-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("basvuruonaybekleyen-basvuruonaybekleyen-module")]).then(__webpack_require__.bind(null, /*! ./basvuruonaybekleyen/basvuruonaybekleyen.module */ "./src/app/pages/muhtar/basvuruonaybekleyen/basvuruonaybekleyen.module.ts")).then(m => m.BasvuruOnayBekleyenModule)
            },
            {
                path: 'YardimOnayBekleyen',
                loadChildren: () => Promise.all(/*! import() | yardimonaybekleyen-yardimonaybekleyen-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("yardimonaybekleyen-yardimonaybekleyen-module")]).then(__webpack_require__.bind(null, /*! ./yardimonaybekleyen/yardimonaybekleyen.module */ "./src/app/pages/muhtar/yardimonaybekleyen/yardimonaybekleyen.module.ts")).then(m => m.YardimOnayBekleyenModule)
            },
            {
                path: 'GerceklesenYardimlar',
                loadChildren: () => Promise.all(/*! import() | gerceklesenbasvurular-gerceklesenbasvurular-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("common"), __webpack_require__.e("gerceklesenbasvurular-gerceklesenbasvurular-module")]).then(__webpack_require__.bind(null, /*! ./gerceklesenbasvurular/gerceklesenbasvurular.module */ "./src/app/pages/muhtar/gerceklesenbasvurular/gerceklesenbasvurular.module.ts")).then(m => m.GerceklesenBasvurularModule)
            },
        ]
    },
];
let MuhtarIslemleriRoutingModule = class MuhtarIslemleriRoutingModule {
};
MuhtarIslemleriRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], MuhtarIslemleriRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-muhtar-muhtarislemleri-module-es2015.js.map