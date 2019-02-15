import React from 'react'
import { map } from 'lodash'
import * as Gatsby from 'gatsby'
import styled from 'styled-components'
import { lowerFirst } from 'lodash'
import { theme } from 'styles'

const Count = styled.span`
  color: #aaa;
`
const Name = styled.span`
  color: #333;
`
const Item = styled.li`
  margin: 0;
  font-size: 15px;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
  line-height: 2.5rem;
`
const Link = styled(Gatsby.Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  &:hover ${Name} {
    color: primary;
  }
`
const List = styled.ul`
  margin: 0;
  list-style-type: none;
  font-family: ${theme.font.sansSerif};
  letter-spacing: normal;
`

const SideBarCategories = ({ categories }) => (
  <List>
    {map(categories, ({ categoryName, count }, index) => (
      <Item key={index}>
        <Link to={`/${lowerFirst(categoryName)}/`}>
          <Name>{categoryName}</Name>
          <Count>({count})</Count>
        </Link>
      </Item>
    ))}
  </List>
)

export default SideBarCategories
