<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { getBlogPost } from '../utils/blog';

const route = useRoute();
const slug = route.params.slug as string;

const htmlContent = ref('');
const title = ref('');
const date = ref('');
const loading = ref(true);
const error = ref(false);

// Format date string (YYYY-MM-DD) to readable format, avoiding timezone issues
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const formattedDate = computed(() => formatDate(date.value));

onMounted(async () => {
  try {
    const post = await getBlogPost(slug);
    
    if (!post) {
      error.value = true;
      return;
    }

    title.value = post.title;
    date.value = post.date;
    htmlContent.value = await marked(post.body);
  } catch (err) {
    console.error('Error loading blog post:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <div class="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <router-link to="/blog" class="text-brand hover:text-blue-400 mb-8">
        ← Back to Blog
      </router-link>

      <div v-if="loading" class="text-center">
        <p>Loading...</p>
      </div>

      <div v-else-if="error" class="text-center">
        <p class="text-red-400">Error loading blog post.</p>
      </div>

      <article v-else>
        <header class="mb-8">
          <h1 class="text-4xl font-bold mb-4 text-blue-400">{{ title }}</h1>
          <time class="text-zinc-400">{{ formattedDate }}</time>
        </header>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="markdown-content" v-html="htmlContent"></div>
      </article>
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

.markdown-content :deep(h2) {
  font-size: 1.875rem;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  color: #60a5fa;
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
