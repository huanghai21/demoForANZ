webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoService = (function () {
    function DemoService(httpHelperService) {
        var _this = this;
        this.httpHelperService = httpHelperService;
        this.getLogItems = function () {
            return _this.httpHelperService.get('./assets/json_data/logs.json')
                .map(_this.extractData)
                .toPromise();
        };
        this.extractData = function (logs) {
            var logItems = [];
            logs.forEach(function (item) {
                logItems = logItems.concat(item.LogItems);
            });
            return logItems;
        };
    }
    DemoService.prototype.filterLogItems = function (logItems, logLevel) {
        return logItems.filter(function (item) {
            return item.LogLevel === logLevel;
        });
    };
    return DemoService;
}());
DemoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__["a" /* HttpHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__["a" /* HttpHelperService */]) === "function" && _a || Object])
], DemoService);

var _a;
//# sourceMappingURL=demo.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpHelperService = (function () {
    function HttpHelperService(_http) {
        var _this = this;
        this._http = _http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        this.request = function (url, requestOptions) {
            return _this._http.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */](requestOptions))
                .map(_this.preProcessRes).catch(_this.handleError);
        };
        this.preProcessRes = function (res) {
            return res.json();
        };
        this.handleError = function (error) {
            var errMsg = (error.message) ? error.message : error.status ? "" + error._body : 'Server error';
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
        };
    }
    HttpHelperService.prototype.get = function (url, requestOptions) {
        return this.request(url, Object.assign({
            method: 'get',
            headers: this.headers,
        }, requestOptions));
    };
    HttpHelperService.prototype.post = function (url, body, requestOptions) {
        return this.request(url, Object.assign({
            method: 'post',
            headers: this.headers,
            body: body
        }, requestOptions));
    };
    return HttpHelperService;
}());
HttpHelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpHelperService);

