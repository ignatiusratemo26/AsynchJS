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
  // promise chaining
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
  })
  .catch(() => {
    console.log("customer left");
  })
  // finally() block will run regardless the code is resolved or rejected
  .finally(() => {
    console.log("Day ended. SHop is closed.");
  });


// now implementing the async await
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruits[0]}`);

    await time(0000);
    console.log("start production");

    await time(1000);
    console.log("cut the fruit");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed. ");
  }
}

kitchen();
