
const containerStyle = {
    border: '1px solid #ADD8E6',
    color: 'black',
    borderRadius: '45px',
    width: '30vw',
    margin:'0px auto 20px auto',
    backgroundColor: '#C0C0C0',
}

const selectStyle = {
    marginBottom: '20px',
    height: '25%',
    width: '70%',
    borderRadius: '15px',
}

export default function ModelPicker() {
    return (
        <div style={containerStyle}>
            <h2>Model:</h2>
            <select style={selectStyle}>
                <option value="qwen-coder">Qwen/Qwen2.5-Coder-32B-Instruct</option>
            </select>
        </div>
    )
}