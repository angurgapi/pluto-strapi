<template>

  <div>

    <Header />
    <hr class="uk-divider-icon">
    <section class="page-wrapper">
      <h1 class="headline">Доступные пакеты услуг</h1>
      <div class="grid-wrapper">       

        <div class="uk-card uk-card-default uk-card-hover" v-for="pack in packsList" v-bind:key="pack">        
          <div class="card-header">
            <div class="card-icon"><font-awesome-icon :icon="`${pack.icon}`" style='color: rgba(255,255,255,.8)'/></div> 
            <h3 class="card-title">{{ pack.name }}</h3>                               
          </div>
          <div class="uk-card-body">
            <p>{{ pack.description }}</p>
            <p class='card-price' v-if="`${pack.price}` > 0">{{ pack.price }} б.р.</p>
          </div>
          <div class="card-footer">  
            <nuxt-link :to="{ name: 'packs-id', params: { id: pack.id }}" class="uk-button uk-button-primary">Подробнее</nuxt-link>
          </div>
        </div>
        </div>
    
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import packsQuery from '~/apollo/queries/pack/packs'

export default {
  head: {
    title: "Home"
  },
  computed: { 
    packsList() {
      return this.packs
    },
  },
 
  data() {
    return {
      packs: []
    };
  },
  apollo: {
    packs: {
      prefetch: true,
      query: packsQuery
    }
  },
}
</script>

<style lang="sass">
  .grid-wrapper
    max-width: 95%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 1rem
    margin-bottom: 100px
  .hero
    background: linear-gradient(241.43deg, #3B37F1 0%, #FF007D 100%)
  .headline
    text-align: center
    color: rgba(0,0,0,.5)
  .uk-card
    min-height: 300px
  .card-header
    height: 60px
    background-color: #000000
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%)
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center 
    h3
      height: 100%
      color: rgba(255,255,255,.8)
    .card-icon
      border-radius: 50%
      background-color: linear-gradient(315deg, #fff 0%, #414141 74%)
      margin-right: 20px
  .card-price
    text-align: center
  .card-footer
    position: absolute
    bottom: 0
    width: 100%
    height: 60px
    display: flex
    justify-content: center
    padding-bottom: 20px
  .uk-card
    max-width: 300px
@media(max-width: 800px)
  .grid-wrapper
    grid-template-columns: 1fr
</style>