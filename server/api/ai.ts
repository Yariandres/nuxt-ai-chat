import {
  createOpenAIModel,
  generateChatResponse,
  createOllamaModel,
} from '../services/ai-service';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();
  // const lastMessage = messages[messages.length - 1];

  const openaiApiKey = useRuntimeConfig().NUXT_OPENAI_API_KEY;
  const openaiModel = createOpenAIModel(openaiApiKey);

  const ollamaModel = createOllamaModel();

  const response = await generateChatResponse(openaiModel, messages);

  return {
    id,
    role: 'assistant',
    content: response,
  };
});
