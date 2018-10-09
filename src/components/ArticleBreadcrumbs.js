import React from 'react'
import { lowerFirst } from 'lodash'
import * as Gatsby from 'gatsby'
import styled from 'styled-components'

const Link = styled(Gatsby.Link)`
  text-decoration: none;
  color: #666;
  &:hover {
    color: primaryHighlight;
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
`

const Separator = () => (
  <Item>
    <span>&gt;</span>
  </Item>
)

export const ArticleBreadcrumbs = ({ categoryName, title }) => (
  <List>
    <Item>
      <Link to="/">Home</Link>
    </Item>
    <Separator />
    <Item>
      <Link to={`/${lowerFirst(categoryName)}/`}>{categoryName}</Link>
    </Item>
    <Separator />
    <Item>
      <span>{title}</span>
    </Item>
  </List>
)

export default ArticleBreadcrumbs
