import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {theme} from 'common/styles'

import {
  ArticleBreadcrumbs,
  LayoutHeader,
  ArticleAuthor,
  ArticleNextPrev,
  SiteFooter,
  SideBar,
} from 'components'

const Wrapper = styled.div`
grid-area: main;
overflow: hidden;
margin: 0 auto;
max-width: 835px;
`

const ContentWrapper = styled.div`
grid-area: main;
overflow: hidden;
margin: 0 auto;
max-width: 835px;
`
const FooterWrapper = styled.div`
grid-area: footer;
display: flex;
flex-direction: column;
`
const SideBarWrapper = styled.div`
display: none;
`


class ArticleLayout extends Component {
  constructor() {
    super()
    this.state = { sidebarPosition: 'relative' }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll() {}
  setSidebarPosition(sidebarPosition) {
    // this.setState({sidebarPosition})
  }
  render() {
    const { author, prev, next } = this.state
    return (
      <Wrapper>
        {/*<Waypoint
          onEnter={this.setSidebarPosition('relative')}
        onLeave={this.setSidebarPosition('fixed')}>*/}
        <LayoutHeader category={this.state.category} title={this.state.title}>
          <ArticleBreadcrumbs
            categoryName={this.state.categoryName}
            title={this.state.title}
          />
        </LayoutHeader>
        {/*</Waypoint>*/}
        <ContentWrapper>
          <main
            // className={styles.main}
            style={
              {
                // marginRight: isSidebarStatic ? 345 : 0
              }
            }
          >
            <div
                // className={styles.content}
                >{this.props.children}</div>
            {author ? (
              <ArticleAuthor
                key={author.id}
                firstName={author.firstName}
                lastName={author.lastName}
                description={author.description.text}
                photoUrl={author.photo.file.photoUrl}
              />
            ) : (
              ''
            )}
            {prev || next ? (
              <ArticleNextPrev prevData={prev} nextData={next} />
            ) : (
              ''
            )}
          </main>
          <SideBarWrapper>
            {author ? (
              <SideBar
                style={
                  {
                    // position: sidebarPosition ? 'fixed' : 'absolute',
                    // top:
                  }
                }
                isStatic={this.state.isSidebarFixed}
                instagramData={this.state.instagramData}
                categories={this.state.categories}
                {...author}
              />
            ) : (
              ''
            )}
          </SideBarWrapper>
        </ContentWrapper>
        {/*<Waypoint
          onEnter={this.setSidebarPosition('absolute')}
        onLeave={this.setSidebarPosition(true)}>*/}
        <FooterWrapper>
          <SiteFooter />
        </FooterWrapper>
        {/*</Waypoint>*/}
      </Wrapper>
    )
  }
}

ArticleLayout.propTypes = {
  children: PropTypes.func,
}

export default ArticleLayout
