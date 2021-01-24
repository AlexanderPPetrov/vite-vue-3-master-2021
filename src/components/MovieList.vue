<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <Movie v-for="movie in store.state.movies"
      :key="movie.id"
      :title="movie.title"
      :description="movie.overview"
      :poster_path="movie.poster_path"
      :release_date="movie.release_date"
    ></Movie>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'
import actions from '../store/action-types'
import Movie from './Movie.vue'

export default {
  components: {
    Movie,
  },
  setup(){
    const store = useStore()
    onBeforeMount(() => {
        store.dispatch(actions.GET_MOVIES);
    })
    return {
      store,
    }
  }
}

</script>






<style scoped>
a {
  color: #42b983;
}
</style>