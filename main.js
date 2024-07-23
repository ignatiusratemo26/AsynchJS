let stock = {
  Fruits: ["strawberry", "mango", "vanilla", "grape"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed. "));
    }
  });
};

order(2000, () => console.log(`${stock.Fruits[0]}`))
// promise chaining using .then() do not apply commas after then()
// there are two arrow fuctions since order() accepts time and work()
  .then(() => {
    return order(0000, () => console.log("Production has started."));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit was chopped."));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start the machine."));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Icecream placed on ${stock.holder[0]} `)
    );
  })
  .then(() => {
    return order(2000, () =>
      console.log(`${stock.toppings[0]} placed on icecream. `)
    );
  });
