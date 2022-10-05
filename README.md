# Hip Eats

***Where the most hip food being delivered at your doorstep!***

Author: Jane Valencia

Version: 1.0.0 

Updated: 2022

***DISCLAIMER:*** *This repo is to be forked, copied, and used for educational-purpose only.*

## Description

Hip Eats is a clone-site of UberEats. 

This project is done with a purpose to test your knowledge in:
- Reactjs (Create React-App)
- HTML
- CSS/SASS with TailwindCSS
- Javascript/Typescript
- React-Router-Dom v6
- React-Icons
- **Bonus:** Add automation-testing framework Cypress.io
- **Upgrade:** Make use of Headless CMS (Content Management System) such as WordPress, Netlify-CMS, Contentful, etc.

## Setup

### Development
1. Clone the project or download src-code as ZIP from *staging* branch.
2. This project is bootstraped using yarn, so to install dependencies simply run `yarn`.
3. Once all dependencies are installed, to start the development server simply run `yarn start`.
4. Have fun tweaking the project to your own-liking! 🚀

### Project Structure

- All source code is inside the `/src` folder.
- Reusable components are inside the `/src/components` folder. If you create a new component, please remember to import it into `/src/components/index.js` as this is the central-logbook to all of the exported components to be used elsewhere.
- Sample data is inside `/src/data/sample.js`. You do not have to use this. If you prefer, you can create an API or fetch from fake-APIs to load up your data.
- Pages are inside `/src/pages`.
- Types are defined inside `/src/types/index.ts`.
- `/src/App.js` contains all the routes defined for this project.
- As I am using TailwindCSS, I only have one CSS file that is `/src/index.css`. *Note:* You can set your default theme, utilities-class, etc on `tailwind.config.js`. Read TailwindCSS documentation to know more.

### Testing

Testing result is documented in the pull-requests. 

To review PRs list, go [here](https://github.com/janevalencia/hip-eats/pulls?q=is%3Apr+is%3Aclosed).

*Future works:*
- e2e UI testing will be added as part of the enhancement of this project.

## Feature

User should be able to enjoy the following features of Hip-Eats:

- View list of top-rated food.
- Filter list of top-rated food by categories.
- Filter list of top-rated food by pricing.
- Add food to cart.
- Remove selected food from cart.
- View site on mobile/tablet mode.

## Scope

- [x] Fetch data from *src/data/sample.js* to simulate API response.
- [x] Responsive layout with TailwindCSS flexbox and grid.
- [x] Mobile-friendly.
- [x] Able to filter menu items by category: All, Burgers, Italian, etc.
- [x] Able to filter menu items by pricing.
- [x] Able to add/remove food-item to/from cart.
- [x] Able to view Orders page.
- [x] User-friendly 404:Not Found page will be thrown if user attempts to access unavailable routes.
- [ ] *Upgrade:* Fetch data from CMS (Contenful, Netlify-CMS, WordPress, etc).
- [ ] *Upgrade:* create & run e2e regression testing on CI/CD pipeline.

### Out of Scope
This project will exclude any payment system i.e. the (backend) Cart function is out of scope. Hip Eats solely focusing on building the UI layout, components, and design/UX.

Not all sidebar-nav-menu have links attached. Only the `Orders` nav will work and direct user to Orders page.

## Final Thoughts

I had a lot of fun creating this project. Hopefully you find this repo useful and it may inspire you to build more projects!

Connect with me:

- [LinkedIn](https://www.linkedin.com/in/janevalencia/)
- [Medium](https://medium.com/@janevalencia)

Have fun building 🚀