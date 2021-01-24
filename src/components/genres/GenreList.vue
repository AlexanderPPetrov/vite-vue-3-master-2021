<template>
 <div class="flex flex-wrap -mx-1 lg:-mx-4">
     <div class="px-1 lg:px-4">
       <Genre v-for="genre in genres"
            :key="genre.id"
            :id="genre.id"
            :name="genre.name"
        ></Genre>    
     </div>
 </div>

</template>

<script>
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'
import actions from '../../store/action-types'
import Genre from './Genre.vue'
import { computed } from 'vue'

export default {
  components: {
    Genre,
  },
  setup(){
    const store = useStore()
    onBeforeMount(() => {
        store.dispatch(actions.GET_GENRES);
    })
    return {
      store,
      genres: computed(() => store.state.genres),
    }
  }
}

</script>






<style scoped>
a {
  color: #42b983;
}
</style>