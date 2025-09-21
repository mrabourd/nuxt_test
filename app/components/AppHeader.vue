<template>
   <header
    class="header-container"
   >
       <Citrus class="title-icon" />
       <h1>
           Welcome!
       </h1>
   
       <div class="header-action">
        <!-- Theme button -->
           <button 
                class="theme-toggle"
                @click="toggleTheme"
           >
                <Sun v-if="currentTheme === 'dark'" class="icon"/>
                <Moon v-else class="icon" />
           </button>

           <!-- Menu button -->
           <button
                class="hamburger"
                @click="toggleMenu"
           >
                <Menu v-if="!isMenuOpen" class="icon" />
                <X v-else class="icon" />
            </button>
       </div>

       <!-- Menu screen -->
       <transition name="fade">
            <nav 
                v-if="isMenuOpen"
                class="menu-overlay"
            >
                <button class="overlay-close" @click="closeMenu">
                    <X class="icon" />
                </button>
                <NuxtLink @click="closeMenu" to="/">Accueil</NuxtLink>
                <NuxtLink @click="closeMenu" to="/About">A propos</NuxtLink>
        
        </nav>
       </transition>
   </header>
       
</template>

<script setup >
import { ref, computed } from 'vue'
import { Citrus, Sun, Moon, Menu, X } from "lucide-vue-next"

const colorMode = useColorMode()
const currentTheme = computed(() => colorMode.value)

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value

}
const closeMenu = () => {
    isMenuOpen.value = false
}

const handleKeydown = (e) => {
    if (e.key === "Escape" && isMenuOpen.value) {
        closeMenu()
    }
}

onMounted(() => {
    window.addEventListener("keydown", handleKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown)
})

</script>

<style>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 56px;
    position: relative;
    z-index: 50;
}

.header-action {
    display: flex;
    align-items: center;
    gap: 12px;
}

/* icon */
.icon {
    width: 28px;
    height: 28px;
    /* stroke: currentColor; */
}

.title-icon {
    width: 64px;
    height: 64px;
}

/* Overlay menu */
.menu-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(31, 31, 31, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 2rem;
  z-index: 100;
}

.overlay-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-overlay a {
  color: var(--link-color);
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* theme */
.menu-toggle,
.theme-toggle {
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px 8px;
}
</style>