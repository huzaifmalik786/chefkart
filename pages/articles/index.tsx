import React from 'react'
import Article from '../../components/articles/Article'
import CommentBox from '../../components/articles/CommentBox'
import Layout from '../../components/layouts/Layout'
import CommentInput from '../../components/articles/CommentInput'
import AuthorBox from '../../components/articles/AuthorBox'
import Recomended from '../../components/blogs/Recomended'

const index = () => {
  return (
    <Layout>
        <Article />
        <CommentInput />
        <CommentBox />
        <AuthorBox />
        <Recomended />
    </Layout>
  )
}

export default index