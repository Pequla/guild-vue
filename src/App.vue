<template>
  <nav>
    <div class="border-black">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>
.border-black {
  border: 2px black;
}
</style>
