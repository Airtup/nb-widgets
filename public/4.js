(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue */ "./resources/js/PageComponents/PageTitle.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick */ "./node_modules/vue-slick/dist/slickCarousel.esm.js");
/* harmony import */ var vuetrend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetrend */ "./node_modules/vuetrend/dist/vue-trend.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
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







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAngleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTh"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTitle: _PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    Slick: vue_slick__WEBPACK_IMPORTED_MODULE_2__["default"],
    "font-awesome-icon": _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"],
    trend: vuetrend__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      heading: "Analytics Dashboard",
      subheading: "Nations Data",
      icon: "pe-7s-plane icon-gradient bg-tempting-azure",
      slickOptions2: {
        slidesToShow: 1,
        dots: true
      },
      fields: [{
        key: "last_name",
        sortable: true
      }, {
        key: "first_name",
        sortable: true
      }, {
        key: "age",
        label: "Person age",
        sortable: true // Variant applies to the whole column, including the header and footer

      }],
      items: [{
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      }, {
        isActive: false,
        age: 21,
        first_name: "Larsen",
        last_name: "Shaw"
      }, {
        isActive: false,
        age: 89,
        first_name: "Geneva",
        last_name: "Wilson"
      }, {
        isActive: true,
        age: 38,
        first_name: "Jami",
        last_name: "Carney"
      }]
    };
  },
  methods: {},
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted: function mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
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



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHashtag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartBar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'font-awesome-icon': _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"]
  },
  props: {
    icon: String,
    heading: String,
    subheading: String
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("page-title", {
        attrs: {
          heading: _vm.heading,
          subheading: _vm.subheading,
          icon: "chart-bar"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3 card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "no-gutters row" }, [
          _c("div", { staticClass: "col-sm-6 col-md-4 col-xl-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "card no-shadow rm-border bg-transparent widget-chart text-left"
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "widget-chart-content" }, [
                  _c("div", { staticClass: "widget-subheading" }, [
                    _vm._v("Cash Deposits")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "widget-numbers" }, [
                    _vm._v("1,7M")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "widget-description opacity-8 text-focus" },
                    [
                      _c(
                        "div",
                        { staticClass: "d-inline text-danger pr-1" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "angle-down" }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "pl-1" }, [_vm._v("54.1%")])
                        ],
                        1
                      ),
                      _vm._v("less earnings\n            ")
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "divider m-0 d-md-none d-sm-block" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 col-md-4 col-xl-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "card no-shadow rm-border bg-transparent widget-chart text-left"
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "widget-chart-content" }, [
                  _c("div", { staticClass: "widget-subheading" }, [
                    _vm._v("Invested Dividents")
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "widget-description opacity-8 text-focus" },
                    [
                      _vm._v("\n              Grow Rate:\n              "),
                      _c(
                        "span",
                        { staticClass: "text-info pl-1" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "angle-down" }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "pl-1" }, [_vm._v("14.1%")])
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "divider m-0 d-md-none d-sm-block" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12 col-md-4 col-xl-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "card no-shadow rm-border bg-transparent widget-chart text-left"
              },
              [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "widget-chart-content" }, [
                  _c("div", { staticClass: "widget-subheading" }, [
                    _vm._v("Capital Gains")
                  ]),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "widget-description text-focus" }, [
                    _vm._v("\n              Increased by\n              "),
                    _c(
                      "span",
                      { staticClass: "text-warning pl-1" },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: "angle-up" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "pl-1" }, [_vm._v("7.35%")])
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(6)
      ]),
      _vm._v(" "),
      _vm._m(7)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header-tab card-header" }, [
      _c(
        "div",
        {
          staticClass:
            "card-header-title font-size-lg text-capitalize font-weight-normal"
        },
        [
          _c("i", {
            staticClass: "header-icon lnr-charts icon-gradient bg-happy-green"
          }),
          _vm._v("\n        Portfolio Performance\n      ")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "btn-actions-pane-right text-capitalize" }, [
        _c(
          "button",
          {
            staticClass:
              "btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
          },
          [_vm._v("View All")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrapper rounded-circle" }, [
      _c("div", { staticClass: "icon-wrapper-bg opacity-10 bg-warning" }),
      _vm._v(" "),
      _c("i", { staticClass: "lnr-laptop-phone text-dark opacity-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrapper rounded-circle" }, [
      _c("div", { staticClass: "icon-wrapper-bg opacity-9 bg-danger" }),
      _vm._v(" "),
      _c("i", { staticClass: "lnr-graduation-hat text-white" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-numbers" }, [
      _c("span", [_vm._v("9M")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrapper rounded-circle" }, [
      _c("div", { staticClass: "icon-wrapper-bg opacity-9 bg-success" }),
      _vm._v(" "),
      _c("i", { staticClass: "lnr-apartment text-white" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-numbers text-success" }, [
      _c("span", [_vm._v("$563")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center d-block p-3 card-footer" }, [
      _c(
        "button",
        {
          staticClass:
            "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg"
        },
        [
          _c("span", { staticClass: "mr-2 opacity-7" }, [
            _c("i", {
              staticClass: "icon icon-anim-pulse ion-ios-analytics-outline"
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "mr-1" }, [_vm._v("View Complete Report")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "no-gutters row" }, [
        _c("div", { staticClass: "col-md-12 col-lg-4" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Total Orders")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("Last year expenses")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c(
                        "div",
                        { staticClass: "widget-numbers text-success" },
                        [_vm._v("1896")]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Clients")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("Total Clients Profit")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c(
                        "div",
                        { staticClass: "widget-numbers text-primary" },
                        [_vm._v("$12.6k")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 col-lg-4" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Followers")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("People Interested")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c("div", { staticClass: "widget-numbers text-danger" }, [
                        _vm._v("45,9%")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Products Sold")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("Total revenue streams")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c(
                        "div",
                        { staticClass: "widget-numbers text-warning" },
                        [_vm._v("$3M")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 col-lg-4" }, [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Total Orders")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("Last year expenses")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c(
                        "div",
                        { staticClass: "widget-numbers text-success" },
                        [_vm._v("1896")]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "bg-transparent list-group-item" }, [
              _c("div", { staticClass: "widget-content p-0" }, [
                _c("div", { staticClass: "widget-content-outer" }, [
                  _c("div", { staticClass: "widget-content-wrapper" }, [
                    _c("div", { staticClass: "widget-content-left" }, [
                      _c("div", { staticClass: "widget-heading" }, [
                        _vm._v("Clients")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-subheading" }, [
                        _vm._v("Total Clients Profit")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "widget-content-right" }, [
                      _c(
                        "div",
                        { staticClass: "widget-numbers text-primary" },
                        [_vm._v("$12.6k")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-page-title" }, [
    _c("div", { staticClass: "page-title-wrapper" }, [
      _c("div", { staticClass: "page-title-heading" }, [
        _c(
          "div",
          { staticClass: "page-title-icon" },
          [_c("font-awesome-icon", { attrs: { icon: _vm.icon } })],
          1
        ),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n                " + _vm._s(_vm.heading) + "\n                "
          ),
          _c("div", { staticClass: "page-title-subheading" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.subheading) +
                "\n                "
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/PageComponents/Analytics.vue":
/*!***************************************************!*\
  !*** ./resources/js/PageComponents/Analytics.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analytics.vue?vue&type=template&id=1234cd7a& */ "./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a&");
/* harmony import */ var _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analytics.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/Analytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=template&id=1234cd7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Analytics.vue?vue&type=template&id=1234cd7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_1234cd7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/PageComponents/PageTitle.vue":
/*!***************************************************!*\
  !*** ./resources/js/PageComponents/PageTitle.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=31be6d06& */ "./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06&":
/*!**********************************************************************************!*\
  !*** ./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=31be6d06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/PageTitle.vue?vue&type=template&id=31be6d06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31be6d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);