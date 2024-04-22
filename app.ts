// Question 15: Changing Guest List:

const guestlist :string[] = ["ali"];

const newguest :string = "Muhammad Anus Ahmed"
console.log(`${guestlist[0]} can't make it to dinner.`);

guestlist.shift()
guestlist.unshift(newguest)


guestlist.forEach(name => {
    console.log(`Dear ${name} , would you like to join me for dinner?`)
});
console.log("---------------------------------------------------------");


// Question 16: More Guests:

let guests: string[] = ["basit", "amir", "umar"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("shahid");
guests.splice(guests.length / 2, 0, "hadi");
guests.push("khalid");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("---------------------------------------------------------");


// 17)Shrinking Guest List

console.log("Unfortunately, I can only invite two people for dinner.");

    let Guest6 = guests.pop()
    let Guest1 = guests.shift()
    console.log(`Sorry, ${Guest6}, I can't invite you to dinner.`);
    console.log(`Sorry, ${Guest1}, I can't invite you to dinner.`);

    let removedGuests = guests.splice(1, 2); 
    
    removedGuests.forEach(element => {
        console.log(`Sorry, ${element}, I can't invite you to dinner.`);
    });
    guests.forEach(element => {
        console.log(`Dear ${element}, you're still invited to dinner.`);
    });