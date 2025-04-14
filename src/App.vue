<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>