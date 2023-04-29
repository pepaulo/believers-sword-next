import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('useUserStore', () => {
    const user = ref<any>(null);
    const user_id = computed(() => {
        return user.value?.user?.id ?? null;
    });

    return {
        user,
        user_id
    };
});