import MessageWindow from "../components/MessageWindow"

export default function ChatPage() {
  const divStyle = {
    position: 'relative',
    width: '100vw',
  }

  return (
    <div style={divStyle}>
      <div>Current Model: Qwen/Qwen2.5-Coder-32B-Instruct</div>
      <MessageWindow />
    </div>
  )
}