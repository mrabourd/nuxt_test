<template>
    <div>
        <AppHeader />
        <div class="layout">

            <main class="p-4">
                <slot />
            </main>
        <AppSidebar />

        </div>


        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppSidebar from '~/components/AppSidebar.vue'

</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 16px;
}
main {
  padding: 16px;
}
</style>