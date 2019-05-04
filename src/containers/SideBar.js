import SideBar from 'components/SideBar'
import { compose, withProps } from 'recompose'
import { result } from 'lodash'
import { graphql } from 'gatsby'

export const fragmentCategories = graphql`
  fragment SideBarCategoriesFragment on ContentfulCategoryConnection {
    edges {
        node {
          ...SideBarCategoryFragment
        }
    }
  }
`
export const fragmentAuthor = graphql`
  fragment SideBarAuthorFragment on ContentfulAuthor {
    firstName
    lastName
    shortTitle
    photo { file { url } }
    altPhoto { file { url } }
    shortDescription
    description {
      text: description
    }
    facebookHandle
    twitterHandle
    instagramHandle
    linkedinHandle
    emailAddress
  }
`
const getAuthorThumbnail = author => {
  const width = 250
  const height = 250
  const r = width * 0.5
  const r2x = r * 2
  const width2x = width * 2
  const height2x = height * 2
  const photoUrl = author.altPhoto.file.url
  return {
    width,
    height,
    title: author.shortTitle,
    alt: author.shortTitle,
    src: `${photoUrl}?w=${width}&h=${height}&r=${r}&q=70`,
    srcSet: `${photoUrl}?w=${width2x}&h=${height2x}&r=${r2x}&q=70 2x`,
  }
}

export default compose(
  process.env.DEBUG && withProps(props => console.log('{props} [containers/Sidebar]',props)),
  withProps(({data}) => ({
    author: {...data.author, fullName: `${data.author.firstName} ${data.author.lastName}`},
    categories: data.categories.edges.filter(({node}) => !!node.article).map(({node}) => node),
  })),
  withProps(({pageContext}) => ({
    instagram: pageContext.instagram ? pageContext.instagram.data : [],
  })),  
  withProps(props => ({
    igImageData: props.instagram.map(item => {
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
    }),
    authorThumbnail: getAuthorThumbnail(props.author),
    authorTitle: props.author.shortTitle,
    authorDescription: props.author.shortDescription,
    authorFacebookHandle: 'Omid-Ahourai-296038887569459',
    authorTwitterHandle: 'omidahourai',
    authorInstagramHandle: 'omidahourai',
    authorLinkedinHandle: 'omidahourai',
    authorEmail: 'hello@omid.com',
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/Sidebar]',props)),
)(SideBar)