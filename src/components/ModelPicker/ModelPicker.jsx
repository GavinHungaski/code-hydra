import './ModelPicker.css'

export default function ModelPicker() {
    return (
        <div class="picker-container">
            <h2>Model:</h2>
            <hr />
            <select>
                <option>Qwen/Qwen2.5-Coder-32B-Instruct</option>
                <option>deepseek-ai/DeepSeek-Coder-V2-Instruct</option>
            </select>
        </div>
    )
}
