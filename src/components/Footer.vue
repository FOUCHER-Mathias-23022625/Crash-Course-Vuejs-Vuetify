<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-blue-800 text-white py-8 mt-auto border-t-4 border-blue-500">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo et copyright -->
        <div class="mb-6 md:mb-0 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <p class="font-semibold text-lg">Vue Jobs</p>
            <p class="text-sm text-blue-200">
              © {{ currentYear }} Tous droits réservés par Mathias Foucher
            </p>
          </div>
        </div>
        
        <!-- Technologies utilisées -->
        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 0l-10.999 6.997v9.998l11 7.005 10.999-7.005v-9.998l-11-6.997zM22.029 7.392l-10.028 6.393-10.028-6.393 10.028-6.392 10.028 6.392zM2.973 8.637l9.028 5.748v10.231l-9.028-5.745v-10.234zM12.971 24.617v-10.234l9.027-5.745v10.233l-9.027 5.746z"></path>
            </svg>
            <span class="text-blue-200">Vue.js</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
            </svg>
            <span class="text-blue-200">Tailwind CSS</span>
          </div>
        </div>
      </div>
      
      <!-- Ligne séparatrice -->
      <div class="border-t border-blue-700 my-6"></div>
      
      <!-- Message du bas -->
      <div class="text-center text-sm text-blue-300">
        <p>Recherchez les meilleures opportunités professionnelles pour votre carrière</p>
      </div>
    </div>
  </footer>
</template>