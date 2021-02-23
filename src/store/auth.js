import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post("api/auth/login", credentials);

      console.log(response.data);
      return dispatch("attempt", response.data.token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("/api/auth/getme");

        commit("SET_USER", response.data);
      } catch (e) {
        console.log(e);
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    signOut({ commit }) {
      // return axios.get("api/auth/user/delete").then(() => {
      //   commit("SET_TOKEN", null);
      //   commit("SET_USER", null);
      // });
      return function() {
        alert("star");
        axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem("token");
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        this.$router.replace({
          name: "Home",
        });
      };
    },
  },
};
