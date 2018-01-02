import React, { Component } from 'react'
import Link from 'gatsby-link'
import IconButton from '../../common/components/IconButton'
import styles from './styles.module.css'

const ArticleFooter = () => (
  <footer className={styles['footer-article']}>
    <div className={styles['meta-tags']}>
      <Link to="http://infinitythemes.ge/flex-blog/tag/time/" rel="tag">time</Link>
      <Link to="http://infinitythemes.ge/flex-blog/tag/trendy/" rel="tag">trendy</Link>
      <Link to="http://infinitythemes.ge/flex-blog/tag/trip/" rel="tag">trip</Link>
    </div>	
    <div className={styles['meta-share']}>
    <IconButton
        icon="facebook"
        onClick={() => window.open('http://facebook.com/storyfork')}
        title="Like StoryFork on Facebook" />
    <IconButton
        icon="twitter"
        onClick={() => window.open('http://twitter.com/storyforkapp')}
        title="Follow StoryFork on Twitter" />
    <IconButton
        icon="instagram"
        onClick={() => window.open('http://instagram.com/storyfork')}
        title="Follow StoryFork on Instagram" />
      {/*
      <Link to="#" class="infinity-post-like" data-post_id="2217" title="Like">
        <i class="fa fa-heart-o"></i>
        <span class="btn-info">5</span>
        </Link>
      <Link class="facebook-share" target="_blank" to="https://www.facebook.com/sharer/sharer.php?u=http://infinitythemes.ge/flex-blog/creative/life-is-adventure/">
        <i class="fa fa-facebook"></i>
        <span class="btn-info">Facebook</span>
        </Link>
      <Link class="twitter-share" target="_blank" to="https://twitter.com/home?status=Check%20out%20this%20article:%20Life%20Is%20Adventure%20-%20http://infinitythemes.ge/flex-blog/creative/life-is-adventure/">
        <i class="fa fa-twitter"></i>
        <span class="btn-info">Twitter</span>
        </Link>
      <Link class="pinterest-share" target="_blank" to="https://pinterest.com/pin/create/button/?url=http://infinitythemes.ge/flex-blog/creative/life-is-adventure/&amp;media=http://infinitythemes.ge/flex-blog/wp-content/uploads/2017/01/photo-10.jpg&amp;description=Life%20Is%20Adventure">
        <i class="fa fa-pinterest"></i>
        <span class="btn-info">Pinterest</span>
        </Link>
      <Link
        to="http://infinitythemes.ge/flex-blog/creative/life-is-adventure/#comments"
        class="infinity-post-comment">
          <i class="fa fa-comment-o"></i>
          <span class="btn-info">1</span>
      </Link>
      */}
    </div>
    <div class="clear"></div>
  </footer>
)

  export default ArticleFooter