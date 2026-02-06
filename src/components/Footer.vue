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
  },
  {
    name: 'Email',
    url: 'mailto:ndoffirst@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    name: 'HackClub Bank',
    url: 'https://hcb.hackclub.com/ndof/',
    icon: 'fa-solid fa-university',
  }
];
</script>

<template>
    <footer id="footer" class="py-12 px-8 bg-zinc-800 border-t border-zinc-700">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8"
      >
        <div class="flex items-center gap-4 justify-center md:justify-start">
          <img
            src="/images/logo.png"
            class="w-12 h-12 hover:scale-110 transition-transform duration-300"
            alt="NDoF logo"
          />
          <span class="font-semibold text-lg">NDoF</span>
        </div>
        <div class="flex gap-6 justify-center">
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
          &copy;{{ new Date().getFullYear() }} Neurodivergent of FIRST. All rights
          reserved.
        </p>
      </div>
    </footer>
</template>
