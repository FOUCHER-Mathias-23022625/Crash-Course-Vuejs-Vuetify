<script setup>
import logo from '@/assets/logo.svg'
import { ref } from 'vue'
import {RouterLink, useRoute} from 'vue-router'

const isMenuOpen = ref(false)

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo et titre -->
        <div class="flex items-center space-x-3">
          <img :src="logo" alt="Vue Jobs Logo" class="h-10 w-10" />
          <span class="text-xl font-bold">Vue Jobs</span>
        </div>

        <!-- Navigation desktop -->
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md']">Accueil</RouterLink>
          <RouterLink to="/jobs" :class="[isActiveLink('/jobs') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md']">Offres d'emploi</RouterLink>
          <RouterLink  to="/jobs/add" :class="[isActiveLink('/jobs/add') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md']">
            Publier une offre
          </RouterLink>
          <RouterLink to="/addpage" :class="[isActiveLink('/addpage') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md']">Add</RouterLink>
          <RouterLink to="/editpage" :class="[isActiveLink('/editpage') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md']">Edit</RouterLink>
          <RouterLink to="/login" :class="[isActiveLink('/login') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors','rounded-md','bg-gray-400']">Login</RouterLink>


        </div>

        <!-- Bouton menu mobile -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu mobile -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-2">
        <div class="flex flex-col space-y-3">
          <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors']"">Accueil</RouterLink>
          <RouterLink to="/jobs" :class="[isActiveLink('/jobs') ? 'bg-blue-900' : '','hover:text-blue-200','px-3','py-2' ,'transition-colors']">Offres d'emploi</RouterLink>
          <div class="flex flex-col space-y-2 pt-2">
             <RouterLink  to="/jobs/add" class="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-colors">
              Publier une offre
          </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>