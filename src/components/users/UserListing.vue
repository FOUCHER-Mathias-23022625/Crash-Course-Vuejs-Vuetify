<script setup>

import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import UserListingSingular from '@/components/users/UserListingSingular.vue';
import AddUserForm from '@/components/users/AddUserForm.vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const showAddUserDialog = ref(false);
const userFormRef = ref(null);

const loading = ref(false);

const state = reactive({
  users: [],
  isLoading: true,
  isCreating: false,
});



// Fonction pour charger les utilisateurs
const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    state.users = response.data;
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des utilisateurs:', error);
    toast.error('Impossible de charger la liste des utilisateurs');
    throw error;
  } finally {
    state.isLoading = false;
  }
};


const submitUserForm = async () => {
  if (!userFormRef.value) return;
  
  try {
    loading.value = true;
    
    // Appeler la méthode submitForm exposée par AddUserForm
    const userData = await userFormRef.value.getUserData();
    
    const [post,get] = await Promise.all([
      axios.post('/api/users', userData),
      axios.get('/api/users') // ici il faut mettre un minimum de delay pour que le serveur ai le temps de créer 
      // l'utilisateur avant d'afficher sinon il ne s'affichera pas
    // sinon, on peut simplement faire les 2, mais sans les mettre en asynch et en await, comme ca les 2 se feront en parralellele
    //derniere methode : Utiliser nuxt pour les faires sans les await, car nuxt nous permet d'avoir pleins d'autres parametres :
    //  const { data, error, execute, refresh } = await useFetch('/api/users')
    // const { data, error, execute, refresh } = await useFetch('/api/users', { method: 'POST', body: userData })
    ]);
    showAddUserDialog.value = false;

    toast.success('Utilisateur créé avec succès!');
    state.isCreating = true;
    
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    toast.error('Erreur lors de la création de l\'utilisateur');
    state.isCreating = false;
  } finally {
    loading.value = false;
    state.isCreating = false;
  }
};


// Charger les utilisateurs au montage du composant
onMounted(fetchUsers);
</script>
<template>


<section class="bg-blue-50 min-h-screen py-6">
    <!-- Titre et bouton existants -->
    <div class="container mx-auto px-4 mb-8">
      <div class="flex justify-between items-center py-4 border-b-2 border-blue-300">
        <h1 class="text-3xl font-bold text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Liste des utilisateurs
        </h1>
        
        <!-- Bouton + pour ajouter un utilisateur -->
        <v-btn
          icon
          color="primary"
          class="bg-blue-600 text-white"
          size="large"
          @click="showAddUserDialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    
    <!-- Contenu de liste avec état de chargement -->
    <div class="container mx-auto px-4">
      <!-- État de chargement global -->
      <div v-if="state.isLoading" class="flex justify-center items-center py-20">
        <PulseLoader color="#3b82f6" size="15" :loading="state.isLoading" />
      </div>
      
      <!-- État de mise à jour lors de création d'utilisateur -->
      <div v-else-if="state.isCreating" class="bg-blue-100 p-4 mb-4 rounded-lg text-center">
        <PulseLoader color="#3b82f6" size="10" :loading="true" class="mr-2" />
        <span class="text-blue-800">Mise à jour de la liste des utilisateurs...</span>
      </div>
      
      <!-- Liste des utilisateurs -->
      <div v-else>
        <div v-if="state.users.length === 0" class="text-center py-16 bg-white rounded-xl shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p class="text-xl text-gray-500">Aucun utilisateur trouvé</p>
        </div>
        
        <div v-else class="space-y-4 pb-8">
          <UserListingSingular 
            v-for="user in state.users" 
            :key="user.id" 
            :user="user" 
          />
        </div>
      </div>
    </div>

    <!-- Dialog pour ajouter un utilisateur - modifié pour utiliser les nouveaux événements -->
        <v-dialog
    v-model="showAddUserDialog"
    width="600"
    transition="dialog-bottom-transition"
    class="user-dialog"
    >
    <v-card class="rounded-lg">
        <!-- En-tête avec style amélioré -->
        <v-card-title class="text-h5 font-weight-bold bg-blue-600 text-white py-4 px-6 rounded-t-lg">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        Ajouter un nouvel utilisateur
        </v-card-title>
        
        <v-card-text class="pa-6 pt-8 pb-4">
        <AddUserForm 
            ref="userFormRef"
            @user-creation-started="handleUserCreationStarted"
            @user-created="handleUserCreated" 
            @user-creation-failed="handleUserCreationFailed"
        />
        </v-card-text>
        
        <!-- Actions réorganisées pour une meilleure UX -->
        <v-divider></v-divider>
        
        <v-card-actions class="pa-4 bg-gray-50">
        <v-spacer></v-spacer>
        
        <!-- Bouton Annuler -->
        <v-btn
            prepend-icon="mdi-close"
            color="grey-darken-1"
            variant="text"
            @click="showAddUserDialog = false"
            class="mr-2"
        >
            Annuler
        </v-btn>
        
        <!-- Bouton d'ajout plus compact et élégant -->
        <v-btn
            :loading="loading"
            prepend-icon="mdi-check"
            color="primary"
            variant="elevated"
            class="bg-blue-600 px-6"
            elevation="1"
            @click="submitUserForm"
            :disabled="loading"
        >
            Ajouter cet utilisateur
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
  </section>
</template>