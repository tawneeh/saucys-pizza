//Business Logic for Pizza Orders -----
function PizzaOrder() {
  this.pizzas = [];
  //this.price = 5;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.calculatePrice = function(pizza) {
  this.price = 5;
  for (i=0; i < pizza.length; i++) {
    if (pizza.size === "Small") {
      return this.price * 2;
    } else if (pizza.size === "Medium") {
      return this.price * 2.5;
    } else if (pizza.size === "Large") {
      return this.price * 3.5;
    }
  }
}

// Business Logic for Pizzas ---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}