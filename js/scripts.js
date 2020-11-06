//Business Logic for Pizza Orders -----
function PizzaOrder() {
  this.pizzas = [];
  this.price = 5;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.calculatePrice = function(pizza) {
  thistotalPrice = this.price + this.totalPrice;
  for (i=0; i < pizza.length; i++) {
    if (pizza[i].size="Small")
      return this.totalPrice;
  }
};

// Business Logic for Pizzas ---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}








// User Interface Logic -----
/*
$(document).ready(function() {
  let pizzaOrder;
  let newOrder = new PizzaOrder();
  newOrder.addPizza();


  const pizza.size = $("#size").val();
  const pizza.toppings = $("#
*/