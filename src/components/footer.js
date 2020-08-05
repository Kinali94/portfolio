import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className="site-footer clearfix">
            <div className="footer-social">
                <ul className="footer-social-links">
                    <li>
                        <Link to="/" target="_blank">Twitter</Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-copyrights">
                <p>© 2020 All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer