import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { theme } from 'common/styles'

const HeaderGrid = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 3rem;
`
const Wrapper = styled.div`
  height: 48px;
  background-color: #272727;
  padding: 0 10px;

  @media only screen and (min-width: 980px) {
    padding: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 150px;
  }
`
const TopBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  & a {
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    font-family: ${theme.font.sansSerif};
    font-stretch: 100%;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const LayoutHeader = ({ children }) => (
  <HeaderGrid>
    <Wrapper>
      <TopBar>
        <Link to="/">Blog | Omid Ahourai</Link>
      </TopBar>
    </Wrapper>
    {children}
  </HeaderGrid>
)

export default LayoutHeader
