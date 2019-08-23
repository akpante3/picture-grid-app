<template>
    <div class="spinner">
        <font-awesome-icon icon="spinner" spin size="6x"/>
    </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped>
  .spinner {
    margin-top: 200px;
    width: 100%;
  }
  @media only screen and (max-width: 950px){
  .spinner {
    top: 30%;
    left:42%;
  }
}
@media only screen and (max-width: 400px){
  .spinner {
    top: 30%;
    left:35%;
  }
}
</style>