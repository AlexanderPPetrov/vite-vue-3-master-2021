<template>
  <Spinner v-if="isLoading"></Spinner>
  <div class="flex flex-wrap -mx-1 lg:-mx-4" v-else>
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
import { onBeforeMount, computed } from 'vue'
import actions from '../store/action-types'
import Movie from './Movie.vue'
import Spinner from '../components/loader/Spinner.vue';

export default {
  components: {
    Movie,
    Spinner,
  },
  setup(){
    const store = useStore()
    onBeforeMount(() => {
        store.dispatch(actions.GET_MOVIES);
    })
    return {
      store,
      isLoading: computed(() => store.state.activeActions.includes(actions.GET_MOVIES)),
    }
  }
}

</script>
