<template>
    <div class="container-fluid">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Appointment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="closeModal">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <div class="table">
                                    <table width="100%">
                                        <tbody>
<!--                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.id') }}
                                            </td>
                                            <td>
                                                {{ entry.id }}
                                            </td>
                                        </tr>-->
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.title') }}
                                            </td>
                                            <td>
                                                {{ entry.title }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.start_time') }}
                                            </td>
                                            <td>
                                                {{ entry.start_time }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.end_time') }}
                                            </td>
                                            <td>
                                                {{ entry.end_time }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.notes') }}
                                            </td>
                                            <td>
                                                {{ entry.notes }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary">
                                                {{ $t('cruds.appointment.fields.attachments') }}
                                            </td>
                                            <td>
                                                <datatable-attachments :row="entry" :field="'attachments'"></datatable-attachments>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableAttachments from '@components/Datatables/DatatableAttachments'

export default {
    components: {
        DatatableAttachments
    },
    props: ['appointmentId'],
    data() {
        return {}
    },
    beforeDestroy() {
        this.resetState()
    },
    computed: {
        ...mapGetters('AppointmentsSingle', ['entry'])
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler() {
                this.resetState()
                this.fetchShowData(this.appointmentId)
            }
        }
    },
    methods: {
        ...mapActions('AppointmentsSingle', ['fetchShowData', 'resetState']),
        closeModal() {
            this.$emit('closeAppointmentModal', true)
        }
    }
}
</script>
