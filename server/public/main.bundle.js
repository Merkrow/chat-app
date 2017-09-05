webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_page_chat_page_module__ = __webpack_require__("../../../../../src/app/chat-page/chat-page.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var rootRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([], { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            rootRouting,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__chat_page_chat_page_module__["a" /* ChatPageModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["d" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["e" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["f" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["g" /* SelectChatService */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["h" /* SelectUserService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-form\">\n  <div class=\"form authorization\" *ngIf=\"!register\">\n    <h2>= Chat App =</h2>\n    <div class=\"auth-select\">\n      <ul>\n        <li class=\"border-right\" (click)=\"changeToLogin()\" [ngClass]=\"{ 'selected': !register}\">Sign in</li>\n        <li (click)=\"changeToReg()\" [ngClass]=\"{ 'selected': register}\">Sign up</li>\n      </ul>\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\" />\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"password\" placeholder=\"Password\" />\n    </div>\n    <div class=\"form-button form-elem\">\n      <button type=\"button\" (click)=\"submitForm()\">Submit Form</button>\n    </div>\n  </div>\n  <div class=\"form registration\" *ngIf=\"register\">\n    <h2>Registration</h2>\n    <div class=\"auth-select\">\n      <ul>\n        <li class=\"border-right\" (click)=\"changeToLogin()\" [ngClass]=\"{ 'selected': !register}\">Sign in</li>\n        <li (click)=\"changeToReg()\" [ngClass]=\"{ 'selected': register}\">Sign up</li>\n      </ul>\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"first\" placeholder=\"First Name\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"last\" placeholder=\"Last Name\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Phone\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"language\" placeholder=\"Language\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"text\" [(ngModel)]=\"address\" placeholder=\"Address\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <input type=\"file\" (change)=\"changeImage($event)\" placeholder=\"Image\">\n    </div>\n    <div class=\"form-input form-elem\">\n      <dp-date-picker [(ngModel)]=\"birthday\"></dp-date-picker>\n    </div>\n    <select class=\"form-select form-elem\" [(ngModel)]=\"gender\">\n      <option value=\"Male\">Male</option>\n      <option value=\"Female\">Female</option>\n    </select>\n    <div class=\"form-button form-elem\">\n      <button type=\"button\" (click)=\"submit()\">Submit</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  background-color: #1d232a; }\n  .auth-form .form {\n    display: inline-block;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .auth-form .form .auth-select {\n      text-align: center; }\n      .auth-form .form .auth-select ul {\n        padding: 0;\n        margin: 0 0 40px 0; }\n        .auth-form .form .auth-select ul li {\n          display: inline-block;\n          color: #939597;\n          padding: 0 12px;\n          cursor: pointer; }\n        .auth-form .form .auth-select ul .selected {\n          color: #fff; }\n        .auth-form .form .auth-select ul .border-right {\n          border-right: 1px solid #bebebe; }\n        .auth-form .form .auth-select ul li:hover {\n          color: #fff; }\n    .auth-form .form h2 {\n      color: #fff;\n      text-align: center;\n      font-size: 44px;\n      font-weight: 200;\n      margin: 0 0 75px 0; }\n    .auth-form .form .form-elem input {\n      height: 40px;\n      width: 310px;\n      box-sizing: border-box;\n      border-radius: 18px;\n      border: none;\n      margin-bottom: 30px;\n      background-color: #363d45;\n      color: #868b8e;\n      text-align: center;\n      font-size: 14px;\n      font-weight: 400; }\n    .auth-form .form .form-elem input:focus {\n      outline: none; }\n    .auth-form .form .form-elem button {\n      height: 40px;\n      width: 310px;\n      box-sizing: border-box;\n      border-radius: 18px;\n      border: none;\n      background-color: #0084ff;\n      color: #fff; }\n    .auth-form .form .form-elem button:focus {\n      outline: none; }\n    .auth-form .form .form-select {\n      height: 40px;\n      width: 310px;\n      box-sizing: border-box;\n      border-radius: 18px;\n      border: none;\n      background-color: #363d45;\n      color: #fff;\n      margin-bottom: 30px; }\n    .auth-form .form .form-select:focus {\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.email = 'user@gmail.com';
        this.password = '111111';
        this.image = '';
        this.first = '111111';
        this.last = '222222';
        this.phone = '12345';
        this.address = '54321';
        this.language = 'english';
        this.username = 'test';
        this.gender = 'Male';
        this.register = false;
        this.birthday = __WEBPACK_IMPORTED_MODULE_2_moment__().format('DD-MM-YYYY');
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.changeToReg = function () {
        this.register = true;
    };
    AuthComponent.prototype.changeToLogin = function () {
        this.register = false;
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.userService.postUser({
            picture: this.image,
            firstName: this.first,
            lastName: this.last,
            fullName: this.first + ' ' + this.last,
            email: this.email,
            password: this.password,
            phone: this.phone,
            address: this.address,
            language: this.language,
            username: this.username,
            gender: this.gender,
            birthday: this.birthday,
        }).subscribe(function (res) {
            if (res.success) {
                _this.userService.attemptAuth({ email: _this.email, password: _this.password })
                    .subscribe(function (data) { return _this.router.navigateByUrl('/chat'); });
            }
        });
    };
    AuthComponent.prototype.changeImage = function ($event) {
        this.readThis($event.target);
    };
    AuthComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.userService.attemptAuth({ email: this.email, password: this.password })
            .subscribe(function (data) { return _this.router.navigateByUrl('/chat'); });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_date_picker__ = __webpack_require__("../../../../ng2-date-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var authRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
    },
]);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* SharedModule */],
            authRouting,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_date_picker__["DpDatePickerModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
        ],
        exports: []
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-popup *ngIf=\"popup\" [user]=\"user\" (triggerPopup)=\"triggerPopup($event)\"></app-popup>\n  <div class=\"chat-container\">\n    <app-inbox (triggerPopup)=\"triggerPopup($event)\" (toggleShowFriends)=\"toggleShowFriends($event)\"></app-inbox>\n    <div *ngIf=\"user._id && !showFriends\" class=\"chat-list\">\n      <app-rooms [user]=\"user\"></app-rooms>\n    </div>\n    <div *ngIf=\"!showFriends && user._id\" class=\"chat-block\">\n      <app-chat [user]=\"user\"></app-chat>\n    </div>\n    <div *ngIf=\"showFriends\" class=\"friends\">\n      <app-friends [user]=\"user\" (toggleShowFriends)=\"toggleShowFriends($event)\"></app-friends>\n    </div>\n    <app-info [user]=\"user\"></app-info>\n\n  </div>\n  <div *ngIf=\"calling\" class=\"call-answer\">\n    <div class=\"call-info\">\n      <div class=\"type\">\n\n      </div>\n      <div class=\"answer-buttons\">\n        <div class=\"accept\">\n          \n        </div>\n        <div class=\"reject\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n  height: 100%; }\n  .container .call-answer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 100000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .container .call-answer .call-info {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      display: inline-block;\n      position: relative; }\n      .container .call-answer .call-info .type {\n        background-color: #0084ff;\n        height: 300px;\n        width: 300px;\n        border-radius: 50%;\n        border: 4px solid #40a3ff; }\n      .container .call-answer .call-info .answer-buttons {\n        position: absolute;\n        display: inline-block;\n        left: 50%;\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); }\n        .container .call-answer .call-info .answer-buttons div {\n          height: 60px;\n          width: 60px;\n          border-radius: 50%;\n          display: inline-block; }\n        .container .call-answer .call-info .answer-buttons .accept {\n          background-color: #2dc100; }\n        .container .call-answer .call-info .answer-buttons .reject {\n          background-color: #e23d39; }\n  .container .chat-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    margin: 0 auto;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .container .chat-container .chat-list {\n      height: 100%;\n      background: linear-gradient(135deg, #2c333a 0%, #242a31 100%);\n      font-family: 'Roboto', sans-serif;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      overflow: scroll; }\n    .container .chat-container .chat-block {\n      position: relative;\n      font-family: 'Roboto', sans-serif;\n      -webkit-box-flex: 10;\n          -ms-flex: 10 1 auto;\n              flex: 10 1 auto; }\n    .container .chat-container .friends {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPageComponent = (function () {
    function ChatPageComponent(userService, router, socketService) {
        this.userService = userService;
        this.router = router;
        this.socketService = socketService;
        this.isAuthenticated = false;
        this.popup = false;
        this.showFriends = false;
        this.calling = false;
    }
    ChatPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            if (!isAuth) {
                _this.router.navigateByUrl('/login');
            }
        });
        this.userService.currentUser.subscribe(function (user) {
            if (!_this.user && user._id || _this.user && _this.user._id !== user._id) {
                _this.socketService.connect(user._id);
                _this.socketService.emit('online users', { friends: user.friends, id: user._id })
                    .subscribe(function (online) { return online; });
            }
            _this.user = user;
        });
    };
    ChatPageComponent.prototype.toggleShowFriends = function (status) {
        this.showFriends = status;
    };
    ChatPageComponent.prototype.triggerPopup = function ($event) {
        this.popup = $event;
    };
    return ChatPageComponent;
}());
ChatPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-page',
        template: __webpack_require__("../../../../../src/app/chat-page/chat-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/chat-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */]) === "function" && _c || Object])
], ChatPageComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_page_component__ = __webpack_require__("../../../../../src/app/chat-page/chat-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/chat-page/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat-page/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/chat-page/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_info_component__ = __webpack_require__("../../../../../src/app/chat-page/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popup_popup_component__ = __webpack_require__("../../../../../src/app/chat-page/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rooms_room_room_component__ = __webpack_require__("../../../../../src/app/chat-page/rooms/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__ = __webpack_require__("../../../../../src/app/chat-page/friends/friends.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var authRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_5__chat_page_component__["a" /* ChatPageComponent */],
    },
]);
var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */],
            authRouting,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__chat_page_component__["a" /* ChatPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__rooms_room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_12__friends_friends_component__["a" /* FriendsComponent */],
        ],
        exports: []
    })
], ChatPageModule);

