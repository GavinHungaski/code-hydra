
const containerStyle = {
    border: '1px solid white',
    borderRadius: '30px',
    width: '50vw',
    padding: '1rem',
    margin:'0px auto 20px auto',
}

export default function ModelPicker() {
    return (
        <div style={containerStyle}>
            <h2>Model Picker</h2>
            <p>Choose a model:</p>
            <select>
                <option value="model1">Qwen/Qwen2.5-Coder-32B-Instruct</option>
                <option value="model2">Model 2</option>
                <option value="model3">Model 3</option>
            </select>
        </div>
    )
}