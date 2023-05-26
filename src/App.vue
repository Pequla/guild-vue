<template>
  <nav>
    <div class="border-black">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/status">Server status</router-link>
    </div>
  </nav>
  <router-view/>
  <footer class="center">
    <p>&copy; {{year}} All rights reserved</p>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.border-black {
  border: 2px black;
}
</style>
