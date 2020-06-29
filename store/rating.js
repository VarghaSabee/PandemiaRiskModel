export const state = () => ({
  risk: [
    {
      values: [0, 0.2]
    },
    {
      values: [0.2, 0.4]
    },
    {
      values: [0.4, 0.6]
    },
    {
      values: [0.6, 0.8]
    },
    {
      values: [0.8, 1]
    }
  ]
});

// getters
export const getters = {
  risk: state => state.risk
};

// mutations
export const mutations = {
  SET_RISK(state, { risk }) {
    state.risk = risk;
  }
};

// actions
export const actions = {
  setRisk({ commit }, { risk }) {
    commit("SET_RISK", { risk });
  }
};
