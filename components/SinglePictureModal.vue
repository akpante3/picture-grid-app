<template>
<div class="">
  <div class="picture-modal-mask">
      <span class="picture-close-btn" @click="togglePictureModal">&#10005;</span>
      <div class="picture-modal-card">
        <img :src="image" />
        <div class="picture-modal-details">
          <div class="image-owner">{{imageDetails.name}}</div>
          <div class="image-location">{{imageDetails.location}}</div>
        </div>
      </div>
  </div>
</div>
</template>

<script>


export default {
  name: 'SinglePictureModal',
  components: {},
  data() {
    return {}
  },
  methods: {
    togglePictureModal() {
      this.$parent.togglePictureModal();
    },
  },
  props:['image', 'imageDetails']
};
</script>

<style scoped>
.picture-modal-mask {
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 1;
  transition: opacity 0.2s;
}
.picture-modal-mask .picture-modal-card {
  width: 500px;
  height: 500px;
  border: 1px solid whitesmoke;
  display: grid;
  grid-template-rows: 80% 20%;
  border-radius: 7px;
  margin-bottom: 100px;
  overflow: hidden;
}
.picture-modal-mask img {
  width: 100%;
  height: 100%;
}
.picture-modal-details {
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 30px;
}
.picture-close-btn {
  font-size: 25px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 4%;
  right: 4%;
  cursor: pointer;
}
.picture-modal-details .image-owner {
  font-weight: 700;
}
.picture-modal-details .image-location {
  font-weight: 200;
  font-size: 14px;
}
  /* TRANSITION */
</style>
