<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { getBlogPost } from '../utils/blog';
import '../css/markdown.css';

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
      <router-link to="/blog" class="text-primary hover:text-purple-400 mb-8">
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
          <h1 class="text-4xl font-bold mb-4" style="color: var(--color-brand)">{{ title }}</h1>
          <time class="text-zinc-400">{{ formattedDate }}</time>
        </header>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="markdown-content" v-html="htmlContent"></div>
      </article>
    </div>
  </div>
</template>

