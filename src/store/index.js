import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: {},
    snake_joke: "",
    loud_joke: "",
  },

  mutations: {
    update_joke(state, payload) {
      state.joke = payload;
    },
    joke_snaked(state, payload) {
      state.snake_joke = payload;
    },

    joke_loud(state, payload) {
      state.loud_joke = payload;
    }

  },
  actions: {

    get_joke(store) {
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
      })
        .then((response) => {
          store.commit("update_joke", response.data);
        })
        .catch((error) => {
          error;
          this.$emit(
            "button_clicked",
            "Sorry, there was an error with the API"
          );
        });
    },

    snake_joke(store) {
      var snaked = store.state.joke.joke.split(' ').join('_');
      // this.store.commit("joke_snaked", snaked);
      console.log(snaked)
      store.commit('joke_snaked', snaked)
    },

    loud_joke(store) {
      var loud = store.state.joke.joke.toUpperCase();
      console.log(loud)
      store.commit('joke_loud', loud)
    },
  },
  modules: {

  },

});