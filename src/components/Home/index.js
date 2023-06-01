import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <div data-testid="loader">
      <UserInfo />
      <BlogList />
    </div>
  </div>
)

export default Home
