<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllBlogPosts } from '../utils/blog';
import type { BlogPost } from '../utils/blog';

const posts = ref<BlogPost[]>([]);
const loading = ref(true);
const error = ref(false);

// Format date string (YYYY-MM-DD) to readable format, avoiding timezone issues
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

onMounted(async () => {
  try {
    posts.value = await getAllBlogPosts();
  } catch (err) {
    console.error('Error loading blog posts:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <div class="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-brand)">Blog</h1>
      <p class="text-zinc-400 mb-12">Insights and updates from the NeuroDivergent of FIRST community.</p>

      <div v-if="loading" class="text-center">
        <p>Loading blog posts...</p>
      </div>

      <div v-else-if="error" class="text-center">
        <p class="text-red-400">Error loading blog posts.</p>
      </div>

      <div v-else-if="posts.length === 0" class="text-center">
        <p class="text-zinc-400">No blog posts yet.</p>
      </div>

      <div v-else class="space-y-8">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="border-l-4 border-primary pl-6"
        >
          <router-link
            :to="`/blog/${post.slug}`"
            class="block group"
          >
            <h2 class="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-200">
              {{ post.title }}
            </h2>
          </router-link>

          <time class="text-zinc-400 text-sm">
            {{ formatDate(post.date) }}
          </time>

          <p class="text-zinc-300 mt-4 mb-4">
            {{ post.description }}
          </p>

          <router-link
            :to="`/blog/${post.slug}`"
            class="inline-block text-primary hover:text-purple-400 font-semibold transition-colors duration-200"
          >
            Read More →
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>
