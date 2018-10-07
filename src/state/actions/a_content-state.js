const setPage = (slug) => {
  return {
    type: 'SET_PAGE',
    slug
  }
}

const setVideoPlaying = (url) => {
  return {
    type: 'VIDEO_PLAYING',
    url
  }
}

export {
  setPage,
  setVideoPlaying
}