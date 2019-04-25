import React from 'react'
import styled from 'styled-components'
import { theme } from 'styles'
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
    color: #333;
    margin: 0;
  }
  & a {
    &:hover h4 {
      color: ${theme.color.primary};
    }
  }
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 2rem;
  & p {
    font-family: ${theme.font.sansSerif};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  & h4 {
    vertical-align: baseline;
    font-family: ${theme.font.sansSerif};
    font-size: 1rem;
    line-height: initial;
    letter-spacing: 0.05rem;
    font-weight: 400;
  }
`
const NoDataBlock = styled.div`
  ${({ direction }) => (direction === c.NEXT ? nextLink : prevLink)};
`

const parseImgMeta = ({ hero, title }) => {
  hero = hero || { file: {} }
  const width = hero.width || 75
  const height = hero.height || 75
  const width2x = width * 2
  const height2x = height * 2
  return {
    title,
    alt: hero.title,
    src: `${hero.file.url}?w=${width}&h=${height}&q=70`,
    srcSet: `${hero.file.url}?w=${width2x}&h=${height2x}&q=70 2x`,
  }
}

const NextPrev = ({
  id,
  title,
  hero,
  direction,
}) => (
  <Link direction={direction} to={`/article/${id}/`} title={title} alt={title}>
    <Thumbnail>
      <img alt={''} {...parseImgMeta({ hero, title })} />
    </Thumbnail>
    <TextWrapper>
      <p>{direction === c.NEXT ? 'NEWER >' : '< OLDER'}</p>
      <h4>{title}</h4>
    </TextWrapper>
  </Link>
)

export default props => (
  <Wrapper>
    {props.prevData ? (
      <NextPrev direction={c.PREVIOUS} {...props.prevData} />
    ) : (
      <NoDataBlock direction={c.PREVIOUS} />
    )}
    {props.nextData ? (
      <NextPrev direction={c.NEXT} {...props.nextData} />
    ) : (
      <NoDataBlock direction={c.NEXT} />
    )}
  </Wrapper>
)