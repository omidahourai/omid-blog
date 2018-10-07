import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ArticleBreadcrumbs,
  LayoutHeader,
  ArticleAuthor,
  ArticleNextPrev,
  SiteFooter,
  SideBar,
} from 'components'

import './index.css'
import styles from './article.module.css'

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
      <div className={styles.site} ref="root">
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
        <div className={styles.wrapper}>
          <main
            className={styles.main}
            style={
              {
                // marginRight: isSidebarStatic ? 345 : 0
              }
            }
          >
            <div className={styles.content}>
              {this.props.children({
                ...this.props,
                updateLayout: s => this.setState(s),
              })}
            </div>
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
          <div className={`sidebar ${styles.sidebar}`}>
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
          </div>
        </div>
        {/*<Waypoint
          onEnter={this.setSidebarPosition('absolute')}
        onLeave={this.setSidebarPosition(true)}>*/}
        <div className={styles.bottom}>
          <SiteFooter />
        </div>
        {/*</Waypoint>*/}
      </div>
    )
  }
}

ArticleLayout.propTypes = {
  children: PropTypes.func,
}

export default ArticleLayout
