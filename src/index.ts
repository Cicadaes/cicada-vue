import * as components from './components'
import install from './install'

import './style/main.styl'

export default function(Vue: any, opts = {}) {
  Vue.use({ install }, {
    components,
  })
}
