<template>
   <label class="inline-flex items-center mt-3">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600">
        <span class="ml-2 mr-4 text-gray-700">{{ props.name }}</span>
    </label>
</template>
<script>

export default {
  props: {
    id: Number,
    name: String,
  },
  setup(props){
    return {
      props,
    }
  }
}

</script>






<style scoped>
a {
  color: #42b983;
}
</style>