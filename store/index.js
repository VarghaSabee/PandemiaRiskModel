import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {

  nuxtServerInit({ commit }, { req }) {

    const locale = cookieFromRequest(req, 'locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }

    const a = cookieFromRequest(req, 'settings')
    if (a) {
      commit('settings/SET_SETTINGS', { a })
    }

    const questions = cookieFromRequest(req, 'questions')
    if (questions) {
      commit('questions/SET_QUESTIONS', { questions })
    }

    const alpha = cookieFromRequest(req, 'alpha')
    if (alpha) {
      commit('rating/SET_ALPHA', { alpha })
    }

    const beta = cookieFromRequest(req, 'beta')
    if (beta) {
      commit('rating/SET_BETA', { beta })
    }

    const alphas = cookieFromRequest(req, 'alphas')
    if (alphas) {
      commit('rating/SET_ALPHAS', { alphas })
    }

  },

  nuxtClientInit({ commit }) {

    const locale = Cookies.get('locale')
    if (locale) {
      commit('lang/SET_LOCALE', { locale })
    }

    const settings = cookieFromRequest(req, 'settings')
    if (settings) {
      let a = settings.split("|")
      commit('settings/SET_SETTINGS', { a })
    }

    const questions = cookieFromRequest(req, 'questions')
    if (questions) {
      commit('settings/SET_QUESTIONS', { questions })
    }

    // Rating
    const alpha = cookieFromRequest(req, 'alpha')
    if (alpha) {
      commit('rating/SET_ALPHA', { alpha })
    }

    const beta = cookieFromRequest(req, 'beta')
    if (beta) {
      commit('rating/SET_BETA', { beta })
    }

    const alphas = cookieFromRequest(req, 'alphas')
    if (alphas) {
      commit('rating/SET_ALPHAS', { alphas })
    }

  }
}

