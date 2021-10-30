<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                Create
                <strong>Appointment</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                    <full-calendar :options="calendarOptions" />
                    <div v-if="createAppointmentModal">
                        <transition name="modal">
                            <div class="modal-mask">
                                <div class="modal-wrapper">
                                    <create-form :appointmentDate="selectedDate" @closeCreateAppointment="createAppointmentModal = false" @eventCreated="fetchEvents"/>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
                <div v-if="showAppointmentModal">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <show-appoinment @closeAppointmentModal="showAppointmentModal = false" :appointment-id="this.selectedAppointment"/>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Attachment from '@components/Attachments/Attachment'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CreateForm from "./CreateForm";
import ShowAppoinment from "./ShowAppoinment";

export default {
  components: {
      ShowAppoinment,
      CreateForm,
    Attachment, FullCalendar
  },
  data() {
    return {
      status: '',
      activeField: '',
        calendarOptions: {
            plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin],
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick,
            eventClick: this.handleEventClick,
            events: []
        },
        createAppointmentModal: false,
        selectedDate: '',
        showAppointmentModal: false,
        selectedAppointment: null
    }
  },
    mounted() {
        this.fetchEvents();
    },
    computed: {
    ...mapGetters('AppointmentsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
      handleEventClick: function (arg) {
          this.showAppointmentModal = true
          this.selectedAppointment = arg.event.id
      },
      fetchEvents: function () {
          axios
              .post('appointments/calendar/events', { params: {} })
              .then(response => {
                  if(response.data.result) {
                      this.calendarOptions.events = response.data.data;
                  } else {
                    // TODO error handling
                  }
              })
              .catch(error => {
                  message = error.response.data.message || error.message
                  // TODO error handling
              })
              .finally(() => {
              })
      },
      handleDateClick: function(arg) {
          this.selectedDate = arg;
          this.createAppointmentModal = true
      },
  }
}
</script>
<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
</style>
