<script setup lang="ts">
import type { VoteOptions } from '@/types';

const _props = defineProps({
  voteOption: {
    type: Object as () => typeof VoteOptions[keyof typeof VoteOptions],
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
});

const inputId = computed(() => `${_props.groupId}_${_props.voteOption.value}`);
</script>

<template>
  <div class="radio-button">
    <input
      :id="inputId"
      type="radio"
      :name="groupId"
      :value="voteOption.value"
    >
    <label :for="inputId">{{ voteOption.label }}</label>
  </div>
  <div
    v-if="false"
    class="radio-button"
  >
    <input
      id="hosting-small"
      type="radio"
      :name="voteOption.value"
      value="hosting-small"
      required
    >
    <label
      :for="voteOption.value"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <svg
        class="w-5 h-5 ms-3 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          d="M1 5l4 4L13 1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
  </div>
</template>

<style scoped>
.radio-button {
    display: inline-block;
    margin: 10px;
    position: relative;
}
.radio-button input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 1;
}
.radio-button label {
    display: inline-block;
    padding: 10px 20px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    z-index: 2;
}
.radio-button input[type="radio"]:checked + label {
    background-color: #4CAF50;
    color: white;
    border-color: #45a049;
}
.radio-button input[type="radio"]:focus + label {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}
.radio-button input[type="radio"]:focus:not(:focus-visible) + label {
    outline: none;
}
.radio-button input[type="radio"]:focus-visible + label {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}
</style>
