import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { theme } from 'styles'
import SocialLinksAuthor from 'components/SocialLinksAuthor'
import SideBarInstagram from 'components/SideBarInstagram'
import SideBarCategories from 'containers/SideBarCategories'

const Image = styled.img`
  margin: 0 auto 13px auto;
  display: block;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`
const Header = styled.h3`
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.font.serif};
  text-transform: uppercase;
  &:before {
    right: 100%;
    margin-right: 15px;
  }
  &:after {
    left: 100%;
    margin-left: 15px;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 1000px;
    height: 1px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #e8e8e8;
  }
`
const Section = styled.section`
  position: relative;
  z-index: 0;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 2rem;
  clear: both;
  overflow: hidden;
`
const Profile = styled.section`
  & h6 {
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
    font-family: ${props => props.theme.font.serif};
    text-transform: uppercase;
  }
  & p {
    font-family: ${props => props.theme.font.sansSerif};
    font-size: 0.85rem;
    line-height: 1.35rem;
    text-align: center;
  }
`
const Wrapper = styled.aside`
  padding-left: 15px;
  width: 312px;
`
// TODO: CREATE AUTHOR PAGE
// const authorLink = {
//   // to: `/author/${ (firstName + lastName).toLowerCase() }/`,
//   to: '#',
//   title: `Articles by ${fullName}`,
//   rel: `author`,
// }
export default props => (
  <Wrapper>
    <Profile theme={theme}>
      <Image {...props.authorThumbnail} />
      <h6>{props.authorTitle}</h6>
      <p>{props.authorDescription}</p>
    </Profile>
    <Section>
      <Header theme={theme}>
        {'Follow Me'}
      </Header>
      <SocialLinksAuthor
        facebookHandle={props.authorFacebookHandle}
        twitterHandle={props.authorTwitterHandle}
        instagramHandle={props.authorInstagramHandle}
        linkedinHandle={props.authorLinkedinHandle}
        emailAddress={props.authorEmail}
        fullName={props.authorName}
      />
    </Section>
    <Section>
      <Header theme={theme}>
        {'Instagram'}
      </Header>
      <SideBarInstagram data={props.igImageData} />
    </Section>
    <Section>
      <Header theme={theme}>
        {'Categories'}
      </Header>
      <SideBarCategories categories={props.categories} />
    </Section>
  </Wrapper>
)