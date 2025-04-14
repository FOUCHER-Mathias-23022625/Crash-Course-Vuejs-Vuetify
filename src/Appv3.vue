<script setup>

import { onMounted, ref } from 'vue';
    
const message = ref('Hello Vue!');
const status = ref('active');
const tasks = ref([
  { title: 'Task 1', completed: false },
  { title: 'Task 2', completed: true },
  { title: 'Task 3', completed: false }
]);
const link = ref('https://portfolio-mathias-foucher-sot4c.ondigitalocean.app/');
const linkText = ref('Portefolio');

const newTask = ref('');

const toggleStartus = () => {
  if (status.value === 'active') {
    status.value = 'waiting';
  } else if (status.value === 'waiting') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }

};

const addTask = () =>{
  if (newTask.value.trim() !== '') {
    tasks.value.push({ title: newTask.value, completed: false });
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map(task => ({
      title: task.title,
    }));
  }catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'waiting'">User is waiting</p>
  <p v-else>User is inactive</p>
  <h3>Task:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
    
      <input type="checkbox" v-model="task.completed" />
      <span>
      {{ task.title }}
      </span>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </ul>
  <a :href="link" >
      {{ linkText }}
    </a>
<br><br>

<form @submit.prevent="addTask">
  <label for="Newtask">Add a task:</label>
  <input type="text" id="Newtask" name="newTask" v-model="newTask" />
  <button type="submit">Envoyer</button>
</form>


<br><br>
  <p>Click the button to change the status</p>
  <button v-on:click="toggleStartus">Change the status</button>
</template>

<style scoped>
  
</style>
