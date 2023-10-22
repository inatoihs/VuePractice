<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-toolbar color="purple">
      <v-btn icon="mdi-menu"></v-btn>

      <v-toolbar-title>Todo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify"></v-btn>
    </v-toolbar>

       <v-list>
       <v-list-item v-for="item in items" :key="item.id">
        <v-content >
                <v-list-item-action><v-checkbox :input-value="item.done" @click="done(item)" style="margin: 0;"></v-checkbox><v-list-item-title>{{item.task}}</v-list-item-title>
                <v-btn icon><v-icon @click="itemdelete(item)">mdi-delete</v-icon></v-btn></v-list-item-action>
        </v-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
  const items = ref([
    { id: 1, task: 'Buy milk', done: false},
    { id: 2, task: 'Buy eggs', done: true},
    { id: 3, task: 'Buy bread', done: false},
    { id: 4, task: 'Buy butter', done: false},
    { id: 5, task: 'Buy cheese', done: false},
  ])
  const done = (item) => {
    item.done = !item.done
  }
  const itemdelete = (item) => {
    items.value = items.value.filter((i) => i !== item)
  }

</script>