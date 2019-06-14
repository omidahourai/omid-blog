import PageArticle from 'components/PageArticle'
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
      ...ArticleBreadcrumbsFragment
    }
    nextArticle: contentfulArticle(id: { eq: $nextId }) {
      ...ArticleNextPrevFieldsFragment
    }
    prevArticle: contentfulArticle(id: { eq: $prevId }) {
      ...ArticleNextPrevFieldsFragment
    }
    author: contentfulAuthor(
      firstName: { eq: "Omid" }
      lastName: { eq: "Ahourai" }
    ) {
      ...SideBarAuthorFragment
      ...ArticleAuthorFragment
    }
    categories: allContentfulCategory {
      ...SideBarCategoriesFragment
    }
  }
`

export default compose(
  withProps(({ data }) => ({
    pageKeywords: selectors.getArticleTagNames(data).join(', '),
    pageDescription: selectors.getArticleSummary(data),
    pageArticleUrl: selectors.getArticleFullUrl(data),
    pageHeroUrl: selectors.getArticleHero(data),
    articleId: selectors.getArticleId(data),
    articleTitle: selectors.getArticleTitle(data),
    articleHero: selectors.getArticleHeroImageMeta(data),
    articleContentHtml: selectors.getArticleContentHtml(data),
    authorName: selectors.getAuthorName(data),
    categoryName: selectors.getCategoryName(data),
    categoryUrl: selectors.getCategoryUrl(data),
    mode: selectors.getArticleMode(data),
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
      { property: 'og:url', content: props.pageArticleUrl },
      { property: 'og:image', content: props.pageHeroUrl },
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
  // process.env.DEBUG && withProps(props => console.log('{props} [containers/PageArticle]', props))
)(PageArticle)
