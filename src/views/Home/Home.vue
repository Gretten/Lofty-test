<template>
  <div>
    <CommonTable
      :headers="headers"
      :items="fetchedData"
      v-if="fetchedData"
    />
  </div>
</template>

<script lang="ts" src="./home.ts"></script>