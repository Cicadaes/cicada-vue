import Mount from './mount'

import './style/main.styl'

// export default (Vue: any, opts: any) => {
//   Vue.use({ install }, {
//     components,
//   })
// }

export default class Cicadavue {
  public static version = '1.0.0'
  public static isInstalled: boolean
  public static Vue: any
  public static optons: any

  public static install(Vue: any, opts: any) {
    Vue.use({ install: () => {
      if (Cicadavue.isInstalled) {
        return
      }
      Cicadavue.Vue = Vue
      Cicadavue.optons = opts
      Cicadavue.isInstalled = true

      // tslint:disable-next-line:no-unused-expression
      new Mount()
    }}, {
      opts,
    })
  }
}
