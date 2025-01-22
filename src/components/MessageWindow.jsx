import React, { useState, useRef } from 'react'
import loadModel from './modelLoader'
import * as styles from './MessageWindowCSS'

export default function MessageWindow() {
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const questionRef = useRef(null)

    const appendMessage = (message, color) => {
        setMessages(prevMessages => [...prevMessages, { text: message, color }])
    }

    const handleAsk = async () => {
        setIsLoading(true)
        const questionText = questionRef.current.value 
        questionRef.current.value = ''
        
        const lastColor = messages.length > 0 ? messages[messages.length - 1].color : '#ADD8E6'
        const nextColor = lastColor === '#ADD8E6' ? 'white' : '#ADD8E6'
        
        appendMessage(`You: ${questionText}`, nextColor)
        
        let response = await loadModel('Qwen/Qwen2.5-Coder-32B-Instruct', questionText)
        console.log(response)
        setIsLoading(false)
        
        appendMessage(`Bot: ${response}`, nextColor === '#ADD8E6' ? 'white' : '#ADD8E6')
    }

    return (
        <div style={styles.container}>
            <div style={styles.divStyle}>
                <textarea ref={questionRef} style={styles.text_inputStyle} placeholder="Question"></textarea>
                <button onClick={handleAsk} disabled={isLoading}
                    style={isLoading ? styles.buttonDisabledStyle : styles.buttonStyle}
                    onMouseOver={(e) => {
                        if (!isLoading) {
                            e.target.style.color = styles.buttonHoverStyle.color
                            e.target.style.borderColor = styles.buttonHoverStyle.borderColor
                        }
                    }}
                    onMouseOut={(e) => {
                        if (!isLoading) {
                            e.target.style.color = styles.buttonStyle.color
                            e.target.style.borderColor = styles.buttonStyle.borderColor
                        }
                    }}
                >
                    {isLoading ? ('Loading...') : ('Ask')}
                </button>
            </div>
            <div style={styles.chat_outputStyle}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ color: msg.color }}>
                        {msg.text}
                    </div>
                ))}
            </div>
        </div>
    )
}