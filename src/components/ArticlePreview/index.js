import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const ArticlePreview = ({ id, slug, title, summary }) => (
    <article>
        <Link to={`/articles/${slug}/`}>
            <h2>{title}</h2>
            <p className="content">{summary}</p>
        </Link>
    </article>
)

export default ArticlePreview