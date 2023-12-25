import stripe from "stripe";
const stripeInstance = stripe("sk_test_51K0kpIArG5jXDgnG5WIFBDQL6dY5UFxFCwzGsWb9ehvxnCjxaKqFrVZWA2GjYoE854qjb8OM1WVa30AiktdMH83s00hzjG2A6z");

const checkout = async (req, res) => {
    const { items } = req.body
    // const lineitems = [
    //     {
    //       price_data: {
    //         currency: 'pkr',
    //         product_data: {
    //           name: 'T-shirt',
    //         },
    //         unit_amount: 2000,
    //       },
    //       quantity: 1,
    //     },
    //   ]
    // const session = await stripeInstance.checkout.sessions.create({
    //     line_items: lineitems,
    //     mode: 'payment',
    //     success_url: 'http://localhost:4242/success',
    //     cancel_url: 'http://localhost:4242/cancel',
    //   });
    
    //   res.redirect(303, session.url);
    // });
  
    // res.redirect(303, session.url);

    const lineItems = items.map((item) => ({
        price_data: {
            currency: 'pkr',
            product_data: {
                name: item.title
            },
            unit_amount: item.price * 100
        },
        quantity: 1
    }));

    const session = await stripeInstance.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/PaymentSuccessPage',
    cancel_url: 'http://localhost:3000/PaymentCancelPage',
});
res.json({ id: session.id })

}

export default checkout;