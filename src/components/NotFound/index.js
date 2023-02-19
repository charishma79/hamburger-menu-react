// Write your code here
import './index.css'

const NotFound = () => (
  <div className="found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="heading">Lost Your Way?</h1>
    <p className="not-found-text">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
