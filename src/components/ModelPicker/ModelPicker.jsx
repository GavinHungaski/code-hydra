
const containerStyle = {
    border: '2px solid #36454F',
    color: 'black',
    borderRadius: '15px',
    width: '30vw',
    margin:'0px auto 20px auto',
    backgroundColor: '#C0C0C0',
}
const selectStyle = {
    margin: '10px auto 20px auto',
    height: '25%',
    width: '85%',
    borderRadius: '5px',
}
const h2Style = {
    margin: '10px auto 10px auto',
}
const hrStyle = {
    width: '90%',
    margin: '0 auto',
    color: 'black',
}

export default function ModelPicker() {
    return (
        <div style={containerStyle}>
            <h2 style={h2Style}>Model:</h2>
            <hr style={hrStyle} />
            <select style={selectStyle}>
                <option>Qwen/Qwen2.5-Coder-32B-Instruct</option>
                <option>deepseek-ai/DeepSeek-Coder-V2-Instruct</option>
            </select>
        </div>
    )
}
