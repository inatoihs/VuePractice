<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <create></create>
      <search></search>

    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
import create from './components/PostCat.vue'
import search from './components/SearchCat.vue'
export default{
  data: () => ({ drawer: null }),
  components:{
    create,
  },
  setup() {
    const displayCreate = ref(true);

    const toCreate=()=>{
      displayCreate.value = true;
    };

    return{
      displayCreate,
      toCreate,
    };
    
  },
};
</script>