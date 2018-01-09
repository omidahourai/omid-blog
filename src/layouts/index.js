import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import LayoutHeader from '../components/LayoutHeader'
import InstagramBanner from '../components/InstagramBanner'

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
        <LayoutHeader />
        <main className={styles['main-layout']}>
          {this.props.children({
            ...this.props,
            updateLayout: (s) => this.setState(s),
          })}
        </main>
        <div className={styles.bottom}>
          {this.state.instagram ?
            <InstagramBanner feedData={this.state.instagram.data} />
          : ''}
          <footer className={styles.footer}>
            <p>
              Copyright 2018 Omid Ahourai. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

HomeLayout.propTypes = {
  children: PropTypes.func,
}

export default HomeLayout
