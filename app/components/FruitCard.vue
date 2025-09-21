<template>
    <div
        class="fruit-container"
    >
        <div
            class="img-part"
            :style="{ backgroundColor: bgColor }"
        >
            <component 
                :is="iconComponent" 
                class="icon" 
            />
        </div>
        <h3 class="fruit-name">{{ fruit.name }}</h3>
    </div>
</template>

<script setup >
import { computed } from 'vue'
import { Apple, Cherry, Grape, Citrus, Banana, Vegan } from "lucide-vue-next"

const props = defineProps({
  fruit: {
    type: Object,
    required: true,
  }
})


const bgColor = computed(() => {
    const firstLetter = props.fruit.family.charAt(0).toUpperCase()
    if (firstLetter <='G' )
        return '#ff7281'
    else if (firstLetter <= 'N' )
        return '#40c4ff'
    else if (firstLetter <= 'U' )
        return '#ffcc1b'
    else
        return '#ff5a79'   
}) 

const fruitIcons = {
    Apple, Cherry, Grape, Banana, Vegan
}

const iconComponent = computed(() => {
    const name = props.fruit.name

    if (name === "Lemon" || name === "Orange")
        return Citrus
    
    return fruitIcons[name] || Vegan
})


</script>

<style>
.fruit-container {
    max-width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

.img-part {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 28px;
    height: 28px;
    stroke: black;
}

.fruit-name {
    text-align: center;
    margin: 8px 0;
}

</style>