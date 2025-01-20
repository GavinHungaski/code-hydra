import MessageWindow from "../components/MessageWindow"
import ModelPicker from "../components/ModelPicker"

export default function ChatPage() {
  const divStyle = {
    position: 'relative',
    width: '100vw',
  }

  return (
    <div style={divStyle}>
      <ModelPicker />
      <MessageWindow />
    </div>
  )
}