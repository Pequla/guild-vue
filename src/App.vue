<template>
    <router-view/>
    <footer class="center">
        <p>&copy; {{ year }} Pequla - All rights reserved</p>
        <p>Source code available on <a href="https://github.com/Pequla/guild-vue">GitHub</a></p>
    </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
