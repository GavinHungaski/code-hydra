import { Link } from 'react-router-dom'
import * as styles from './BannerCSS'

export default function Banner() {
    return (
        <div style={styles.bannerStyle}>
            <nav style={styles.navStyle}>
                <Link to="/" style={styles.linkStyle}>
                    <button
                        style={styles.buttonStyle}
                        onMouseOver={(e) => {
                            e.target.style.color = styles.buttonHoverStyle.color
                            e.target.style.borderColor = styles.buttonHoverStyle.borderColor
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = styles.buttonStyle.color
                            e.target.style.borderColor = styles.buttonStyle.borderColor
                        }}
                    >
                        <span className="material-icons" style={styles.spanStyle}>home</span>
                    </button>
                </Link>
                <Link to="/chat" style={styles.linkStyle}>
                    <button
                        style={styles.buttonStyle}
                        onMouseOver={(e) => {
                            e.target.style.color = styles.buttonHoverStyle.color
                            e.target.style.borderColor = styles.buttonHoverStyle.borderColor
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = styles.buttonStyle.color
                            e.target.style.borderColor = styles.buttonStyle.borderColor
                        }}
                    >
                        Chat
                    </button>
                </Link>
                <Link to="/models" style={styles.linkStyle}>
                    <button
                        style={styles.buttonStyle}
                        onMouseOver={(e) => {
                            e.target.style.color = styles.buttonHoverStyle.color
                            e.target.style.borderColor = styles.buttonHoverStyle.borderColor
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = styles.buttonStyle.color
                            e.target.style.borderColor = styles.buttonStyle.borderColor
                        }}
                    >
                        Models
                    </button>
                </Link>
                <Link to="/about" style={styles.linkStyle}>
                    <button
                        style={styles.buttonStyle}
                        onMouseOver={(e) => {
                            e.target.style.color = styles.buttonHoverStyle.color
                            e.target.style.borderColor = styles.buttonHoverStyle.borderColor
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = styles.buttonStyle.color
                            e.target.style.borderColor = styles.buttonStyle.borderColor
                        }}
                    >
                        About
                    </button>
                </Link>
            </nav>
        </div>
    )
}