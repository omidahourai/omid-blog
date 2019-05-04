import React from 'react'
import styled from 'styled-components'
import * as Gatsby from 'gatsby'

const Link = styled(Gatsby.Link)`
  text-decoration: none;
  color: #666;
  &:hover {
    color: ${({theme}) => theme.color.primaryHighlight};
  }
`
const Item = styled.li`
  margin: 0 0 0 1rem;
  display: flex;
  align-items: center;
  color: #666;
  &:last-child {
    color: primary;
  }
`
const List = styled.ul`
  height: 48px;
  padding: 0 10px;
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: stretch;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e8e8e8;

  @media only screen and (min-width: 980px) {
    padding: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 150px;
  }
`

const Separator = () => (
  <Item>
    <span>&gt;</span>
  </Item>
)

export default props => (
  <List>
    <Item>
      <Link to="/">{'Home'}</Link>
    </Item>
    <Separator />
    <Item>
      <Link to={props.categoryUrl}>{props.categoryName}</Link>
    </Item>
    <Separator />
    <Item>
      <span>{props.title}</span>
    </Item>
  </List>
)