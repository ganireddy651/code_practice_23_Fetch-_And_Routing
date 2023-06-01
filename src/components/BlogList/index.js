import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogItem: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogItem.map(eachItem => (
            <BlogItem eachItem={eachItem} key={eachItem.id} />
          ))
        )}
        )
      </div>
    )
  }
}

export default BlogList
