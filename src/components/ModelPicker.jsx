
const containerStyle = {
    border: '1px solid white',
    borderRadius: '30px',
    width: '50vw',
    margin:'0px auto 20px auto',
}
const selectStyle = {
    marginBottom: '20px',
}

export default function ModelPicker() {
    return (
        <div style={containerStyle}>
            <h2>Model Picker</h2>
            <select style={selectStyle}>
                <option value="model1">Qwen/Qwen2.5-Coder-32B-Instruct</option>
                <option value="model2">Model 2</option>
                <option value="model3">Model 3</option>
            </select>
        </div>
    )
}