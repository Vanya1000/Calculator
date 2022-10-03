
const DARK_GRAY = '#333333';
const MEDIUM_GRAY = '#424242';
const LIGHT_GRAY = '#f5f5f5';
const WHITE = '#ffffff';
const BLACK = '#000000';
const BLUE = '#42a5f5';

const font = 'Roboto, sans-serif';

const theme = {

}

export const lightTheme = {
  ...theme,
  headerBgColor: {
    primary: DARK_GRAY,
  },
  headerColor: {
    primary: WHITE,
  },
  background: {
    primary: LIGHT_GRAY,
  }
}

export const darkTheme = {
  ...theme,
  headerBgColor: {
    primary: BLUE,
  },
  headerColor: {
    primary: BLACK,
  },
  background: {
    primary: WHITE,
  }
}

export const coloredTheme = {
  ...theme,
  headerBgColor: {
    primary: BLUE,
  },
  headerColor: {
    primary: BLACK,
  },
  background: {
    primary: WHITE,
  }
}

export default {
  font
}