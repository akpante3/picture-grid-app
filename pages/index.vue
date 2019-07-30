<template>
  <div class="container">
    <div class="container-header">

    </div>
    <div class="container-picture-grid">
      <PictureGrid />
    </div>
  </div>
</template>

<script>
import PictureGrid from '~/components/PictureGrid.vue'

export default {
  components: {
    PictureGrid
  }
}
</script>

<style>
div {
  transition: 0.8s
}
.container {
  width: 100%;
  position: relative;
}
.container .container-header {
  width: 100%;
  background-color: rgb(177, 177, 177);
  height: 200px;
}
.container-picture-grid {
  position: absolute;
  top: 70%;
}
</style>
