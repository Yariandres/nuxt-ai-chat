<script setup lang="ts">
const { sendMessage, messages, chat } = useChat();

useHead({
  title: chat.value.title,
});
</script>

<template>
  <ChatWindow :messages="messages" :chat @send-message="sendMessage" />
</template>
