<script setup lang="ts">
import { NuxtPage } from "#components";
import { useHead } from "@unhead/vue";

useHead({
  title: "Oussama BOUHLEL - Portfolio",
  meta: [
    { name: "description", content: "Oussama BOUHLEL porfolio" },
    { name: "keywords", content: "obouhlel portofolio developer fullstack" },
  ],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
