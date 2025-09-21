<template>
    <h2 class="title">
        Fruits
    </h2>

    <div 
        v-if="loading"
        class="spinner-container"
    >
        <div class="spinner"></div>
    </div>

    <div v-else-if="error">
        Erreur lors du chargement des fruits
    </div>

    <div
        v-else
        class="fruit-grid"
    >
        <FruitCard 
            v-for="fruit in fruits"
            :key="fruit.name"
            :fruit="fruit"
        />
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const fruits = ref([])
const loading = ref(true)
const error = ref(null)

onMounted( async () => {
    try {
        fruits.value = await $fetch('/api/fruits')
    }
    catch (err) {
        error.value = err
    }
    finally {
        loading.value = false
    }
})

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

/* Spinner CSS */
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #40c4ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>