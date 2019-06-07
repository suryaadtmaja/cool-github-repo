export const state = () => ({
  repos: []
});

export const actions = {
  async GET_REPOS({ commit }) {
    try {
      const response = await this.$axios.get("users/filsuck/repos");
      commit("SET_REPOS", response);
    } catch (error) {
      throw error;
    }
  }
};

export const mutations = {
  SET_REPOS(state, data) {
    state.repos = data;
  }
};

export const getters = {
  GET_REPOS(state) {
    return state.repos;
  }
};
