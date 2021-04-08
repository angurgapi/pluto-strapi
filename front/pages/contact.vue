<template>
  <div class="page-wrapper">
    <div class="contact-block">
  
      <div class="contact-list">
            <h2 class='section-headline'>наши контакты</h2>
            <div class="contact-item">      
              <div class="messengers">
                <font-awesome-icon :icon="['fas', 'phone']"/>
                <font-awesome-icon :icon="['fab', 'whatsapp']" style='color: #04c240'/>
                <font-awesome-icon :icon="['fab', 'viber']" style='color: #67059c'/>                
              </div>
              <a href="tel:+79104923737">8-910-492-37-37</a>
            </div>
            <div class="contact-item">
              <font-awesome-icon :icon="['fab', 'telegram']" style='color: #84c7fa'/>
              <a href="tel:+79104923737">8-910-492-37-37</a>
            </div>
            <div class="contact-item">
              <font-awesome-icon :icon="['fas', 'envelope']"/>
              <a href="mailto:xxkjdskfjsk@gmail.com" target="_blank">xxkjdskfjsk@gmail.com</a>
           </div>
      </div>     
      
    </div>

  </div>
</template>

<script>
 
export default {
  data(){
    return {
      coordinates: {
        lat: 0,
        lng: 0
      }
    }
  },
  created(){
    console.log('geolocation' in navigator)
  }
}
</script>

<style scoped lang="sass">
.main-block
  max-width: 100%
  margin: 0
  display: flex
  justify-content: center
  align-items: center

.contact-block
  margin: 40px auto 70px auto
  width: 90%
  font-size: 28px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: row
  margin-bottom: 50px
  overflow: hidden

a
  text-decoration: none
  color: rgba(0,0,0,.7)
  margin-left: 20px
  
.messengers, .contact-item
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between

.messengers
  width: 100px

@media(max-width:1036px)
  .contact-block
    width: 95%
    flex-direction: column
    font-size: 24px
 
@media(max-width:500px)
  .main-block
    top: -120px

fa
  height: 40px
  width: 40px
  color: black

</style>
