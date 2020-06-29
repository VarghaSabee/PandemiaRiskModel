import Cookies from "js-cookie";

// state
export const state = () => ({
  a: "0|2|4|7|10|12",
  k: "5/3|4/3|2/3",
  intervals: "10|9|8",
  type: 2,

  table: [
    // S
    // M1
    { regime: 0, calcType: 0, riskType: 4, result: false },
    { regime: 0, calcType: 0, riskType: 3, result: false },
    { regime: 0, calcType: 0, riskType: 2, result: true },
    { regime: 0, calcType: 0, riskType: 1, result: true },
    { regime: 0, calcType: 0, riskType: 0, result: true },
    // M2
    { regime: 0, calcType: 1, riskType: 4, result: false },
    { regime: 0, calcType: 1, riskType: 3, result: false },
    { regime: 0, calcType: 1, riskType: 2, result: true },
    { regime: 0, calcType: 1, riskType: 1, result: true },
    { regime: 0, calcType: 1, riskType: 0, result: true },
    // M3
    { regime: 0, calcType: 2, riskType: 4, result: false },
    { regime: 0, calcType: 2, riskType: 3, result: false },
    { regime: 0, calcType: 2, riskType: 2, result: true },
    { regime: 0, calcType: 2, riskType: 1, result: true },
    { regime: 0, calcType: 2, riskType: 0, result: true },
    // M4
    { regime: 0, calcType: 3, riskType: 4, result: false },
    { regime: 0, calcType: 3, riskType: 3, result: false },
    { regime: 0, calcType: 3, riskType: 2, result: false },
    { regime: 0, calcType: 3, riskType: 1, result: true },
    { regime: 0, calcType: 3, riskType: 0, result: true },
    // E
    // M1
    { regime: 1, calcType: 0, riskType: 4, result: false },
    { regime: 1, calcType: 0, riskType: 3, result: false },
    { regime: 1, calcType: 0, riskType: 2, result: true },
    { regime: 1, calcType: 0, riskType: 1, result: true },
    { regime: 1, calcType: 0, riskType: 0, result: true },
    // M2
    { regime: 1, calcType: 1, riskType: 4, result: false },
    { regime: 1, calcType: 1, riskType: 3, result: false },
    { regime: 1, calcType: 1, riskType: 2, result: true },
    { regime: 1, calcType: 1, riskType: 1, result: true },
    { regime: 1, calcType: 1, riskType: 0, result: true },
    // M3
    { regime: 1, calcType: 2, riskType: 4, result: false },
    { regime: 1, calcType: 2, riskType: 3, result: false },
    { regime: 1, calcType: 2, riskType: 2, result: false },
    { regime: 1, calcType: 2, riskType: 1, result: true },
    { regime: 1, calcType: 2, riskType: 0, result: true },
    // M4
    { regime: 1, calcType: 3, riskType: 4, result: false },
    { regime: 1, calcType: 3, riskType: 3, result: false },
    { regime: 1, calcType: 3, riskType: 2, result: false },
    { regime: 1, calcType: 3, riskType: 1, result: true },
    { regime: 1, calcType: 3, riskType: 0, result: true },
    // D
    // M1
    { regime: 2, calcType: 0, riskType: 4, result: false },
    { regime: 2, calcType: 0, riskType: 3, result: false },
    { regime: 2, calcType: 0, riskType: 2, result: true },
    { regime: 2, calcType: 0, riskType: 1, result: true },
    { regime: 2, calcType: 0, riskType: 0, result: true },
    // M2
    { regime: 2, calcType: 1, riskType: 4, result: false },
    { regime: 2, calcType: 1, riskType: 3, result: false },
    { regime: 2, calcType: 1, riskType: 2, result: false },
    { regime: 2, calcType: 1, riskType: 1, result: true },
    { regime: 2, calcType: 1, riskType: 0, result: true },
    // M3
    { regime: 2, calcType: 2, riskType: 4, result: false },
    { regime: 2, calcType: 2, riskType: 3, result: false },
    { regime: 2, calcType: 2, riskType: 2, result: false },
    { regime: 2, calcType: 2, riskType: 1, result: true },
    { regime: 2, calcType: 2, riskType: 0, result: true },
    // M4
    { regime: 2, calcType: 3, riskType: 4, result: false },
    { regime: 2, calcType: 3, riskType: 3, result: false },
    { regime: 2, calcType: 3, riskType: 2, result: false },
    { regime: 2, calcType: 3, riskType: 1, result: true },
    { regime: 2, calcType: 3, riskType: 0, result: true }
  ]
});

// getters
export const getters = {
  a: state => state.a
};

// mutations
export const mutations = {
  SET_SETTINGS(state, { a }) {
    state.a = a;
  },
  SET_K(state, { k }) {
    state.k = k;
  },
  SET_TYPE(state, { type }) {
    state.type = type;
  },
  SET_INTERVALS(state, { intervals }) {
    state.intervals = intervals;
  }
};

// actions
export const actions = {
  setSettings({ commit }, { a }) {
    commit("SET_SETTINGS", { a });
    Cookies.set("settings", a, { expires: 365 });
  },
  setK({ commit }, { k }) {
    commit("SET_K", { k });
  },
  setIntervals({ commit }, { intervals }) {
    commit("SET_INTERVALS", { intervals });
  },
  setType({ commit }, { type }) {
    commit("SET_TYPE", { type });
  }
};
