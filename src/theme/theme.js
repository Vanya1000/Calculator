
const DARK_GRAY = '#333333';
const MEDIUM_GRAY = '#bdbdbd';
const LIGHT_GRAY = '#f5f5f5';
const WHITE = '#ffffff';
const BLACK = '#000000';
const CORAL_LIGHT = '#ff7961';
const CORAL_MEDIUM = '#f44336';
const AQUAMARINE = '#00897b';

const font = 'Roboto, sans-serif';

const theme = {

}

export const lightTheme = {
  ...theme,
  palette: {
    background: {
      primary: LIGHT_GRAY,
      secondary: DARK_GRAY,
    },
    text: {
      primary: BLACK,
      secondary: WHITE,
    },
    button: {
      primary: MEDIUM_GRAY,
    }
  }
}

export const darkTheme = {
  ...theme,
  palette: {
    background: {
      primary: DARK_GRAY,
      secondary: BLACK,
    },
    text: {
      primary: WHITE,
      secondary: WHITE,
    },
    button: {
      primary: MEDIUM_GRAY,
    }
  }
}

export const coloredTheme = {
  ...theme,
  palette: {
    background: {
      primary: LIGHT_GRAY,
      secondary: AQUAMARINE,
    },
    text: {
      primary: CORAL_LIGHT,
      secondary: WHITE,
    },
    button: {
      primary: CORAL_LIGHT,
    }
  }
}

export default {
  font
}