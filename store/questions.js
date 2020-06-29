import Cookies from 'js-cookie'

// state
export const state = () => ({
    questions: '0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8-0.1|0.3|0.6|0.8'
})

// getters
export const getters = {
    questions: state => state.questions
}

// mutations
export const mutations = {
    SET_QUESTIONS(state, { questions }) {
        state.questions = questions
    }
}

// actions
export const actions = {
    setQuestions({ commit }, { questions }) {
        commit('SET_QUESTIONS', { questions })

        Cookies.set('questions', questions, { expires: 365 })
    }
}