var _a;
//# sourceMappingURL=http-helper.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 358;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(376);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(680),
        styles: [__webpack_require__(675)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_http_helper_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/demo/home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'demo', component: __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__["a" /* DemoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] }
        ] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__["a" /* DemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__service_http_helper_service__["a" /* HttpHelperService */], __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var echarts = __webpack_require__(430);
var DashboardComponent = (function () {
    function DashboardComponent(el, demoService) {
        var _this = this;
        this.el = el;
        this.demoService = demoService;
        this.initCharts = function (items) {
            _this.initPieChart(items);
            _this.initLineChart(items);
        };
        this.initPieChart = function (logItems) {
            var pieChart = echarts.init(_this.el.nativeElement.querySelector('#pieChart'));
            var option = {
                title: {
                    text: 'Log Types',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    top: '10%',
                    data: ['INFO', 'DEBUG', 'TRACE']
                },
                color: ['#449d44', '#025aa5', '#960930'],
                series: [{
                        type: 'pie',
                        name: 'Log Level',
                        center: ['50%', '60%'],
                        data: [{
                                name: 'INFO',
                                value: _this.demoService.filterLogItems(logItems, 'INFO').length
                            }, {
                                name: 'DEBUG',
                                value: _this.demoService.filterLogItems(logItems, 'DEBUG').length
                            }, {
                                name: 'TRACE',
                                value: _this.demoService.filterLogItems(logItems, 'TRACE').length
                            }]
                    }]
            };
            pieChart.setOption(option);
        };
        this.initLineChart = function (logItems) {
            var lineChart = echarts.init(_this.el.nativeElement.querySelector('#lineChart'));
            var option = {
                title: {
                    text: 'Logs Over Time',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: '10%',
                    data: ['INFO', 'DEBUG', 'TRACE']
                },
                grid: {
                    top: '30%'
                },
                color: ['#449d44', '#025aa5', '#960930'],
                calculable: true,
                xAxis: [
                    {
                        type: 'time'
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'INFO',
                        type: 'line',
                        data: [
                            // this.buildData(logItems, 'INFO'),
                            ['2015-04-21', 3],
                            ['2015-05-21', 5],
                            ['2015-06-21', 9]
                        ]
                    },
                    {
                        name: 'DEBUG',
                        type: 'line',
                        data: [
                            // this.buildData(logItems, 'DEBUG'),
                            ['2015-04-21', 4],
                            ['2015-05-21', 2],
                            ['2015-06-21', 6]
                        ]
                    }, {
                        name: 'TRACE',
                        type: 'line',
                        data: _this.buildData(logItems, 'TRACE')
                    }
                ]
            };
            lineChart.setOption(option);
        };
        this.buildData = function (logItems, type) {
            //TODO: same date, same count, how to build data??
            var count = 1;
            var data = _this.demoService.filterLogItems(logItems, type)
                .map(function (item) {
                var date = item.TimeStamp.slice(0, item.TimeStamp.length - 4);
                return [date, count++];
            });
            console.log(data);
            return data;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.demoService.getLogItems()
            .then(this.initCharts);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(681),
        styles: [__webpack_require__(676)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__["a" /* DemoService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_service__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoComponent = (function () {
    function DemoComponent(router, demoService) {
        this.router = router;
        this.demoService = demoService;
        this.userId = '';
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('userId');
    };
    DemoComponent.prototype.logout = function () {
        localStorage.removeItem('userId');
        this.router.navigate(['/login']);
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-demo',
        template: __webpack_require__(682),
        styles: [__webpack_require__(677)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */]) === "function" && _b || Object])
], DemoComponent);

var _a, _b;
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(demoService) {
        this.demoService = demoService;
        this.logLevels = [
            'DEBUG',
            'INFO',
            'WARN',
            'ERROR',
            'FATAL'
        ];
        this.headers = [
            'TimeStamp',
            'Log Marker',
            'Logger',
            'Log Level',
            'Current Thread',
            'Log Message'
        ];
        this.logItems = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoService.getLogItems()
            .then(function (items) {
            _this.logItems = items;
        });
    };
    HomeComponent.prototype.changeLogLevel = function (level) {
        var _this = this;
        this.demoService.getLogItems()
            .then(function (items) {
            _this.logItems = _this.demoService.filterLogItems(items, level);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(683),
        styles: [__webpack_require__(678)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__demo_demo_service__["a" /* DemoService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(374);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, el, router) {
        var _this = this;
        this.loginService = loginService;
        this.el = el;
        this.router = router;
        this.userId = '';
        this.errorTipForUserId = '';
        this.password = '';
        this.errorTipForPassword = '';
        this.validate = function (users) {
            var user = _this.loginService.findUser(users, _this.userId);
            if (!user) {
                _this.focus(_this.el.nativeElement.querySelector('input[type="text"]'));
                _this.errorTipForUserId = 'User ID is not exist';
                throw "User ID is not exist";
            }
            else if (user.Password !== _this.password) {
                _this.focus(_this.el.nativeElement.querySelector('input[type="password"]'));
                _this.errorTipForPassword = 'Password is incorrect';
                throw "Password is incorrect";
            }
            return Promise.resolve(true);
        };
        this.navigate2Home = function () {
            localStorage.setItem('userId', _this.userId);
            _this.router.navigate(['/demo/home']);
        };
        this.focus = function (dom) {
            if (dom) {
                dom.focus();
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (!this.userId) {
            this.focus(this.el.nativeElement.querySelector('input[type="text"]'));
            this.errorTipForUserId = 'Please input User ID';
            return;
        }
        else if (!this.password) {
            this.focus(this.el.nativeElement.querySelector('input[type="password"]'));
            this.errorTipForPassword = 'Please input password';
            return;
        }
        this.loginService.getUsers()
            .then(this.validate)
            .then(this.navigate2Home)
            .catch(function (errMsg) {
            console.log('Opoos~~ error happend here, errMsg is: ' + errMsg);
        });
    };
    LoginComponent.prototype.checkEnter = function (event) {
        if (event.key === 'Enter') {
            this.login();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(684),
        styles: [__webpack_require__(679)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(httpHelperService) {
        this.httpHelperService = httpHelperService;
    }
    LoginService.prototype.getUsers = function () {
        //POST should be better
        return this.httpHelperService.get('./assets/json_data/users.json').toPromise();
    };
    LoginService.prototype.findUser = function (users, userId) {
        return users.find(function (item) {
            return item.UserId === userId;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__["a" /* HttpHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_http_helper_service__["a" /* HttpHelperService */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('userId')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, ".pie {\r\n\twidth: 50%;\r\n\tfloat: left;\r\n}\r\n\r\n.line {\r\n\twidth: 50%;\r\n\tfloat: right;\r\n}\r\n\r\n#pieChart, #lineChart {\r\n\theight: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, ".header {\r\n\tbackground: #31b0d5;\r\n\theight: 50px;\r\n\tcolor: #fff;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.nav-content {\r\n\tfloat: left;\r\n\tmargin-left: 5%;\r\n}\r\n.logout {\r\n\tfloat: right;\r\n\tmargin-right: 5%;\r\n}\r\n\r\n.nav-content ul, .logout ul{\r\n\tdisplay: inline-block;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n}\r\n.nav-content ul li{\r\n\tfloat: left;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 10px;\r\n\tborder-right: 1px solid;\r\n}\r\n.nav-content ul li:last-child{\r\n\tborder-right: 0px;\r\n}\r\n\r\n.clear {\r\n\tclear: both;\r\n}\r\n.main-content {\r\n\tmargin-left: 5%;\r\n\tmargin-right: 5%;\r\n\tpadding: 15px;\r\n\tpadding-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, ".filter {\r\n\twidth: 15%;\r\n\tfloat: left;\r\n}\r\n\r\n.table-list {\r\n\twidth: 85%;\r\n\tfloat: right;\r\n}\r\n.table-list table {\r\n\twidth: 100%;\r\n}\r\n.table-list table tr {\r\n\tborder: 1px solid #ddd;\r\n}\r\n.table-list table thead tr {\r\n\tbackground: #ddd;\r\n\twhite-space: nowrap;\r\n}\r\n.table-list table thead tr th,\r\n.table-list table tbody tr td{\r\n\tword-break: break-all;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tpadding: 5px 10px 5px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, ".login .logo {\r\n\tmargin-top: 60px;\r\n\theight: 100px;\r\n}\r\n\r\n.login .content {\r\n\tbackground: #31b0d5;\r\n\tcolor: #fff;\r\n\twidth: 460px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 0;\r\n\tpadding: 30px;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 15px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: -1px 1px 1px rgba(255, 255, 255, 0.6) inset, -3px 3px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.login-title {\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tfont-size: 30px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n.login-button {\r\n\twidth: 80px;\r\n\tcolor: #0275d8;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.error-tip {\r\n\tcolor: #af3333;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\n\n<div class=\"pie\">\n\t<div id='pieChart'></div>\n</div>\n<div class=\"line\">\n\t<div id='lineChart'></div>\n</div>"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<div class=\"nav-content\">\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/demo/home\">Home</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/demo/dashboard\">Dashboard</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"logout\">\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<div ngbDropdown class=\"d-inline-block\">\n\t\t      <button class=\"btn btn-outline-primary\" id=\"logoutDropdown\" ngbDropdownToggle>\n\t\t      \t<span>{{userId}}</span>\n\t\t      </button>\n\t\t      <div class=\"dropdown-menu\" aria-labelledby=\"logoutDropdown\">\n\t\t        <button class=\"dropdown-item\" (click)=\"logout()\">Logout</button>\n\t\t      </div>\n\t\t    </div>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"clear main-content\">\n\t<router-outlet></router-outlet>\n</div>\n<div class=\"clear\"></div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<h2>Home</h2>\n<div class=\"filter\">\n\t<div ngbDropdown class=\"d-inline-block\">\n\t  <button class=\"btn btn-outline-primary\" id=\"logLevelDropdown\" ngbDropdownToggle>\n\t  \t<span>Log Level</span>\n\t  </button>\n\t  <div class=\"dropdown-menu\" aria-labelledby=\"logLevelDropdown\">\n\t    <button *ngFor=\"let level of logLevels\" class=\"dropdown-item\" (click)=\"changeLogLevel(level)\">\n\t    \t<span>{{level}}</span>\n\t    </button>\n\t  </div>\n\t</div>\n</div>\n<div class=\"table-list\">\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th *ngFor=\"let header of headers\">{{header}}</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of logItems\">\n\t\t\t\t<td>{{item.TimeStamp}}</td>\n\t\t\t\t<td>{{item.LogMarker}}</td>\n\t\t\t\t<td>{{item.CurrentThread}}</td>\n\t\t\t\t<td>{{item.Logger}}</td>\n\t\t\t\t<td>{{item.LogLevel}}</td>\n\t\t\t\t<td>{{item.LogMessage}}</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"logItems.length === 0\" style=\"text-align: center;\">\n\t\t\t\t<td colspan=\"6\">No Data</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\t<div class=\"logo\"></div>\n\t<div class=\"content\">\n\t\t<div class=\"login-title\"><span>Log In</span></div>\n\t\t<div class=\"login-form form-horizontal\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label col-sm-3\">\n\t\t\t\t\t<span>User ID</span>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"userId\" class=\"form-control\" \n\t\t\t\t\t\t\t(keydown)='errorTipForUserId=\"\"' \n\t\t\t\t\t\t\t(keyup)='checkEnter($event)' \n\t\t\t\t\t\t\tplaceholder=\"Please input user id here\">\n\t\t\t\t\t<div *ngIf=\"errorTipForUserId\" class=\"error-tip\">\n\t\t\t\t\t\t<span>{{errorTipForUserId}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label col-sm-3\">\n\t\t\t\t\t<span>Password</span>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" \n\t\t\t\t\t\t\t(keydown)='errorTipForPassword=\"\"' \n\t\t\t\t\t\t\t(keyup)='checkEnter($event)' \n\t\t\t\t\t\t\tplaceholder=\"Please input password here\">\n\t\t\t\t\t<div *ngIf=\"errorTipForPassword\" class=\"error-tip\">\n\t\t\t\t\t\t<span>{{errorTipForPassword}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label col-sm-3\">\n\t\t\t\t\t<button class=\"login-button form-control\" (click)=\"login()\"><span>Log In</span></button>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);


/***/ })

},[983]);
//# sourceMappingURL=main.bundle.js.map