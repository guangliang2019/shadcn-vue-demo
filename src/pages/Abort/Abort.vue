<template>
  <div class="w-full h-[100vh] flex flex-col items-center justify-center bg-zinc-900 md:bg-white">
    <h1 class="text-3xl cursor-pointer hover:underline">{{ count }}</h1>
    <Button @click="handleClick">Add One</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const count = ref(0);

const handleClick = () => {
  count.value++;
};
</script>
