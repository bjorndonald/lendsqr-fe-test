import React from 'react'
import { useNavigate } from 'react-router-dom';
import './right-side.style.scss'

function RightSide() {
  const navigate = useNavigate()
  const login = () => {
    window.location.assign('/dashboard')
  }
  return (
    <div id='right-side'>
      <div className="body">
        <div className="d-flex top flex-column">
          <h2>Welcome!</h2>
          <h4>Enter details to login.</h4>
        </div>

        <form>
          <div className="form-group">
            <input type="text" placeholder='Email' />
          </div>
          <div className="form-group">
            <div className="form-password">
              <input type="text" placeholder='Password' />
              <a>SHOW</a>
            </div>
          </div>
          <a>FORGOT PASSWORD?</a>

          <button onClick={(e) => {
            e.preventDefault()
            login()
          }} className='d-flex align-items-center justify-content-center'>
            LOG IN
          </button>
        </form>
      </div>

    </div>
  )
}

export default RightSide