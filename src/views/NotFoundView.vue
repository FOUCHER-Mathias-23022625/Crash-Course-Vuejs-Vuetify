<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-blue-50 min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-lg w-full text-center">
      <!-- Illustration humoristique -->
      <div class="mb-8 text-9xl">
        <span class="block">🔍</span>
        <span class="block mt-4 text-8xl">🤷‍♂️</span>
      </div>
      
      <!-- Titre d'erreur -->
      <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
      
      <!-- Message humoristique -->
      <h2 class="text-3xl font-semibold text-blue-800 mb-4">
        CV introuvable !
      </h2>
      
      <p class="text-xl text-blue-700 mb-8">
        Oups ! Cette page a dû être embauchée ailleurs. Même notre meilleur recruteur n'arrive pas à la trouver.
      </p>
      
      <!-- Blague supplémentaire -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 text-left">
        <p class="text-lg text-gray-700 mb-2">
          <span class="font-bold">Interviewer:</span> Pourquoi cette page n'est-elle pas là?
        </p>
        <p class="text-lg text-gray-700 italic">
          <span class="font-bold">Page 404:</span> Je cherchais un meilleur équilibre travail-vie personnelle.
        </p>
      </div>
      
      <!-- Bouton de retour -->
      <RouterLink to="/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg transform hover:scale-105 duration-200">
        Retourner à l'accueil
      </RouterLink>
    </div>
  </div>
</template>