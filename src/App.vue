<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-950 overflow-hidden">
    <div id="page-wrapper" class="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col">
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>
