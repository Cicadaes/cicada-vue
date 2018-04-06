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

// TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists
// https://www.typescriptlang.org/docs/handbook/jsx.html
declare namespace JSX {
  interface IntrinsicElements {
      [elemName: string]: any;
  }
  interface Element {
    render: any;
  }
}

declare module '*.styl' {

}
