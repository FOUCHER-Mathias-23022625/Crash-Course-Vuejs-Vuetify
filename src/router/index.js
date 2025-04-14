import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobForm from '@/components/jobs/AddJobForm.vue';
import EditJobForm from '@/components/jobs/EditJobForm.vue';
import LoginView from '@/views/LoginView.vue';
import CreateAccView from '@/views/CreateAccView.vue';
import AddformsView from '@/views/AddformsView.vue';
import EditformsView from '@/views/EditformsView.vue';
import EditUserForm from '@/components/users/EditUserForm.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/addpage',
        name: 'addpage',
        component: AddformsView,
    },
    {
        path: '/editpage',
        name: 'editpage',
        component: EditformsView,
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/createAccount',
        name: 'createAccount',
        component: CreateAccView,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundView,
    },
    {
        path: '/jobs/:id',
        name: 'job',
        component: JobView,
    },
    {
        path: '/users/edit/:id',
        name: 'userEdit',
        component: EditUserForm,
    },
    {
        path: '/jobs/add',
        name: 'add',
        component: AddJobForm,
    },
    {
        path: '/jobs/edit/:id',
        name: 'edit',
        component: EditJobForm,
    },
    ],
});

export default router;