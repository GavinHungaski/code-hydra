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
                img={'/qwen-icon.png'}
                title={'Qwen2.5-Coder-32B-Instruct'}
                description={'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). As of now, Qwen2.5-Coder has covered six mainstream model sizes, 0.5, 1.5, 3, 7, 14, 32 billion parameters, to meet the needs of different developers.'}
                link={'https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct'}
            />
            <ModelCard 
                img={'/qwen-icon.png'}
                title={'Qwen2.5-Coder-32B-Instruct'}
                description={'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). As of now, Qwen2.5-Coder has covered six mainstream model sizes, 0.5, 1.5, 3, 7, 14, 32 billion parameters, to meet the needs of different developers.'}
                link={'https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct'}
            />
            <ModelCard 
                img={'/qwen-icon.png'}
                title={'Qwen2.5-Coder-32B-Instruct'}
                description={'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). As of now, Qwen2.5-Coder has covered six mainstream model sizes, 0.5, 1.5, 3, 7, 14, 32 billion parameters, to meet the needs of different developers.'}
                link={'https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct'}
            />
        </div>
    )
}
