import ModelCard from '../components/ModelCard'

export default function ModelsPage() {
    const container = {
        width: '100vw',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px',
        justifyContent: 'center',
        gap: '20px',
        overflowY: 'auto',
        maxHeight: '80vh',
    }

    return (
        <div style={container}>
            <ModelCard 
                img={'/qwen-icon.png'}
                title={'Qwen2.5-Coder-32B-Instruct'}
                description={'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). As of now, Qwen2.5-Coder has covered six mainstream model sizes, 0.5, 1.5, 3, 7, 14, 32 billion parameters, to meet the needs of different developers.'}
                link={'https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct'}
            />
            <ModelCard 
                img={'/deepseek-icon.png'}
                title={'DeepSeek-Coder-V2-Instruct'}
                description={'We present DeepSeek-Coder-V2, an open-source Mixture-of-Experts (MoE) code language model that achieves performance comparable to GPT4-Turbo in code-specific tasks. Specifically, DeepSeek-Coder-V2 is further pre-trained from an intermediate checkpoint of DeepSeek-V2 with additional 6 trillion tokens.'}
                link={'https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct'}
            />
        </div>
    )
}
