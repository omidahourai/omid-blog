import { createSelector } from 'reselext'

export const getInstagramData = (state, props) => props.instagramData

export const parseInstagramData = createSelector([
  state => state,
  getInstagramData,
], (state, data) => map(data, item => {
  let text = result(item, 'caption.text') || ''
  if (text.length > 50) {
    text = text.slice(0, 50) + '...'
  }
  return {
    text,
    key: item.id,
    url: item.images.standard_resolution.url,
    width: item.images.standard_resolution.width,
    height: item.images.standard_resolution.height,
    likes: item.likes.count,
    link: item.link,
  }
})