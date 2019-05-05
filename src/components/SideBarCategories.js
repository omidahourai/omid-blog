import React from 'react'
import styled from 'styled-components'
import { lowerFirst } from 'lodash'
import { Link as GatsbyLink } from 'gatsby'

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
const Link = styled(GatsbyLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  &:hover ${Name} {
    color: ${({theme}) => theme.color.primary};
  }
`
const List = styled.ul`
  margin: 0;
  list-style-type: none;
  font-family: ${({theme}) => theme.font.sansSerif};
  letter-spacing: normal;
`

export default props => (
  <List>
    {props.categories.map(({ name, article }, index) => (
      <Item key={index}>
        <Link to={`/${lowerFirst(name)}/`}>
          <Name>{name}</Name>
          <Count>({article.length})</Count>
        </Link>
      </Item>
    ))}
  </List>
)
