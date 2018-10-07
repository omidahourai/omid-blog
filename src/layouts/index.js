import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LayoutHeader, InstagramBanner, SiteFooter } from 'components'

import 'react-tippy/dist/tippy.css'
import './index.css'
import styles from './styles.module.css'

class HomeLayout extends Component {
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
          {this.state.instagram ? (
            <InstagramBanner feedData={this.state.instagram.data} />
          ) : (
            ''
          )}
          <SiteFooter />
        </div>
      </div>
    )
  }
}

HomeLayout.propTypes = {
  children: PropTypes.func,
}

export default HomeLayout
