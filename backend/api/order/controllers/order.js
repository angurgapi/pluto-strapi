'use strict';
// const stripe = require('stripe')('pk_test_51HFeufACCK4xfeV1OMDQ0r8X0ojxhIDwrIvX0cisr9o4mBAi9oIOCWcr2F0dy1PcJTzFiEonpZB99CtFFwOJ8yac00MN9BJhqe');

module.exports = {
  create: async ctx => {
    const {
      email,
      amount,
      tasks, 
      fio,
      location,      
      todo,
      deathdate        
  
    } = ctx.request.body;

    // Charge the customer
    // try {
    //   await stripe.charges.create({
    //     // Transform cents to dollars.
    //     amount: amount * 100,
    //     currency: 'usd',
    //     description: `Order ${new Date()} by ${ctx.state.user.id}`,
    //     source: token,
    //   });

      // Register the order in the database


      try {
      	console.log('got to this point!')
        console.log(ctx.request.body)
        const order = await strapi.services.order.create({
          user: ctx.state.user.id,
          email,
          amount,
          tasks, 
          fio,
          location,      
          todo,
          deathdate,  
        });
		console.log('got to this point also!')
        return order;
      }
      catch (err) {
        // Silent
      }
    } 
  }
