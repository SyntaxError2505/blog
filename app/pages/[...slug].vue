<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first()
})
</script>

<template>
  <div class="rendererParent">
    <ContentRenderer
      v-if="page"
      :value="page"
      class = "contentRenderer"
    />
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
  color: white;
}

.rendererParent {
  max-width: 50%;
  display: block;
  margin: auto;
}

a {
  color: white;
}


img {
  max-width: 80%;
  height: auto;
  margin: auto;
  display: block;
}
</style>