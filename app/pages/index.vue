<script setup>
    const index = await queryCollection("rest").path("/").where("title", "LIKE", "Syntax's Site").first();
</script>

<template>
    <div class="rendererParent">
    <ContentRenderer class="contentRenderer":value = "index" />
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