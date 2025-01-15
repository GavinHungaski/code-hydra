
export default function AboutPage() {
  const divStyle = {
    position: 'relative',
    width: '100vw',
  }

  const h3Style = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
  }
  
  return (
    <>
      <div style={divStyle}>
        <h1>About</h1>
        <p>Code Hydra is a multi-model coding assistant platform.</p>
      </div>
      <h3 style={h3Style}>Built by Gavin Hungaski</h3>
    </>
  )
}