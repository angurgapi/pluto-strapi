<template>
<div>
  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> назад</a>
<div class="page-wrapper">
  <h2>{{ pack.name }} пакет</h2>

  <h4 class="hint">Нажмите <span class="uk-badge" style="background: #1e87f0;">+</span>, чтобы добавить услугу в корзину, или на <span class="uk-badge" style="background: #f0506e;">-</span>, чтобы удалить услугу из корзины</h4>

  <div class="checkout-grid">
    <table class="uk-table uk-table-striped uk-table-responsive">
        <tbody>
            <tr v-for="task in pack.tasks">
              <td class="uk-width-2-3"><p class='card-title' v-if="pack.name == 'Индивидуальный'">{{ task.name }}</p><p class='task-data'>{{ task.description}}</p></td>
              <td class="uk-width-1-3"><p>{{ task.price }} б.р <span class="uk-badge" style="background: #1e87f0;" @click="addToCart(task)">+</span></p></td>
            </tr>
        </tbody>
    </table>


    <div class="uk-card">
      <Cart />
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import Cart from '~/components/Cart.vue'
import packQuery from '~/apollo/queries/pack/pack'

export default {
  data() {
    return {
      pack: Object
    }
  },
  apollo: {
    pack: {
      prefetch: true,
      query: packQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  components: {
    Cart
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>

<style lang='sass'>
.pack-listed
  min-width: 100%
.card-title
  font-weight: 600
  text-align: center
.task-card-header
  display: flex
  flex-direction: row
  height: 30px
  justify-content: space-between
  align-items: center
.task-data
  text-align: justify
.task-description
  margin: 0 10px 0 10px

</style>