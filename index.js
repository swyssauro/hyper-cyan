'use strict';
const foregroundColor = '#8F93A2';
const backgroundColor = '#1D2540';
const selectionColor = 'rgba(58, 117, 196, 0.3)';
const black = '#000000';
const red = '#FF5B45';
const green = '#3AFFA1';
const yellow = '#FFE999';
const blue = '#3A75C4';
const magenta = '#7D81FF';
const cyan = '#87D3F8';
const white = '#E9E9E9';
const lightBlack = 'rgba(255, 255, 255, 0.2)';
const lightWhite = '#FFFFFF';
const darkBlue = '#1D284B';
const lightBlue = '#131622';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    selectionColor,
    borderColor: darkBlue,
    cursorColor: foregroundColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: lightWhite,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
    css: `
      ${config.css}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        color: ${foregroundColor};
      }
      .header_windowHeaderWithBorder {
        border-color: ${backgroundColor} !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_tab.tab_active {
        background: ${backgroundColor};
        color: ${foregroundColor};
        transition: all 140ms ease;
      }
      .tab_tab:not(.tab_active) {
        background: ${darkBlue};
        color: ${lightBlack};
      }
      .tab_tab:not(.tab_active):hover {
        background: ${lightBlue};
        color: ${foregroundColor};
        transition: background 140ms ease;
      }
      .tab_icon {
        width: 15px;
        height: 15px;
      }
      .tab_shape {
        width: 7px;
        height: 7px;
      }
      .splitpane_divider {
        background-color: ${darkBlue} !important;
      }
      `
  });
};