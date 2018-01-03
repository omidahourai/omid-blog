import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LayoutHeader from '../components/LayoutHeader'

import './index.css'
import styles from './styles.module.css'

class HomeLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.site}>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <LayoutHeader />
        <main className={styles['main-layout']}>
          {this.props.children({
            ...this.props,
            updateLayout: (s) => this.setState(s),
          })}
        </main>
        <footer className={styles['footer-layout']}>
          Footer
        </footer>
      </div>
    )
  }
}

HomeLayout.propTypes = {
  children: PropTypes.func,
}

export default HomeLayout
