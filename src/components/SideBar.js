import React from 'react'
import styled from 'styled-components'
import { theme } from 'styles'
import {
  SocialLinksAuthor,
  SideBarInstagram,
  SideBarCategories,
} from 'components'

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
  font-family: ${theme.font.serif};
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
    font-family: ${theme.font.serif};
    text-transform: uppercase;
  }
  & p {
    font-family: ${theme.font.sansSerif};
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
    <Profile>
      <Image {...props.authorThumbnail} />
      <h6>{props.author.shortTitle}</h6>
      <p>{props.author.shortDescription}</p>
    </Profile>
    <Section>
      <Header>Follow Me</Header>
      <SocialLinksAuthor
        facebookHandle={`Omid-Ahourai-296038887569459`}
        twitterHandle={`omidahourai`}
        instagramHandle={`omidahourai`}
        linkedinHandle={`omidahourai`}
        emailAddress={`hello@omid.com`}
        fullName={props.author.fullName}
      />
    </Section>
    <Section>
      <Header>Instagram</Header>
      <SideBarInstagram data={props.igImageData} />
    </Section>
    <Section>
      <Header>Categories</Header>
      <SideBarCategories categories={props.categories} />
    </Section>
  </Wrapper>
)

export const query = graphql`
  fragment SideBarFragment on ContentfulCategoryConnection {
    edges {
        node {
          ...SideBarCategoryFragment
        }
    }
  }
`