// export default class Installer {
//   public static isInstalled: any
//   public static install(Vue: any, options = {}): void {
//     if (Installer.isInstalled) {
//       return
//     }
//     Installer.isInstalled = true
//   }
// }
let isInstalled: boolean
export default function install(Vue: any, opts: any) {
  if (isInstalled) {
    return
  }
  isInstalled = true

  if (opts.components) {
    Object.keys(opts.components).forEach((key) => {
      const Ctor = opts.components[key]
      const C = new Ctor()
      Vue.component(C.name, Ctor)
    })
  }
}
