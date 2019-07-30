<template>
  <div>
    <div class="picture-grid">
      <PictureCard 
      image='https://answersafrica.com/wp-content/uploads/2013/04/Africa-4.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://melaninterest.com/wp-content/uploads/2018/12/blart-15460099418p4lc.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://media.istockphoto.com/vectors/portrait-of-beautiful-african-woman-in-turban-vector-id486351828?k=6&m=486351828&s=612x612&w=0&h=pfSamk5lBduo3vv8uouCy1rBK4H-kCm2YEikWNC4LDE='
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://answersafrica.com/wp-content/uploads/2013/04/Africa-4.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://answersafrica.com/wp-content/uploads/2013/04/Africa-4.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://melaninterest.com/wp-content/uploads/2018/12/blart-15460099418p4lc.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://media.istockphoto.com/vectors/portrait-of-beautiful-african-woman-in-turban-vector-id486351828?k=6&m=486351828&s=612x612&w=0&h=pfSamk5lBduo3vv8uouCy1rBK4H-kCm2YEikWNC4LDE='
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
      <PictureCard 
      image='https://answersafrica.com/wp-content/uploads/2013/04/Africa-4.jpg'
      :imageDetails="{ name: 'david somebody', location: 'Somewhere in Nigeria' }"
      />
    </div>
    <div :class="{'dont-display': !showModal}">
      <SinglePictureModal
        :image="image"
        :imageDetails="imageDetails"
      />
    </div>
  </div>
</template>

<script>
  import PictureCard from './PictureCard.vue';
  import SinglePictureModal from './SinglePictureModal.vue';

  export default {
    components: {
      PictureCard,
      SinglePictureModal
    },
    data() {
      return {
        showModal: false,
        image: '',
        imageDetails: ''
      }
    },
    methods: {
      togglePictureModal(image, imageDetails) {
        this.showModal = !this.showModal;
        this.image = image;
        this.imageDetails = {...imageDetails}
        return
      } 
    }
  }
</script>

<style>
.picture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  width: 60%;
  margin: 0 auto;
}
.dont-display {
 display: none;
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
