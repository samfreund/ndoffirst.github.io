<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

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

<style scoped>
.markdown-content {
  line-height: 1.75;
}

.markdown-content :deep(h1) {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #60a5fa;
}

@media (min-width: 768px) {
  .markdown-content :deep(h1) {
    font-size: 3rem;
  }
}

.markdown-content :deep(h2) {
  font-size: 1.875rem;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.markdown-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
  color: #d4d4d8;
  line-height: 1.75;
}

.markdown-content :deep(ul) {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.markdown-content :deep(ul li) {
  margin-bottom: 0.5rem;
}

.markdown-content :deep(li) {
  color: #d4d4d8;
}

.markdown-content :deep(strong) {
  font-weight: 600;
  color: white;
}
</style>
