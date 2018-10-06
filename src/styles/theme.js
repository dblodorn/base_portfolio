import { store } from './../state/store'
import { heights, spacing, fonts, colors, shared, breakpoints } from './theme.json'
import defaults from './defaults.json'

// Theme
export const themeA = {
  header_color: colors.white,
  body_font: fonts.body_copy,
  pad_wrapper: colors.yellow,
  display_font: fonts.display_font_a,
  body_copy_font: fonts.body_copy_font_a,
  default_link: {
    color: colors.black,
    hover: colors.green,
    font: fonts.display_font_a,
    weight: 600,
    size: {
      mobile: fonts.med,
      desktop: fonts.med_medium
    },
    case: 'uppercase'
  }
}

export const themeB = {
  header_color: colors.green,
  pad_wrapper: colors.black,
  display_font: fonts.display_font_b,
  body_copy_font: fonts.body_copy_font_b,
  default_link: {
    color: colors.yellow,
    hover: colors.black,
    font: fonts.authentic,
    weight: 300,
    size: {
      mobile: fonts.sm,
      desktop: fonts.sm_medium
    },
    case: 'lowercase'
  }
}
