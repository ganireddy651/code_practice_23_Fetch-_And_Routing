import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {uniqueBlogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)

    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
    }
    this.setState({uniqueBlogItem: updatedData, isLoading: false})
  }

  render() {
    const {uniqueBlogItem, isLoading} = this.state
    const {title, imageUrl, content, avatarUrl, author} = uniqueBlogItem
    return (
      <div className="blog-item-details-container">
        {/* <div data-testid="loader"> */}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="heading">{title}</h1>
            <div className="author-container">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img className="course-image-1" src={imageUrl} alt={title} />
            <p className="para">{content}</p>
          </div>
        )}
        {/* </div> */}
      </div>
    )
  }
}

export default BlogItemDetails
