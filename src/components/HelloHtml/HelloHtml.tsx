import Vue from 'vue'
import { Component } from 'vue-property-decorator'

// [ts] Cannot find module './HelloHtml.styl'
// Fix: add style.d.ts `declare module "*.styl"`
//      or add `HelloHtml.styl.d.ts`
// ---
import * as Style from './HelloHtml.styl'
// import * as Template from './HelloHtml.html'
// console.log(Template)
// @Template
@Component
export default class HelloHtml extends Vue {
  public name = 'hello-html'
  public link = { name: 'Jusi', sex: 'man', age: 28 }
  public render(h: () => void) {
    return (
      <div
        class={`layout-bg ${Style.hello_html__color}`}>
        {this.link.name}--{this.link.sex}--{this.link.age}
      </div>
    )
  }
}
