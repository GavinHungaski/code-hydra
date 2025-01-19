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
    padding: '10px 20px',
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

export { bannerStyle, navStyle, linkStyle, buttonStyle, buttonHoverStyle, spanStyle }