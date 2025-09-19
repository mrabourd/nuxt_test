<template>
    <aside class="['sidebar', {collapsed}]" >
        <button 
            class="toggle-btn"
            @click="collapsed = !collapsed"
        >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    
        <div
            v-if="!collapsed" 
            class="content"
        >
            <h3>Menu</h3>
            <ul>
                <li> <NuxtLink to="/">Accueil</NuxtLink></li>
                <li> <NuxtLink to="/about">A propos</NuxtLink> </li>
            </ul>
        </div>

    </aside>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(false)

</script>

<style>
.sidebar {
  width: 220px;
  padding: 16px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
  padding: 8px;
}

.toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
}

.bar {
  width: 24px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
}

.content {
  overflow: hidden;
}
</style>