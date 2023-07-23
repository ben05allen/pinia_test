<script setup lang="ts">
    import { ref } from 'vue';
    import { useItemsStore } from '@/stores/items.ts';
    
    const itemsStore = useItemsStore()

    const newItem = ref("Add a new item");

</script>


<template>
    <div class="mx-20 flex flex-col">
        <div>
            <input class = "border-2 border-blue-500 py-2 px-2 mr-4 rounded-lg" type="text" v-model="newItem"/>
            <button class="bg-blue-500 text-white rounded-lg px-5 py-2 border-2 border-blue-500 hover:bg-blue-600">Add</button>
        </div>
        <div class="text-blue-400 text-xl">
            <li v-for="item in itemsStore.items">
                {{ item }}
            </li>
        </div>
    </div>
</template>
