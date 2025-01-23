import React, { useState } from 'react'
import MessageWindow from "../components/MessageWindow/MessageWindow.jsx"
import ModelPicker from "../components/ModelPicker/ModelPicker.jsx"


const divStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
}


export default function ChatPage() {
  const [selectedModel, setSelectedModel] = useState("")

  return (
    <div style={divStyle}>
      <ModelPicker
        selectedModel={selectedModel}
        handleModelChange={(model) => 
          {
            console.log(model)
            setSelectedModel(model)
          }
        }
      />
      <MessageWindow selectedModel={selectedModel} />
    </div>
  )
}