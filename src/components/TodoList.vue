<template>
  <v-app>
    <v-app-bar class="navbar" app color="teal" dark>
      <v-toolbar-title
        ><v-icon>mdi-account-circle</v-icon> Laurence Jay Perez</v-toolbar-title
      >
    </v-app-bar>

    <v-container class="container" fluid>
      <v-row class="py-5" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="pa-4" elevation="2">
            <v-card-title>
              <h1 class="title">
                To-Do List
                <v-icon class="ps-3" color="green">fas fa-edit</v-icon>
              </h1>
            </v-card-title>

            <v-text-field
              v-model="newTask"
              label="Add a new task"
              outlined
              dense
              clearable
              class="mb-4"
              @keyup.enter="addTask"
            ></v-text-field>

            <v-btn class="add-btn" @click="addTask">
              <v-icon left>mdi-plus</v-icon>
              Add Task
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="py-5" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="custom-card" v-if="tasks.length > 0">
            <v-list dense>
              <v-list-item
                v-for="(task, index) in tasks"
                :key="index"
                :class="{ completed: task.completed }"
                class="mb-2"
              >
                <v-list-item-action>
                  <v-checkbox
                    v-model="task.completed"
                    @change="toggleTask(index)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ task.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon small @click="editTask(index)" color="blue">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon small @click="deleteTask(index)" color="red">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
          </v-card>
          <v-card class="pa-4" v-else>
            <v-card-text class="empty-text"> No tasks yet. </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Edit Dialog -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="headline">Edit Task</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="editedTask"
              label="Edit Task"
              outlined
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveTask">Save</v-btn>
            <v-btn color="grey" @click="closeDialog">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTask: "",
      tasks: [],
      dialog: false,
      editedTask: "",
      editedIndex: -1,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ title: this.newTask, completed: false });
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.editedIndex = index;
      this.editedTask = this.tasks[index].title;
      this.dialog = true;
    },
    saveTask() {
      if (this.editedTask.trim()) {
        this.tasks[this.editedIndex].title = this.editedTask;
        this.closeDialog();
      }
    },
    closeDialog() {
      this.dialog = false;
      this.editedTask = "";
    },
    showDialog() {
      alert("Profile button clicked");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}

.container {
  margin-top: 80px;
  background-color: #e0f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem !important;
  color: #00796b;
  font-weight: bold;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.custom-input {
  margin-bottom: 15px;
}

.add-btn {
  width: 40%;
  font-weight: bold;
  margin-top: 10px;
  background-color: #00796b !important;
  color: white !important;
  border-radius: 4px !important;
  text-transform: uppercase !important;
  font-size: 1rem !important;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto; 
}

.add-btn .v-icon {
  margin-right: 8px !important;
}

.add-btn:hover {
  background-color: #004d40 !important;
  transform: scale(1.05) !important;
}

.custom-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.completed {
  text-decoration: line-through;
  color: #a1a1a1;
}

.v-list-item {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.v-list-item:hover {
  background-color: #e0f2f1;
  transform: translateY(-2px);
}

.empty-text {
  text-align: center;
  font-size: 1.2em;
  color: #00796b; 
}


@media (max-width: 600px) {
  .container {
    margin-top: 70px;
  }

  .title {
    font-size: 2rem !important;
  }

  .add-btn {
    font-size: 0.9rem !important;
  }

  .custom-card {
    padding: 15px;
  }

  .empty-text {
    font-size: 1em;
  }
}
</style>
