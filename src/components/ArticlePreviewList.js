import React from 'react'
import ArticlePreview from 'containers/ArticlePreview'
import styled from 'styled-components'

const Item = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  @media only screen and (min-width: 640px) {
    width: 50%;
    padding: 1rem;
    &:nth-of-type(2n + 2) {
      margin-right: 0;
    }
  }
`
const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`

export default props => (
  <Wrapper>
    {props.articles.map(article => (
      <Item key={article.id}>
        <ArticlePreview {...article}/>
      </Item>
    ))}
  </Wrapper>
)