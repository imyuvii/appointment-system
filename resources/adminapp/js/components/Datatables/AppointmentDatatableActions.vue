<template>
  <div class="dt-action-container">
    <a class="btn btn-just-icon btn-round btn-link text-azure" @click="showAppointmentModal(row.id)">
      <i class="material-icons">remove_red_eye</i>
    </a>
    <a
      href="#"
      class="btn btn-just-icon btn-round btn-link text-rose"
      v-if="$can(xprops.permission_prefix + 'delete')"
      @click.prevent="destroyData(row.id)"
      type="button"
    >
      <i class="material-icons">delete</i>
    </a>
  </div>
</template>

<script>
export default {
  props: ['row', 'xprops'],
  data() {
    return {
      // Code...
    }
  },
  created() {
    // Code...
  },
  methods: {
      showAppointmentModal(id) {
          this.$eventHub.$emit('view-appointment-popup', id)
      },
    destroyData(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/destroyData', id)
            .then(result => {
              this.$eventHub.$emit('delete-success')
            })
        }
      })
    }
  }
}
</script>
