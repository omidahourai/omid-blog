import React from 'react'
import Link from 'gatsby-link'
import { map } from 'lodash'
import moment from 'moment'
import styles from './styles.module.css'

const ArticlePreview = ({ id, slug, title, summary, updatedAt, tags }) => (
    <article>
        <Link to={`/articles/${slug}/`}>
            <h2>{title}</h2>
            <p className="content">{summary}</p>
            <div className={styles.bottom}>
                <div className={styles.published}>
                    <time>{moment(updatedAt).format('MMMM D, YYYY')}</time>
                </div>
                <div className={styles.tags}>
                    {map(tags, (tag, index) => <span key={index}>{tag.name}</span>)}
                </div>
            </div>
        </Link>
    </article>
)

export default ArticlePreview