<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first()
})
</script>

<template>
  <div>
    <header><!-- ... --></header>

    <ContentRenderer
      v-if="page"
      :value="page"
      class = "contentRenderer"
    />

    <footer><!-- ... --></footer>
  </div>
</template>

<style>
@font-face {
  font-family: "Departure Mono";
  src: url(/fonts/departure-mono.otf);
  font-weight: normal;
  font-style: normal;
}

.contentRenderer {
  font-family: 'Departure Mono', monospace;
  text-align: center;
  color: white;
}
</style>