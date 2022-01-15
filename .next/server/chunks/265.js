"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 8265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ theme)
});

;// CONCATENATED MODULE: ./src/common/theme/appCreative/colors.js
const colors = {
  transparent: 'transparent',
  labelColor: '#767676',
  lightBorder: '#f1f4f6',
  inactiveField: '#F7F8FB',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
  primaryHover: '#6937F6',
  secondary: '#696871',
  secondaryHover: '#112045',
  yellow: '#FFA740',
  yellowHover: '#F6C416',
  borderColor: '#E5E5E5',
  borderColorTwo: '#EAE9F2',
  borderColorThree: '#EDF0F4',
  black: '#000000',
  white: '#ffffff',
  light: '#FAF7FA',
  gray: '#E4E4E4',
  primary: '#6C247E',
  primaryLight: '#925B9F',
  headingColor: '#0F2137',
  quoteText: '#343D48',
  menu: '#02073E',
  twitterColor: '#6937F6',
  textColor: '#343D48',
  linkColor: '#02073E',
  shadow: 'rgba(38, 78, 118, 0.1)'
};
/* harmony default export */ const appCreative_colors = (colors);
;// CONCATENATED MODULE: ./src/common/theme/appCreative/index.js

const theme = {
  breakpoints: ['480px', '768px', '990px', '1220px'],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Heebo", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: appCreative_colors,
  colorStyles: {
    primary: {
      color: appCreative_colors.primary,
      borderColor: appCreative_colors.primary,
      '&:hover': {
        boxShadow: 'colors.primary 0px 12px 24px -10px'
      }
    },
    secondary: {
      color: appCreative_colors.secondary,
      borderColor: appCreative_colors.secondary,
      '&:hover': {
        color: appCreative_colors.secondaryHover,
        borderColor: appCreative_colors.secondaryHover
      }
    },
    warning: {
      color: appCreative_colors.yellow,
      borderColor: appCreative_colors.yellow,
      '&:hover': {
        color: appCreative_colors.yellowHover,
        borderColor: appCreative_colors.yellowHover
      }
    },
    error: {
      color: appCreative_colors.secondaryHover,
      borderColor: appCreative_colors.secondaryHover,
      '&:hover': {
        color: appCreative_colors.secondary,
        borderColor: appCreative_colors.secondary
      }
    },
    primaryWithBg: {
      color: appCreative_colors.white,
      backgroundColor: appCreative_colors.primary,
      borderColor: appCreative_colors.primary
    },
    secondaryWithBg: {
      color: appCreative_colors.white,
      backgroundColor: appCreative_colors.secondary,
      borderColor: appCreative_colors.secondary,
      '&:hover': {
        backgroundColor: appCreative_colors.secondaryHover,
        borderColor: appCreative_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: appCreative_colors.white,
      backgroundColor: appCreative_colors.yellow,
      borderColor: appCreative_colors.yellow,
      '&:hover': {
        backgroundColor: appCreative_colors.yellowHover,
        borderColor: appCreative_colors.yellowHover
      }
    },
    errorWithBg: {
      color: appCreative_colors.white,
      backgroundColor: appCreative_colors.secondaryHover,
      borderColor: appCreative_colors.secondaryHover,
      '&:hover': {
        backgroundColor: appCreative_colors.secondary,
        borderColor: appCreative_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: appCreative_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${appCreative_colors.transparent}`
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: appCreative_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

/***/ })

};
;