
// 1-misol
let ism = prompt("Ismingizni kiriting:");
let natija = ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase();
console.log(natija);


// 2-misol
let email = prompt("Email manzilingizni kiriting:");

if (email.includes("@")) {
    console.log(email.toLowerCase());
} else {
    console.log("Email manzili noto'g'ri!");
}


// 3-misol
let ismFamiliya = prompt("Ism va familiyangizni kiriting:").trim();
let joy = ismFamiliya.indexOf(" ");

if (joy !== -1) {
    console.log(ismFamiliya.slice(0, joy));
    console.log(ismFamiliya.slice(joy + 1).trim());
} else {
    console.log("Ism va familiyani kiriting");
}


// 4-misol
let matn = prompt("Matn kiriting:");

if (matn.length > 20) {
    console.log(matn.slice(0, 20) + "...");
} else {
    console.log(matn);
}


// 5-misol
let sozlar = prompt("Gap kiriting:").trim();
sozlar = sozlar.replaceAll("  ", " ");
sozlar = sozlar.replaceAll("  ", " ");
sozlar = sozlar.replaceAll("  ", " ");
sozlar = sozlar.replaceAll("  ", " ");

if (sozlar === "") {
    console.log(0);
} else {
    console.log(sozlar.length - sozlar.replaceAll(" ", "").length + 1);
}


// 6-misol
let raqam = prompt("Telefon raqamini kiriting:");
raqam = raqam.replaceAll("+", "").replaceAll(" ", "").replaceAll("-", "");

if (raqam.startsWith("998")) {
    raqam = raqam.slice(3);
}

if (raqam.length === 9) {
    console.log("+998 " + raqam.slice(0, 2) + " " + raqam.slice(2, 5) + " " + raqam.slice(5, 7) + " " + raqam.slice(7));
} else {
    console.log("Noto'g'ri raqam");
}


// 7-misol
let matn2 = prompt("Matn kiriting:").trim();
matn2 = matn2.replaceAll("  ", " ");
matn2 = matn2.replaceAll("  ", " ");
matn2 = matn2.replaceAll("  ", " ");
matn2 = matn2.replaceAll("  ", " ");
console.log(matn2);


// 8-misol
let fayl = prompt("Fayl nomini kiriting:");
let nuqta = fayl.lastIndexOf(".");

if (nuqta !== -1) {
    console.log(fayl.slice(nuqta + 1).toLowerCase());
} else {
    console.log("Kengaytma topilmadi");
}


// 9-misol
let fio = prompt("Ism, ota ismi va familiyangizni kiriting:").trim();
let joy1 = fio.indexOf(" ");
let joy2 = fio.lastIndexOf(" ");

if (joy1 !== -1 && joy2 !== -1 && joy1 !== joy2) {
    console.log(
        fio.charAt(0).toUpperCase() + "." +
        fio.charAt(joy1 + 1).toUpperCase() + "." +
        fio.charAt(joy2 + 1).toUpperCase() + "."
    );
} else {
    console.log("Uchta so'z kiriting");
}


// 10-misol
let gap = prompt("Gap kiriting:");
console.log(gap.replaceAll("yomon", "yaxshi"));


// 11-misol
let ism = prompt("Ismingizni kiriting:");
console.log(ism.trim().toLowerCase().replaceAll(" ", "") + "2026");


// 12-misol
let soz = prompt("So'z kiriting:");

if (soz.length > 0 && soz.charAt(0).toLowerCase() === soz.charAt(soz.length - 1).toLowerCase()) {
    console.log("Bir xil");
} else {
    console.log("Har xil");
}


// 13-misol
let email = prompt("Email kiriting:").trim();
let belgi = email.indexOf("@");

if (belgi > 1 && email.indexOf(".", belgi) !== -1) {
    console.log(email.slice(0, 2) + "****" + email.slice(belgi));
} else {
    console.log("Email noto'g'ri");
}


// 14-misol
let matn3 = prompt("Matn kiriting:");
let harf = prompt("Harf kiriting:");

if (harf.length === 1) {
    console.log(matn3.length - matn3.replaceAll(harf, "").length);
} else {
    console.log("Bitta harf kiriting");
}


// 15-misol
let sayt = prompt("Matn kiriting:").toLowerCase();

if (sayt.startsWith("phone")) {
    console.log("Ha");
} else {
    console.log("Yo'q");
}


// 16-misol
let parol = prompt("Parol kiriting:");

if (parol.length >= 8 && !parol.includes(" ") && parol === parol.trim()) {
    console.log("Parol to'g'ri");
} else {
    console.log("Parol noto'g'ri");
}


// 17-misol (eski 18-misol)
let soz2 = prompt("So'z kiriting:");

if (soz2.length % 2 === 0) {
    console.log(soz2.slice(soz2.length / 2 - 1, soz2.length / 2 + 1));
} else {
    console.log(soz2.slice((soz2.length - 1) / 2, (soz2.length + 1) / 2));
}


// 18-misol (eski 19-misol)
let url = prompt("Sayt manzilini kiriting:").trim().toLowerCase();
url = url.replace("https://", "").replace("http://", "");

if (url.endsWith("/")) {
    url = url.slice(0, -1);
}

console.log(url);


// 19-misol (eski 20-misol)
let ismFam = prompt("Ism va familiyangizni kiriting:").trim().toLowerCase();
ismFam = ismFam.replaceAll("  ", " ");
ismFam = ismFam.replaceAll("  ", " ");
ismFam = ismFam.replaceAll("  ", " ");
ismFam = ismFam.replaceAll("  ", " ");

let birJoy = ismFam.indexOf(" ");
let oxirJoy = ismFam.lastIndexOf(" ");

if (birJoy !== -1) {
    let ism2 = ismFam.slice(0, birJoy);
    let familiya = ismFam.slice(oxirJoy + 1);

    ism2 = ism2.charAt(0).toUpperCase() + ism2.slice(1);
    familiya = familiya.charAt(0).toUpperCase() + familiya.slice(1);

    console.log(ism2 + " " + familiya);
} else {
    console.log("Ism va familiyani kiriting");
}
