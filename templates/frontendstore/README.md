# E-commerce template

## Content

As of right now the template includes a landing page, product detail page, cart and auth pages.

To avoid setting up a database (which would be super easy with [supabase](https://www.supabase.com), but you know, just a demo), product data comes from a json file and the cart is built with Context API. That's not how we usually do it but for the purpose of this demo it should suffice (for now 😈).

## To do

In the close future I'll be adding the following to the template, in no particular order:

- Dynamic product detail page. Right now it is static with just React dummy content but it will be statically generated for every item available on the store.

- A checkout page, fully functional with Stripe Payment Element and Payment Intents API, the most straightforward way to get paid.

- Functioning product filter, that will also power the "Trending" and "On sale" items on the navigation bar.

- An Admin panel, which would usually be hidden from the user, but for demonstration purposes will be open to you guys so that you can play around with the page (this will probably take the most time).

## Installing this template

The complete project is a monorepo, so you could go to the root folder of the project, run `npm install` then `npm run dev -w templates/frontendstore` and open your browser on localhost:3000

Or if you are just interested in this specific template, navigate to the templates/frontendstore folder and run `npm install`. However, using this approach will force you to have a separate node_modules folder for each template you have installed (probably duplicating packages)

## Contributing

I will be more than glad if anybody wants to say something about this template. I am a lifelong learner and I like listening to feedback. Reach me out on twitter at [@iamjmoa](https://twitter.com/iamjmoa)
