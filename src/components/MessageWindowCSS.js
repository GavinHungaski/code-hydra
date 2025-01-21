const text_inputStyle = {
    width: '100%',
    height: '50px',
    resize: 'none',
    borderRadius: '15px',
    color: '#ADD8E6',
    fontSize: '16px',
}

const chat_outputStyle = {
    width: '90vw',
    height: '100%',
    resize: 'none',
    overflow: 'auto',
    margin: '20px auto',
    borderRadius: '15px',
    color: '#ADD8E6',
    fontSize: '16px',
}

const divStyle = {  
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90vw',
    margin: '0 auto',
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',
}

const buttonStyle = {
    backgroundColor: '#333',
    height: '50px',
    width: '15%',
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
    borderColor: '#ff6347',
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
    buttonDisabledStyle,
    divStyle,
    container,
}