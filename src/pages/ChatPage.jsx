import MessageWindow from "../components/MessageWindow"

export default function ChatPage() {
  const divStyle = {
    position: 'relative',
    width: '100vw',
  }

  return (
    <div style={divStyle}>
      <h1>Chat Page</h1>
      <MessageWindow />
    </div>
  )
}