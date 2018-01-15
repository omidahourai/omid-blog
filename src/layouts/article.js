import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'
import LayoutHeader from 'components/LayoutHeader'
import ArticleAuthor from 'components/ArticleAuthor'
import ArticleNextPrev from 'components/ArticleNextPrev'

import './index.css'
import styles from './article.module.css'

class ArticleLayout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const { author, prev, next } = this.state
    return (
      <div className={styles.site}>
        <LayoutHeader
          category={this.state.category}
          title={this.state.title}>
          <ArticleBreadcrumbs
            category={this.state.categoryName}
            title={this.state.title}/>
        </LayoutHeader>
        <main className={styles['main-layout']}>
          {this.props.children({
            ...this.props,
            updateLayout: (s) => this.setState(s),
          })}
          {author ? (
            <ArticleAuthor
              key={author.id}
              firstName={author.firstName}
              lastName={author.lastName}
              description={author.description.description}
              photoUrl={author.photo.file.url}
            />
          ) : ''}
          {prev || next ? (
            <ArticleNextPrev
              prevData={prev}
              nextData={next}
            />
          ) : ''}

        </main>
      </div>
    )
  }
}

ArticleLayout.propTypes = {
  children: PropTypes.func,
}

export default ArticleLayout
