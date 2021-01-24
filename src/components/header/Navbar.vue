<template>
<header class="border-b p-4 pb-0 shadow-lg md:pb-4">
  <div class="container mx-auto px-4 md:px-12 md:flex md:items-center md:justify-between">
    <nav>
        <ul class="list-reset md:flex md:items-center">
        <li class="md:mr-4">
            <router-link to="/">
                <span class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                    Home
                </span>
            </router-link>
    
           
        </li>
        <li class="md:mr-4">
            <router-link to="/movies">
                <span class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                    Movies
                </span>
            </router-link>
           
        </li>
        </ul>
    </nav>
</div>
</header>
</template>

<script>

export default {
  name:'navbar',
}
</script>

