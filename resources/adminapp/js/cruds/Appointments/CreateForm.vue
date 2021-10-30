<template>
  <div class="container-fluid">
      <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
              <form @submit.prevent="submitForm">
                  <div class="modal-header">
                      <h5 class="modal-title">Create Appointment for <strong>{{this.appointmentDate.dateStr}}</strong></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" @click="closeAppointmentModal">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div>
                          <div
                              class="form-group bmd-form-group"
                              :class="{
                                  'has-items': entry.title,
                                  'is-focused': activeField == 'title'
                                }"
                          >
                              <label class="bmd-label-floating required">{{
                                      $t('cruds.appointment.fields.title')
                                  }}</label>
                              <input
                                  class="form-control"
                                  type="text"
                                  :value="entry.title"
                                  @input="updateTitle"
                                  @focus="focusField('title')"
                                  @blur="clearFocus"
                                  required
                              />
                          </div>
                          <div
                              class="form-group bmd-form-group"
                              :class="{
                                  'has-items': entry.start_time,
                                  'is-focused': activeField == 'start_time'
                                }"
                          >
                              <label class="bmd-label-floating required">{{ $t('cruds.appointment.fields.start_time') }}</label>
                              <input
                                  class="form-control"
                                  type="time"
                                  step="1800"
                                  :value="entry.start_time"
                                  @input="updateStartTime"
                                  @focus="focusField('start_time')"
                                  @blur="clearFocus"
                                  required
                              />
                          </div>
                          <div
                              class="form-group bmd-form-group"
                              :class="{
                                  'has-items': entry.end_time,
                                  'is-focused': activeField == 'end_time'
                                }"
                          >
                              <label class="bmd-label-floating required">{{
                                      $t('cruds.appointment.fields.end_time')
                                  }}</label>
                              <input
                                  class="form-control is-invalid"
                                  type="time"
                                  step="1800"
                                  :value="entry.end_time"
                                  @input="updateEndTime"
                                  @focus="focusField('end_time')"
                                  @blur="clearFocus"
                                  required
                              />
                              <div v-if="dateErrors !== ''" class="invalid-feedback">
                                  {{dateErrors}}
                              </div>
                          </div>
                          <div
                              class="form-group bmd-form-group"
                              :class="{
                                  'has-items': entry.notes,
                                  'is-focused': activeField == 'notes'
                                }"
                          >
                              <label class="bmd-label-floating">{{
                                      $t('cruds.appointment.fields.notes')
                                  }}</label>
                              <input
                                  class="form-control"
                                  type="text"
                                  :value="entry.notes"
                                  @input="updateNotes"
                                  @focus="focusField('notes')"
                                  @blur="clearFocus"
                              />
                          </div>
                          <div class="form-group">
                              <label>{{
                                      $t('cruds.appointment.fields.attachments')
                                  }}</label>
                              <attachment
                                  :route="getRoute('appointments')"
                                  :collection-name="'appointment_attachments'"
                                  :media="entry.attachments"
                                  :max-file-size="2"
                                  @file-uploaded="insertAttachmentsFile"
                                  @file-removed="removeAttachmentsFile"
                              />
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" @click="closeAppointmentModal">Close</button>
                      <vue-button-spinner
                          class="btn-primary"
                          :status="status"
                          :isLoading="loading"
                          :disabled="loading"
                      >
                          Save Changes
                      </vue-button-spinner>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
    props: ['appointmentDate'],
  data() {
    return {
      status: '',
      activeField: '',
        dateErrors: '',
    }
  },
  computed: {
    ...mapGetters('AppointmentsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
    mounted() {
        this.setDate(this.appointmentDate.dateStr)
    },
    methods: {
    ...mapActions('AppointmentsSingle', [
      'storeData',
      'resetState',
      'setTitle',
      'setDate',
      'setStartTime',
      'setEndTime',
      'setNotes',
      'insertAttachmentsFile',
      'removeAttachmentsFile'
    ]),
    closeAppointmentModal() {
        this.$emit('closeCreateAppointment', true)
    },
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateStartTime(e) {
      this.setStartTime(e.target.value)
    },
    updateEndTime(e) {
      this.setEndTime(e.target.value)
    },
    updateNotes(e) {
      this.setNotes(e.target.value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
            this.dateErrors = '';
            this.$emit('eventCreated')
            this.closeAppointmentModal()
        })
        .catch(error => {
            if(error.response && error.response.status === 423) {
                this.dateErrors = error.response.data.error;
            }
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
