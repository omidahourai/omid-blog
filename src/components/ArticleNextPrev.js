import React from 'react'
import styled from 'styled-components'
import * as Gatsby from 'gatsby'

const c = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
}

const TextWrapper = styled.div`
  flex-grow: 1;
`
const Thumbnail = styled.div`
  min-width: 75px;
  width: 75px;
  height: 75px;
  & img {
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`
const nextLink = `
text-align: right;
${Thumbnail} {
    order: 1;
}
${TextWrapper} {
    margin-right: 1rem;
}
`
const prevLink = `
${TextWrapper} {
    margin-left: 1rem;
}
`
const Link = styled(Gatsby.Link)`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  text-decoration: none;
  ${({ direction }) => (direction === c.NEXT ? nextLink : prevLink)};
  &:hover {
    text-decoration: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  & p,
  & h4 {
    margin: 0;
  }
  & a {
    &:hover h4 {
      color: ${({ theme }) => theme.color.primary};
    }
  }
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 2rem;
  & p {
    font-family: ${({ theme }) => theme.font.sansSerif};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  & h4 {
    vertical-align: baseline;
    font-family: ${({ theme }) => theme.font.sansSerif};
    font-size: 1rem;
    line-height: initial;
    letter-spacing: 0.05rem;
    font-weight: 400;
  }
`
const NoDataBlock = styled.div`
  ${({ direction }) => (direction === c.NEXT ? nextLink : prevLink)};
`

const NextPrev = props => (
  <Link direction={props.direction} {...props.link}>
    <Thumbnail>
      <img alt={props.thumbImageMeta.alt} {...props.thumbImageMeta} />
    </Thumbnail>
    <TextWrapper>
      <p>{props.direction === c.NEXT ? 'NEWER >' : '< OLDER'}</p>
      <h4>{props.title}</h4>
    </TextWrapper>
  </Link>
)

export default props => (
  <Wrapper>
    {props.prevArticle ? (
      <NextPrev direction={c.PREVIOUS} {...props.prevArticle} />
    ) : (
      <NoDataBlock direction={c.PREVIOUS} />
    )}
    {props.nextArticle ? (
      <NextPrev direction={c.NEXT} {...props.nextArticle} />
    ) : (
      <NoDataBlock direction={c.NEXT} />
    )}
  </Wrapper>
)
