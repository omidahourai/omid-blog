import React from 'react'
import Link from 'gatsby-link'

const ArticlePreview = ({id, slug, title}) => (
    <div>
        <Link to={`/articles/${slug}/`} key={id}>
            {title}
        </Link>
    </div>
)

export default ArticlePreview