import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import ArticleBreadcrumbs from '../components/ArticleBreadcrumbs'
import LayoutHeader from '../components/LayoutHeader'
import ArticleAuthor from '../components/ArticleAuthor'

import './index.css'
import styles from './article.module.css'

class ArticleLayout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const { author } = this.state
    return (
      <div id={styles.site}>
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
        </main>
      </div>
    )
  }
}

ArticleLayout.propTypes = {
  children: PropTypes.func,
}

export default ArticleLayout
