<template>
  <div class="container">
    <div class="container-header">
      <div class="search-input" v-if="!searchEnabled">
        <input
          type="text"
          placeholder="Search"
          @keyup.enter="searchMethod()"
          v-model="search"
        >
      </div>
       <div v-if="searchEnabled" class="search-label">Search result for <span>"{{ search }}"</span> <span class="close-search" @click="toggleSearch">&#10005;</span></div>
    </div>
    <div class="container-picture-grid">
      <PictureGrid />
    </div>
  </div>
</template>

<script>
import PictureGrid from '~/components/PictureGrid.vue';

export default {
  components: {
    PictureGrid
  },
  data() {
    return {
      search: '',
      searchEnabled: false
    }
  },
  computed: {
    
  },
  methods: {
    searchMethod () {
      this.$store.commit('pictures/LOADING', true);
      this.$store.dispatch('pictures/search', this.search);
      this.toggleSearch()
    },
    toggleSearch () {
      this.searchEnabled = !this.searchEnabled;
    }

  }
}
</script>

<style>

:root {
  --transition-duration: 1s
}

div {
  transition: calc(var(--transition-duration) * 0.8);
}
.container {
  width: 100%;
  position: relative;
}
.container .container-header {
  width: 100%;
  background-color: rgb(177, 177, 177);
  height: 250px;
  text-align: center
}
.container .container-header div {
  display: inline-block;
}

.search-label {
  margin-top: 50px;
  font-weight: 700;
  font-size: 30px;
  color: rgb(1, 49, 88)
}
.search-label span {
  color: rgb(104, 104, 104)
}
.search-input {
  width: 40%;
}
.container .container-header input{
  width: 95%;
  outline: none;
  height: 50px;
  border-radius: 5px;
  margin-top: 50px;
  text-indent: 20px;
  border: none;
  font-size: 17px;
}
.container-picture-grid {
  position: absolute;
  top: 70%;
  width: 100%;
}
.close-search {
  color: rgb(7, 7, 7);
  margin-left: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}
</style>
