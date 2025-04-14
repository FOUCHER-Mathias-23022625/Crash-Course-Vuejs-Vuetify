<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
});

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// Ajouter cette fonction dans le script
const formatDate = (dateString) => {
  if (!dateString) return 'Non spécifiée';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  } catch (e) {
    return dateString;
  }
}

const fullName = computed(() => {
  return `${props.user.FirstName} ${props.user.LastName}`;
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200 transition-all duration-300">
    <!-- En-tête de la carte (toujours visible) -->
    <div class="p-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <!-- Avatar avec les initiales -->
        <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
          {{ user.FirstName ? user.FirstName.charAt(0) : '' }}{{ user.LastName ? user.LastName.charAt(0) : '' }}
        </div>
        
        <!-- Informations de base -->
        <div>
          <h3 class="font-semibold text-lg">{{ fullName }}</h3>
          <p class="text-sm text-gray-600">@{{ user.username }}</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-2">
        <!-- Bouton d'édition -->
        <RouterLink :to="`/users/edit/${user.id}`" class="text-gray-500 hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </RouterLink>
        
        <!-- Bouton pour déplier/replier -->
        <button @click="toggleExpand" class="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" :class="{ 'rotate-180': expanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Section dépliable (détails) -->
    <div v-if="expanded" class="bg-gray-50 p-4 border-t border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-500">Email</p>
          <p class="font-medium">{{ user.Email }}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">Téléphone</p>
          <p class="font-medium">{{ user.PhoneNumber }}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">Nom d'utilisateur</p>
          <p class="font-medium">{{ user.username }}</p>
        </div>

        <div>
            <p class="text-sm text-gray-500">Date de naissance</p>
            <p class="font-medium">{{ formatDate(user.BirthDate) }}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">ID Utilisateur</p>
          <p class="font-medium text-gray-600">{{ user.id }}</p>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t border-gray-200 flex justify-end">
        <RouterLink :to="`/users/edit/${user.id}`" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
          Voir le profil complet
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>