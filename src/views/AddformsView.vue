<script setup>

import AddJobForm from '@/components/jobs/AddJobForm.vue'
import { ref } from 'vue'

const activeTab = ref(0)

</script>

<template>
    <div>
      <!-- Définition des étiquettes d'onglets -->
      <v-tabs
        v-model="activeTab"
        bg-color="indigo-darken-2"
        fixed-tabs
      >
        <v-tab value="0">Option</v-tab>
        <v-tab value="1">Another Option</v-tab>
      </v-tabs>
  
      <!-- Contenu des onglets -->
      <v-window v-model="activeTab">
        <v-window-item value="0">
          <div class="pa-4">
            <AddJobForm />
          </div>
        </v-window-item>
        
        <v-window-item value="1">
          <div class="pa-4">
            <p>Je n'avais pas d'inspiration pour créer autre chose là</p>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </template>