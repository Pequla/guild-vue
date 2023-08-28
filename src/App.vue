<template>
  <table class="center">
    <tr>
      <td>
        <router-link to="/" title="home"><i class="fa-solid fa-house"></i> home</router-link>
      </td>
      <td>
        <router-link to="/status" title="status"><i class="fas fa-signal"></i> status</router-link>
      </td>
    </tr>
  </table>
  <router-view/>
  <footer class="center">
    <p>&copy; {{ year }} Pequla - Guild Core Application</p>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
