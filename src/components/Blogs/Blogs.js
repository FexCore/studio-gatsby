import React from 'react'
import Menu from '../Shared/Menu'
import JumboBlog from './JumboBlog'
import AllBlogs from './AllBlogs'

const Blogs = () => {
  return (
    <div>
      <Menu/>
      <JumboBlog />
      <AllBlogs />
    </div>
  )
}

export default Blogs
