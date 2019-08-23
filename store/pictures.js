import axios from 'axios';


const state = () => ({
  all: '',
  loading: true,
});

const page = Math.floor(Math.random() * 300);

const actions = {
  get: async ({commit, dispatch}) => {
    return axios.get(`https://api.unsplash.com/photos/?client_id=c30a02c9df167f275d03fca6766b9542b302ca4b0cbc30fbad5dfddd65d99ccf&page=${page}&per_page=150`)
    .then(response => {
      console.log(response.data);
      commit('LOADING', false)
      commit('PICTURES', response.data)
    }).catch((err) => console.log(err, '===>>>'))
  },

  search: async ({commit}, query) => {
    axios.get(
    `https://api.unsplash.com/search/photos/?client_id=c30a02c9df167f275d03fca6766b9542b302ca4b0cbc30fbad5dfddd65d99ccf&page=${page}&per_page=150&query=${query}`
    ).then(response => {
       console.log(response.data.results,'search')
       commit('LOADING', false)
       commit('PICTURES', response.data.results)
    }).catch((err) => console.log(err, '===>>>'))
  }
};

const mutations = {
  PICTURES (state, payload) {
    state.all = payload
    state.loading = false
  },
  LOADING (state, payload) {
    state.loading = payload
  }
}

export default {
  state,
  actions,
  mutations
}