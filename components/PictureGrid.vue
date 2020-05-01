<template>
  <div>
    <div class="page-loader" v-if="loading">
      <Spinner />
    </div>
    <div class="picture-grid" v-if="!loading">
      <div v-for="picture in pictures" :key="picture.image" id="card-wrapper">
        <PictureCard 
          :image="picture.urls.regular"
          :imageDetails="picture.user"
        />
      </div>
    </div>
    <div v-show="showModal">
    <!-- <div :class="{'dont-display': !showModal}"> -->
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
  import Spinner from '~/components/Spinner.vue';

  export default {
    components: {
      PictureCard,
      SinglePictureModal,
      Spinner
    },
    data() {
      return {
        showModal: false,
        image: '',
        imageDetails: ''
      }
    },
    mounted () {
      console.log('i dey run')
      this.$store.dispatch('pictures/get')
    },
    computed: {
      pictures () {
        return this.$store.state.pictures.all;
      },
      loading () {
        return this.$store.state.pictures.loading;
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
  width: 100%;
  max-width: 900px;
  padding: 30px;
  margin: 0 auto;
  grid-auto-rows: 150px;
}
@media screen and (min-width: 801px) {
  .picture-grid {
    grid-auto-rows: 30px;
  }
}
.dont-display {
 display: none;
}
.picture-grid .image-wrapper {
  max-height: 100%;
  overflow: hidden;
}
.picture-grid > div:nth-child(odd) {
  grid-row-end: span 5;
}
.picture-grid > div:nth-child(even) {
  grid-row-end: span 4;
}
.page-loader {
 width: 1000px;
 margin: 0 auto;
 text-align: center;
}
</style>
