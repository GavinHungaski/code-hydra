import React, { useState, useRef } from 'react'
import loadModel from './modelLoader'
import * as styles from './MessageWindowCSS'


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
                <textarea ref={questionRef} style={styles.text_inputStyle} placeholder="Question"></textarea>
                <textarea style={styles.chat_outputStyle} readOnly value={text}></textarea>
            </div>
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
                {isLoading ? (
                    'Loading...'
                ) : (
                    'Ask'
                )}
            </button>
        </>
    )
}