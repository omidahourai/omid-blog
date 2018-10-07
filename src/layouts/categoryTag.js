import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LayoutHeader, SiteFooter } from 'components'

import 'react-tippy/dist/tippy.css'
import './index.css'
import styles from './categoryTag.module.css'

class CategoryTagLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.site}>
        <LayoutHeader />
        <main className={styles.mainLayout}>
          {this.props.children({
            ...this.props,
            updateLayout: s => this.setState(s),
          })}
        </main>
        <div className={styles.bottom}>
          <SiteFooter />
        </div>
      </div>
    )
  }
}

CategoryTagLayout.propTypes = {
  children: PropTypes.func,
}

export default CategoryTagLayout
