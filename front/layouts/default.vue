<template>
  <div>
   <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="sass">
html 
  font-family: 'Source Sans Pro', BlinkMacSystemFont,'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  color: rgba(0,0,0,.8)
  background: #FAFAFA

*,
*::before,
*::after 
  box-sizing: border-box
  margin: 0
.page-wrapper
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
.uk-button
  border-radius: 3px
  background: linear-gradient(241.43deg, #E6DADA 0%, #274046  51%, #E6DADA 100%)
  text-transform: capitalize
  color: #fff
  font-weight: 600
.wrapper
  max-width: 1440px
  margin: auto
.uk-input
  border: 2px solid rgba(0,0,0,.5)
  border-radius: 3px
.main-content
  margin: auto
  max-width: 90%
  display: flex
  align-items: center
  justify-content: center
.checkout-btn, .pick-btn
  height: 50px
  display: flex
  align-items: center
  justify-content: center
  line-height: 18px
  margin: auto
.pick-btn
  width: 20px
  font-size: 20px
.uk-badge
  font-weight: 600
  font-size: 1.2rem
  min-height: 25px
  min-width: 25px
.uk-form
  padding: 20px
.hint
  line-height: 18px
  max-width: 90%
  opacity: .6
  margin-top: 0
  transform: scale(.7, .7)
textarea
  min-height: 60px
.checkout-grid
  max-width: 95%
  display: grid
  grid-template-columns: 2fr 1fr
  grid-gap: 1rem
  margin-bottom: 100px
  text-align: center
@media(max-width: 800px)
  .uk-card
    margin: auto
  .checkout-grid
    grid-template-columns: 1fr
</style>

<script>

import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>