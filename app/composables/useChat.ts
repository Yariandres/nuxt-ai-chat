import type { Chat, ChatMessage } from '~/types/types';
import { MOCK_CHAT } from './mockData';

export default function useChat() {
  const chat = ref<Chat>(MOCK_CHAT);
  const messages = computed<ChatMessage[]>(() => chat.value.messages);

  // what is looks like to clear the messages
  // chat.value.messages = [];

  function createMessage(message: string, role: ChatMessage['role']) {
    const id = message.length.toString();

    return {
      id,
      role,
      content: message,
    };
  }

  async function sendMessage(message: string) {
    messages.value.push(createMessage(message, 'user'));

    const data = await $fetch<ChatMessage>('/api/ai', {
      method: 'POST',
      body: {
        messages: messages.value,
      },
    });

    messages.value.push(data);
  }

  return {
    chat,
    messages,
    createMessage,
    sendMessage,
  };
}
