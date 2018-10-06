import { store } from './../state/store'
import { heights, spacing, fonts, colors, shared, breakpoints } from './theme.json'

let apiStyles = false

const apiStyleHandler = (apiData) => {
  let apiListen = apiData
  if (apiListen != false) {
    apiStyles = apiData.options
  }
}

// NEED TO UNSUBSCRIBE SOMEHOW
store.subscribe(() => 
  apiStyleHandler(store.getState().api_data)
)

// Theme
export const themeA = {
  header_color: colors.white,
  body_font: fonts.body_copy,
  pad_wrapper: colors.yellow,
  default_link: {
    color: colors.black,
    hover: colors.green,
    font: fonts.sans_expanded,
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
