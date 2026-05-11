import { ref } from 'vue'

export const store = ref({
  count: 0,
  increment(val) {
    if (val < 1) {
      throw new Error("lägg av!");
    }

    this.count += val;
  }
})
