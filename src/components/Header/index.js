// Write your code here
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffffff',
  height: 100,
  padding: 25,
}

const Header = () => (
  <div className="bg-container">
    <div className="menu-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid=" hamburgerIconButton"
            type="button"
            className="hamburger-btn"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        position="top-left"
        overlayStyle={overlayStyles}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="list-container">
              <li>
                <Link to="/" className="item-link" onClick={() => close()}>
                  <AiFillHome className="home-icon" />
                  <p className="text">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="item-link" onClick={() => close()}>
                  <BsInfoCircleFill className="home-icon" />
                  <p className="text">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
