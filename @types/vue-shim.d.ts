// /// <reference path="node_modules/@types/jquery/index.d.ts"/>

declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    // $store: any
  }
}

declare module '*.styl' {

}
