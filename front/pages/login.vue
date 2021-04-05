<template>
    <div class='page-wrapper'>
        <div class="form-wrapper">
              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">
                      <legend class="uk-legend">Вход</legend>

                      
                      <div class="uk-margin">
                        <input class="uk-input" v-model="email" type="email" placeholder="E-mail">
                      </div>

                      <div class="uk-margin">
                        <input class="uk-input" v-model="password" type="password" placeholder="Пароль">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-width-1-1" :disabled="loading" type="submit">Войти</button>
                      </div>         

                  </fieldset>
              </form>

          </div>
      </div>
	</div>
</template>


<style lang="sass">
.page-wrapper
	display: flex
	justify-content: center
	align-items: center
.form-wrapper
	margin-top: 50px
	max-width: 500px
legend
	text-align: center
	color: #fff

</style>

<script>
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  head() {
    return {
      title: "Авторизация"
    };
  },
  data() {
    return {
      email: "",
      password: "",        
      loading: false
    }
  },
methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.go(-1)
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>