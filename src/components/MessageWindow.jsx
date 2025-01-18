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

export default function MessageWindow() {
    const [text, setText] = useState('')
    const questionRef = useRef(null)

    const handleAppendText = (message) => {
        setText(prevText => prevText + message + '\n')
    }

    const handleAsk = async () => {
        const questionText = questionRef.current.value 
        let response = await loadModel('Qwen/Qwen2.5-Coder-32B-Instruct', questionText)
        console.log(response)
        handleAppendText(response)
    }

    return (
        <>
            <div>
                <textarea ref={questionRef} style={text_inputStyle} placeholder="Question"></textarea>
                <textarea style={chat_outputStyle} readOnly value={text}></textarea>
            </div>
            <AskButton onClick={() => handleAsk()} />
        </>
    )
}

function AskButton({ onClick }) {
    return (
        <button onClick={onClick}>Ask</button>
    )
}