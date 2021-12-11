import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: "",
    snake_joke: "",
    loud_joke: "",
  },

  mutations: {
    // Updating our joke variable to be what the api sends back
    update_joke(state, payload) {
      state.joke = payload;
    },
    // Take the joke and turn it LOUD
    get_loud_joke_mutation(state, payload) {
      state.loud_joke = payload.toUpperCase();
    },
    // Take the joke and turn it into snake case
    snake_joke(state, payload) {
      state.snake_joke = payload.split(' ').join('_');
    },

  },
  actions: {

    get_joke(store) {
      // API call that gets a joke to display on the page, or errors
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
      })
        .then((response) => {
          store.commit("update_joke", response.data.joke);
        })
        .catch((error) => {
          error;
          this.$emit(
            "button_clicked",
            "Sorry, there was an error with the API"
          );
        });
    },




  },
  modules: {

  },

});