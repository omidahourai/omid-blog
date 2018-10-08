import React, { Component } from 'react'
import * as Gatsby from 'gatsby'
import styled from 'styled-components'
import { theme } from 'common/styles'
import { FaFacebook, FaTwitter, FaInstagram } from 'common/icons'

const Wrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 2rem;
`
const Avatar = styled.div`
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
    width: ${({ width }) => `${width}px`}
    height: ${({ height }) => `${height}px`}
`
const Body = styled.div`
  text-align: center;
`
const Header = styled.h4`
  font-family: ${theme.font.serif};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0.8rem 0;
`
const Link = styled(Gatsby.Link)`
  text-decoration: none;
  color: ${theme.color.primary};
  &:hover {
    color: ${theme.color.primaryHighlight};
  }
`
const DescriptionText = styled.p`
  font-family: ${theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  margin: 0;
`
const ShareIcons = styled.div`
  margin-top: 0.5rem;
  & a {
    padding: 0.5rem;
    &:hover svg > * {
      fill: ${theme.color.primary};
    }
  }
`

export const ArticleAuthor = ({
  firstName,
  lastName,
  description,
  photoUrl,
}) => {
  const photoDim = 110
  const photoDim2x = photoDim * 2
  const fullName = `${firstName} ${lastName}`
  const authorLink = {
    // TODO: CREATE AUTHOR PAGE
    // to: `/author/${ (firstName + lastName).toLowerCase() }/`,
    to: '#',
    title: `Articles by ${fullName}`,
    rel: `author`,
  }
  return (
    <Wrapper>
      <Avatar width={photoDim} height={photoDim}>
        <img
          alt={fullName}
          src={`${photoUrl}?w=${photoDim}&h=${photoDim}&q=70`}
          srcSet={`${photoUrl}?w=${photoDim2x}&h=${photoDim2x}&q=70 2x`}
          height={photoDim}
          width={photoDim}
        />
      </Avatar>
      <Body>
        <Header>
          <Link {...authorLink}>{fullName}</Link>
        </Header>
        <DescriptionText>{description}</DescriptionText>
        <ShareIcons>
          <a
            href="http://facebook.com/Omid-Ahourai-296038887569459/"
            target="_blank"
            rel="external"
            title="Like Omid Ahourai on Facebook"
            alt="Like Omid Ahourai on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/omidahourai"
            target="_blank"
            rel="external"
            title="Follow Omid Ahourai on Twitter"
            alt="Follow Omid Ahourai on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/omidahourai"
            target="_blank"
            rel="external"
            title="Follow Omid Ahourai on Instagram"
            alt="Follow Omid Ahourai on Instagram"
          >
            <FaInstagram />
          </a>
        </ShareIcons>
      </Body>
    </Wrapper>
  )
}

export default ArticleAuthor
