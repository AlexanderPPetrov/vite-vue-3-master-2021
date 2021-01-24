<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <GenreList/>
    <MovieList/>
  </div>
</template>

<script setup>
  import GenreList from './components/genres/GenreList.vue'
  import MovieList from './components/MovieList.vue'
</script>
