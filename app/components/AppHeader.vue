<template>
   <header
    class="header-container"
   >
       <NuxtImg 
           src="/lemon.png" 
           sizes="30px sm:20px md:70px"
           alt="Nuxt logo"
       />
       <h1>
           Nuxt js test app
       </h1>
   
       <button class="theme-toggle"
           @click="toggleTheme"
       >
           {{  currentTheme === 'dark' ? '☀️' : '🌙' }}
       </button>
   </header>
       
</template>

<script setup >
const colorMode = useColorMode()

const currentTheme = computed(() => colorMode.value)

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.theme-toggle {
    cursor: pointer;
    font-size: 1.6rem;
    background: none;
    border: none;
    padding: 4px 8px;
}
</style>