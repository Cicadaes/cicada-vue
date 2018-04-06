/* ///<reference path="../types/vue-shim.d.ts" /> */

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import App from './App.vue'
import HelloHtml from './component/HelloHtml'

import './style/main.styl'

@Component({
  components: {
    HelloHtml
  }
})
class App extends Vue {
  render (h: Function) {
    return (
      <div>
        Hello TSX
        <hello-html />
      </div>
    )
  }
}

const vm = new App()
vm.$mount('#app')
