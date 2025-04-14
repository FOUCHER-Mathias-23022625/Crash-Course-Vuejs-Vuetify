<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobLitsting from '@/components/jobs/JobLitsting.vue';
</script>

<template>
    <Hero title="First Project in vue" subtitle="it's realy like react !"/>
    <HomeCards/>
    <JobLitsting :limit="3" :showButton="true"/>
</template>