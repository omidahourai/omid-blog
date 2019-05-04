import Article from 'components/Article'
import { lowerFirst } from 'lodash'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const queryPageArticle = graphql`
  fragment PageArticleFragment on ContentfulArticle {
    id
    title
    slug
    content { childMarkdownRemark { html } }
    category { name }
    tags { name }
    summary { summary }
    hero { file { url } }
    author { firstName lastName }
  }
`

export const query = graphql`
  query($id: String!, $nextId: String, $prevId: String) {
    article: contentfulArticle(id: { eq: $id }) {
      ...PageArticleFragment
      ...ArticleHeaderFragment
      ...ArticleFooterFragment
    }
    next: contentfulArticle(id: { eq: $nextId }) {
      ...ArticleNextPrevFieldsFragment
    }
    prev: contentfulArticle(id: { eq: $prevId }) {
      ...ArticleNextPrevFieldsFragment
    }
    author: contentfulAuthor(
      firstName: { eq: "Omid" }
      lastName: { eq: "Ahourai" }
    ) {
      ...SideBarAuthorFragment
    }
    categories: allContentfulCategory {
      ...SideBarCategoriesFragment
    }
  }
`

const parseHeroImgMeta = hero => {
  const dim = 1000
  const dim2x = dim * 2
  return {
    alt: hero.title,
    title: hero.title,
    src: `${hero.file.url}?w=${dim}&h=${dim}&q=70`,
    srcSet: `${hero.file.url}?w=${dim2x}&h=${dim2x}&q=70 2x`,
  }
}

export default compose(
  withProps(props => ({
    instagram: props.pageContext.instagram ? props.pageContext.instagram.data : [], 
  })),
  withProps(({data}) => ({
    ...data,
  })),
  withProps(p => console.log('cat art',p)),
  withProps(({article, ...props}) => ({
    heroImageMeta: parseHeroImgMeta(article.hero),
    authorName: selectors.getAuthorName(props.data),
    articleUrl: selectors.getArticleUrl(props.data),
    theme: article.variables && article.variables.find(({key, value}) => key === 'theme' && value === 'dark')
      ? { // dark
        bg: '#333',
        color: '#FFF',
      } : { // light (default)
        bg: '#FFF',
        color: '#454545',
      },
  })),
  withProps(({article, category, ...props}) => ({
    pageKeywords: selectors.getArticleTags(props.data).map(({ name }) => name).join(', '),
    pageDescription: selectors.getArticleSummary(props.data),
    pageArticleUrl: `http://www.omid.com/${props.articleUrl}`,
    pageHeroUrl: selectors.getArticleHero(props.data),
    articleTitle: selectors.getArticleTitle(props.data),
    categoryName: selectors.getCategoryName(props.data),
    categoryUrl: selectors.getCategoryUrl(props.data),
  })),
  withProps(props => ({
    pageTitle: `Omid Ahourai's Blog | ${props.articleTitle}`,
    pageMeta: [
      { name: 'description', content: `${props.pageDescription}` },
      { name: 'keywords', content: props.pageKeywords },
      { property: 'og:site_name', content: `Blog - Omid Ahourai` },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: props.articleTitle },
      { property: 'og:description', content: props.pageDescription },
      {
        property: 'og:url',
        content: props.pageArticleUrl,
      },
      {
        property: 'og:image',
        content: props.pageHeroUrl,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: props.articleTitle },
      { name: 'twitter:description', content: props.pageDescription },
      { name: 'twitter:url', content: props.pageArticleUrl },
      { name: 'twitter:image', content: props.pageHeroUrl },
      { name: 'twitter:label1', content: 'Written by' },
      { name: 'twitter:data1', content: `${props.authorName}` },
      { name: 'twitter:label2', content: 'Filed under' },
      { name: 'twitter:data2', content: props.categoryName },
    ],
  })),
  process.env.DEBUG && withProps(props => {console.log('{props} [containers/Article]',props)}),
)(Article)