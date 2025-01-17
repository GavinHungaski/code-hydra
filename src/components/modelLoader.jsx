async function loadModel(model_name, prompt, apiToken) {
    try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${model_name}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputs: prompt,
                parameters: {
                    max_length: 100,
                },
            }),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error("Failed to load model:", error)
        throw error
    }
}

export default loadModel