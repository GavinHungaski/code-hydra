const text_inputStyle = {
    width: '90vw',
    height: '5vh',
    resize: 'none',
    marginTop: '20px',
}
const chat_outputStyle = {
    width: '90vw',
    height: '30vh',
    resize: 'none',
    overflow: 'auto',
    marginTop: '20px',
}
const buttonStyle = {
    backgroundColor: '#333',
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
const buttonDisabledStyle = {
    backgroundColor: '#555',
    color: '#888',
    borderColor: '#888',
    cursor: 'not-allowed'
}

export {
    text_inputStyle,
    chat_outputStyle,
    buttonStyle,
    buttonHoverStyle,
    buttonDisabledStyle
}