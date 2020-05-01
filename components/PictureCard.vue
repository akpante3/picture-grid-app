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
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}

.image-wrapper:hover .image-overlay {
  --transition-duration: 0.5s;
 transform: translateY(100%);

}
.image-overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
  opacity: 1;
  position: absolute;
  color: white;
  padding: 5%;
  cursor: pointer;
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
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
