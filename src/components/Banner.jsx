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
        padding: '15px 0px',
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
    const buttonStyle = {
        backgroundColor: 'transparent',
        height: '50px',
        border: '0.5px solid white',
        borderRadius: '15px',
        padding: '10px 15px',
        color: 'white',
        borderColor: 'white',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    }
    const buttonHoverStyle = {
        color: '#ff6347',
        borderColor: '#ff6347'
    }
    const spanStyle = {
        pointerEvents: 'none'
    }

    return (
        <div style={bannerStyle}>
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = buttonHoverStyle.color
                        e.target.style.borderColor = buttonHoverStyle.borderColor
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = buttonStyle.color
                        e.target.style.borderColor = buttonStyle.borderColor
                    }}
                >
                    <span className="material-icons" style={spanStyle}>home</span>
                </button>
            </Link>
            <Link to="/chat" style={linkStyle}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = buttonHoverStyle.color
                        e.target.style.borderColor = buttonHoverStyle.borderColor
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = buttonStyle.color
                        e.target.style.borderColor = buttonStyle.borderColor
                    }}
                >
                    Chat
                </button>
            </Link>
            <Link to="/models" style={linkStyle}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = buttonHoverStyle.color
                        e.target.style.borderColor = buttonHoverStyle.borderColor
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = buttonStyle.color
                        e.target.style.borderColor = buttonStyle.borderColor
                    }}
                >
                    Models
                </button>
            </Link>
            <Link to="/about" style={linkStyle}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = buttonHoverStyle.color
                        e.target.style.borderColor = buttonHoverStyle.borderColor
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = buttonStyle.color
                        e.target.style.borderColor = buttonStyle.borderColor
                    }}
                >
                    About
                </button>
            </Link>
        </nav>
    </div>
    )
}