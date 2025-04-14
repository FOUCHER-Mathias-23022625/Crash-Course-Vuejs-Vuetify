<script setup>
import EditJobForm from '@/components/jobs/EditJobForm.vue'
import EditUserForm from '@/components/users/EditUserForm.vue';
import UserListing from '@/components/users/UserListing.vue';
import { ref } from 'vue'

// Variable pour suivre l'onglet actif
const activeTab = ref(1)
</script>

<template>
  <div>
    <!-- Définition des étiquettes d'onglets -->
    <v-tabs
      v-model="activeTab"
      bg-color="indigo-darken-2"
      fixed-tabs
    >
      <v-tab value="0">Modifier Job</v-tab>
      <v-tab value="1">Modifier Utilisateur</v-tab>
    </v-tabs>

    <!-- Contenu des onglets -->
    <v-window v-model="activeTab">
      <v-window-item value="0">
        <div class="pa-4">
          <EditJobForm />
        </div>
      </v-window-item>
      
      <v-window-item value="1">
        <div class="pa-4">
          <UserListing />
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>