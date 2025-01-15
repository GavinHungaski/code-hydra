import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    const bannerStyle = {
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: '25px 0px 20px 0px',
    }
    const navStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        padding: '0 20px'
    }
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '18px',
        transition: 'color 0.3s ease'
    }
    const linkHoverStyle = {
        color: '#ff6347'
    }

    return (
        <div style={bannerStyle}>
            <nav style={navStyle}>
                <Link
                    to="/"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                    onMouseOut={(e) => e.target.style.color = linkStyle.color}
                >
                    <span class="material-icons">
                        home
                    </span>
                </Link>
                <Link to="/chat" style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                    onMouseOut={(e) => e.target.style.color = linkStyle.color}
                >
                    Chat
                </Link>
                <Link to="/models" style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                    onMouseOut={(e) => e.target.style.color = linkStyle.color}
                >
                    Models
                </Link>
                <Link to="/about" style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                    onMouseOut={(e) => e.target.style.color = linkStyle.color}
                >
                    About
                </Link>
            </nav>
        </div>
    )
}