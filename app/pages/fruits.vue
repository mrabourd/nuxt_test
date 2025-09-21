<template>
    <h2 class="title">
        Fruits
    </h2>

    <div
        class="fruit-grid"
        v-if="data"
    >
        <FruitCard 
            v-for="fruit in data"
            :key="fruit.name"
            :fruit="fruit"
        />
    </div>


</template>

<script setup>
const { data, error, pending } = await useFetch('https://www.fruityvice.com/api/fruit/all')


</script>

<style>
.title {
    text-align: center;
}

.fruit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
}

</style>