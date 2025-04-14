import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Import Vuetify
import vuetify from './plugins/vuetify'


const app = createApp(App)

app.use(router)
app.use(Toast)
app.use(vuetify) // Ajout de Vuetify


app.mount('#app')