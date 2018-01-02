import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'
import ArticleHeader from '../components/ArticleHeader'
import ArticleAuthor from '../components/ArticleAuthor'

import './index.css'
import styles from './article.module.css'

// const DefaultHeader = () => (
//   <header>
//     <div className={styles['header-top']}>
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}>
//           {`</>`}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

class TemplateWrapper extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div id={styles.site}>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <ArticleHeader category={this.state.category} />
        <main className={styles['main-layout']}>
          {this.props.children({
            ...this.props,
            updateLayout: (s) => this.setState(s),
          })}
          {map(this.state.authors, author => (
            <ArticleAuthor
              key={author.id}
              firstName={author.firstName}
              lastName={author.lastName}
              description={author.description.description}
              photoUrl={author.photo.file.url}
            />
          ))}
        </main>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
