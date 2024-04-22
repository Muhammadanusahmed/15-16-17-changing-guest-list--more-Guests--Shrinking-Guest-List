// Question 15: Changing Guest List:
var guestlist = ["ali"];
var newguest = "Muhammad Anus Ahmed";
console.log("".concat(guestlist[0], " can't make it to dinner."));
guestlist.shift();
guestlist.unshift(newguest);
guestlist.forEach(function (name) {
    console.log("Dear ".concat(name, " , would you like to join me for dinner?"));
});
console.log("---------------------------------------------------------");
// Question 16: More Guests:
var guests = ["basit", "amir", "umar"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("shahid");
guests.splice(guests.length / 2, 0, "hadi");
guests.push("khalid");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("---------------------------------------------------------");
// 17)Shrinking Guest List
console.log("Unfortunately, I can only invite two people for dinner.");
var Guest6 = guests.pop();
var Guest1 = guests.shift();
console.log("Sorry, ".concat(Guest6, ", I can't invite you to dinner."));
console.log("Sorry, ".concat(Guest1, ", I can't invite you to dinner."));
var removedGuests = guests.splice(1, 2);
removedGuests.forEach(function (element) {
    console.log("Sorry, ".concat(element, ", I can't invite you to dinner."));
});
guests.forEach(function (element) {
    console.log("Dear ".concat(element, ", you're still invited to dinner."));
});
