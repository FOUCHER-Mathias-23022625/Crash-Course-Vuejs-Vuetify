# Vue Jobs - Application de gestion d'offres d'emploi

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-42b883)
![Vuetify](https://img.shields.io/badge/Vuetify-3.8-1867C0)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)

Une application web complète de gestion d'offres d'emploi, développée avec Vue.js, qui permet aux utilisateurs de consulter, publier et gérer des offres d'emploi, ainsi que de créer et gérer leur compte utilisateur.

---

## 📋 Fonctionnalités

### Gestion des offres d'emploi
- 📄 Affichage de la liste des offres d'emploi  
- 🔍 Consultation détaillée d'une offre  
- ✏️ Ajout d'une nouvelle offre  
- 🔄 Modification d'une offre existante  
- 🗑️ Suppression d'une offre  

### Gestion des utilisateurs
- 🔐 Authentification (connexion/création de compte)  
- 👤 Consultation de la liste des utilisateurs  
- 📝 Modification des informations utilisateur  
- 🎂 Gestion des dates de naissance avec validation (minimum 18 ans)  

---

## 🛠️ Technologies utilisées

- **Vue.js 3** – Framework JavaScript progressif  
- **Vue Router** – Gestion du routage  
- **Vuetify** – Framework de composants UI Material Design  
- **Tailwind CSS** – Framework CSS utilitaire  
- **Axios** – Client HTTP pour les requêtes API  
- **Vue Toastification** – Affichage de notifications  
- **JSON Server** – API REST simulée pour le développement  

---

## ⚙️ Installation et configuration

### Prérequis
- Node.js (v14.x ou supérieur)  
- npm (v6.x ou supérieur)  

### Étapes d'installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/sae-web.git
cd sae-web/vue-crash-2025
```

# Installer les dépendances
```bash
npm install
```

# Lancer le serveur JSON (API simulée)
```bash
npm run server
```

Le serveur JSON sera disponible sur http://localhost:5000
L'application sera disponible sur http://localhost:3000

---

## 📁 Structure du projet

vue-crash-2025/
├── src/
│   ├── assets/           # Fichiers statiques (CSS, images)
│   ├── components/       # Composants réutilisables
│   │   ├── jobs/         # Composants liés aux offres d'emploi
│   │   └── users/        # Composants liés aux utilisateurs
│   ├── plugins/          # Plugins Vue.js (Vuetify)
│   ├── router/           # Configuration des routes
│   ├── views/            # Pages de l'application
│   ├── App.vue           # Composant racine
│   ├── jobs.json         # Base de données JSON pour l'API
│   └── main.js           # Point d'entrée de l'application
├── public/               # Fichiers publics accessibles directement
└── index.html            # Page HTML principale

---

## 🚀 Utilisation de l'application

### Navigation

L'application offre une interface intuitive avec une barre de navigation permettant d'accéder aux différentes fonctionnalités :

- **Accueil** : Présentation et aperçu des offres d'emploi récentes
- **Offres d'emploi** : Liste complète des offres disponibles
- **Publier une offre** : Formulaire pour ajouter une nouvelle offre
- **Add** : Accès rapide aux formulaires d'ajout (onglets)
- **Edit** : Gestion des offres et utilisateurs existants (onglets)
- **Login** : Connexion à votre compte utilisateur

### Fonctionnalités principales

#### Consultation des offres d'emploi

- Affichage sous forme de cartes avec aperçu
- Option pour voir plus de détails sur chaque offre
- Accès aux coordonnées de l'entreprise

#### Gestion des offres

- Formulaire complet pour l'ajout d'offres avec validation
- Interface d'édition pour modifier les offres existantes
- Confirmation avant suppression d'une offre

#### Gestion du compte utilisateur

- Création de compte avec validation des données
- Connexion sécurisée avec option "Se souvenir de moi"
- Modification des informations personnelles

---

## 🔌 API et endpoints

L'application utilise **JSON Server** pour simuler une API REST. Les principaux endpoints sont :

```http
GET    /api/jobs         - Récupération de toutes les offres d'emploi  
GET    /api/jobs/:id     - Détails d'une offre spécifique  
POST   /api/jobs         - Création d'une nouvelle offre  
PUT    /api/jobs/:id     - Mise à jour d'une offre existante  
DELETE /api/jobs/:id     - Suppression d'une offre  

GET    /api/users        - Récupération de tous les utilisateurs  
GET    /api/users/:id    - Détails d'un utilisateur spécifique  
POST   /api/users        - Création d'un nouvel utilisateur  
PUT    /api/users/:id    - Mise à jour d'un utilisateur existant  
```

---

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les appareils :

- Design mobile-first avec des menus adaptifs
- Mise en page fluide pour tablettes et ordinateurs
- Composants UI optimisés pour différentes tailles d'écran

---

## 🔮 Améliorations futures

- Implémentation complète de l'internationalisation (i18n)
- Intégration d'un système de filtrage et recherche des offres
- Amélioration de la sécurité de l'authentification
- Ajout de fonctionnalités de favoris/sauvegarde d'offres
- Support pour les candidatures directes

---

## 📄 Licence

© 2025 Mathias Foucher. Tous droits réservés.  
Développé dans le cadre d'un projet SAE Web.
