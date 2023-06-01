import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachItem
  console.log(id)

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <ul className="blog-item-container">
        <div className="each-blog-container">
          <img className="course-image" src={imageUrl} alt={topic} />
          <div className="blog-content-container">
            <p className="course-name">{topic}</p>
            <h1 className="course-details">{title}</h1>
            <div className="author-container">
              <img className="avatar" src={avatarUrl} alt={title} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </ul>
    </Link>
  )
}
export default BlogItem
