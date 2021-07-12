import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow{' '}
      <a href="https://www.instagram.com/maisha.photography.ig/">@maisha.photography.ig</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Maisha Photography.
        </span>
      </div>
    </footer>
  </div>
)
