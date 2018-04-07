/* ///<reference path="../types/vue-shim.d.ts" /> */

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Cicadavue from '../src'

Vue.use(Cicadavue)

@Component({

})
class App extends Vue {
  public render(h: () => void) {
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
