<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ndoffirst',
    icon: 'fa-brands fa-github',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/uPtw9KQM8f',
    icon: 'fa-brands fa-discord',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ndoffirst/',
    icon: 'fa-brands fa-instagram',
  }
];
</script>

<template>
    <footer id="footer" class="py-12 px-8 bg-zinc-800 border-t border-zinc-700">
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div class="flex items-center gap-4">
          <img
            src="/images/logo.png"
            class="w-12 h-12 hover:scale-110 transition-transform duration-300"
            alt="NDoF logo"
          />
          <span class="font-semibold text-lg">NDoF</span>
        </div>
        <div class="flex gap-6">
          <a
            v-for="link in socialLinks"
            :key="link.url"
            :href="link.url"
            class="text-zinc-400 transition-colors"
            :aria-label="link.name"
          >
            <i :class="[link.icon, 'text-2xl']"></i>
          </a>
        </div>
        <p class="text-sm text-zinc-400">
          &copy;{{ new Date().getFullYear() }} NeuroDivergent of FIRST. All rights
          reserved.
        </p>
      </div>
    </footer>
</template>
