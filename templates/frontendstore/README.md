# E-commerce template

## Content

As of right now the template only includes a landing page, a product detail page and a cart page.

The cart is powered by React's Context API, but that's not how we usually do it. The better way to do it is by having the user sign in and then saving his/her cart in a database. Or in case the user doesn't want to sign in we can just create a unique ID (with tools like [Nano ID](https://github.com/ai/nanoid)), save that on a database along with the cart content and finally, set a cookie with the ID that we'll use to retrieve the cart.

## To do

In the close future I'll be adding the following to the template, in no particular order:

- Dynamic product detail page. Right now it is static with just React dummy content but it will be statically generated for every item available on the store.

- A checkout page, fully functional with Stripe Payment Element and Payment Intents API, the most straightforward way to get paid.

- A whishlist that we could use to track lists of items that we are interested in.

- Functioning product filter, that will also power the "Trending" and "On sale" items on the navigation bar.

- An Admin panel, which would usually be hidden from the user, but for demonstration purposes will be open to you guys so that you can play around with the page (this will probably take the most time).


## Contributing

I will be more than glad if anybody wants to say something about this template. I am a lifelong learner and I like listening to feedback. Reach me out on twitter at [@iamjmoa](https://twitter.com/iamjmoa)