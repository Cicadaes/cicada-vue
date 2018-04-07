export default class Theme {
  public static THEME_DEFAULTS = {
    primary: '#1976D2',   // blue.darken2
    secondary: '#424242', // grey.darken3
    // tslint:disable-next-line:object-literal-sort-keys
    accent: '#82B1FF',    // blue.accent1
    error: '#FF5252',     // red.accent2
    info: '#2196F3',      // blue.base
    success: '#4CAF50',   // green.base
    warning: '#FFC107',    // amber.base
  }

  constructor(theme = {}) {
    return Object.assign({}, Theme.THEME_DEFAULTS, theme)
  }
}
