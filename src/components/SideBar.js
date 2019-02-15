import React from 'react'
import { map, result } from 'lodash'
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

const parseImgMeta = ({ photoUrl, title }) => {
  const width = 250
  const height = 250
  const r = width * 0.5
  const r2x = r * 2
  const width2x = width * 2
  const height2x = height * 2
  return {
    title,
    width,
    height,
    alt: title,
    src: `${photoUrl}?w=${width}&h=${height}&r=${r}&q=70`,
    srcSet: `${photoUrl}?w=${width2x}&h=${height2x}&r=${r2x}&q=70 2x`,
  }
}

export const SideBar = ({
  fullName,
  shortTitle,
  shortDescription,
  facebookHandle,
  twitterHandle,
  instagramHandle,
  linkedinHandle,
  emailAddress,
  instagramData,
  categories,
  altPhoto: {
    file: { photoUrl },
  },
}) => {
  // TODO: CREATE AUTHOR PAGE
  // const authorLink = {
  //   // to: `/author/${ (firstName + lastName).toLowerCase() }/`,
  //   to: '#',
  //   title: `Articles by ${fullName}`,
  //   rel: `author`,
  // }

  const igImageData = map(instagramData, item => {
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
  })

  return (
    <Wrapper>
      <Profile>
        <Image {...parseImgMeta({ photoUrl, title: shortTitle })} />
        <h6>{shortTitle}</h6>
        <p>{shortDescription}</p>
      </Profile>
      <Section>
        <Header>Follow Me</Header>
        <SocialLinksAuthor
          facebookHandle={`Omid-Ahourai-296038887569459`}
          twitterHandle={`omidahourai`}
          instagramHandle={`omidahourai`}
          linkedinHandle={`omidahourai`}
          emailAddress={`hello@omid.com`}
          fullName={fullName}
        />
      </Section>
      <Section>
        <Header>Instagram</Header>
        <SideBarInstagram data={igImageData} />
      </Section>
      <Section>
        <Header>Categories</Header>
        <SideBarCategories categories={categories} />
      </Section>
    </Wrapper>
  )
}

export default SideBar
