for (let i = 1; i <= 10; i++) {
    const users = {
        name: prompt('ismingizni kiriting', 'name'),
        age: prompt('yoshingizni kiriting kiriting', "25")
    }
    console.log(i + " - foydalanuvchi ");
    console.log('Ismi ' + users.name);
    console.log('Yoshi ' + users.age);
}

























// const users = {
//     1: {
//         name: prompt("ismingizni kiritng", "name"),
//         age: +prompt("yoshingizni kiriting", "20"),
//     },


//     2: {
//         name: prompt("ismingizni kiritng", "name"),
//         age: +prompt("yoshingizni kiriting", "20"),
//     },




// }
// for (const key in users) {
//     console.log(key + " - foydalanuvchi");
//     for (const keys in users[key]) {
//         console.log(users[key].name);
//         console.log(users[key].age);

//     }
// }
// .key+ " - foydalanuvchi"
// for (const key in users) {
//     let userKey = users[key]
//     for (const keys in userKey) {
//         console.log(userKey[keys]);
//     }
// }
// console.log(users + "foydalanuvchi");