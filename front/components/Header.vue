<template>
  <div class="banner-wrapper">
    
    <div class="banner">
      <h1>Уборка могил в Гомеле</h1>
      <p>Приведите в порядок могилу близкого человека, даже если находитесь далеко.
          Мы обеспечим уборку и фотоотчет до/после</p>
    </div>
  </div>
</template>

<style lang='sass'>
@font-face
    font-family: 'Roboto'
    font-style: normal
    font-weight: 300
    font-display: swap
    src: url('~assets/fonts/RobotoMono.ttf') format('truetype')

.banner-wrapper
  height: 300px
  z-index: -1
  width: 100%
  background-image: url('/img/header.jpg')
  background-size: cover
  display: flex
  flex-direction: column


.banner
  background: rgba(0,0,0,.7)
  z-index: 2
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  color: #fff
  width: 100%
  padding: 0 10px 0 10px
h1
  color: #fff

</style>

<script>
  export default{
    
    
  }
</script>