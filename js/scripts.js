function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


Pizza.prototype.calculateSizePrice = function() {
  const basePrice = 5;
    if (this.size === "Small") {
      this.price = basePrice * 2;
    } else if (this.size === "Medium") {
      this.price = basePrice * 3;
    } else if (this.size === "Large") {
      this.price = basePrice * 4;
    }
  }

Pizza.prototype.getPizzaToppingSelections = function() {
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 2;
  }
}

Pizza.prototype.totalPrice = function() {
  this.calculateSizePrice();  
  this.getPizzaToppingSelections(); 
  return this.price;
}

$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault();
      const size = $("#size").val();
      const toppings = $('input:checkbox[name=toppings]:checked').map(function() {
        return this.value;}).get();

      let newPizzaOrder = new Pizza(size, toppings);
      newPizzaOrder.totalPrice();
      $("#show-price").html(`<p>Your pizza costs $${newPizzaOrder.price}</p>`);
  });
});