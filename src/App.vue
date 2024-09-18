<template>
  <v-app>
    <TodoList />
  </v-app>
</template>

<script>
import TodoList from './components/TodoList.vue'; // Import the to-do component

export default {
  name: 'App',
  components: {
    TodoList, // Register the component
  },
};
</script>
