import { defineStore } from "pinia";
import { ref } from 'vue';

export const useItemsStore = defineStore('items', () => {
    const items = ref<string[]>(['test1','test2']);
    function add(item: string) {
        items.value.push(item);
    };
    function remove(itemToRemove: string) {
        items.value = items.value.filter(item => item != itemToRemove);
    };

return { items, add, remove}
})

