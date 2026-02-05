<script setup lang="ts">
import { ref } from 'vue';

const navLinks = [
  {
    to: '/community',
    label: 'Community',
    icon: 'fa-solid fa-users',
    children: [
      { to: '/community/administrators', label: 'Administrators' },
      { to: '/community/partners', label: 'Partner Teams' },
      { to: '/community/representatives', label: 'Representatives' },
      { to: '/community/retirees', label: 'Retirees' },
      { to: '/community/advisors', label: 'Advisors' },
    ],
  },
  {
    to: '/blog',
    label: 'Blog',
    icon: 'fa-solid fa-newspaper',
  },
  {
    to: '/resources',
    label: 'Resources and Info',
    icon: 'fa-solid fa-book',
  },
];

const mobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

const toggleDropdown = (label: string) => {
  activeDropdown.value = activeDropdown.value === label ? null : label;
};
</script>

<template>
  <header
    id="header"
    class="bg-zinc-900/80 backdrop-blur-md flex items-center justify-between sticky top-0 w-full z-50 border-b border-zinc-700/50 px-4 md:px-8"
  >
    <router-link to="/" class="flex items-center gap-3 py-2 group">
      <div class="w-10 h-10 rounded-full bg-zinc-700 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <img src="/images/logo.png" alt="NDoF Logo" class="w-full h-full object-contain" />
      </div>
      <span class="font-bold text-xl hidden sm:block text-white">
        NeuroDivergent of FIRST
      </span>
    </router-link>

    <!-- Mobile menu button -->
    <button
      class="p-3 hover:bg-zinc-700/50 rounded-lg cursor-pointer flex md:!hidden transition-colors"
      aria-label="Toggle mobile navigation menu"
      @click="mobileMenuOpen = !mobileMenuOpen"
    >
      <i class="fa-solid fa-bars text-xl"></i>
    </button>

    <!-- Mobile nav -->
    <div
      v-if="mobileMenuOpen"
      class="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-lg md:hidden border-b border-zinc-700/50"
    >
      <nav class="flex flex-col p-2">
        <template v-for="link in navLinks" :key="link.to">
          <div v-if="link.children">
            <button
              class="flex items-center justify-between w-full gap-3 px-6 py-4 text-xl text-white hover:text-brand hover:bg-zinc-800/50 rounded-lg transition-colors"
              @click="toggleDropdown(link.label)"
            >
              <span class="flex items-center gap-3">
                <i :class="link.icon"></i>
                {{ link.label }}
              </span>
              <i
                :class="[
                  'fa-solid fa-chevron-down text-sm transition-transform',
                  activeDropdown === link.label ? 'rotate-180' : '',
                ]"
              ></i>
            </button>
            <div
              v-if="activeDropdown === link.label"
              class="pl-4 bg-zinc-800/30"
            >
              <router-link
                v-for="child in link.children"
                :key="child.to"
                :to="child.to"
                class="flex items-center gap-3 px-6 py-3 text-lg text-zinc-300 hover:text-brand transition-colors"
                @click="mobileMenuOpen = false"
              >
                {{ child.label }}
              </router-link>
            </div>
          </div>
          <router-link
            v-else
            :to="link.to"
            class="flex items-center gap-3 px-6 py-4 text-xl text-white hover:text-brand hover:bg-zinc-800/50 rounded-lg transition-colors"
            @click="mobileMenuOpen = false"
          >
            <i :class="link.icon"></i>
            {{ link.label }}
          </router-link>
        </template>
      </nav>
    </div>

    <!-- Desktop nav -->
    <nav id="nav" class="hidden md:flex items-center gap-1">
      <template v-for="link in navLinks" :key="link.to">
        <div v-if="link.children" class="relative group">
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-700/50 hover:text-brand transition-all duration-200"
          >
            <i :class="[link.icon, 'text-sm opacity-70']"></i>
            {{ link.label }}
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <div
            class="absolute top-full left-0 mt-1 bg-zinc-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-zinc-700/50 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            <router-link
              v-for="child in link.children"
              :key="child.to"
              :to="child.to"
              class="block px-4 py-3 text-white hover:text-brand hover:bg-zinc-700/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {{ child.label }}
            </router-link>
          </div>
        </div>
        <router-link
          v-else
          :to="link.to"
          class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-700/50 hover:text-brand transition-all duration-200"
        >
          <i :class="[link.icon, 'text-sm opacity-70']"></i>
          {{ link.label }}
        </router-link>
      </template>
    </nav>
  </header>
</template>
