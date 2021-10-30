<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              Appointments
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                  add
              </i>
                Add Appointment
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from '@components/Datatables/AppointmentDatatableActions'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatableAttachments from '@components/Datatables/DatatableAttachments'
import ShowAppoinment from "./ShowAppoinment";

export default {
  components: {
      ShowAppoinment,
    GlobalSearch,
    HeaderSettings
  },
    mounted() {
        this.$eventHub.$on('view-appointment-popup', this.viewAppointment)
    },
    data() {
    return {
        showAppointmentModal: false,
      columns: [
        {
          title: 'cruds.appointment.fields.id',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 100px;'
        },
        {
          title: 'cruds.appointment.fields.title',
          field: 'title',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.appointment.fields.start_time',
          field: 'start_time',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.appointment.fields.end_time',
          field: 'end_time',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.appointment.fields.attachments',
          field: 'attachments',
          thComp: TranslatedHeader,
          tdComp: DatatableAttachments
        },
        {
          title: 'global.actions',
          thComp: TranslatedHeader,
          tdComp: DatatableActions,
          visible: true,
          thClass: 'text-right',
          tdClass: 'text-right td-actions',
          colStyle: 'width: 150px;'
        }
      ],
      query: { sort: 'id', order: 'desc', limit: 100, s: '' },
      xprops: {
        module: 'AppointmentsIndex',
        route: 'appointments',
        permission_prefix: 'appointment_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('AppointmentsIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
      },
      deep: true
    }
  },
  methods: {
    viewAppointment(id) {
        console.info("View popup")
        this.showAppointmentModal = true
        this.selectedAppointment = id
    },
    ...mapActions('AppointmentsIndex', [
      'fetchIndexData',
      'setQuery',
      'resetState'
    ])
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
