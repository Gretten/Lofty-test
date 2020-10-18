<template>
  <div>
    <CommonTable
      :headers="headers"
      :items="fetchedData"
      class="common-table-half"
      v-if="fetchedData"
    />
  </div>
</template>

<script lang="ts" src="./home.ts"></script>