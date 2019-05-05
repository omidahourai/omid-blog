import React from 'react'
import styled from 'styled-components'
import { pick } from 'lodash'
import { FaFacebook, FaTwitter, FaInstagram } from 'icons'
import * as Gatsby from 'gatsby'

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
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`
const Body = styled.div`
  text-align: center;
`
const Header = styled.h4`
  font-family: ${({ theme }) => theme.font.serif};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0.8rem 0;
`
const Link = styled(Gatsby.Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  &:hover {
    color: ${({ theme }) => theme.color.primaryHighlight};
  }
`
const DescriptionText = styled.p`
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  margin: 0;
`

const ShareIcon = styled.a`
  padding: 0.5rem;
  svg > * {
    fill: #bfc1c3;
  }
  &:hover svg > * {
    fill: ${({ theme }) => theme.color.primary};
  }
`
const ShareWrapper = styled.div`
  margin-top: 0.5rem;
`

export default props => (
  <Wrapper>
    <Avatar {...pick(props, ['width', 'height'])}>
      <img alt={''} {...props.authorImageMeta} />
    </Avatar>
    <Body>
      <Header>
        <Link {...props.authorLink}>{props.authorName}</Link>
      </Header>
      <DescriptionText>{props.authorDescription}</DescriptionText>
      <ShareWrapper>
        <ShareIcon
          href="http://facebook.com/Omid-Ahourai-296038887569459/"
          target="_blank"
          rel="external"
          title="Like Omid Ahourai on Facebook"
          alt="Like Omid Ahourai on Facebook"
        >
          <FaFacebook />
        </ShareIcon>
        <ShareIcon
          href="https://twitter.com/omidahourai"
          target="_blank"
          rel="external"
          title="Follow Omid Ahourai on Twitter"
          alt="Follow Omid Ahourai on Twitter"
        >
          <FaTwitter />
        </ShareIcon>
        <ShareIcon
          href="https://instagram.com/omidahourai"
          target="_blank"
          rel="external"
          title="Follow Omid Ahourai on Instagram"
          alt="Follow Omid Ahourai on Instagram"
        >
          <FaInstagram />
        </ShareIcon>
      </ShareWrapper>
    </Body>
  </Wrapper>
)
