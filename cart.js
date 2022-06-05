///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.map(function (obj) {return obj["price"];}).reduce(function(total, element){
    return total + element;
  })
//console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal + (cartTotal * tax)) - couponValue;
}
//console.log(calcFinalPrice(20, 5, .6));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE: A Customer object will have the following properties. 
    A name to Identify the customer. This will be a string type.
    An address to be able to send our orders to. this will also be of a string type.
    A phone number to be able to contact the customer. I think I will make this a number type for now. It could be a string type to include dashes and stuff though.
    Age of the customer to make sure they are old enough to order. this will be a number type.
    Finally, the customer will have the most recent order logged in this property (lastOrder). It will be a string type.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: "Kyle",
    age: 40,
    phoneNumber: 8014424972,
    address: "178 e. devMountain dr. Provo UT, 84606",
    lastOrder: "1 Barbeque Chicken Pizza",
};
