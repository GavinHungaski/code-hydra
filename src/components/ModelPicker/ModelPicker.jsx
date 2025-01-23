import './ModelPicker.css'

export default function ModelPicker(props) {
    return (
        <div class="picker-container">
            <h2>Model:</h2>
            <hr />
            <select value={props.selectedModel} onChange={(e) => props.handleModelChange(e.target.value)}>
                <option value="Qwen/Qwen2.5-Coder-32B-Instruct">Qwen2.5-Coder-32B-Instruct</option>
            </select>
        </div>
    )
}
