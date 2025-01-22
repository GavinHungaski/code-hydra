import { Link } from 'react-router-dom'
import './Banner.css'

export default function Banner() {
    return (
        <div class="banner">
            <nav>
                <Link to="/" class="link">
                    <button class="banner-button">
                        <span class="material-icons">home</span>
                    </button>
                </Link>
                <Link to="/chat">
                    <button class="banner-button">
                        Chat
                    </button>
                </Link>
                <Link to="/models">
                    <button class="banner-button">
                        Models
                    </button>
                </Link>
                <Link to="/about">
                    <button class="banner-button">
                        About
                    </button>
                </Link>
            </nav>
        </div>
    )
}