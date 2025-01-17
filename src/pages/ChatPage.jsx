
export default function ChatPage() {
  const divStyle = {
    position: 'relative',
    width: '100vw',
  }
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

  return (
    <div style={divStyle}>
      <h1>Chat Page</h1>
      <textarea style={text_inputStyle} placeholder="Question"></textarea>
      <textarea style={chat_outputStyle} placeholder="Response"></textarea>
    </div>
  )
}