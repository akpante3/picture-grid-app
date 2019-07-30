<template>
    <div class="image-wrapper" @click="openSingleImage"> 
        <div class="image-overlay">
          <div class="image-user-details">
            <div class="image-owner">{{imageDetails.name}}</div>
            <div class="image-location">{{imageDetails.location}}</div>
          </div>
        </div>
        <img :src="image" />
    </div>
</template>


<script>
  export default {
    components: {},
    methods: {
      openSingleImage() {
        this.$parent.togglePictureModal(this.image, this.imageDetails);
      },
    },
    props:['image', 'imageDetails']
  }
</script>

<style>
.image-wrapper {
  position: relative;
  border-radius: 7px;
  cursor: pointer;
}
.image-wrapper:hover .image-overlay {
 transform: translate(0px, 300px);
}
.image-overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  opacity: 1;
  position: absolute;
  color: white;
  padding: 5%;
}
.image-overlay .image-user-details {
  position: absolute;
  bottom: 0;
  margin-bottom: 10%;
}
.image-user-details .image-owner {
  font-weight: 700;
}
.image-user-details .image-location {
  font-weight: 200;
  font-size: 14px;
}
.picture-grid img {
  width: 100%;
  height: 100%;
}
.picture-grid .image-wrapper {
  max-height: 100%;
  overflow: hidden;
}
.picture-grid > div:nth-child(odd) {
  grid-row-end: span 10;
}
.picture-grid > div:nth-child(even) {
  grid-row-end: span 9;
}
</style>
