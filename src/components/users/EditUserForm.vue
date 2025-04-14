<script setup>

import router from '@/router';
import { reactive,ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';

const loading = ref(false);

const show1 = ref(false);

// Définir les règles de validation
const usernameRules = [
    v => !!v || 'Username is required',
    v => (v && v.length <= 16) || 'Username must be less than 16 characters'
];
const EmailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid'
];
const FirstNameRules = [
    v => !!v || 'First name is required'
];
const LastNameRules = [
    v => !!v || 'Last name is required'
];
const PhoneNumberRules = [
    v => !!v || 'Phone number is required',
    v => {
        if (/^\d+$/.test(v)) return true;
        return 'Le numéro de téléphone doit contenir uniquement des chiffres.';
    }
];
const PasswordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 8) || 'Password must be at least 8 characters'
];

const form = reactive({
    username: '',
    Email: '',
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    password: '',
    BirthDate: '' 
})

const state = reactive({
    user: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        PhoneNumber: '',
        password: '',
        BirthDate: '' 
    },
    isLoading: true,
    showPassword: false
})



const dateMenu = ref(false)
form.BirthDate = ''
const maxDate = (() => {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 18)
  return date.toISOString().split('T')[0] // Format YYYY-MM-DD
})()
const formatDate = (dateValue) => {
  if (!dateValue) return '';
  const date = new Date(dateValue);
  return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
}
watch(() => form.BirthDate, (newValue) => {
  if (newValue && typeof newValue === 'object') {
    form.BirthDate = formatDate(newValue);
  }
});


const toast = useToast();
const route = useRoute();

const userId = route.params.id;

const submitForm = async () => {
    const updatedUser = {
        username: form.username,
        Email: form.Email,
        FirstName: form.FirstName,
        LastName: form.LastName,
        PhoneNumber: form.PhoneNumber,
        password: form.password,
        BirthDate: formatDate(form.BirthDate), 
      }
    try {
        const response = await axios.put(`/api/users/${userId}`, updatedUser);
        toast.success('Profil mis à jour avec succès!');
        router.push('/');
    } catch (error) {
        toast.error('Erreur lors de la mise à jour du profil');
        console.error('Error updating user:', error);
    }
};

onMounted(async () => {
    try {
        const response = await axios.get(`/api/users/${userId}`);
        state.user = response.data;
        form.username = state.user.username;
        form.Email = state.user.Email;
        form.FirstName = state.user.FirstName;
        form.LastName = state.user.LastName;
        form.PhoneNumber = state.user.PhoneNumber;
        form.password = state.user.password;
        form.BirthDate = state.user.BirthDate ? formatDate(new Date(state.user.BirthDate)) : '';
    } catch (error) {
        console.error('Error fetching user:', error);
        toast.error('Impossible de charger les données de l\'utilisateur');
    } finally {
        state.isLoading = false;
    }
});



</script>

<template>


<div class="p-6">
        <v-sheet class="mx-auto bg-transparent" width="100%">
          <v-form fast-fail @submit.prevent="submitForm">
            <!-- Champs de formulaire -->
            <div class="space-y-4">
              <v-text-field
                v-model="form.username"
                :rules="usernameRules"
                :counter="16"
                label="Username"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                class="rounded-lg"
              ></v-text-field>

              <v-text-field
                v-model="form.Email"
                :rules="EmailRules"
                label="Email"
                variant="outlined"
                prepend-inner-icon="mdi-email"
              ></v-text-field>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <v-text-field
                  v-model="form.FirstName"
                  :rules="FirstNameRules"
                  label="First Name"
                  variant="outlined"
                ></v-text-field>

                <v-text-field
                  v-model="form.LastName"
                  :rules="LastNameRules"
                  label="Last Name"
                  variant="outlined"
                ></v-text-field>
              </div>

              <v-text-field
                v-model="form.PhoneNumber"
                :rules="PhoneNumberRules"
                label="Phone Number"
                variant="outlined"
                prepend-inner-icon="mdi-phone"
              ></v-text-field>

              <div class="mb-4">
                <v-menu
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    min-width="auto"
                >
                    <template v-slot:activator="{ props }">
                    <v-text-field
                        v-model="form.BirthDate"
                        label="Date de naissance"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="props"
                        variant="outlined"
                        hint="Vous devez avoir au moins 18 ans"
                        persistent-hint
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="form.BirthDate"
                    :max="maxDate"
                    @update:model-value="dateMenu = false"
                    ></v-date-picker>
                </v-menu>
                </div>

              <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="PasswordRules"
                :type="show1 ? 'text' : 'password'"
                hint="At least 8 characters"
                label="Password"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </div>

            <!-- Boutons d'action -->
            <div class="mt-8">
              <v-btn
                :loading="loading"
                color="primary"
                class="w-full py-3 text-lg font-semibold mb-4 bg-blue-600"
                type="Mettre a jour"
                block
                elevation="2"
              >
                Mettre à jour
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </div>

</template>