(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/forgot.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/forgot.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/auth/logo.png\" alt=\"Mash Able\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 style=\"font-size:18px;\" class=\"text-left\">Şifrenizi mi unuttunuz ? </h3>\r\n                  <h3 style=\"font-size:18px;\" class=\"text-left\">Burdan yeni şifre alabilirsiniz.</h3>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse b-b-default text-right\"><a [routerLink]=\"['/auth/login/simple']\">Giriş Yap</a></p>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Yeni Şifre Gönder</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">CRM & Merkezi Yönetim Portalı</p>\r\n                  <p class=\"text-inverse text-left\"><b>Bilgi İşlem Daire Başkanlığı<br>Erzurum Büyükşehir Belediyesi</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/forgot/forgot-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ForgotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotRoutingModule", function() { return ForgotRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.component */ "./src/app/pages/auth/forgot/forgot.component.ts");




const routes = [
    {
        path: '',
        component: _forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"],
        data: {
            title: 'Forgot Page'
        }
    }
];
let ForgotRoutingModule = class ForgotRoutingModule {
};
ForgotRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ForgotRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/forgot/forgot.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotComponent = class ForgotComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/forgot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.component.css */ "./src/app/pages/auth/forgot/forgot.component.css")).default]
    })
], ForgotComponent);



/***/ }),

/***/ "./src/app/pages/auth/forgot/forgot.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.module.ts ***!
  \****************************************************/
/*! exports provided: ForgotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.component */ "./src/app/pages/auth/forgot/forgot.component.ts");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/pages/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let ForgotModule = class ForgotModule {
};
ForgotModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]]
    })
], ForgotModule);



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module-es2015.js.map