// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
import { i18n } from '@/i18n'
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    selectedLanguage: i18n.locale,
    sky: '',
    grass: ''
 },
 getters: {
     getLanguage(state) {
        return state.selectedLanguage
     },
     getSky(state) {
        return state.sky
     },
     getGrass(state) {
        return state.grass
     }
    
 },
 mutations: {
    changeLanguage (state, payload) {
        state.selectedLanguage = payload
    },
    changeData (state, payload) {
        state.sky = payload.sky
        state.grass = payload.grass
    }
 },
 actions: {
    changeLanguage (context, payload) {
        context.commit("changeLanguage", payload)
    },
    changeData (context, payload) {
        context.commit("changeData", payload)
    }
 }
});