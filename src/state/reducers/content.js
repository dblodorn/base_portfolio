import config from './../../config.json'

const content = {
  ...config,
  menu: [
    {
      slug: 'link',
      title: 'link'
    }
  ]
}

export default(state = content) => {
  return state
}
