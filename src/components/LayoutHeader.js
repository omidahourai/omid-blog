import React from 'react'
import Theme from 'styled-theming'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Cursive = styled.span`
  font-family: 'Dancing Script', cursive;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 30px;
`

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  outline: 0;
  color: #FFF;
  text-align: right;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
  }
`
const HeaderGrid = styled.header`
  transition: padding-bottom 0.5s ease-out;
  grid-area: header;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 12px;
  @media only screen and (min-width: 640px) {
    padding-bottom: 3rem;
  }
  ${({ theme }) => `
    color: ${theme.color};
    background-color: ${theme.bg};
  `}
`
const headerStyles = Theme('mode', {
  light: css`
    background-color: #333;
  `,
  dark: css`
    background-color: #111;
  `
})

const Wrapper = styled.div`
  ${headerStyles}
  height: 48px;
  /* background-color: #272727; */
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
  display: flex;
  flex-direction: row;

  & a {
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    font-family: ${({ theme }) => theme.font.sansSerif};
    font-stretch: 100%;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default props => (
  <HeaderGrid>
    <Wrapper>
      <TopBar>
        <Link to="/">{'Blog | Omid Ahourai'}</Link>
        <Cursive>{'Emotional rants, poetry, experiences'}</Cursive>
        <Toggle onClick={props.onToggleTheme}>{props.theme.mode}</Toggle>
      </TopBar>
    </Wrapper>
    {props.children}
  </HeaderGrid>
)
