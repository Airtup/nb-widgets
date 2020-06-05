(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageTitle */ "./resources/js/PageComponents/PageTitle.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"]);
var items = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTitle: _PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    "font-awesome-icon": _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"]
  },
  data: function data() {
    return {
      heading: "Nations list",
      subheading: "All registered nations are shown here",
      icon: "fa fa-hashtag",
      items: items,
      fields: [{
        key: "id",
        label: "ID"
      }, {
        key: "name",
        label: "Nation Name",
        sortable: true,
        sortDirection: "desc"
      }, {
        key: "slug",
        label: "Nation Slug"
      }, {
        key: "access_token",
        label: "Nation API Token"
      }, {
        key: "people_count",
        label: "Listing Count"
      }, {
        key: "updated_at",
        label: "Last Refresh"
      }, {
        key: "actions",
        label: "Actions"
      }],
      currentPage: 1,
      perPage: 1000,
      totalRows: items.length,
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: {
        title: "",
        content: ""
      }
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(BASE_URL + "/api/nations").then(function (response) {
      if (response.status == 200) {
        _this.items = response.data.data;
      }
    }).catch(function (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
    });
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    info: function info(item, index, button) {
      this.modalInfo.title = "Row index: ".concat(index);
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal: function resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    deleteNation: function deleteNation(id) {
      var _this2 = this;

      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this nation!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(BASE_URL + "/api/nations/" + id + "?user_id=" + _this2.currentUser.user.id).then(function (response) {
            if (response.status == 200) {
              sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Success", "Nation deleted", "success");
              axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(BASE_URL + "/api/nations").then(function (response) {
                if (response.status == 200) {
                  _this2.items = response.data.data;
                }
              }).catch(function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
              });
            }
          }).catch(function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", error, "error");
          });
        }
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          icon: "hashtag"
        }
      }),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "main-card mb-4", attrs: { title: "Nations List" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      staticClass: "mb-0",
                      attrs: { horizontal: "", label: "Filter" }
                    },
                    [
                      _c(
                        "b-input-group",
                        [
                          _c("b-form-input", {
                            attrs: { placeholder: "Type to Search" },
                            model: {
                              value: _vm.filter,
                              callback: function($$v) {
                                _vm.filter = $$v
                              },
                              expression: "filter"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            [
                              _c(
                                "b-btn",
                                {
                                  attrs: { disabled: !_vm.filter },
                                  on: {
                                    click: function($event) {
                                      _vm.filter = ""
                                    }
                                  }
                                },
                                [_vm._v("Clear")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      staticClass: "mb-0",
                      attrs: { horizontal: "", label: "Sort" }
                    },
                    [
                      _c(
                        "b-input-group",
                        [
                          _c(
                            "b-form-select",
                            {
                              attrs: { options: _vm.sortOptions },
                              model: {
                                value: _vm.sortBy,
                                callback: function($$v) {
                                  _vm.sortBy = $$v
                                },
                                expression: "sortBy"
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { slot: "first" },
                                  domProps: { value: null },
                                  slot: "first"
                                },
                                [_vm._v("-- none --")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-select",
                            {
                              attrs: { slot: "append", disabled: !_vm.sortBy },
                              slot: "append",
                              model: {
                                value: _vm.sortDesc,
                                callback: function($$v) {
                                  _vm.sortDesc = $$v
                                },
                                expression: "sortDesc"
                              }
                            },
                            [
                              _c("option", { domProps: { value: false } }, [
                                _vm._v("Asc")
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: true } }, [
                                _vm._v("Desc")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            attrs: {
              "show-empty": "",
              responsive: "",
              items: _vm.items,
              fields: _vm.fields,
              "current-page": _vm.currentPage,
              "per-page": _vm.perPage,
              filter: _vm.filter,
              "sort-by": _vm.sortBy,
              "sort-desc": _vm.sortDesc,
              "sort-direction": _vm.sortDirection
            },
            on: {
              "update:sortBy": function($event) {
                _vm.sortBy = $event
              },
              "update:sort-by": function($event) {
                _vm.sortBy = $event
              },
              "update:sortDesc": function($event) {
                _vm.sortDesc = $event
              },
              "update:sort-desc": function($event) {
                _vm.sortDesc = $event
              },
              filtered: _vm.onFiltered
            },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(row) {
                  return [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "a",
                        { attrs: { href: "/#/nations/edit/" + row.item.id } },
                        [
                          _c("font-awesome-icon", {
                            staticStyle: { color: "green" },
                            attrs: { size: "1x", icon: "edit" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "ml-4",
                          staticStyle: { color: "red" },
                          on: {
                            click: function($event) {
                              return _vm.deleteNation(row.item.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { size: "1x", icon: "trash" }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              },
              {
                key: "cell(updated_at)",
                fn: function(row) {
                  return [
                    _vm._v(_vm._s(new Date(row.item.updated_at).toUTCString()))
                  ]
                }
              },
              {
                key: "row-details",
                fn: function(row) {
                  return [
                    _c("b-card", { staticClass: "no-shadow" }, [
                      _c(
                        "ul",
                        { staticClass: "list-group" },
                        _vm._l(row.item, function(value, key) {
                          return _c(
                            "li",
                            { key: key, staticClass: "list-group-item" },
                            [_vm._v(_vm._s(key) + ": " + _vm._s(value))]
                          )
                        }),
                        0
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "my-1", attrs: { md: "6" } },
                [
                  _c("b-pagination", {
                    staticClass: "my-0",
                    attrs: {
                      "total-rows": _vm.totalRows,
                      "per-page": _vm.perPage
                    },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/PageComponents/Nations/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5716a663& */ "./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PageComponents/Nations/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663&":
/*!**************************************************************************************!*\
  !*** ./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5716a663& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/PageComponents/Nations/Index.vue?vue&type=template&id=5716a663&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5716a663___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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