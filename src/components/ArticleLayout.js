import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'common/styles'

import {
  ArticleBreadcrumbs,
  LayoutHeader,
  ArticleAuthor,
  ArticleNextPrev,
  SiteFooter,
  SideBar,
} from 'components'

// const Wrapper = styled.div`
//   grid-area: main;
//   overflow: hidden;
//   margin: 0 auto;
//   max-width: 835px;
// `

class ArticleLayout extends Component {
  constructor() {
    super()
    this.state = { sidebarPosition: 'relative' }
    // this.handleScroll = this.handleScroll.bind(this)
  }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  // handleScroll() {}
  // setSidebarPosition(sidebarPosition) {
  //   // this.setState({sidebarPosition})
  // }
  render() {
    const { author, prev, next } = this.state
    return <React.Fragment />
  }
}

ArticleLayout.propTypes = {
  children: PropTypes.object,
}

export default ArticleLayout
