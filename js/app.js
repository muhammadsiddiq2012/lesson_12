
// 1-misol
let ism1 = prompt("Ismingizni kiriting:");
ism1 = ism1.trim().toLowerCase();
let javob1 = ism1.charAt(0).toUpperCase() + ism1.slice(1);
console.log(javob1);


// 2-misol
let email2 = prompt("Email kiriting:");

if (email2.includes("@")) {
    console.log(email2.toLowerCase());
} else {
    console.log("Email xato");
}


// 3-misol
let ism3 = prompt("Ism va familiya kiriting:");
ism3 = ism3.trim();

let joy3 = ism3.indexOf(" ");

if (joy3 != -1) {
    console.log("Ism: " + ism3.slice(0, joy3));
    console.log("Familiya: " + ism3.slice(joy3 + 1).trim());
} else {
    console.log("Xato");
}


// 4-misol
let matn4 = prompt("Matn kiriting:");

if (matn4.length > 20) {
    console.log(matn4.slice(0, 20) + "...");
} else {
    console.log(matn4);
}


// 5-misol
let gap5 = prompt("Gap kiriting:");
gap5 = gap5.trim();

gap5 = gap5.replaceAll("  ", " ");
gap5 = gap5.replaceAll("  ", " ");
gap5 = gap5.replaceAll("  ", " ");
gap5 = gap5.replaceAll("  ", " ");
gap5 = gap5.replaceAll("  ", " ");
gap5 = gap5.replaceAll("  ", " ");

if (gap5 == "") {
    console.log("0 ta so'z");
} else {
    let son5 = gap5.length - gap5.replaceAll(" ", "").length + 1;
    console.log(son5 + " ta so'z");
}


// 6-misol
let tel6 = prompt("Telefon raqamini kiriting:");

if (tel6.length == 12 && tel6.startsWith("998")) {
    console.log("+998 " + tel6.slice(3, 5) + " " + tel6.slice(5, 8) + " " + tel6.slice(8, 10) + " " + tel6.slice(10, 12));
} else {
    console.log("Raqam xato");
}


// 7-misol
let matn7 = prompt("Matn kiriting:");

matn7 = matn7.trim();
matn7 = matn7.replaceAll("  ", " ");
matn7 = matn7.replaceAll("  ", " ");
matn7 = matn7.replaceAll("  ", " ");
matn7 = matn7.replaceAll("  ", " ");
matn7 = matn7.replaceAll("  ", " ");
matn7 = matn7.replaceAll("  ", " ");

console.log(matn7);


// 8-misol
let fayl8 = prompt("Fayl nomini kiriting:");
let joy8 = fayl8.lastIndexOf(".");

if (joy8 != -1) {
    console.log(fayl8.slice(joy8 + 1).toLowerCase());
} else {
    console.log("Kengaytma yo'q");
}


// 9-misol
let fio9 = prompt("Ism ota ismi familiya kiriting:");
fio9 = fio9.trim().toLowerCase();

fio9 = fio9.replaceAll("  ", " ");
fio9 = fio9.replaceAll("  ", " ");
fio9 = fio9.replaceAll("  ", " ");
fio9 = fio9.replaceAll("  ", " ");

let joy9 = fio9.indexOf(" ");
let joya9 = fio9.lastIndexOf(" ");

if (joy9 != -1 && joya9 != joy9) {
    console.log(
        fio9.charAt(0).toUpperCase() + "." +
        fio9.charAt(joy9 + 1).toUpperCase() + "." +
        fio9.charAt(joya9 + 1).toUpperCase() + "."
    );
} else {
    console.log("Uchta so'z kiriting");
}


// 10-misol
let gap10 = prompt("Gap kiriting:");

console.log(gap10.replaceAll("yomon", "yaxshi"));


// 11-misol
let ism11 = prompt("Ism va familiyangizni kiriting:");

ism11 = ism11.trim().toLowerCase();
ism11 = ism11.replaceAll(" ", "");

console.log(ism11 + "2026");


// 12-misol
let soz12 = prompt("So'z kiriting:");
soz12 = soz12.toLowerCase();

if (soz12.length > 0 && soz12.charAt(0) == soz12.charAt(soz12.length - 1)) {
    console.log("Birinchi va oxirgi harf bir xil.");
} else {
    console.log("Birinchi va oxirgi harf bir xil emas.");
}


// 13-misol
let email13 = prompt("Email kiriting:");
let belgi13 = email13.indexOf("@");

if (belgi13 > 1) {
    console.log(email13.slice(0, 2) + "****" + email13.slice(belgi13));
} else {
    console.log("Email xato");
}


// 14-misol
let matn14 = prompt("Matn kiriting:");
let harf14 = prompt("Harf kiriting:");

if (harf14.length == 1) {
    console.log(matn14.length - matn14.replaceAll(harf14, "").length);
} else {
    console.log("Bitta harf kiriting");
}


// 15-misol
let mahsulot15 = prompt("Mahsulot nomini kiriting:");
mahsulot15 = mahsulot15.toLowerCase();

if (mahsulot15.startsWith("phone")) {
    console.log("Telefon mahsuloti");
} else {
    console.log("Boshqa mahsulot");
}


// 16-misol
let parol16 = prompt("Parol kiriting:");

if (parol16.length >= 8 && !parol16.includes(" ") && parol16 == parol16.trim()) {
    console.log("Parol qabul qilindi");
} else {
    console.log("Parol talabga javob bermaydi");
}
