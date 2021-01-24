<template>
   <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <article class="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
            <img alt="Placeholder" class="block h-auto w-full" :src="getImage">
        </a>
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                    {{ props.title }}
                </a>
            </h1>
            <p class="text-grey-darker text-sm">
                {{ props.release_date }}
            </p>
        </header>
        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <span class="description text-sm block py-2 border-gray-400 mb-2">
            {{ props.description }}
          </span>
        </footer>
    </article>
   </div>
</template>

<script>
import { computed } from 'vue'
import constants from '../constants';
export default {
  name:'movie',
  props: {
    poster_path: String,
    title: String,
    description: String,
    release_date: String,
  },
  setup(props){
    return {
      props,
      getImage: computed(() => `${constants.postersBaseUrl}${props.poster_path}`),
    }
  }
}
</script>
