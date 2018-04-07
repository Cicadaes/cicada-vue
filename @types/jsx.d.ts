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