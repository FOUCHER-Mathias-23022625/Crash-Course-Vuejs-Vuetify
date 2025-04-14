<script setup>
import { ref } from 'vue';
import AddUserForm from '@/components/users/AddUserForm.vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const router = useRouter();
const toast = useToast();
const loading = ref(false);
const userForm = ref(null); // Ajouter cette ligne pour référencer le formulaire


const handleUserSubmit = async () => {
  // Récupérer les données depuis le composant enfant
  const userData = userForm.value.getUserData();
  
  loading.value = true;
  try {
    const response = await axios.post('/api/users', userData);
    toast.success('User Created Successfully');
    router.push('/login');
  } catch (error) {
    toast.error('Error creating user');
    console.error('Error creating user:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="bg-blue-50 min-h-screen py-12 px-4">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <!-- En-tête du formulaire -->
      <div class="bg-blue-600 py-4 px-6">
        <h2 class="text-2xl font-bold text-white text-center">Créer un compte</h2>
      </div>
      
      <!-- Corps du formulaire -->
      <div class="p-6">
        <v-form @submit.prevent="handleUserSubmit">
          <AddUserForm ref="userForm" />          
          <!-- Boutons d'action -->
          <div class="mt-8">
            <v-btn
              :loading="loading"
              color="primary"
              class="w-full py-3 text-lg font-semibold mb-4 bg-blue-600"
              type="submit"
              block
              elevation="2"
            >
              S'inscrire
            </v-btn>
            
            <div class="text-center">
              <span class="text-gray-600">Vous avez déjà un compte ?</span>
              <RouterLink to="/login" class="ml-2">
                <v-btn 
                  variant="text" 
                  color="blue-darken-1"
                  class="font-medium"
                >
                  Se connecter
                </v-btn>
              </RouterLink>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>