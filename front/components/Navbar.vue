<template>
  <div class='header'>    
    <div class="uk-navbar-left">
        <nuxt-link to="/"><div class="navbar-logo"><img src="/img/icon.png"></div></nuxt-link>
        </div>
        
    <div class="navbar-right" ref='nbar'>
      <nuxt-link class='navlink' to="/">Главная</nuxt-link>
      <ul class='logged' v-if="username">
        <li><nuxt-link class='navlink' to="/users">Кабинет</nuxt-link></li>
        <li @click='logout'><nuxt-link class='navlink' to="#">Выход</nuxt-link></li>
      </ul>
     <!--  <ul class="guest" v-else>
        <li><nuxt-link class='navlink' to="/login">Вход</nuxt-link></li>
        <li><nuxt-link class='navlink' to="/register">Регистрация</nuxt-link></li>
      </ul> -->

      <!-- <nuxt-link class='navlink' to="/orders" v-if="admin">Все заявки</nuxt-link> -->
      
      <nuxt-link class='navlink' to="/contact">Связаться</nuxt-link>

    </div>        
      
    <div class='hamburger' @click='processBars()'>
      <font-awesome-icon :icon="['fas', 'bars']" ref='bars' class='hambars'/>
      <font-awesome-icon :icon="['fas', 'times']" ref='times' class='times hid'/>
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
.navbar-logo
  height: 28px
  width: 28px
  background: #fff
  border-radius: 50%
  border: 2px solid rgba(0,0,0,.5)
.header
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 20px
  box-shadow: 0 0 15px #333
.hamburger
  position: absolute
  z-index: 1010
  right: 20px
  top: 20px
  height: 40px
  width: 40px
  display: none
  align-items: center
  justify-content: center
  .hambars, .times
    color: #000
    height: 30px
    width: 30px
.hid
  display: none

.navbar-right
  display: flex
  justify-content: center
  align-items: center  
  flex-direction: row
  a
    text-decoration: none
    font-family: Roboto
    color: rgba(0, 0, 0, .7) 
    font-size: 18px
    font-weight: 300
    margin-right: 20px
.nuxt-link-exact-active
    color: rgba(255, 255, 255, 1)
.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: rgba(0, 0, 0, .9) 

.logged, .guest
  list-style: none
  display: flex
  flex-direction: row
@media(max-width: 600px)
  .navbar-right
    display: none
    margin-top: 30px
    a
      font-size: 28px
  .hamburger
    display: flex
  .header
    flex-direction: column

.showNav
  display: flex
  flex-direction: column
  z-index: 1002 

</style>

<script>
import { mapMutations } from 'vuex'

export default{
  computed: {
    username() {
      return this.$store.getters['auth/username']
      }
  },
  methods: {     
    processBars(){
      this.$refs.times.classList.toggle('hid')
      this.$refs.bars.classList.toggle('hid')
      this.$refs.nbar.classList.toggle('showNav')
    },
    ...mapMutations({
      logout: 'auth/logout'
    })
  },
   
}
</script>