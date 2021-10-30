function initialState() {
  return {
    entry: {
      id: null,
      title: '',
        date: '',
      start_time: '',
      end_time: '',
      notes: '',
      attachments: [],
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    loading: false
  }
}

const route = 'appointments'

const getters = {
  entry: state => state.entry,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setTitle({ commit }, value) {
    commit('setTitle', value)
  },
    setDate({ commit }, value) {
        commit('setDate', value)
    },
  setStartTime({ commit }, value) {
    commit('setStartTime', value)
  },
  setEndTime({ commit }, value) {
    commit('setEndTime', value)
  },
  setNotes({ commit }, value) {
    commit('setNotes', value)
  },
  insertAttachmentsFile({ commit }, file) {
    commit('insertAttachmentsFile', file)
  },
  removeAttachmentsFile({ commit }, file) {
    commit('removeAttachmentsFile', file)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setTitle(state, value) {
    state.entry.title = value
  },
    setDate(state, value) {
        state.entry.date = value
    },
  setStartTime(state, value) {
    state.entry.start_time = value
  },
  setEndTime(state, value) {
    state.entry.end_time = value
  },
  setNotes(state, value) {
    state.entry.notes = value
  },
  insertAttachmentsFile(state, file) {
    state.entry.attachments.push(file)
  },
  removeAttachmentsFile(state, file) {
    state.entry.attachments = state.entry.attachments.filter(item => {
      return item.id !== file.id
    })
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
