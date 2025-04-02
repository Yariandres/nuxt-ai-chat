<script setup lang="ts">
const { sendMessage, messages, chat } = useChat();

const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
);

useHead({
  title,
});
</script>

<template>
  <ChatWindow :messages="messages" :chat @send-message="sendMessage" />
</template>
