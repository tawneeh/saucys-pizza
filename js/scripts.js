//Business Logic for Pizza Orders -----
function PizzaOrder() {
  this.pizzas = [];
  //this.totalPrice = basePrice + calculatedPrice;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.calculatePrice = function() {
  this.basePrice = 5;
  for (i=0; i < PizzaOrder.length; i++) {
    if (pizza.size === "small")
      console.log("Small pizza!");
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