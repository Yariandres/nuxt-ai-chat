import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createOllama } from 'ollama-ai-provider';
import type { Message, LanguageModelV1 } from 'ai';

export const createOllamaModel = () => {
  const ollama = createOllama();
  return ollama('deepseek-r1:7b');
};

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey: apiKey,
  });
  return openai('gpt-4o-mini');
};

export async function generateChatResponse(
  model: LanguageModelV1,
  messages: Message[]
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('Messages must be an array and not empty');
  }
  const response = await generateText({
    model,
    messages,
  });
  return response.text.trim();
}
