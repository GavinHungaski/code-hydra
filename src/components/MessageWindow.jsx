import React, { useState, useRef } from 'react'
import loadModel from './modelLoader'
import './MessageWindow.css'

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
const buttonDisabledStyle = {
    backgroundColor: '#555',
    color: '#888',
    borderColor: '#888',
    cursor: 'not-allowed'
}

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
        
        let response = ""
        if (questionText == "") {
            response = "Please ask a question!"
        } else {
            response = await loadModel('Qwen/Qwen2.5-Coder-32B-Instruct', questionText)
        }
        
        console.log(response)
        setIsLoading(false)
        
        appendMessage(`Bot: ${response}`, nextColor === '#ADD8E6' ? 'white' : '#ADD8E6')
    }

    return (
        <div class="container">
            <div class="input-container">
                <textarea ref={questionRef} placeholder="Question"></textarea>
                <button onClick={handleAsk} disabled={isLoading} style={isLoading ? buttonDisabledStyle : buttonStyle}>
                    {isLoading ? ('Loading...') : ('Ask')}
                </button>
            </div>
            <div class="chat-output">
                {messages.map((msg, index) => (
                    <div key={index} style={{ color: msg.color }}>
                        {msg.text}
                    </div>
                ))}
            </div>
        </div>
    )
}