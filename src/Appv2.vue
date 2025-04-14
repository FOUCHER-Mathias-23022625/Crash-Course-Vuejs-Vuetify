<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!',
      status: 'active', // 'active', 'waiting', or 'inactive',
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
      ],
      link: 'https://portfolio-mathias-foucher-sot4c.ondigitalocean.app/',
      linkText: 'Portfolio',
    };
  },
  methods: {
    toggleStartus() {
      if (this.status === 'active') {
        this.status = 'waiting';
      } else if (this.status === 'waiting') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'waiting'">User is waiting</p>
  <p v-else>User is inactive</p>
  <h3>Task:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      <input type="checkbox" v-model="task.completed" />
      {{ task.title }}
    </li>
  </ul>
  <a :href="link" >
    {{ linkText }}
  </a>
<br />
<br><br>
  <p>Click the button to change the status</p>
  <button v-on:click="toggleStartus">Change the status</button>
</template>

<style scoped>
  
</style>
