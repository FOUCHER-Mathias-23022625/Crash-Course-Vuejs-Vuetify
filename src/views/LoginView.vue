<script setup>
 // @TODO afficher tout en i18n
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import router from '@/router'

const username = ref('')
const password = ref('')

const loading = ref(false)

const remember = ref(false)

const showPassword = ref(false)

const toast = useToast()

const usernameRules = [
  value => {
    if (value?.length >= 5) return true
    return 'Username must be at least 5 characters.'
  },
]



const submitForm = async () => {
    loading.value = true

    const User= {
        username: username.value,
        password: password.value,
    };

    try {
    // 1. Récupérer tous les utilisateurs
    const response = await axios.get('/api/users')
      
    // Déterminer où se trouvent les utilisateurs
    const users = Array.isArray(response.data) 
      ? response.data                 // Si response.data est déjà un tableau
      : response.data.users || [];    // Sinon, essayer response.data.users
      
      // 3. Trouver l'utilisateur correspondant
      const user = users.find(u => 
        u.username === username.value && u.password === password.value
      )
    
    // 3. Vérifier si l'utilisateur existe
    if (user) {
      // Authentification réussie
      toast.success('Connexion réussie!')
      
      // Stocker les informations utilisateur localement
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', 'fake-token-' + Math.random().toString(36).substring(2))
      
      if (remember.value) {
        localStorage.setItem('rememberMe', 'true')
      }
      
      // Rediriger vers la page d'accueil
      router.push('/')
    } else {
      // Utilisateur non trouvé ou mot de passe incorrect
      toast.error('Nom d\'utilisateur ou mot de passe incorrect')
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error)
    toast.error('Erreur de connexion au serveur')
  } finally {
    loading.value = false
  }
};
</script>

<template>
  <div class="bg-blue-50 min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <!-- En-tête du formulaire -->
      <div class="bg-blue-600 py-6 px-6">
        <h2 class="text-3xl font-bold text-white text-center">Connexion</h2>
      </div>
      
      <!-- Corps du formulaire -->
      <div class="p-8">
        <v-sheet class="mx-auto bg-transparent" width="100%">
          <v-form fast-fail @submit.prevent="submitForm">
            <!-- Icône utilisateur décorative -->
            <div class="flex justify-center mb-6">
              <div class="bg-blue-100 rounded-full p-4 inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <!-- Champs de formulaire -->
            <div class="space-y-6">
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                class="rounded-lg"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-checkbox 
                v-model="remember" 
                label="Remember Me" 
                color="blue-darken-1"
              ></v-checkbox>
            </div>

            <!-- Boutons d'action -->
            <div class="mt-8">
              <v-btn
                :loading="loading"
                color="primary"
                class="w-full py-3 text-lg font-semibold mb-6 bg-blue-600"
                type="submit"
                block
                elevation="2"
              >
                Se connecter
              </v-btn>
              
              <div class="text-center flex flex-col sm:flex-row sm:justify-center items-center">
                <span class="text-gray-600">Pas encore de compte ?</span>
                <RouterLink to="/createAccount" class="ml-2">
                  <v-btn 
                    variant="text" 
                    color="blue-darken-1"
                    class="font-medium"
                  >
                    Créer un compte
                  </v-btn>
                </RouterLink>
              </div>
            </div>
          </v-form>
        </v-sheet>
      </div>
    </div>
  </div>
</template>