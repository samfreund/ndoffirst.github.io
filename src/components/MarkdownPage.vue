<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
import '../css/markdown.css';

const props = defineProps<{
  contentPath: string;
}>();

const htmlContent = ref('');

onMounted(async () => {
  try {
    const module = await import(`../content/${props.contentPath}.md?raw`);
    const markdown = module.default;
    
    // Use marked to convert markdown to HTML
    htmlContent.value = await marked(markdown);
  } catch (error) {
    console.error('Error loading markdown:', error);
    htmlContent.value = '<p>Error loading content.</p>';
  }
});
</script>

<template>
  <div class="w-full min-h-screen bg-zinc-950 text-white overflow-x-hidden">
    <div class="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown-content" v-html="htmlContent"></div>
    </div>
  </div>
</template>