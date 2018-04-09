import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueI18n)

Vue.config.productionTip = false

const locales = {
  'de': require('../static/i18n/locales.de.json').de,
  'en': require('../static/i18n/locales.en.json').en,
  'fr': require('../static/i18n/locales.fr.json').fr,
  'it': require('../static/i18n/locales.it.json').it
}

const i18n = new VueI18n({
  locale: 'de',
  messages: locales
})

require('./assets/css/main.css')
require('../node_modules/vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
