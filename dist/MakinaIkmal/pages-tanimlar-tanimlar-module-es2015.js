(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanimlar-tanimlar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanimlar/tanimlar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanimlar/tanimlar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/tanimlar/tanimlar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tanimlar/tanimlar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbmltbGFyL3RhbmltbGFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/tanimlar/tanimlar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tanimlar/tanimlar.component.ts ***!
  \******************************************************/
/*! exports provided: TanimlarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TanimlarComponent", function() { return TanimlarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TanimlarComponent = class TanimlarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TanimlarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tanimlar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tanimlar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanimlar/tanimlar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tanimlar.component.scss */ "./src/app/pages/tanimlar/tanimlar.component.scss")).default]
    })
], TanimlarComponent);



/***/ }),

/***/ "./src/app/pages/tanimlar/tanimlar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tanimlar/tanimlar.module.ts ***!
  \***************************************************/
/*! exports provided: TanimlarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TanimlarModule", function() { return TanimlarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tanimlar_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tanimlar.routing */ "./src/app/pages/tanimlar/tanimlar.routing.ts");
/* harmony import */ var _tanimlar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tanimlar.component */ "./src/app/pages/tanimlar/tanimlar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let TanimlarModule = class TanimlarModule {
};
TanimlarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tanimlar_routing__WEBPACK_IMPORTED_MODULE_3__["TanimlarRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_tanimlar_component__WEBPACK_IMPORTED_MODULE_4__["TanimlarComponent"]]
    })
], TanimlarModule);



/***/ }),

/***/ "./src/app/pages/tanimlar/tanimlar.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tanimlar/tanimlar.routing.ts ***!
  \****************************************************/
/*! exports provided: TanimlarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TanimlarRoutingModule", function() { return TanimlarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Tanımlar ',
            status: false
        },
        children: [
            {
                path: 'IlTanimlari',
                loadChildren: () => Promise.all(/*! import() | iller-iller-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("iller-iller-module")]).then(__webpack_require__.bind(null, /*! ./iller/iller.module */ "./src/app/pages/tanimlar/iller/iller.module.ts")).then(m => m.IllerModule)
            },
            {
                path: 'IlceTanimlari',
                loadChildren: () => Promise.all(/*! import() | ilceler-ilceler-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("ilceler-ilceler-module")]).then(__webpack_require__.bind(null, /*! ./ilceler/ilceler.module */ "./src/app/pages/tanimlar/ilceler/ilceler.module.ts")).then(m => m.IlcelerModule)
            },
            {
                path: 'MahalleTanimlari',
                loadChildren: () => Promise.all(/*! import() | mahalle-mahalle-module */[__webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~gerceklesenbasvurular-gerceklesenbasvurular-m~5d21e583"), __webpack_require__.e("default~basvuruonaybekleyen-basvuruonaybekleyen-module~ilceler-ilceler-module~iller-iller-module~kul~27336e26"), __webpack_require__.e("common"), __webpack_require__.e("mahalle-mahalle-module")]).then(__webpack_require__.bind(null, /*! ./mahalle/mahalle.module */ "./src/app/pages/tanimlar/mahalle/mahalle.module.ts")).then(m => m.MahalleModule)
            }
        ]
    },
];
let TanimlarRoutingModule = class TanimlarRoutingModule {
};
TanimlarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], TanimlarRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tanimlar-tanimlar-module-es2015.js.map