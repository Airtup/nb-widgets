(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      role: 2,
      roles: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(BASE_URL + "/api/roles").then(function (response) {
      if (response.status == 200) {
        _this.roles = response.data.data;
      }
    }).catch(function (error) {
      return sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
    });
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    createUser: function createUser() {
      if (this.user.email) {
        if (this.user.name) {
          if (this.user.password && this.user.password_confirmation && this.user.password_confirmation == this.user.password) {
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(BASE_URL + "/api/users", {
              user: this.user,
              role: this.role
            }).then(function (response) {
              if (response.data.status == "ok") {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Success", "User added", "success");
                window.location.reload();
              } else {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", response.data.data, "error");
              }
            }).catch(function (error) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", response, "error");
            });
          } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Verify passwords before continuing", "warning");
        } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the name field before continuing", "warning");
      } else sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Incomplete fields", "Fill in the email field before continuing", "warning");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", { attrs: { for: "nation_name" } }, [
                _vm._v("User email:")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.email,
                    expression: "user.email"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  "aria-describedby": "email_help",
                  placeholder: "Enter email"
                },
                domProps: { value: _vm.user.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  staticClass: "form-text text-muted",
                  attrs: { id: "email_help" }
                },
                [_vm._v("Will be used for login")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", [_vm._v("Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.name,
                    expression: "user.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Name" },
                domProps: { value: _vm.user.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", [_vm._v("Password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.password,
                    expression: "user.password"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.user.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "password", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", [_vm._v("Password Confirmation")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.password_confirmation,
                    expression: "user.password_confirmation"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password" },
                domProps: { value: _vm.user.password_confirmation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.user,
                      "password_confirmation",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", [_vm._v("Role")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.role,
                      expression: "role"
                    }
                  ],
                  staticClass: "form-control text-capitalize",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.role = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.roles, function(role) {
                  return _c(
                    "option",
                    {
                      key: role.id,
                      staticClass: "text-capitalize",
                      domProps: { value: role.id }
                    },
                    [_vm._v(_vm._s(role.name))]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 mt-5" }, [
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary text-right",
                    on: { click: _vm.createUser }
                  },
                  [_vm._v("Save User")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-3 h-auto d-block" }, [
      _c("div", { staticClass: "d-block" }, [_vm._v("Add new User")])
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

/***/ "./resources/js/PageComponents/Users/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/PageComponents/Users/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=2263e03f& */ "./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/Users/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=2263e03f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Users/Create.vue?vue&type=template&id=2263e03f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2263e03f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);