//Business Logic for Pizza Orders -----
function PizzaOrder() {
  this.pizzas = [];
  //this.totalPrice = 0;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.calculatePrice = function(pizza) {
  if (this.pizza.size == "small" {
  
  }
};

// Business Logic for Pizzas ---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}






/*
PizzaOrder.prototype.calculatePrice = function(pizza) {
  this.basePrice = 5;
  for (i=0; i < pizza.length; i++) {
    if (this.pizzas[i].size == "Small") {
      this.totalPrice = this.basePrice += 10;
    }
  }
};
*/
// User Interface Logic -----
/*
$(document).ready(function() {
  let pizzaOrder;
  let newOrder = new PizzaOrder();
  newOrder.addPizza();


  const pizza.size = $("#size").val();
  const pizza.toppings = $("#
*/