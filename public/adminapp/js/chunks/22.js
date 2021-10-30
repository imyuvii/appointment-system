(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
/* harmony import */ var _fullcalendar_core_vdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core/vdom */ "./node_modules/@fullcalendar/core/vdom.js");
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _CreateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateForm */ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue");
/* harmony import */ var _ShowAppoinment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShowAppoinment */ "./resources/adminapp/js/cruds/Appointments/ShowAppoinment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // solves problem with Vite







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ShowAppoinment: _ShowAppoinment__WEBPACK_IMPORTED_MODULE_8__["default"],
    CreateForm: _CreateForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"]],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        events: []
      },
      createAppointmentModal: false,
      selectedDate: '',
      showAppointmentModal: false,
      selectedAppointment: null
    };
  },
  mounted: function mounted() {
    this.fetchEvents();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AppointmentsSingle', ['entry', 'loading'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: {
    handleEventClick: function handleEventClick(arg) {
      this.showAppointmentModal = true;
      this.selectedAppointment = arg.event.id;
    },
    fetchEvents: function fetchEvents() {
      var _this = this;

      axios.post('appointments/calendar/events', {
        params: {}
      }).then(function (response) {
        if (response.data.result) {
          _this.calendarOptions.events = response.data.data;
        } else {// TODO error handling
        }
      })["catch"](function (error) {
        message = error.response.data.message || error.message; // TODO error handling
      })["finally"](function () {});
    },
    handleDateClick: function handleDateClick(arg) {
      this.selectedDate = arg;
      this.createAppointmentModal = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['appointmentDate'],
  data: function data() {
    return {
      status: '',
      activeField: '',
      dateErrors: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AppointmentsSingle', ['entry', 'loading'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  mounted: function mounted() {
    this.setDate(this.appointmentDate.dateStr);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AppointmentsSingle', ['storeData', 'resetState', 'setTitle', 'setDate', 'setStartTime', 'setEndTime', 'setNotes', 'insertAttachmentsFile', 'removeAttachmentsFile'])), {}, {
    closeAppointmentModal: function closeAppointmentModal() {
      this.$emit('closeCreateAppointment', true);
    },
    updateTitle: function updateTitle(e) {
      this.setTitle(e.target.value);
    },
    updateStartTime: function updateStartTime(e) {
      this.setStartTime(e.target.value);
    },
    updateEndTime: function updateEndTime(e) {
      this.setEndTime(e.target.value);
    },
    updateNotes: function updateNotes(e) {
      this.setNotes(e.target.value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.storeData().then(function () {
        _this.dateErrors = '';

        _this.$emit('eventCreated');

        _this.closeAppointmentModal();
      })["catch"](function (error) {
        if (error.response && error.response.status === 423) {
          _this.dateErrors = error.response.data.error;
        }

        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-mask {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    transition: opacity .3s ease;\n}\n.modal-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.submitForm.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [_c("back-button")], 1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("bootstrap-alert"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c("full-calendar", {
                          attrs: { options: _vm.calendarOptions },
                        }),
                        _vm._v(" "),
                        _vm.createAppointmentModal
                          ? _c(
                              "div",
                              [
                                _c("transition", { attrs: { name: "modal" } }, [
                                  _c("div", { staticClass: "modal-mask" }, [
                                    _c(
                                      "div",
                                      { staticClass: "modal-wrapper" },
                                      [
                                        _c("create-form", {
                                          attrs: {
                                            appointmentDate: _vm.selectedDate,
                                          },
                                          on: {
                                            closeCreateAppointment: function (
                                              $event
                                            ) {
                                              _vm.createAppointmentModal = false
                                            },
                                            eventCreated: _vm.fetchEvents,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _vm.showAppointmentModal
                  ? _c(
                      "div",
                      [
                        _c("transition", { attrs: { name: "modal" } }, [
                          _c("div", { staticClass: "modal-mask" }, [
                            _c(
                              "div",
                              { staticClass: "modal-wrapper" },
                              [
                                _c("show-appoinment", {
                                  attrs: {
                                    "appointment-id": this.selectedAppointment,
                                  },
                                  on: {
                                    closeAppointmentModal: function ($event) {
                                      _vm.showAppointmentModal = false
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ],
                      1
                    )
                  : _vm._e(),
              ]),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-primary card-header-icon" },
      [
        _c("div", { staticClass: "card-icon" }, [
          _c("i", { staticClass: "material-icons" }, [_vm._v("add")]),
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "card-title" }, [
          _vm._v("\n              Create\n              "),
          _c("strong", [_vm._v("Appointment")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
      [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.submitForm.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Create Appointment for "),
                  _c("strong", [_vm._v(_vm._s(this.appointmentDate.dateStr))]),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { "aria-hidden": "true" },
                        on: { click: _vm.closeAppointmentModal },
                      },
                      [_vm._v("×")]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "form-group bmd-form-group",
                      class: {
                        "has-items": _vm.entry.title,
                        "is-focused": _vm.activeField == "title",
                      },
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "bmd-label-floating required" },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("cruds.appointment.fields.title"))
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.entry.title },
                        on: {
                          input: _vm.updateTitle,
                          focus: function ($event) {
                            return _vm.focusField("title")
                          },
                          blur: _vm.clearFocus,
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group bmd-form-group",
                      class: {
                        "has-items": _vm.entry.start_time,
                        "is-focused": _vm.activeField == "start_time",
                      },
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "bmd-label-floating required" },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("cruds.appointment.fields.start_time")
                            )
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "time", step: "1800", required: "" },
                        domProps: { value: _vm.entry.start_time },
                        on: {
                          input: _vm.updateStartTime,
                          focus: function ($event) {
                            return _vm.focusField("start_time")
                          },
                          blur: _vm.clearFocus,
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group bmd-form-group",
                      class: {
                        "has-items": _vm.entry.end_time,
                        "is-focused": _vm.activeField == "end_time",
                      },
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "bmd-label-floating required" },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("cruds.appointment.fields.end_time"))
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control is-invalid",
                        attrs: { type: "time", step: "1800", required: "" },
                        domProps: { value: _vm.entry.end_time },
                        on: {
                          input: _vm.updateEndTime,
                          focus: function ($event) {
                            return _vm.focusField("end_time")
                          },
                          blur: _vm.clearFocus,
                        },
                      }),
                      _vm._v(" "),
                      _vm.dateErrors !== ""
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.dateErrors) +
                                "\n                            "
                            ),
                          ])
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group bmd-form-group",
                      class: {
                        "has-items": _vm.entry.notes,
                        "is-focused": _vm.activeField == "notes",
                      },
                    },
                    [
                      _c("label", { staticClass: "bmd-label-floating" }, [
                        _vm._v(
                          _vm._s(_vm.$t("cruds.appointment.fields.notes"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.entry.notes },
                        on: {
                          input: _vm.updateNotes,
                          focus: function ($event) {
                            return _vm.focusField("notes")
                          },
                          blur: _vm.clearFocus,
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [
                        _vm._v(
                          _vm._s(_vm.$t("cruds.appointment.fields.attachments"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("attachment", {
                        attrs: {
                          route: _vm.getRoute("appointments"),
                          "collection-name": "appointment_attachments",
                          media: _vm.entry.attachments,
                          "max-file-size": 2,
                        },
                        on: {
                          "file-uploaded": _vm.insertAttachmentsFile,
                          "file-removed": _vm.removeAttachmentsFile,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.closeAppointmentModal },
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vue-button-spinner",
                    {
                      staticClass: "btn-primary",
                      attrs: {
                        status: _vm.status,
                        isLoading: _vm.loading,
                        disabled: _vm.loading,
                      },
                    },
                    [
                      _vm._v(
                        "\n                        Save Changes\n                    "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/Create.vue":
/*!*************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/Create.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=67e21968& */ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Appointments/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968&":
/*!********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=67e21968& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/Create.vue?vue&type=template&id=67e21968&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67e21968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/CreateForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateForm.vue?vue&type=template&id=80742fa0& */ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0&");
/* harmony import */ var _CreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateForm.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Appointments/CreateForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0&":
/*!************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateForm.vue?vue&type=template&id=80742fa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Appointments/CreateForm.vue?vue&type=template&id=80742fa0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateForm_vue_vue_type_template_id_80742fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);