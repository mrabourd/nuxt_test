<template>
    <div class="app-container">
      <div
        class="header"
      >
        <AppHeader />

      </div>
        
        <div class="layout">

          <AppSidebar />

          
          <main class="p-4">
            <slot />
            </main>

        </div>


        <AppFooter class="footer" />
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppSidebar from '~/components/AppSidebar.vue'

export default {
  components: { AppHeader, AppFooter, AppSidebar }
}
</script>

<style>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 98vh;
}

.layout {
  display: flex;
  flex: 1
}

/* Contenu principal */
.layout > main {
  flex: 1;
  padding: 16px;
}
.header  {
  width: 100%;
}

.footerfooter {
  padding: 4px;
}

</style>