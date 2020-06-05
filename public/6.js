(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick */ "./node_modules/vue-slick/dist/slickCarousel.esm.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./resources/js/models/user.js");
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
  components: {
    Slick: vue_slick__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      slickOptions6: {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        initialSlide: 0,
        autoplay: true,
        adaptiveHeight: true
      },
      user: new _models_user__WEBPACK_IMPORTED_MODULE_1__["default"]("", "", ""),
      message: "",
      slide: 0,
      sliding: null
    };
  },
  methods: {
    handleClick: function handleClick(newTab) {
      this.currentTab = newTab;
    },
    next: function next() {
      this.$refs.slick.next();
    },
    prev: function prev() {
      this.$refs.slick.prev();
    },
    reInit: function reInit() {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.slick.reSlick();
      });
    },
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    },
    handleLogin: function handleLogin() {
      var _this2 = this;

      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).catch(function (error) {
          _this2.loading = false;
          _this2.message = error.response.statusText ? error.response.statusText + ": check your credentials" : "Error: check your credentials";
        });
      }
    }
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted: function mounted() {
    if (this.currentUser) {
      this.$router.push("/nations");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-container app-theme-white" }, [
    _c("div", { staticClass: "h-100 bg-plum-plate bg-animation" }, [
      _c(
        "div",
        {
          staticClass: "d-flex vh-100 justify-content-center align-items-center"
        },
        [
          _c(
            "b-col",
            { staticClass: "mx-auto app-login-box", attrs: { md: "8" } },
            [
              _c("div", { staticClass: "logo-src mx-auto mb-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-dialog w-100 mx-auto" }, [
                _c("div", { staticClass: "modal-content" }, [
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _c("div", { staticClass: "h5 modal-title text-center" }, [
                        _c("h4", { staticClass: "mt-2" }, [
                          _c("div", [_vm._v("Welcome back,")]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("Please sign in to your account below.")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "exampleInputGroup1",
                            "label-for": "exampleEmail"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "email",
                              name: "email",
                              id: "exampleEmail",
                              placeholder: "Email here..."
                            },
                            model: {
                              value: _vm.user.email,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "email", $$v)
                              },
                              expression: "user.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "exampleInputGroup2",
                            "label-for": "examplePassword"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "password",
                              name: "password",
                              id: "examplePassword",
                              placeholder: "Password here..."
                            },
                            model: {
                              value: _vm.user.password,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "password", $$v)
                              },
                              expression: "user.password"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer clearfix" }, [
                    _c(
                      "div",
                      { staticClass: "float-right" },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "primary", size: "lg" },
                            on: {
                              click: function($event) {
                                return _vm.handleLogin()
                              }
                            }
                          },
                          [_vm._v("Login to Dashboard")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm.message
                      ? _c(
                          "div",
                          {
                            staticClass: "alert alert-danger",
                            attrs: { role: "alert" }
                          },
                          [_vm._v(_vm._s(_vm.message))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/PageComponents/Login.vue":
/*!***********************************************!*\
  !*** ./resources/js/PageComponents/Login.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=e21df446& */ "./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/PageComponents/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446&":
/*!******************************************************************************!*\
  !*** ./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=e21df446& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Login.vue?vue&type=template&id=e21df446&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_e21df446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/models/user.js":
/*!*************************************!*\
  !*** ./resources/js/models/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(username, email, password) {
  _classCallCheck(this, User);

  this.username = username;
  this.email = email;
  this.password = password;
};



/***/ })

}]);