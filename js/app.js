
// 1-misol
let ism = prompt("Ismingizni kiriting:");
ism = ism.trim().toLowerCase();
let javob = ism.charAt(0).toUpperCase() + ism.slice(1);
console.log(javob);


// 2-misol
let email = prompt("Email kiriting:");

if (email.includes("@")) {
    console.log(email.toLowerCase());
} else {
    console.log("Email xato");
}


// 3-misol
let ismFamiliya = prompt("Ism va familiya kiriting:");
ismFamiliya = ismFamiliya.trim();

let joy = ismFamiliya.indexOf(" ");

if (joy != -1) {
    console.log("Ism: " + ismFamiliya.slice(0, joy));
    console.log("Familiya: " + ismFamiliya.slice(joy + 1).trim());
} else {
    console.log("Xato");
}


// 4-misol
let matn = prompt("Matn kiriting:");

if (matn.length > 20) {
    console.log(matn.slice(0, 20) + "...");
} else {
    console.log(matn);
}


// 5-misol
let gap = prompt("Gap kiriting:");
gap = gap.trim();

gap = gap.replaceAll("  ", " ");
gap = gap.replaceAll("  ", " ");
gap = gap.replaceAll("  ", " ");
gap = gap.replaceAll("  ", " ");
gap = gap.replaceAll("  ", " ");
gap = gap.replaceAll("  ", " ");

if (gap == "") {
    console.log("0 ta so'z");
} else {
    let son = gap.length - gap.replaceAll(" ", "").length + 1;
    console.log(son + " ta so'z");
}


// 6-misol
let telefon = prompt("Telefon raqamini kiriting:");

if (telefon.length == 12 && telefon.startsWith("998")) {
    console.log("+998 " + telefon.slice(3, 5) + " " + telefon.slice(5, 8) + " " + telefon.slice(8, 10) + " " + telefon.slice(10, 12));
} else {
    console.log("Raqam xato");
}


// 7-misol
let tozaMatn = prompt("Matn kiriting:");

tozaMatn = tozaMatn.trim();
tozaMatn = tozaMatn.replaceAll("  ", " ");
tozaMatn = tozaMatn.replaceAll("  ", " ");
tozaMatn = tozaMatn.replaceAll("  ", " ");
tozaMatn = tozaMatn.replaceAll("  ", " ");
tozaMatn = tozaMatn.replaceAll("  ", " ");
tozaMatn = tozaMatn.replaceAll("  ", " ");

console.log(tozaMatn);


// 8-misol
let fayl = prompt("Fayl nomini kiriting:");
let nuqta = fayl.lastIndexOf(".");

if (nuqta != -1) {
    console.log(fayl.slice(nuqta + 1).toLowerCase());
} else {
    console.log("Kengaytma yo'q");
}


// 9-misol
let fio = prompt("Ism ota ismi familiya kiriting:");
fio = fio.trim().toLowerCase();

fio = fio.replaceAll("  ", " ");
fio = fio.replaceAll("  ", " ");
fio = fio.replaceAll("  ", " ");
fio = fio.replaceAll("  ", " ");

let birinchiJoy = fio.indexOf(" ");
let oxirgiJoy = fio.lastIndexOf(" ");

if (birinchiJoy != -1 && oxirgiJoy != birinchiJoy) {
    console.log(
        fio.charAt(0).toUpperCase() + "." +
        fio.charAt(birinchiJoy + 1).toUpperCase() + "." +
        fio.charAt(oxirgiJoy + 1).toUpperCase() + "."
    );
} else {
    console.log("Uchta so'z kiriting");
}


// 10-misol
let almashtirish = prompt("Gap kiriting:");

console.log(almashtirish.replaceAll("yomon", "yaxshi"));


// 11-misol
let username = prompt("Ism va familiyangizni kiriting:");

username = username.trim().toLowerCase();
username = username.replaceAll(" ", "");

console.log(username + "2026");


// 12-misol
let soz = prompt("So'z kiriting:");
soz = soz.toLowerCase();

if (soz.length > 0 && soz.charAt(0) == soz.charAt(soz.length - 1)) {
    console.log("Birinchi va oxirgi harf bir xil.");
} else {
    console.log("Birinchi va oxirgi harf bir xil emas.");
}


// 13-misol
let maxfiyEmail = prompt("Email kiriting:");
let belgi = maxfiyEmail.indexOf("@");

if (belgi > 1) {
    console.log(maxfiyEmail.slice(0, 2) + "****" + maxfiyEmail.slice(belgi));
} else {
    console.log("Email xato");
}


// 14-misol
let matnHarf = prompt("Matn kiriting:");
let qidirilayotganHarf = prompt("Harf kiriting:");

if (qidirilayotganHarf.length == 1) {
    console.log(matnHarf.length - matnHarf.replaceAll(qidirilayotganHarf, "").length);
} else {
    console.log("Bitta harf kiriting");
}


// 15-misol
let mahsulot = prompt("Mahsulot nomini kiriting:");
mahsulot = mahsulot.toLowerCase();

if (mahsulot.startsWith("phone")) {
    console.log("Telefon mahsuloti");
} else {
    console.log("Boshqa mahsulot");
}


// 16-misol
let parol = prompt("Parol kiriting:");

if (parol.length >= 8 && !parol.includes(" ") && parol == parol.trim()) {
    console.log("Parol qabul qilindi");
} else {
    console.log("Parol talabga javob bermaydi");
}
