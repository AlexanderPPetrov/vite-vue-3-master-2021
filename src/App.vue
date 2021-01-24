<template>
  <Navbar/>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import Navbar from './components/header/Navbar.vue'
</script>
