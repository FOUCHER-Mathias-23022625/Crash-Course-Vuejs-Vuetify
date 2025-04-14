<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="container m-auto py-6 px-6">
        <RouterLink
            to="/jobs"
            class="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
            Back
        </RouterLink>
    </div>
</template>