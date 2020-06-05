(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.es5.js");
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nation: {
        name: "",
        slug: "",
        access_token: ""
      },
      client: {
        id: "",
        secret: ""
      },
      code: "",
      showModal: false,
      showModalLoading: false
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    createNation: function createNation() {
      if (this.nation.name) {
        if (this.nation.slug) {
          if (this.nation.access_token) {
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(BASE_URL + "/api/nations", {
              nation: this.nation,
              user_id: this.currentUser.user.id
            }).then(function (response) {
              if (response.status == 200) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Success", "Nation added", "success");
                window.location.reload();
              }
            }).catch(function (error) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
            });
          } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "You first must generate the API Token", "warning");
        } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the slug field before continuing", "warning");
      } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the name field before continuing", "warning");
    },
    reload: function reload() {
      window.location.reload();
    },
    getAccessToken: function getAccessToken() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(BASE_URL + "/api/nation/generate/token", {
        client: this.client,
        nation: this.nation,
        code: this.code
      }).then(function (response) {
        if (response.status == 200) {
          _this.nation.access_token = response.data.data;
        }
      }).catch(function (error) {
        return sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
      });
    },
    getCode: function getCode() {
      if (this.client.id) {
        if (this.client.secret) {
          this.showModal = false;
          this.showModalLoading = true;
          var popup = window.open("https://".concat(this.nation.slug, ".nationbuilder.com/oauth/authorize?response_type=code&client_id=").concat(this.client.id, "&redirect_uri=").concat(BASE_URL, "/nbcallback"), "Copy Url", "menubar=0,resizable=0,width=850,height=850");
          var me = this;
          var timer = setInterval(function () {
            var url = new URL(popup.location.href);
            var code = url.searchParams.get("code");

            if (code != undefined && code != null && code != "") {
              me.showModalLoading = false;
              me.code = code;
              me.getAccessToken();
              clearInterval(timer);
              popup.close();
            }
          }, 2000);
        } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the Client Secret field before continuing", "warning");
      } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the Client ID field before continuing", "warning");
    },
    show: function show() {
      if (this.nation.name != "" && this.nation.slug != "") this.showModal = true;else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete Fields", "Fill in the name and slug before continuing", "warning");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-991b1e8a] {\r\n  position: fixed;\r\n  z-index: 10000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: table;\r\n  -webkit-transition: opacity 0.3s ease;\r\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-991b1e8a] {\r\n  display: table-cell;\r\n  vertical-align: middle;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card main-card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "bd-example" }, [
          _c("div", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "nation_name" } }, [
                _vm._v("Nation Name:")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nation.name,
                    expression: "nation.name"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "nation_name",
                  "aria-describedby": "nation_help",
                  placeholder: "Enter name"
                },
                domProps: { value: _vm.nation.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.nation, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  staticClass: "form-text text-muted",
                  attrs: { id: "nation_help" }
                },
                [_vm._v("Choose a name for the nation")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "nation_slug" } }, [
                _vm._v("Nation Slug")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nation.slug,
                    expression: "nation.slug"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "nation_slug", placeholder: "Slug" },
                domProps: { value: _vm.nation.slug },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.nation, "slug", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-5" }, [
              _c("label", { attrs: { for: "nation_token" } }, [
                _vm._v("API Token")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nation.access_token,
                    expression: "nation.access_token"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "nation_token",
                  placeholder: "",
                  disabled: ""
                },
                domProps: { value: _vm.nation.access_token },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.nation, "access_token", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                { staticClass: "btn btn-success", on: { click: _vm.show } },
                [_vm._v("Get API Token")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary text-right",
                  on: { click: _vm.createNation }
                },
                [_vm._v("Connect Nation")]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.showModal
      ? _c(
          "div",
          [
            _c("transition", { attrs: { name: "modal" } }, [
              _c("div", { staticClass: "modal-mask" }, [
                _c("div", { staticClass: "modal-wrapper" }, [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c("h5", { staticClass: "modal-title" }, [
                            _vm._v("Get Access Token")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "close",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { "aria-hidden": "true" },
                                  on: {
                                    click: function($event) {
                                      _vm.showModal = false
                                    }
                                  }
                                },
                                [_vm._v("×")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "client_id" } }, [
                              _vm._v("Client ID:")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.client.id,
                                  expression: "client.id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "client_id",
                                placeholder: "Client ID"
                              },
                              domProps: { value: _vm.client.id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.client,
                                    "id",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "client_secret" } }, [
                              _vm._v("Client Secret")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.client.secret,
                                  expression: "client.secret"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "textx",
                                id: "client_secret",
                                placeholder: "Client Secret"
                              },
                              domProps: { value: _vm.client.secret },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.client,
                                    "secret",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.showModal = false
                                }
                              }
                            },
                            [_vm._v("Close")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.getCode }
                            },
                            [_vm._v("Continue")]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showModalLoading
      ? _c(
          "div",
          [
            _c("transition", { attrs: { name: "modal" } }, [
              _c("div", { staticClass: "modal-mask" }, [
                _c("div", { staticClass: "modal-wrapper" }, [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c("h5", { staticClass: "modal-title" }, [
                            _vm._v("Awaiting authorization")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-primary",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-secondary",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-success",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-danger",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-warning",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-info",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-light",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinner-grow text-dark",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button" },
                              on: { click: _vm.reload }
                            },
                            [_vm._v("Cancel")]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-3 h-auto d-block" }, [
      _c("div", { staticClass: "d-block" }, [_vm._v("Add new Nation")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-notifications/dist/vue-notifications.es5.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-notifications/dist/vue-notifications.es5.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PLUGIN_NAME = 'VueNotifications';
var PACKAGE_NAME = 'vue-notifications';
var PROPERTY_NAME = 'notifications';

var TYPES = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  success: 'success'
};

var EVANGELION = 1;

var MESSAGES = {
  alreadyInstalled: PLUGIN_NAME + ': plugin already installed',
  methodNameConflict: PLUGIN_NAME + ': names conflict - '
};

function getVersion(Vue) {
  var version = Vue.version.match(/(\d+)/g);
  return +version[0];
}

function showDefaultMessage(_ref) {
  var type = _ref.type,
      message = _ref.message,
      title = _ref.title;

  var msg = 'Title: ' + title + ', Message: ' + message + ', Type: ' + type;
  if (type === TYPES.error) console.error(msg);else if (type === TYPES.warn) console.warn(msg);else console.log(msg);
}

function getValues(vueApp, config) {
  var result = {};

  Object.keys(config).forEach(function (field) {
    if (field === 'cb') {
      result[field] = config[field].bind(vueApp);
    } else {
      result[field] = typeof config[field] === 'function' ? config[field].call(vueApp) : config[field];
    }
  });

  return result;
}

function showMessage(config, vueApp) {
  var valuesObj = getValues(vueApp, config);
  var isMethodOverridden = VueNotifications.pluginOptions[valuesObj.type];
  var method = isMethodOverridden ? VueNotifications.pluginOptions[valuesObj.type] : showDefaultMessage;
  method(valuesObj, vueApp);

  if (config.cb) return config.cb();
}

function addMethods(targetObj, typesObj) {
  Object.keys(typesObj).forEach(function (v) {
    targetObj[typesObj[v]] = function (config) {
      config.type = typesObj[v];

      return showMessage(config);
    };
  });
}

function setMethod(vueApp, name, options, pluginOptions) {
  if (!options.methods) options.methods = {};

  if (!options.methods[name]) {
    options.methods[name] = makeMethod(vueApp, name, options, pluginOptions);
  }
}

function makeMethod(vueApp, configName, options, pluginOptions) {
  return function (config) {
    var newConfig = Object.assign({}, VueNotifications.config, options[VueNotifications.propertyName][configName], config);

    return showMessage(newConfig, pluginOptions, vueApp);
  };
}

function initVueNotificationPlugin(vueApp, notifications, pluginOptions) {
  if (!notifications) return;
  Object.keys(notifications).forEach(function (name) {
    return setMethod(vueApp, name, vueApp.$options, pluginOptions);
  });
  vueApp.$emit(PACKAGE_NAME + '-initiated');
}

function unlinkVueNotificationPlugin(vueApp, notifications) {
  if (!notifications) return;
  var attachedMethods = vueApp.$options.methods;
  Object.keys(notifications).forEach(function (name) {
    if (attachedMethods[name]) {
      attachedMethods[name] = undefined;
      delete attachedMethods[name];
    }
  });

  vueApp.$emit(PACKAGE_NAME + '-unlinked');
}

function makeMixin(Vue, pluginOptions) {
  var _ref2;

  var init = getVersion(Vue) === EVANGELION ? 'init' : 'beforeCreate';

  return _ref2 = {}, _defineProperty(_ref2, init, function () {
    var notificationsField = this.$options[VueNotifications.propertyName];
    initVueNotificationPlugin(this, notificationsField, pluginOptions);
  }), _defineProperty(_ref2, 'beforeDestroy', function beforeDestroy() {
    var notificationsField = this.$options[VueNotifications.propertyName];
    unlinkVueNotificationPlugin(this, notificationsField);
  }), _ref2;
}

var VueNotifications = {
  types: TYPES,
  propertyName: PROPERTY_NAME,
  config: {
    type: TYPES.info,
    timeout: 3000
  },
  pluginOptions: {},
  installed: false,
  install: function install(Vue) {
    var pluginOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) throw console.error(MESSAGES.alreadyInstalled);
    var mixin = makeMixin(Vue, pluginOptions);
    Vue.mixin(mixin);

    this.setPluginOptions(pluginOptions);
    addMethods(this, this.types);

    this.installed = true;
  },
  setPluginOptions: function setPluginOptions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.pluginOptions = options;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueNotifications);
}
return VueNotifications;
}));


/***/ }),

/***/ "./resources/js/PageComponents/Nations/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=991b1e8a&scoped=true& */ "./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& */ "./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "991b1e8a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/Nations/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=style&index=0&id=991b1e8a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_991b1e8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=991b1e8a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Create.vue?vue&type=template&id=991b1e8a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_991b1e8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);