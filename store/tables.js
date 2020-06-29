// state
export const state = () => ({
  tables: [
    {
      data: [
        {
          T: 3,
          v: 10,
          q: 0.55
        },
        {
          T: 2,
          v: 9,
          q: 0.75
        },
        {
          T: 4,
          v: 9,
          q: 0.83
        },
        {
          T: 3,
          v: 10,
          q: 0.69
        },
        {
          T: 2,
          v: 9,
          q: 0.78
        },
        {
          T: 3,
          v: 7,
          q: 0.82
        },
        {
          T: 1,
          v: 8,
          q: 0.94
        },
        {
          T: 4,
          v: 7,
          q: 0.89
        },
        {
          T: 2,
          v: 7,
          q: 0.55
        },
        {
          T: 3,
          v: 8,
          q: 0.86
        }
      ]
    },
    {
      data: [
        {
          T: 2,
          v: 10,
          q: 0.72
        },
        {
          T: 4,
          v: 9,
          q: 0.85
        },
        {
          T: 3,
          v: 9,
          q: 0.91
        },
        {
          T: 2,
          v: 8,
          q: 0.86
        },
        {
          T: 2,
          v: 7,
          q: 0.78
        },
        {
          T: 3,
          v: 8,
          q: 0.77
        },
        {
          T: 4,
          v: 10,
          q: 0.94
        },
        {
          T: 2,
          v: 9,
          q: 0.96
        },
        {
          T: 3,
          v: 9,
          q: 0.29
        },
        {
          T: 1,
          v: 6,
          q: 0.78
        }
      ]
    },
    {
      data: [
        {
          T: 3,
          v: 10,
          q: 0.93
        },
        {
          T: 2,
          v: 8,
          q: 0.93
        },
        {
          T: 4,
          v: 7,
          q: 0.97
        },
        {
          T: 3,
          v: 7,
          q: 0.75
        },
        {
          T: 4,
          v: 6,
          q: 0.82
        },
        {
          T: 2,
          v: 9,
          q: 0.92
        },
        {
          T: 1,
          v: 7,
          q: 0.37
        }
      ]
    }
  ]
});

// getters
export const getters = {
  tables: state => state.tables
};

// mutations
export const mutations = {
  SET_TABLES(state, { tables }) {
    state.tables = tables;
  }
};

// actions
export const actions = {
  setTables({ commit }, { tables }) {
    commit("SET_TABLES", { tables });
  }
};
