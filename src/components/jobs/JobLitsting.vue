<script setup>

import JobLitstingSingular from './JobListingSingular.vue';
import { reactive, defineProps, onMounted } from 'vue';
import {RouterLink} from 'vue-router'
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const state = reactive({
    jobs: [],
    isLoading: true,
});

defineProps({
    limit:Number,
    showButton: {
        type: Boolean,
        default: false,
    }
})


onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-blod text-blue-500 mb-6 text-center">
                Browse our job listings
            </h2>
            <!-- Loader -->
            <div v-if="state.isLoading" class="flex justify-center items-center h-64">
                <PulseLoader color="#3b82f6" size="15" :loading="state.isLoading" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobLitstingSingular v-for="job in state.jobs.slice(0, limit || state.jobs.lenght)" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
    
</template>