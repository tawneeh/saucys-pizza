//Business Logic for Pizza Orders -----
function PizzaOrder() {
  this.pizzas = [];
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.calculatePrice = function() {

}

// Business Logic for Pizzas ---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}



// User Interface Logic -----

const pizzaSize = $("#size").val();