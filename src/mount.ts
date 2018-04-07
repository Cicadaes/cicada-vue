import * as components from './components'
import Cicadavue from './index'

/**
 * Mount component, directive, mixin, filter...
 */
export default class Mount {
  constructor() {
    this.mountComponent()
  }

  public mountComponent() {
    if (components) {
      Object.keys(components).forEach((key) => {
        const Ctor = (components as any)[key]
        const C = new Ctor()
        Cicadavue.Vue.component(C.name, Ctor)
      })
    }
  }
}
