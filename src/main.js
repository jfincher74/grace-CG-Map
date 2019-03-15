import Vue from 'vue'
import App from './Main.vue'
import cgMap from './components/cgMap.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
  el     : '#cgMap', 
  components: { cgMap: cgMap },    
  render : h => h('cgMap') // now we pass the name, so Vue will know it
}).$mount('#cgMap')