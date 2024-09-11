<script setup lang="ts">
import { themeApp } from "@/themes";
const { colors } = themeApp.default;
</script>

<template>
  <div>
    <a-config-provider
      :theme="{
        token: {
          colorPrimary: colors.primary,
        },
      }"
    >
      <RouterView />
    </a-config-provider>
  </div>
</template>

<style lang="scss" scoped></style>
