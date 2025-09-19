<template>
    <h1>Index Page</h1>
    <NuxtLink to="/about">Go to: 'about' page</NuxtLink>
    
    <div class="select-button">

        <select 
            v-model="$colorMode.preference"
        >
            <option value="system">System</option>        
            <option value="light">Light</option>        
            <option value="dark">Dark</option>        
            <option value="sepia">Sepia</option>        
        </select>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)

</script>

<style>
body {
    background-color: #fff;
    color: rgba(0,0,0,0.8)
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}

.select-button {
    padding-top: 6px;
}
</style>