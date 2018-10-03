import {
  homeTemplate,
  defaultTemplate,
  customTemplate
} from './templates'

const pages = [
  {
    id: 0,
    title: 'Super High Homepage',
    slug: 'super-high-homepage',
    is_home: true,
    template: 'home',
    content: {
      ...homeTemplate
    }
  },
  {
    id: 1,
    title: 'Killer Weed',
    slug: 'killer-weed',
    is_home: false,
    template: 'custom',
    content: {
      ...customTemplate
    }
  },
  {
    id: 2,
    title: 'Smoking Big',
    slug: 'smoking-big',
    is_home: false,
    template: 'default',
    content: {
      ...defaultTemplate
    }
  },
  {
    id: 3,
    title: 'Dank Nugs',
    slug: 'dank-nugs',
    is_home: false,
    template: 'default',
    content: {
      ...defaultTemplate
    }
  }
]

export default pages
