# ShoppingApp

  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Introduction

  The Shopping app allows user to browse the products and purchase them.
  
  Currently the website is in development phase so only the home page and search function is avaiable and other tabs and functionality will be added in the future.


## FUNCTIONALITY OVERVIEW

  The example application is a Shopping app website. It uses a custom API for all requests (For now all the api request are mocked).

  # Current functionality:
    Home page (URL: /home )
      Has list of products which user can browse and also search for specific product.
    Signup page
      User can register using name, email and password.
    Login page 
      User can signin using email and password
    Product page
      Has more details of the particular product and user can either add to cart to buy(functionality to be added in future) it.
    Shopping cart
      User can add products to cart and buy them at the same time.

  # Funtionality to be added in the future
    Multiple product categories.
    Orders page
    Profile page
    Purchased products tracking page


## How to setup project in Local for developers
  # Supported node versions
    Node version: v18.19.0 and newer

  # First clone the Repo
    To clone using HTTPS link open command interface and enter
      # git clone https://github.com/tippanamadhusudan/Shopping-app.git
    To clone through GITHUB CLI
      # gh repo clone tippanamadhusudan/Shopping-app (to clone through Github CLI)

  # Install node modules: 
    Open the project folder in the VScode or your preferred editor. Open command terminal and enter 
      # npm install.
    This will install all the dependencies of the project.
  
  # Development server
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

  # Build
    Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

  # Running unit tests
    Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
