import React, { useState, useRef } from 'react'
import loadModel from './modelLoader'

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

export default function MessageWindow() {
    const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const questionRef = useRef(null)

    const handleAppendText = (message) => {
        setText(prevText => prevText + message + '\n')
    }

    const handleAsk = async () => {
        setIsLoading(true)
        const questionText = questionRef.current.value 
        let response = await loadModel('Qwen/Qwen2.5-Coder-32B-Instruct', questionText)
        console.log(response)
        setIsLoading(false)
        handleAppendText(response)
    }

    return (
        <>
            <div>
                <textarea ref={questionRef} style={text_inputStyle} placeholder="Question"></textarea>
                <textarea style={chat_outputStyle} readOnly value={text}></textarea>
            </div>
            <button onClick={handleAsk} disabled={isLoading}
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
                {isLoading ? (
                    'Loading...'
                ) : (
                    'Ask'
                )}
            </button>
        </>
    )
}