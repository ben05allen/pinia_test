import { ref } from "vue";
import { defineStore } from "pinia";

export const useItemsStore = defineStore("itemsArray", () => {
  const items = ref<string[]>([]);
  function add(newItem: string) {
    if (newItem.trim() !== "") items.value.push(newItem.trim());
  }
  function remove(itemToRemove: string) {
    const idx = items.value.indexOf(itemToRemove);
    if (idx !== -1) items.value.splice(idx, 1);
  }

  return { items, add, remove };
});
