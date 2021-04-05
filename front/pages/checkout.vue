<template>
<div>

  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span>Назад</a>

    <div uk-grid>
        <div class="uk-width-2-3@m">
            <form class='uk-form' @submit.stop.prevent="handleSubmit">
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">Оформление заказа</legend>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">e-mail</label>
                        <input class="uk-input" v-model="email" type="text" placeholder="sergeev@mail.ru">
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">ФИО на надгробии</label>
                        <input class="uk-input" v-model="fio" type="text" placeholder="Сергеев Исаак Юрьевич">
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Место захоронения</label>
                        <input class="uk-input" v-model="location" type="text" placeholder="Волотовское кладбище">
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Дата смерти</label>
                        <input class="uk-input" v-model="deathdate" type="text" placeholder="2000">
                    </div>
                     <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Дополнительная информация</label>
                        <textarea class="uk-input" v-model="todo" type="text" placeholder="Покрасить ограду в зеленый цвет"></textarea> 
                    </div>


                    <div class="uk-margin">
                      <button class="uk-button uk-button-primary" name="button">Завершить</button>
                    </div>

                </fieldset>
            </form>
        
        </div>
        <div class="uk-width-expand@m">
            <Cart />
        </div>
    </div>

</div>
</template>

<script>
import Cart from '~/components/Cart.vue'
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  components: {
    Cart
  },
  data() {
    return {
      email: '',
      fio: '',
      location: '',
      deathdate: '',
      todo: '',
      // price: ''
    }
  },
  computed:{
    price() {
      return this.$store.getters['cart/price']
    },
  },
  methods: {
    async handleSubmit() {
      this.loading = true      
      try {
        await strapi.createEntry('orders', {
          amount: this.$store.getters['cart/price'],
          tasks: this.$store.getters['cart/items'],
          location: this.location,
          email: this.email,
          fio: this.fio,
          todo: this.todo,
          deathdate: this.deathdate
        })
        alert('Ваша заявка успешно оформлена')
        this.emptyCart()
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        console.log('An error occurred.')
      }
    },
    ...mapMutations({
      emptyCart: 'cart/emptyList',
    })
  }
}
</script>