<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.appointment.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
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
                    <label class="bmd-label-floating required">{{
                      $t('cruds.appointment.fields.start_time')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      :value="entry.start_time"
                      @input="updateStartTime"
                      @focus="focusField('start_time')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
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
                    <datetime-picker
                      class="form-control"
                      type="text"
                      :value="entry.end_time"
                      @input="updateEndTime"
                      @focus="focusField('end_time')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
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
                      :model-id="$route.params.id"
                      :max-file-size="2"
                      @file-uploaded="insertAttachmentsFile"
                      @file-removed="removeAttachmentsFile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('AppointmentsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('AppointmentsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setTitle',
      'setStartTime',
      'setEndTime',
      'setNotes',
      'insertAttachmentsFile',
      'removeAttachmentsFile'
    ]),
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
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'appointments.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
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
