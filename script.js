class VendingMachine {
   constructor(items, initMoney) {
       this.machineMoney = initMoney;
       this.items = [];
       for (let i = 0; i < items.length; i++) {
           this.items[items[i].code] = items[i];
       }
   }
   updateQuantity(itemCode) {
       let item = this.items[itemCode];
       let quantity = item.quantity - 1;
       return quantity;
   }
   currentMachineMoney() {
       return ("The amount of money in the machine : " + this.machineMoney.toFixed(2));
   }
   currentItemQuantity(itemCode) {
       let item = this.items[itemCode.toUpperCase()];
       return ("The quantity of " + item.name + " is now : " + item.quantity);
   }
   vend(itemCode, insertedMoney) {
       let change, changeLeft = 0;
       let message = "";
       itemCode = itemCode.toUpperCase();
       let item = this.items[itemCode];
       if (item == undefined || item === null) {
           message = "Invalid selection! : Money in vending machine = " + this.machineMoney.toFixed(2);
       }
       else if (item.quantity === 0) {
           message = item.name + ": Out of stock!";
       }
       else if (insertedMoney <= 0 || insertedMoney < item.price) {
           message = "Not enough money!";
       }
       else {
           item.quantity = this.updateQuantity(item.code);
           change = insertedMoney - item.price;
           changeLeft = change.toFixed(2);
           message = "Vending " + item.name;
           if (insertedMoney !==  item.price) {
               message += " with " + changeLeft + " change.";
           }
           this.machineMoney = this.machineMoney + item.price;
       }
       return message;
   }
}
var items = [
   { name: "Smarties", code: "A01", quantity: 10, price: 0.6 },
   { name: "Twix", code: "A02", quantity: 5, price: 0.6 },
   { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
   { name: "Snickers", code: "A04", quantity: 1, price: 0.25 },
   { name: "Donuts", code: "A05", quantity: 0, price: 0.5 },
   { name: "Three Musketeers", code: "A06", quantity: 2, price: 0.35 }
];
let machine = new VendingMachine(items, 11.20);

console.log("1 -- " + machine.vend("a01", 0.10) + " --");
console.log("2 -- " + machine.vend("A05", 0.90) + " --");
console.log("3 -- " + machine.vend("a01", 0.90) + " --");
console.log("4 -- " + machine.vend("A02", 0.60) + " --");
console.log("5 -- " + machine.vend("A09", 0.90) + " --");
console.log("6 -- " + machine.vend("A04", 0.25) + " --");
console.log(machine.currentItemQuantity("a04"));
console.log(machine.currentMachineMoney());
