<template>
  <v-app>
    <v-main>
      <div class="margin-30">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});

</script>
