<script setup>

import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios';
import { useToast } from 'vue-toastification';
import router from '@/router';

const username = ref('')
const Email = ref('')
const FirstName = ref('')
const LastName = ref('')
const PhoneNumber = ref('')
const password = ref('')



const loading = ref(false)

const show1 = ref(false)

const toast = useToast();


const birthDate = ref('')
const maxDate = (() => {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 18)
  return date.toISOString().split('T')[0] // Format YYYY-MM-DD
})()
const dateMenu = ref(false)
const formatDate = (dateValue) => {
  if (!dateValue) return '';
  const date = new Date(dateValue);
  return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
}
watch(() => birthDate.value, (newValue) => {
  if (newValue && typeof newValue === 'object') {
    // Si c'est un objet Date ou une chaîne de date complète, formater
    birthDate.value = formatDate(newValue);
  }
});

const usernameRules = [
    v => !!v || 'Username is required',
    v => (v && v.length <= 16) || 'Username must be less than 16 characters'
]
const EmailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid'
]
const FirstNameRules = [
    v => !!v || 'First name is required'
]
const LastNameRules = [
    v => !!v || 'Last name is required'
]
const PhoneNumberRules = [
    v => !!v || 'Phone number is required',
    v => {
        if (/^\d+$/.test(v)) return true;
        return 'Le numéro de téléphone doit contenir uniquement des chiffres.';
    }
]
const PasswordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 8) || 'Password must be at least 8 characters'
]

defineExpose({
  getUserData() {
    return {
      username: username.value,
      Email: Email.value,
      FirstName: FirstName.value,
      LastName: LastName.value,
      PhoneNumber: PhoneNumber.value,
      password: password.value,
      BirthDate: formatDate(birthDate.value)
    };
  }
});

</script>
<template>

                <!-- Champs de formulaire -->
                <div class="space-y-4">
                    <v-text-field
                        v-model="username"
                        :rules="usernameRules"
                        :counter="16"
                        label="Username"
                        variant="outlined"
                        prepend-inner-icon="mdi-account"
                        class="rounded-lg"
                    ></v-text-field>

                    <v-text-field
                        v-model="Email"
                        :rules="EmailRules"
                        label="Email"
                        variant="outlined"
                        prepend-inner-icon="mdi-email"
                    ></v-text-field>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <v-text-field
                        v-model="FirstName"
                        :rules="FirstNameRules"
                        label="First Name"
                        variant="outlined"
                        ></v-text-field>

                        <v-text-field
                        v-model="LastName"
                        :rules="LastNameRules"
                        label="Last Name"
                        variant="outlined"
                        ></v-text-field>
                    </div>

                    <v-text-field
                        v-model="PhoneNumber"
                        :rules="PhoneNumberRules"
                        label="Phone Number"
                        variant="outlined"
                        prepend-inner-icon="mdi-phone"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
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



                    <div class="mb-4">
                        <v-menu
                        v-model="dateMenu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ props }">
                            <v-text-field
                            v-model="birthDate"
                            label="Date de naissance"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="props"
                            variant="outlined"
                            hint="Vous devez avoir au moins 18 ans pour vous inscrire"
                            persistent-hint
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="birthDate"
                            :max="maxDate"
                            @update:model-value="dateMenu = false"
                        ></v-date-picker>
                        </v-menu>
                    </div>
                </div>


</template>