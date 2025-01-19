import { HfInference } from "@huggingface/inference"

async function loadModel(model_name, prompt) {
  if (!model_name || !prompt) {
    throw new Error("Model name and prompt are required")
  }

  try {
    const api_key = process.env.HF_TOKEN
    if (!api_key) {
      throw new Error("Hugging Face API token is required")
    }

    const inference = new HfInference(api_key)
    const response = await inference.textGeneration({
      model: model_name,
      inputs: prompt,
    })

    const data = await response

    return data['generated_text']
  } catch (error) {
    console.error(`Failed to load model ${model_name} with prompt ${prompt}:`, error)
    throw error
  }
}

export default loadModel