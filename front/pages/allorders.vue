<template>

  <div>
      <section class="main-content">
      <div class="wrapper">
        <h1 class="title has-text-centered">Все заявки</h1>
        <div class="columns is-multiline">
          <div class="column" v-for="order in orders" :key="user._id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title is-centered">{{ order.email }}</p>
                
              </header>
              <div class="card-content">
      
               
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import ordersQuery from '~/apollo/queries/orders'
export default {
  head: {
    title: "users"
  },
  computed: { 
    ordersList() {
      return this.orders
    },
  },
  
  data() {
    return {
      orders: []
    };
  },
  apollo: {
    orders: {
      prefetch: true,
      query: ordersQuery
    }
  },
};
</script>