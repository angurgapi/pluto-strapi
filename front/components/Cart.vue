<template>
<div class="uk-card uk-card-default uk-card-body">
  <h4>Вы выбрали:</h4>

  <div v-if="price > 0">

    <table class="uk-table uk-table-striped uk-table-small uk-table-responsive">
        <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
           
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in selectedTasks">
              <td class="uk-width-3-5">{{ task.name }}</td>
              <td class="uk-width-2-5">{{ task.price }} б.р <a><span class="uk-badge" style="background: #f0506e;" @click="removeFromCart(task)">-</span></a></td>              
              
            </tr>
        </tbody>
    </table>

    <button class="uk-button uk-button-primary checkout-btn" @click="goToCheckout" name="button">Оформить ({{ price }} б.р.)</button>
  </div>

</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove',
      emptyCart: 'cart/emptyList'
    }),
    goToCheckout() {

      const isConnected = this.$store.getters['auth/username']
      // if (!isConnected) {
      //   this.$router.push('/login')
      //   return
      // }
      this.$router.push('/checkout')
    },
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    selectedTasks() {
      return this.$store.getters['cart/items']
    },
    price() {
      return this.$store.getters['cart/price']
    },
    numberOfItems() {
      return this.$store.getters['cart/numberOfItems']
    }
  }
}
</script>