//# sourceMappingURL=chat-page.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"chat\">\n    <div class=\"chat-header\">\n      <div class=\"chat-nav\">\n        <div class=\"person-typing\" *ngIf=\"typingNames.size > 0 && renderNames()\"><span><strong>{{ renderNames() }}</strong> is typing...</span></div>\n        <div class=\"star\">\n          <svg viewBox=\"0 0 100 100\">\n            <use xlink:href=\"assets/sprite.svg#phone\"></use>\n          </svg>\n        </div>\n        <div class=\"phone\">\n          <svg viewBox=\"0 0 100 100\">\n            <use xlink:href=\"assets/sprite.svg#video\"></use>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div #chat class=\"messages-container\">\n\n      <div *ngIf=\"interlocutors.length && !isFriends && !pending\" class=\"add-friend\">\n        <div class=\"add-message\">\n          {{ interlocutors[0].fullName }} wants to add you to contact list\n        </div>\n        <div class=\"add-buttons\">\n          <button type=\"button\" (click)=\"acceptFriend()\">Accept</button>\n          <button type=\"button\">Decline</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"interlocutors.length && pending && !isFriends\" class=\"add-friend\">\n        {{ interlocutors[0].fullName }} still didn't add you to his contact list!\n      </div>\n\n      <div *ngFor=\"let msg of sortMsgs(messages)\" class=\"message-wrap\">\n\n        <div *ngIf=\"msg.sender === user._id\" class=\"my-message\">\n          <div class=\"my-text-message arrow_box\">\n            <p>{{ msg.text }}</p>\n          </div>\n          <div class=\"my-meta\">\n            <img [src]=\"user.picture\" alt=\"\">\n            <span>{{ moment(msg.date).format('HH:mm') }}</span>\n          </div>\n        </div>\n\n        <div *ngIf=\"msg.sender !== user._id\" class=\"message\">\n          <div class=\"meta\">\n            <img [src]=\"getImage(msg)\" alt=\"\">\n            <span>{{ moment(msg.date).format('HH:mm') }}</span>\n          </div>\n          <div class=\"text-message arrow_box\">\n            <p>{{ msg.text }}</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"chat-input\">\n    <svg class=\"load-file\" viewBox=\"0 0 24 24\">\n      <use xlink:href=\"assets/sprite.svg#attach\"></use>\n    </svg>\n    <div class=\"input-container\">\n      <input type=\"text\" placeholder=\"Type your message...\" [(ngModel)]=\"message\" [disabled]=\"!isFriends || !room\" (keyup.enter)=\"sendMessage()\" (keypress)=\"startTyping()\">\n    </div>\n    <svg viewBox=\"0 0 32 32\" class=\"smile-button\">\n      <use xlink:href=\"assets/sprite.svg#emoji\"></use>\n    </svg>\n    <button type=\"button\" class=\"submit-button\">\n      <svg viewBox=\"0 0 48 48\">\n        <use xlink:href=\"assets/sprite.svg#send\"></use>\n      </svg>\n    </button>\n  </div>\n\n\n  <!-- <div class=\"message-wrap\">\n    <div class=\"message\">\n      <div class=\"meta\">\n        <img src=\"\" alt=\"\">\n        <span>12:37</span>\n      </div>\n      <div class=\"text-message arrow_box\">\n        <p>It goes a little something like this.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"message-wrap\">\n    <div class=\"message\">\n      <div class=\"meta\">\n        <img src=\"\" alt=\"\">\n        <span>12:38</span>\n      </div>\n      <div class=\"text-message arrow_box\">\n        <p>It was all a dream, I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"message-wrap\">\n    <div class=\"my-message\">\n      <div class=\"my-text-message arrow_box\">\n        <p>Did you ever Hang' pictures on your wall?</p>\n      </div>\n      <div class=\"my-meta\">\n        <img src=\"\" alt=\"\">\n        <span>12:39</span>\n      </div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-header {\n  box-sizing: border-box;\n  height: 80px;\n  border-bottom: 1px solid #dbe0e0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: linear-gradient(135deg, #f7fcfc 0%, #ebedf1 100%); }\n  .chat-header .chat-nav {\n    margin: 0;\n    height: 100%;\n    padding: 0;\n    position: relative; }\n    .chat-header .chat-nav .person-typing {\n      box-sizing: border-box;\n      font-size: 14px;\n      padding-left: 30px;\n      position: absolute;\n      height: 100%;\n      left: 0;\n      right: 160px;\n      border-right: 1px solid #dbe0e0;\n      line-height: 84px; }\n      .chat-header .chat-nav .person-typing span {\n        width: 100%;\n        display: inline-block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n    .chat-header .chat-nav .star {\n      box-sizing: border-box;\n      border-right: 1px solid #dbe0e0;\n      width: 80px;\n      height: 100%;\n      position: absolute;\n      right: 80px;\n      cursor: pointer; }\n      .chat-header .chat-nav .star svg {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        margin: 30px 0 0 26px;\n        width: 26px;\n        height: 26px;\n        fill: #81868b; }\n      .chat-header .chat-nav .star svg:hover {\n        fill: #000; }\n    .chat-header .chat-nav .phone {\n      width: 80px;\n      height: 100%;\n      position: absolute;\n      right: 0;\n      cursor: pointer; }\n      .chat-header .chat-nav .phone svg {\n        margin: 29px 0 0 28px;\n        width: 100px;\n        height: 100px;\n        fill: #81868b; }\n      .chat-header .chat-nav .phone svg:hover {\n        fill: #000; }\n\n.messages-container {\n  position: absolute;\n  top: 81px;\n  bottom: 81px;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: scroll;\n  padding: 20px 0;\n  box-sizing: border-box;\n  background: linear-gradient(135deg, #f7fcfc 0%, #ebedf1 100%); }\n  .messages-container .meta span, .messages-container .my-meta span {\n    font-size: 11px;\n    font-weight: 500; }\n  .messages-container .text-message, .messages-container .my-text-message {\n    font-size: 16px;\n    font-weight: 300; }\n  .messages-container .message {\n    margin-top: 7px;\n    margin-right: 95px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .messages-container .message .meta {\n      width: 85px;\n      height: 68px;\n      margin-right: 10px;\n      position: relative; }\n      .messages-container .message .meta img {\n        height: 35px;\n        width: 35px;\n        display: inline-block;\n        border-radius: 50%;\n        position: absolute;\n        top: 8px;\n        left: 29px; }\n      .messages-container .message .meta span {\n        position: absolute;\n        left: 32px;\n        bottom: 1px; }\n    .messages-container .message .arrow_box {\n      position: relative;\n      background: #f7f8f9; }\n    .messages-container .message .arrow_box:after {\n      right: 100%;\n      top: 25px;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(247, 248, 249, 0);\n      border-right-color: #ffffff;\n      border-width: 5px;\n      margin-top: -5px; }\n    .messages-container .message .text-message {\n      max-width: 80%;\n      box-sizing: border-box;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      padding: 15px 20px 14px 20px;\n      background-color: #ffffff;\n      border-radius: 3px; }\n      .messages-container .message .text-message p {\n        margin: 0;\n        line-height: 22px; }\n  .messages-container .my-message {\n    margin-top: 23px;\n    margin-left: 95px;\n    position: relative; }\n    .messages-container .my-message .my-meta {\n      width: 90px;\n      height: 68px; }\n      .messages-container .my-message .my-meta img {\n        height: 35px;\n        width: 35px;\n        display: inline-block;\n        border-radius: 50%;\n        position: absolute;\n        right: 25px;\n        top: 9px; }\n      .messages-container .my-message .my-meta span {\n        position: absolute;\n        bottom: 0;\n        right: 27px; }\n    .messages-container .my-message .arrow_box {\n      position: relative;\n      background: #0084ff; }\n    .messages-container .my-message .arrow_box:after {\n      left: 100%;\n      top: 27px;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(0, 132, 255, 0);\n      border-left-color: #0084ff;\n      border-width: 5px;\n      margin-top: -5px; }\n    .messages-container .my-message .my-text-message {\n      background-color: #0084ff;\n      box-sizing: border-box;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      max-width: 100%;\n      position: absolute;\n      right: 90px;\n      padding: 16px 24px 16px 20px;\n      border-radius: 3px;\n      color: #fff; }\n      .messages-container .my-message .my-text-message p {\n        margin: 0;\n        line-height: 22px; }\n\n.chat-input {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 80px;\n  background-color: #fbfcfc; }\n  .chat-input .load-file {\n    display: inline-block;\n    margin: 29px 18px 0 29px;\n    height: 22px;\n    width: 21px;\n    cursor: pointer;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  .chat-input .input-container {\n    display: inline-block;\n    position: absolute;\n    bottom: 24px;\n    left: 74px;\n    right: 120px; }\n    .chat-input .input-container input {\n      height: 34px;\n      width: 100%;\n      box-sizing: border-box;\n      border: none;\n      background: transparent; }\n    .chat-input .input-container input:focus {\n      outline: none; }\n    .chat-input .input-container input::-webkit-input-placeholder {\n      color: #4b4b4c; }\n    .chat-input .input-container input:-ms-input-placeholder {\n      color: #4b4b4c; }\n    .chat-input .input-container input::placeholder {\n      color: #4b4b4c; }\n  .chat-input .smile-button {\n    border-radius: 50%;\n    position: absolute;\n    right: 83px;\n    bottom: 27px;\n    height: 21px;\n    width: 21px;\n    display: inline-block;\n    fill: #616d7a;\n    cursor: pointer; }\n  .chat-input .submit-button {\n    position: absolute;\n    right: 26px;\n    bottom: 20px;\n    height: 38px;\n    width: 38px;\n    border-radius: 50%;\n    border: none;\n    background-color: #616d7a;\n    cursor: pointer; }\n    .chat-input .submit-button svg {\n      fill: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
var ChatComponent = (function () {
    function ChatComponent(socketService, selectChat, userService) {
        this.socketService = socketService;
        this.selectChat = selectChat;
        this.userService = userService;
        this.message = '';
        this.interlocutors = [];
        this.private = false;
        this.isFriends = false;
        this.moment = __WEBPACK_IMPORTED_MODULE_1_moment__;
        this.typingNames = new Set();
        this.pending = false;
    }
    ChatComponent.prototype.startTyping = function () {
        this.socketService.emit('user typing', { userName: this.user.fullName, roomId: this.room._id })
            .subscribe(function (res) { return res; });
    };
    ChatComponent.prototype.renderNames = function () {
        var _this = this;
        return Array.from(this.typingNames).filter(function (name) { return name !== _this.user.fullName; }).join(', ');
    };
    ChatComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.user) {
            this.selectChat.getChatIdEmitter()
                .subscribe(function (room) {
                _this.room = room;
                _this.messages = [];
                _this.socketService.on("message response " + room._id)
                    .subscribe(function (message) {
                    _this.messages = _this.messages.concat(message);
                    _this.socketService.emit('read messages', { roomId: _this.room._id, userId: _this.user._id })
                        .subscribe(function (data) { return data; });
                });
                _this.socketService.on("typing emit to " + room._id)
                    .subscribe(function (name) {
                    _this.typingNames.add(name);
                    setTimeout(function () {
                        _this.typingNames.delete(name);
                    }, 3000);
                });
                _this.interlocutors = [];
                var interlocutorsId = room.users.filter(function (userId) { return userId !== _this.user._id; });
                if (interlocutorsId.length === 1) {
                    _this.private = true;
                }
                interlocutorsId.map(function (id) {
                    _this.userService.getUserById(id)
                        .subscribe(function (interlocutor) {
                        _this.interlocutors = _this.interlocutors.concat(interlocutor);
                        if (_this.private) {
                            var pending = changes.user.currentValue.friends.some(function (friendId) { return friendId === interlocutor._id; });
                            var accepted = _this.interlocutors[0].friends.some(function (friendId) { return friendId === _this.user._id; });
                            if (pending && accepted) {
                                _this.isFriends = true;
                                _this.socketService.emit('get messages', _this.room._id)
                                    .subscribe(function (data) { return data; });
                            }
                            else if (pending) {
                                _this.pending = true;
                                _this.isFriends = false;
                            }
                            else {
                                _this.isFriends = false;
                                _this.pending = false;
                            }
                        }
                    });
                });
            });
            this.socketService.on("update user " + this.user._id)
                .subscribe(function (newUser) {
                _this.userService.changeUser(newUser);
            });
            this.user.friends.map(function (friendId) {
                _this.socketService.on("update user " + _this.user._id + " " + friendId)
                    .subscribe(function (newFriend) {
                    if (newFriend.friends.some(function (frId) { return frId === _this.user._id; })) {
                        _this.pending = false;
                        _this.isFriends = true;
                        _this.socketService.emit('get messages', _this.room._id)
                            .subscribe(function (data) { return data; });
                    }
                    else {
                        _this.pending = true;
                        _this.isFriends = false;
                        _this.messages = [];
                    }
                });
            });
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectChat.getChatIdEmitter()
            .subscribe(function (room) {
            _this.room = room;
            _this.messages = [];
            _this.socketService.on("messages response " + _this.room._id)
                .subscribe(function (messages) {
                _this.messages = messages;
                _this.myScrollContainer.nativeElement.scrollTop = _this.myScrollContainer.nativeElement.scrollHeight;
            });
            _this.interlocutors = [];
            var interlocutorsId = room.users.filter(function (userId) { return userId !== _this.user._id; });
            if (interlocutorsId.length === 1) {
                _this.private = true;
            }
            interlocutorsId.map(function (id) {
                _this.userService.getUserById(id)
                    .subscribe(function (interlocutor) {
                    _this.interlocutors = _this.interlocutors.concat(interlocutor);
                    if (_this.private) {
                        var pending = _this.user.friends.some(function (friendId) { return friendId === interlocutor._id; });
                        var accepted = _this.interlocutors[0].friends.some(function (friendId) { return friendId === _this.user._id; });
                        if (pending && accepted) {
                            _this.isFriends = true;
                            _this.socketService.emit('get messages', _this.room._id)
                                .subscribe(function (data) { return data; });
                        }
                        else if (pending) {
                            _this.pending = true;
                            _this.isFriends = false;
                        }
                        else {
                            _this.isFriends = false;
                            _this.pending = false;
                        }
                    }
                });
            });
        });
    };
    ChatComponent.prototype.getImage = function (msg) {
        var usr = this.interlocutors.find(function (interlocutor) { return interlocutor._id === msg.sender; });
        return usr && usr.picture || '';
    };
    ChatComponent.prototype.sortMsgs = function (messages) {
        return messages && messages.sort(function (msg1, msg2) { return __WEBPACK_IMPORTED_MODULE_1_moment__(msg1.date).valueOf() - __WEBPACK_IMPORTED_MODULE_1_moment__(msg2.date).valueOf(); });
    };
    ChatComponent.prototype.acceptFriend = function () {
        this.socketService.emit('update user', {
            userId: this.user._id,
            friendId: this.interlocutors[0]._id,
            update: { friends: this.user.friends.concat(this.interlocutors[0]._id) }
        })
            .subscribe(function (data) { return data; });
    };
    ChatComponent.prototype.sendMessage = function () {
        if (!this.message.length) {
            return;
        }
        this.socketService.emit('chat message', {
            userId: this.user._id,
            date: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
            chatId: this.room._id,
            text: this.message,
            usersViewed: [this.user._id],
        })
            .subscribe(function (response) { return response; });
        this.message = '';
    };
    return ChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */]) === "function" && _b || Object)
], ChatComponent.prototype, "user", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat-page/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/chat/chat.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["g" /* SelectChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["g" /* SelectChatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */]) === "function" && _e || Object])
], ChatComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"search-container\">\n    <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterValue\">\n  </div>\n</header>\n<div class=\"friend-list\">\n  <div *ngIf=\"friends.length\" class=\"friends-container\">\n    <div *ngFor=\"let friend of filterFunc(friends)\" class=\"friend\" (click)=\"navigateToRoom(friend)\">\n      <div class=\"online-status\" *ngIf=\"onlineUsers && onlineUsers.indexOf(friend._id) !== -1\"></div>\n      <img [src]=\"friend.picture\">\n      <div class=\"full-name\">\n        <span>{{ friend.fullName }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/friends/friends.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 80px;\n  background-color: #262c33; }\n  .header .search-container {\n    height: 79px;\n    border-bottom: 1px solid #3f454b;\n    line-height: 79px;\n    padding: 0 25px; }\n    .header .search-container input {\n      height: 40px;\n      box-sizing: border-box;\n      width: 310px;\n      border-radius: 30px;\n      border: none;\n      background: #363d45;\n      padding: 0 50px 0 48px;\n      color: #868b8e;\n      font-size: 14px;\n      font-weight: 500; }\n    .header .search-container input::-webkit-input-placeholder {\n      color: #868b8e; }\n    .header .search-container input:-ms-input-placeholder {\n      color: #868b8e; }\n    .header .search-container input::placeholder {\n      color: #868b8e; }\n    .header .search-container input:focus {\n      outline: none; }\n\n.friend-list {\n  position: absolute;\n  top: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: scroll; }\n  .friend-list .friends-container {\n    padding: 40px 5px; }\n    .friend-list .friends-container .friend {\n      display: inline-block;\n      margin-left: 60px;\n      margin-bottom: 20px;\n      vertical-align: top;\n      position: relative;\n      cursor: pointer; }\n      .friend-list .friends-container .friend .online-status {\n        position: absolute;\n        border-radius: 50%;\n        height: 12px;\n        width: 12px;\n        background-color: #2dc100;\n        top: 3px; }\n      .friend-list .friends-container .friend img {\n        width: 200px;\n        height: 200px;\n        border-radius: 50%;\n        margin-bottom: 12px; }\n      .friend-list .friends-container .friend .full-name {\n        text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsComponent = (function () {
    function FriendsComponent(roomService, selectChatService, selectUser, socketService, userService) {
        this.roomService = roomService;
        this.selectChatService = selectChatService;
        this.selectUser = selectUser;
        this.socketService = socketService;
        this.userService = userService;
        this.toggleShowFriends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filterValue = '';
        this.onlineUsers = [];
        this.friends = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.friends.map(function (friendId) {
            _this.userService.getUserById(friendId)
                .subscribe(function (friend) {
                _this.friends.push(friend);
            });
        });
        this.socketService.emit('online users', { friends: this.user.friends, id: this.user._id })
            .subscribe(function (online) { return online; });
        this.socketService.on("online users " + this.user._id)
            .subscribe(function (online) {
            _this.onlineUsers = online;
        });
        this.socketService.on("online users")
            .subscribe(function (online) {
            _this.onlineUsers = online;
        });
    };
    FriendsComponent.prototype.filterFunc = function (arr) {
        var _this = this;
        return arr.filter(function (item) { return item.fullName.toLowerCase().indexOf(_this.filterValue.toLowerCase()) !== -1; });
    };
    FriendsComponent.prototype.navigateToRoom = function (friend) {
        var _this = this;
        this.roomService.getOrCreateRoom([this.user._id, friend._id])
            .subscribe(function (room) {
            _this.toggleShowFriends.emit(false);
            _this.selectChatService.emitChatIdChangeEvent(room);
            _this.selectUser.emitUserIdChangeEvent(friend);
        });
    };
    return FriendsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */]) === "function" && _a || Object)
], FriendsComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FriendsComponent.prototype, "toggleShowFriends", void 0);
FriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friends',
        template: __webpack_require__("../../../../../src/app/chat-page/friends/friends.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/friends/friends.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["g" /* SelectChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["g" /* SelectChatService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["h" /* SelectUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["h" /* SelectUserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */]) === "function" && _f || Object])
], FriendsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <h3>Inbox</h3>\n  <div (click)=\"showPopup(!popup)\" class=\"friend-image\">\n    <svg viewBox=\"0 0 612 792\">\n      <use xlink:href=\"assets/sprite.svg#user\"></use>\n    </svg>\n  </div>\n  <!-- <ul class=\"nav first-nav\">\n    <li><a href=\"#\">All Messages</a><span>21</span></li>\n    <li><a href=\"#\">Unread</a><span>89</span></li>\n    <li><a href=\"#\">Important</a><span>6</span></li>\n    <li><a href=\"#\">Drafts</a><span>27</span></li>\n  </ul> -->\n\n  <ul class=\"nav second-nav\">\n    <li (click)=\"toggleShowFriends.emit(false)\"><a href=\"#/chat\">Chats</a></li>\n    <li (click)=\"toggleShowFriends.emit(true)\"><a href=\"#/chat\">Friends</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/inbox/inbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  width: 230px;\n  background-color: #252b33;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  position: relative; }\n  .menu .friend-image {\n    display: inline-block;\n    height: 35px;\n    width: 35px;\n    box-sizing: border-box;\n    border: 1px solid #4f545a;\n    border-radius: 50%;\n    position: absolute;\n    right: 22px;\n    top: 22px;\n    cursor: pointer; }\n    .menu .friend-image svg {\n      height: 22px;\n      width: 26px;\n      margin-top: 5px;\n      fill: #fff; }\n  .menu h3 {\n    color: #fff;\n    font-size: 22px;\n    font-weight: 500;\n    padding-left: 30px;\n    display: inline-block;\n    margin-top: 28px; }\n  .menu .nav {\n    list-style: none;\n    display: inline-block;\n    margin: 19px 20px auto;\n    padding: 0 0 23px 0;\n    border-bottom: 1px solid #2c3239; }\n    .menu .nav li {\n      height: 38px;\n      width: 190px;\n      margin: 0 auto;\n      line-height: 38px;\n      font-size: 14px;\n      position: relative;\n      color: #a0a4a7;\n      border-radius: 5px;\n      cursor: pointer; }\n      .menu .nav li a {\n        text-decoration: none;\n        color: inherit;\n        position: absolute;\n        left: 10px;\n        right: 30px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n      .menu .nav li span {\n        position: absolute;\n        font-size: 11px;\n        font-weight: 500;\n        right: 13px;\n        top: 1px; }\n    .menu .nav li:hover {\n      background-color: #343c45;\n      color: #ffffff; }\n  .menu .nav.second-nav {\n    border: none;\n    margin: 11px 20px auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = (function () {
    function InboxComponent() {
        this.triggerPopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleShowFriends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popup = false;
    }
    InboxComponent.prototype.showPopup = function (show) {
        this.triggerPopup.emit(show);
        this.popup = show;
    };
    InboxComponent.prototype.ngOnInit = function () {
    };
    return InboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InboxComponent.prototype, "triggerPopup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InboxComponent.prototype, "toggleShowFriends", void 0);
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inbox',
        template: __webpack_require__("../../../../../src/app/chat-page/inbox/inbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/inbox/inbox.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InboxComponent);

//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-container\">\n  <div class=\"user-header\">\n    <div>\n    </div>\n    <span>{{ user.fullName }}</span>\n  </div>\n\n  <div *ngIf=\"userInfo\" class=\"user-info\">\n    <div class=\"svg-more\">\n      <svg viewBox=\"0 0 17.6 17.2\">\n        <use xlink:href=\"assets/sprite.svg#more\"></use>\n      </svg>\n      <div class=\"dropdown\">\n        <ul class=\"dropdown-menu\">\n          <li (click)=\"unfriendUser()\">Unfriend</li>\n          <li>Second</li>\n        </ul>\n      </div>\n    </div>\n    <img [src]=\"userInfo.picture\" alt=\"\">\n    <h3>{{ userInfo.fullName }}</h3>\n    <div class=\"city-info\"><span>{{ userInfo.address }}</span></div>\n    <ul class=\"user-data\">\n      <li><span>Nickname:</span><span>{{ userInfo.username }}</span></li>\n      <li><span>Tel:</span><span>{{ userInfo.phone }}</span></li>\n      <li><span>Date Of Birth:</span><span>{{ moment(userInfo.birthday).format(\"MMM DD, YYYY\") }}</span></li>\n      <li><span>Gender:</span><span>{{ userInfo.gender }}</span></li>\n      <li><span>Language:</span><span>{{ userInfo.language }}</span></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-info-container {\n  width: 277px;\n  font-family: 'Roboto', sans-serif; }\n  .user-info-container .user-header {\n    height: 79px;\n    border-bottom: 1px solid #dbe0e0;\n    position: relative; }\n    .user-info-container .user-header div {\n      display: inline-block;\n      position: absolute;\n      width: 24px;\n      height: 28px;\n      top: 31px;\n      left: 26px;\n      cursor: pointer; }\n      .user-info-container .user-header div svg {\n        margin-bottom: 30px;\n        fill: #81868b; }\n    .user-info-container .user-header div:hover svg {\n      fill: #000; }\n    .user-info-container .user-header span {\n      position: absolute;\n      font-size: 14px;\n      font-weight: 300;\n      right: 41px;\n      top: 34px;\n      color: #696e73; }\n  .user-info-container .user-info {\n    position: relative; }\n    .user-info-container .user-info button {\n      border-radius: 50%;\n      border: 1px solid #666666;\n      background-color: #666;\n      position: absolute;\n      left: 10px;\n      top: 19px;\n      width: 17px;\n      height: 17px;\n      cursor: pointer; }\n    .user-info-container .user-info .svg-more {\n      width: 17px;\n      height: 17px;\n      position: absolute;\n      right: 10px;\n      top: 19px;\n      right: 23px;\n      fill: #666666;\n      cursor: pointer; }\n      .user-info-container .user-info .svg-more .dropdown {\n        display: none;\n        position: absolute;\n        right: 0;\n        top: 10px;\n        border-radius: 20px; }\n        .user-info-container .user-info .svg-more .dropdown .dropdown-menu {\n          border-radius: 5px;\n          margin: 0;\n          padding: 0;\n          list-style: none;\n          background-color: #262c34;\n          overflow: hidden; }\n          .user-info-container .user-info .svg-more .dropdown .dropdown-menu li {\n            text-align: center;\n            width: 80px;\n            height: 25px;\n            font-size: 12px;\n            line-height: 25px;\n            color: #9a9da0; }\n          .user-info-container .user-info .svg-more .dropdown .dropdown-menu li:hover {\n            background-color: #3d4249; }\n    .user-info-container .user-info .svg-more:hover .dropdown {\n      display: inline-block; }\n    .user-info-container .user-info .svg-more:hover {\n      fill: #000; }\n    .user-info-container .user-info img {\n      display: inline-block;\n      margin: 36px 0 24px 80px;\n      height: 120px;\n      width: 120px;\n      background-color: red;\n      border-radius: 50%; }\n    .user-info-container .user-info h3 {\n      color: #293037;\n      font-size: 20px;\n      font-weight: 500;\n      margin: 0 auto;\n      display: block;\n      text-align: center; }\n    .user-info-container .user-info .city-info {\n      color: #696e73;\n      text-align: center;\n      font-size: 14px;\n      font-weight: 300;\n      padding-top: 2px;\n      padding-left: 2px; }\n    .user-info-container .user-info .user-data {\n      list-style: none;\n      width: 100%;\n      padding: 0;\n      border-top: 1px solid #e5e5e5;\n      margin-top: 35px;\n      padding-top: 19px; }\n      .user-info-container .user-info .user-data li {\n        width: 218px;\n        margin: 0 auto;\n        height: 52px;\n        box-sizing: border-box;\n        padding: 0;\n        line-height: 49px; }\n        .user-info-container .user-info .user-data li span {\n          font-size: 13px;\n          font-weight: 300;\n          color: #54595f;\n          float: right;\n          padding-right: 5px; }\n        .user-info-container .user-info .user-data li span:first-child {\n          font-size: 13px;\n          font-weight: 500;\n          color: #54595f;\n          float: left; }\n      .user-info-container .user-info .user-data li:not(:last-child) {\n        border-bottom: 1px solid #e5e5e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoComponent = (function () {
    function InfoComponent(selectUser, userService, socketService) {
        this.selectUser = selectUser;
        this.userService = userService;
        this.socketService = socketService;
        this.moment = __WEBPACK_IMPORTED_MODULE_1_moment__;
        this.isFriend = false;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectUser.getUserIdEmitter().subscribe(function (user) {
            _this.isFriend = false;
            _this.userInfo = user;
            if (_this.user.friends.indexOf(user._id) !== -1) {
                _this.isFriend = true;
            }
        });
    };
    InfoComponent.prototype.unfriendUser = function () {
        var _this = this;
        this.socketService.emit("update user", {
            userId: this.user._id,
            friendId: this.userInfo._id,
            update: { friends: this.user.friends.filter(function (friendId) { return friendId !== _this.userInfo._id; }) }
        }).subscribe(function (data) { return data; });
        // this.userService.updateUser(this.user._id, { friends: this.user.friends.filter(friendId => friendId !== this.userInfo._id) })
        // .subscribe(status => {
        //   if (status.success) {
        //     this.isFriend = false;
        //   }
        // });
    };
    return InfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */]) === "function" && _a || Object)
], InfoComponent.prototype, "user", void 0);
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/chat-page/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/info/info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SelectUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SelectUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */]) === "function" && _d || Object])
], InfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <div class=\"container\">\n    <header>\n      <input type=\"text\" (keyup.enter)=\"search($event)\" placeholder=\"Search...\">\n    </header>\n    <div *ngIf=\"users\" class=\"results\">\n      <div class=\"chat-person\" *ngFor=\"let user of users\">\n        <div><span>{{ user.username }}</span></div>\n        <div class=\"svg-wrap\" (click)=\"addFriend(user)\">\n          <svg viewBox=\"0 0 612 792\">\n            <use xlink:href=\"assets/sprite.svg#user\"></use>\n          </svg>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/popup/popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n  position: fixed;\n  top: 100px;\n  bottom: 100px;\n  left: 400px;\n  right: 400px;\n  z-index: 10000;\n  background-color: #363d45; }\n  .search .container {\n    position: relative; }\n    .search .container header {\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 40px; }\n      .search .container header input {\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        text-align: center;\n        background-color: #363d45;\n        border: none;\n        color: #fff; }\n      .search .container header input:focus {\n        outline: none; }\n    .search .container .results {\n      position: absolute;\n      top: 40px;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n      .search .container .results .chat-person {\n        height: 40px;\n        line-height: 40px;\n        position: relative;\n        border-left: 3px solid transparent;\n        cursor: pointer;\n        color: #fff; }\n        .search .container .results .chat-person .svg-wrap {\n          position: absolute;\n          right: 10px;\n          top: 5px;\n          display: inline-block;\n          border: 1px solid #ccc;\n          border-radius: 50%;\n          height: 30px;\n          width: 30px; }\n          .search .container .results .chat-person .svg-wrap svg {\n            height: 22px;\n            width: 26px;\n            fill: #fff; }\n      .search .container .results .chat-person:hover {\n        background-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupComponent = (function () {
    function PopupComponent(userService, _eref, roomService, socketService) {
        this.userService = userService;
        this._eref = _eref;
        this.roomService = roomService;
        this.socketService = socketService;
        this.triggerPopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = false;
    }
    PopupComponent.prototype.docClicked = function (target) {
        if (!this._eref.nativeElement.contains(event.target) && this.opened) {
            this.triggerPopup.emit(false);
        }
        this.opened = true;
    };
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent.prototype.addFriend = function (user) {
        this.socketService.emit('create room', { room: { users: [this.user._id, user._id] }, creatorId: this.user._id })
            .subscribe(function (room) { return room; });
        this.userService.updateUser(this.user._id, { friends: this.user.friends.concat(user._id) })
            .subscribe(function (status) { return status; });
    };
    PopupComponent.prototype.search = function ($event) {
        var _this = this;
        var username = '';
        if ($event.srcElement.value) {
            username = $event.srcElement.value;
            this.userService.searchUsers(username)
                .subscribe(function (users) {
                _this.users = users.filter(function (user) { return _this.user.friends.indexOf(user._id) === -1 && _this.user._id !== user._id; });
            });
        }
    };
    return PopupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */]) === "function" && _a || Object)
], PopupComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupComponent.prototype, "triggerPopup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PopupComponent.prototype, "docClicked", null);
PopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popup',
        template: __webpack_require__("../../../../../src/app/chat-page/popup/popup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/popup/popup.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */]) === "function" && _e || Object])
], PopupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"setChat()\" class=\"chat-person\" [ngClass]=\"{ 'active': active }\">\n  <div class=\"chat-image\">\n    <span class=\"online-status\" *ngIf=\"interlocutors.length && onlineUsers.indexOf(interlocutors[0]._id) !== -1\"></span>\n    <img [src]=\"picture\" alt=\"\">\n  </div>\n  <div class=\"user-meta\">\n    <div><span>{{ title }}</span></div>\n    <span *ngIf=\"lastMessage\">{{ lastMessage.text }}</span>\n  </div>\n  <div class=\"unread\" *ngIf=\"unreadLength > 0\">\n    {{ unreadLength }}\n  </div>\n  <div class=\"chat-settings\">\n    <svg viewBox=\"0 0 17.6 17.2\">\n      <use xlink:href=\"assets/sprite.svg#more\"></use>\n    </svg>\n    <div class=\"dropdown\">\n      <ul class=\"dropdown-menu\">\n        <li (click)=\"deleteChat(room)\">Delete chat</li>\n        <li>Second</li>\n      </ul>\n    </div>\n    <span *ngIf=\"lastMessageTime !== null\">{{ lastMessageTime }} min</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/room/room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-person.active {\n  border-left: 3px solid #2b80ff; }\n\n.chat-person {\n  height: 100px;\n  position: relative;\n  border-left: 3px solid transparent;\n  cursor: pointer; }\n  .chat-person .online-status {\n    width: 6px;\n    height: 6px;\n    display: inline-block;\n    background-color: #2dc100;\n    border-radius: 50%;\n    position: absolute;\n    top: 20px;\n    left: -10px; }\n  .chat-person .chat-image {\n    height: 100%;\n    padding: 0;\n    display: inline-block;\n    width: 50px;\n    border-bottom: 1px solid #3f454b;\n    margin-left: 22px;\n    position: relative; }\n    .chat-person .chat-image img {\n      height: 50px;\n      width: 50px;\n      display: inline-block;\n      border-radius: 50%;\n      position: absolute;\n      top: 25px; }\n  .chat-person .user-meta {\n    display: inline-block;\n    position: absolute;\n    left: 72px;\n    top: 33px;\n    width: 230px;\n    box-sizing: border-box;\n    padding-left: 18px; }\n    .chat-person .user-meta div {\n      margin-bottom: 1px; }\n      .chat-person .user-meta div span {\n        font-weight: 500;\n        font-size: 16px;\n        color: #ffffff; }\n    .chat-person .user-meta span {\n      font-size: 14px;\n      font-weight: 300;\n      color: #94979b; }\n  .chat-person .unread {\n    position: absolute;\n    top: 30px;\n    right: 70px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid orange;\n    color: #fff;\n    line-height: 40px;\n    text-align: center; }\n  .chat-person .chat-settings {\n    display: inline-block;\n    position: absolute;\n    right: 20px;\n    width: 35px;\n    top: 34px;\n    text-align: right; }\n    .chat-person .chat-settings .dropdown {\n      display: none;\n      position: absolute;\n      right: 0;\n      top: 14px;\n      border-radius: 20px; }\n      .chat-person .chat-settings .dropdown .dropdown-menu {\n        border: 1px solid #3d4249;\n        border-radius: 5px;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        background-color: #262c34;\n        overflow: hidden; }\n        .chat-person .chat-settings .dropdown .dropdown-menu li {\n          text-align: center;\n          width: 80px;\n          height: 25px;\n          font-size: 12px;\n          line-height: 25px;\n          color: #9a9da0; }\n        .chat-person .chat-settings .dropdown .dropdown-menu li:hover {\n          background-color: #3d4249; }\n    .chat-person .chat-settings span {\n      color: #4f5459;\n      font-size: 11px;\n      font-weight: 500;\n      position: absolute;\n      width: 45px;\n      bottom: -35px;\n      right: 0; }\n    .chat-person .chat-settings svg {\n      position: absolute;\n      right: -1px;\n      top: 4px;\n      display: block;\n      height: 20px;\n      width: 20px;\n      fill: #eaeaeb; }\n    .chat-person .chat-settings svg:hover {\n      fill: #fff; }\n  .chat-person .chat-settings:hover .dropdown {\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomComponent = (function () {
    function RoomComponent(selectChat, selectUser, roomService, userService, socketService) {
        this.selectChat = selectChat;
        this.selectUser = selectUser;
        this.roomService = roomService;
        this.userService = userService;
        this.socketService = socketService;
        this.removeRoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.interlocutors = [];
        this.active = false;
        this.title = '';
        this.picture = '';
        this.lastMessage = {};
        this.unreadLength = 0;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectChat.getChatIdEmitter().subscribe(function (room) {
            _this.active = room._id === _this.room._id;
            if (_this.active) {
                _this.socketService.emit('read messages', { roomId: _this.room._id, userId: _this.user._id })
                    .subscribe(function (data) { return data; });
                _this.unreadLength = 0;
            }
        });
        this.room.users
            .filter(function (userId) { return userId !== _this.user._id; })
            .map(function (userId) {
            _this.userService.getUserById(userId).subscribe(function (user) {
                _this.interlocutors = _this.interlocutors.concat(user);
                _this.title = _this.room.title || user.fullName;
                _this.picture = _this.room.picture || user.picture;
            });
        });
        this.socketService.emit('get last message', this.room._id)
            .subscribe(function (data) {
            return data;
        });
        this.socketService.emit('get unread', { roomId: this.room._id, userId: this.user._id })
            .subscribe(function (data) { return data; });
        this.socketService.on("unread messages " + this.room._id).subscribe(function (unreadLength) {
            _this.unreadLength = unreadLength;
        });
        this.socketService.on("last message " + this.room._id + " new").subscribe(function (message) {
            if (!_this.active) {
                _this.unreadLength += 1;
            }
            _this.lastMessage = message;
        });
        this.socketService.on("last message " + this.room._id).subscribe(function (message) {
            _this.lastMessage = message;
            _this.setTime();
            window.setInterval(_this.setTime.bind(_this), 5000);
        });
    };
    RoomComponent.prototype.setTime = function () {
        if (!this.lastMessage) {
            return;
        }
        var msgMs = __WEBPACK_IMPORTED_MODULE_1_moment__(this.lastMessage.date).valueOf();
        var ms = __WEBPACK_IMPORTED_MODULE_1_moment__().valueOf();
        this.lastMessageTime = ms - msgMs >= 3600000 ? null : __WEBPACK_IMPORTED_MODULE_1_moment__(ms - msgMs).format('mm');
    };
    RoomComponent.prototype.deleteChat = function (room) {
        var _this = this;
        this.roomService.deleteRoom(room._id)
            .subscribe(function (status) {
            if (status.success) {
                _this.removeRoom.emit(room._id);
            }
        });
    };
    RoomComponent.prototype.setChat = function () {
        var _this = this;
        var userId = this.room.users.filter(function (friendId) { return friendId !== _this.user._id; })[0];
        var user = this.interlocutors.filter(function (interlocutor) { return interlocutor._id === userId; })[0];
        this.selectUser.emitUserIdChangeEvent(user);
        this.selectChat.emitChatIdChangeEvent(this.room);
    };
    return RoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RoomComponent.prototype, "room", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* User */]) === "function" && _a || Object)
], RoomComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RoomComponent.prototype, "onlineUsers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RoomComponent.prototype, "removeRoom", void 0);
RoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-room',
        template: __webpack_require__("../../../../../src/app/chat-page/rooms/room/room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/rooms/room/room.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["g" /* SelectChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["g" /* SelectChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SelectUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* SelectUserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* RoomService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* SocketService */]) === "function" && _f || Object])
], RoomComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"search-container\">\n    <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterValue\">\n  </div>\n\n  <app-room *ngFor=\"let room of rooms\" [room]=\"room\" [user]=\"user\" [onlineUsers]=\"onlineUsers\" (removeRoom)=\"removeRoom($event)\">\n  </app-room>\n\n\n\n  <!-- <div class=\"chat-person\">\n    <div class=\"chat-image\">\n      <span class=\"online-status\"></span>\n      <img src=\"\" alt=\"\">\n    </div>\n    <div class=\"user-meta\">\n      <div><span>Matt Thompson</span></div>\n      <span>Thanks again you have been...</span>\n    </div>\n    <div class=\"chat-settings\">\n      <svg viewBox=\"0 0 17.6 17.2\">\n        <use xlink:href=\"assets/sprite.svg#more\"></use>\n      </svg>\n      <span>5 min</span>\n    </div>\n  </div>\n\n  <div class=\"chat-person\">\n    <div class=\"chat-image\">\n      <img src=\"\" alt=\"\">\n    </div>\n    <div class=\"user-meta\">\n      <div><span>Claire Sharwood</span></div>\n      <span>My selfie game is lacking can...</span>\n    </div>\n    <div class=\"chat-settings\">\n      <svg viewBox=\"0 0 17.6 17.2\">\n        <use xlink:href=\"assets/sprite.svg#more\"></use>\n      </svg>\n      <span>10 min</span>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/rooms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-container {\n  height: 79px;\n  border-bottom: 1px solid #3f454b;\n  line-height: 79px;\n  text-align: center;\n  padding: 0 25px; }\n  .search-container input {\n    height: 40px;\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0 auto;\n    border-radius: 30px;\n    border: none;\n    background: #363d45;\n    padding: 0 50px 0 48px;\n    color: #868b8e;\n    font-size: 14px;\n    font-weight: 500; }\n  .search-container input::-webkit-input-placeholder {\n    color: #868b8e; }\n  .search-container input:-ms-input-placeholder {\n    color: #868b8e; }\n  .search-container input::placeholder {\n    color: #868b8e; }\n  .search-container input:focus {\n    outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomsComponent = (function () {
    function RoomsComponent(userService, roomService, socketService, selectChat) {
        this.userService = userService;
        this.roomService = roomService;
        this.socketService = socketService;
        this.selectChat = selectChat;
        this.rooms = [];
        this.onlineUsers = [];
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getNewRoom().subscribe(function (room) {
            if (!_this.rooms.some(function (prev) {
                return prev._id === room._id;
            })) {
                _this.rooms = _this.rooms.concat(room);
            }
        });
    };
    RoomsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.user) {
            this.roomService.getUserRooms(changes.user.currentValue._id)
                .subscribe(function (rooms) {
                _this.rooms = rooms;
                _this.socketService.emit('online users', {
                    friends: changes.user.currentValue.friends,
                    id: "" + changes.user.currentValue._id
                })
                    .subscribe(function (online) { return online; });
                _this.socketService.on("online users " + changes.user.currentValue._id)
                    .subscribe(function (online) {
                    _this.onlineUsers = online;
                });
                _this.socketService.on("online users")
                    .subscribe(function (online) {
                    _this.onlineUsers = online;
                });
                _this.socketService.on("new room " + _this.user._id)
                    .subscribe(function (newRoom) {
                    _this.rooms = _this.rooms.concat(newRoom);
                });
            });
            this.roomService.getRemovedRoom().subscribe(function (room) {
                if (_this.rooms.length && room) {
                    _this.rooms = _this.rooms.filter(function (prev) { return prev._id !== room._id; });
                }
            });
        }
    };
    RoomsComponent.prototype.filterFunc = function (rooms) {
    };
    RoomsComponent.prototype.removeRoom = function (id) {
        this.rooms = this.rooms.filter(function (room) { return room._id !== id; });
        this.roomService.setRemovedRoom(this.rooms.find(function (room) { return room._id === id; }));
    };
    return RoomsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* User */]) === "function" && _a || Object)
], RoomsComponent.prototype, "user", void 0);
RoomsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rooms',
        template: __webpack_require__("../../../../../src/app/chat-page/rooms/rooms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/rooms/rooms.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["g" /* SelectChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["g" /* SelectChatService */]) === "function" && _e || Object])
], RoomsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
        };
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getWithToken = function (path, token, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + token,
            }), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_p2p__ = __webpack_require__("../../../../socket.io-p2p/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_p2p___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_p2p__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService() {
        this.host = 'http://localhost:8080';
    }
    SocketService.prototype.connect = function (id) {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.host, { query: "id=" + id });
        this.p2p = new __WEBPACK_IMPORTED_MODULE_3_socket_io_p2p___default.a(this.socket);
        this.socket.on('connect', function () { return _this.connected(); });
        this.socket.on('disconnect', function () { return _this.disconnected(); });
        this.socket.on('error', function (error) {
            console.log("ERROR: '" + error + "' (" + _this.host + ")");
        });
        this.socket.connect();
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.emit = function (chanel, message) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.emit(chanel, message, function (data) {
                if (data.success) {
                    observer.next(data.msg);
                }
                else {
                    observer.error(data.msg);
                }
                observer.complete();
            });
        });
    };
    SocketService.prototype.on = function (event_name) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.off(event_name);
            _this.socket.on(event_name, function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.connected = function () {
        console.log('Connected');
    };
    SocketService.prototype.disconnected = function () {
        console.log('Disconnected');
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/shared/services/chat.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__chat_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_service__ = __webpack_require__("../../../../../src/app/shared/services/room.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__room_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_chat_service__ = __webpack_require__("../../../../../src/app/shared/services/select-chat.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__select_chat_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_user_service__ = __webpack_require__("../../../../../src/app/shared/services/select-user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__select_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__peer_service__ = __webpack_require__("../../../../../src/app/shared/services/peer.service.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtService = (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    return JwtService;
}());
JwtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JwtService);

//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/peer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_peerjs__ = __webpack_require__("../../../../peerjs/lib/peer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_peerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_peerjs__);
/* unused harmony export PeerService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeerService = (function () {
    function PeerService() {
        this.host = 'localhost';
        this.port = '3000';
    }
    PeerService.prototype.connect = function (id) {
        var _this = this;
        this.peer = new __WEBPACK_IMPORTED_MODULE_2_peerjs___default.a(id, {
            host: this.host,
            port: this.port,
            path: '/peerjs',
            config: {
                id: id,
            }
        });
        this.peer.on('open', function () {
            _this.connected();
            _this.id = _this.peer.id;
        });
    };
    PeerService.prototype.disconnect = function () {
        this.peer.disconnect();
    };
    PeerService.prototype.emit = function (chanel, message) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
        });
    };
    PeerService.prototype.on = function (event_name) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
        });
    };
    PeerService.prototype.connected = function () {
        console.log('Peer connected');
    };
    PeerService.prototype.disconnected = function () {
        console.log('Disconnected');
    };
    return PeerService;
}());
PeerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PeerService);

//# sourceMappingURL=peer.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomService = (function () {
    function RoomService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.newRoom = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this.removedRoom = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    RoomService.prototype.getUserRooms = function (id) {
        return this.apiService.get("/rooms/user/" + id);
    };
    RoomService.prototype.postRoom = function (params) {
        var _this = this;
        return this.apiService.post('/rooms', params)
            .map(function (room) {
            _this.setNewRoom(room);
            return room;
        });
    };
    RoomService.prototype.updateRoom = function (id) {
        return this.apiService.put("/rooms/" + id);
    };
    RoomService.prototype.deleteRoom = function (id) {
        var _this = this;
        return this.apiService.delete("/rooms/" + id)
            .map(function (room) {
            _this.setRemovedRoom(room);
            return room;
        });
    };
    RoomService.prototype.getOrCreateRoom = function (users) {
        var _this = this;
        return this.apiService.post('/rooms/search', { users: users })
            .map(function (room) {
            _this.setNewRoom(room);
            return room;
        });
    };
    RoomService.prototype.setRemovedRoom = function (room) {
        this.removedRoom.next(room);
    };
    RoomService.prototype.getRemovedRoom = function () {
        return this.removedRoom;
    };
    RoomService.prototype.setNewRoom = function (room) {
        this.newRoom.next(room);
    };
    RoomService.prototype.getNewRoom = function () {
        return this.newRoom;
    };
    return RoomService;
}());
RoomService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], RoomService);

var _a, _b;
//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/select-chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectChatService; });

var SelectChatService = (function () {
    function SelectChatService() {
        this.changeChat = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    SelectChatService.prototype.emitChatIdChangeEvent = function (room) {
        this.changeChat.next(room);
    };
    SelectChatService.prototype.getChatIdEmitter = function () {
        return this.changeChat;
    };
    return SelectChatService;
}());

//# sourceMappingURL=select-chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/select-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectUserService; });

var SelectUserService = (function () {
    function SelectUserService() {
        this.changeUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SelectUserService.prototype.emitUserIdChangeEvent = function (user) {
        this.changeUser.emit(user);
    };
    SelectUserService.prototype.getUserIdEmitter = function () {
        return this.changeUser;
    };
    return SelectUserService;
}());

//# sourceMappingURL=select-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var userUrl = '/users';
var UserService = (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    UserService.prototype.changeUser = function (user) {
        this.currentUserSubject.next(user);
    };
    UserService.prototype.populate = function () {
        var _this = this;
        var token = this.jwtService.getToken();
        if (token) {
            this.apiService.getWithToken(userUrl + "/jwt_login", token)
                .subscribe(function (user) {
                _this.setAuth(user, token);
            }, function (err) { return _this.purgeAuth(); });
        }
        else {
            this.purgeAuth();
        }
    };
    UserService.prototype.searchUsers = function (username) {
        return this.apiService.get(userUrl + "/search/" + username);
    };
    UserService.prototype.setAuth = function (user, token) {
        this.jwtService.saveToken(token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.getUserById = function (Id) {
        return this.apiService.get(userUrl + "/userId/" + Id);
    };
    UserService.prototype.purgeAuth = function () {
        this.jwtService.destroyToken();
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.getUsers = function () {
        return this.apiService.get(userUrl);
    };
    UserService.prototype.attemptAuth = function (credentials) {
        var _this = this;
        return this.apiService.post(userUrl + "/auth", credentials)
            .map(function (data) {
            if (data.success) {
                _this.setAuth(data.user, data.token);
                return data;
            }
            return false;
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.apiService.delete(userUrl + "/" + id);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    UserService.prototype.updateUser = function (id, data) {
        var _this = this;
        return this.apiService.put(userUrl + "/" + id, data)
            .map(function (response) {
            if (response.success) {
                _this.currentUserSubject.next(response.user);
            }
            return response;
        });
    };
    UserService.prototype.postUser = function (user) {
        return this.apiService.post(userUrl + "/register", user);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api_url: 'http://localhost:8080',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map