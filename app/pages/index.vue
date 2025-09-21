<template>
    <h2>Index Page</h2>
    <div>
        <NuxtLink to="/about">Go to: 'about' page</NuxtLink>
    </div>

    <div>
        <NuxtLink to="/fruits">Go to: 'fruits' page</NuxtLink>
    </div>
    
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

.select-button {
    padding-top: 6px;
}
</style>