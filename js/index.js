let body = document.querySelector("body");
let tbody = document.querySelector("body table tbody");
let text = document.querySelector(".Input input#text1");
let input = document.querySelector(".Input input#number");
let button = document.querySelector(".Input button");
let Error = document.querySelector(".Error");
button.onclick = function() {
    if (input.value.length != 0 && text.value.replace(/ /g, "") != "") {
        if (localStorage.length == 0) {} else {
            if (input.value.length != 0 && input.value.length == 14) {
                if (
                    Number(input.value.slice(3, 5)) <= 12 &&
                    Number(input.value.slice(3, 5)) != 0
                ) {
                    if (
                        Number(input.value.slice(5, 7)) < 31 &&
                        Number(input.value.slice(3, 5)) == 1
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 3
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 5
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 7
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 8
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 10
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 31 &&
                        Number(input.value.slice(3, 5)) == 12
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 30 &&
                        Number(input.value.slice(3, 5)) == 4
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 30 &&
                        Number(input.value.slice(3, 5)) == 6
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 30 &&
                        Number(input.value.slice(3, 5)) == 9
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 30 &&
                        Number(input.value.slice(3, 5)) == 11
                    ) {
                        okFunction();
                    } else if (
                        Number(input.value.slice(5, 7)) <= 29 &&
                        Number(input.value.slice(3, 5)) == 2
                    ) {
                        okFunction();
                    } else {
                        Error.innerHTML = '<p class="Errors"> الرقم القومي غير صالح </p>';
                    }
                } else {
                    Error.innerHTML = Error.innerHTML =
                        '<p class="Errors"> الرقم القومي غير صالح </p>';
                }
            } else if (input.value.length == 0) {
                Error.innerHTML = '<p class="Errors">الرجاء إدخال الرقم القومي</p>';
            } else if (input.value.length < 14) {
                Error.innerHTML = '<p class="Errors">من فضلك أكمل الرقم القومي</p>';
            } else if (input.value.length > 14) {
                Error.innerHTML =
                    '<p class="Errors">الرقم القومي غير صالح برجاء ادخال 14 رقم</p>';
            }
        }
    } else {
        Error.innerHTML = '<p class="Errors">من فضلك املاء المدخلات</p>';
    }
};

body.onload = function() {
    if (localStorage.length == 0) {
        localStorage.clear();
        localStorage.setItem("National_ID", "[]");
    }
};
let ArrayNums = [];
let NAME;
let bools;

function okFunction() {
    let Storage = JSON.parse(localStorage.getItem("National_ID")).length;
    for (let i = 0; i < Storage; i++) {
        let Num = JSON.parse(localStorage.getItem("National_ID"))[i].Id;
        ArrayNums.push(Num);
        bools = ArrayNums.indexOf(input.value) >= 0 ? false : true;
        console.log(bools);
        // NAME = () ? "no" : JSON.parse(localStorage.getItem("National_ID"))[i].Name;
        if (input.value == Num) {
            console.log();
            NAME = JSON.parse(localStorage.getItem("National_ID"))[
                ArrayNums.indexOf(Num)
            ].Name;
        }
    }
    if (bools) {
        let good = document.querySelector(".good");
        good.innerHTML += `<div>
                    <div>
                        <img src=\"images/success.svg\" />
                        <i class="fa fa-close"></i>
                        </div>
                    <p>تم بنجاح اضافة رقم قومي : ${input.value}</p>        
                </div>`;
        let I_Hides = document.querySelectorAll(".good i");
        I_Hides.forEach((I_Hide) => {
            I_Hide.onclick = function() {
                I_Hide.parentElement.parentElement.remove();
            };
        });
        Error.innerHTML = "";
        let array =
            localStorage.getItem("National_ID") != "" ?
            JSON.parse(localStorage.getItem("National_ID")) :
            localStorage.getItem("National_ID");
        array.push({ Id: input.value, Name: text.value });
        localStorage.setItem("National_ID", JSON.stringify(array));
        tbody.innerHTML = "";
        Show();
        input.value = "";
    } else {
        Error.innerHTML =
            '<p dir="rtl"class = "Errors">الرقم القومي ده : ' +
            input.value +
            " مستعمل من قبل وباسم: " +
            NAME +
            "</p>";
    }

    if (localStorage.getItem("National_ID").length == 2) {
        let good = document.querySelector(".good");
        good.innerHTML += `<div>
                    <div>
                        <img src=\"images/success.svg\" />
                        <i class="fa fa-close"></i>
                        </div>
                    <p>تم بنجاح اضافة الاسم : ${text.value}</p>    
                </div>`;
        let I_Hides = document.querySelectorAll(".good i");
        I_Hides.forEach((I_Hide) => {
            I_Hide.onclick = function() {
                I_Hide.parentElement.parentElement.remove();
            };
        });
        Error.innerHTML = "";
        let array =
            localStorage.getItem("National_ID") != "" ?
            JSON.parse(localStorage.getItem("National_ID")) :
            localStorage.getItem("National_ID");
        array.push({ Id: input.value, Name: text.value });
        localStorage.setItem("National_ID", JSON.stringify(array));
        tbody.innerHTML = "";
        Show();
        input.value = "";
        text.value = "";
    }
}

// 30801052405375
// 26206202402211
let Num, EO, Years, history, Governorates, Governorate;

function Show() {
    let Storage = JSON.parse(localStorage.getItem("National_ID")).length;
    for (let i = 0; i < Storage; i++) {
        Num = JSON.parse(localStorage.getItem("National_ID"))[i].Id;
        EO = Num.slice(Num.length - 2, Num.length - 1) % 2 == 0 ? "انثي" : "ذكر";
        Years = Num.slice(0, Num.length - 13) == "2" ? "19" : "20";
        history =
            Years +
            Num.slice(1, Num.length - 11) +
            "/" +
            Num.slice(3, Num.length - 9) +
            "/" +
            Num.slice(5, Num.length - 7);
        Governorates = Num.slice(7, Num.length - 5);
        if (Governorates == "01") {
            Governorate = "القاهرة"
        } else if (Governorates == "02") {
            Governorate = "الإسكندرية"
        } else if (Governorates == "03") {
            Governorate = "بورسعيد"
        } else if (Governorates == "04") {
            Governorate = "السويس"
        } else if (Governorates == "11") {
            Governorate = "دمياط"
        } else if (Governorates == "12") {
            Governorate = "الدقهلية"
        } else if (Governorates == "13") {
            Governorate = "الشرقية"
        } else if (Governorates == "14") {
            Governorate = "القليوبية"
        } else if (Governorates == "15") {
            Governorate = "كفر الشيخ"
        } else if (Governorates == "16") {
            Governorate = "الغربية"
        } else if (Governorates == "17") {
            Governorate = "المنوفية"
        } else if (Governorates == "18") {
            Governorate = "البحيرة"
        } else if (Governorates == "19") {
            Governorate = "الإسماعيلية"
        } else if (Governorates == "21") {
            Governorate = "الجيزة"
        } else if (Governorates == "22") {
            Governorate = "بني سويف"
        } else if (Governorates == "23") {
            Governorate = "الفيوم"
        } else if (Governorates == "24") {
            Governorate = "المنيا"
        } else if (Governorates == "25") {
            Governorate = "أسيوط"
        } else if (Governorates == "26") {
            Governorate = "سوهاج"
        } else if (Governorates == "27") {
            Governorate = "قنا"
        } else if (Governorates == "28") {
            Governorate = "أسوان"
        } else if (Governorates == "29") {
            Governorate = "الأقصر"
        } else if (Governorates == "31") {
            Governorate = "البحر الأحمر"
        } else if (Governorates == "32") {
            Governorate = "الوادى الجديد"
        } else if (Governorates == "33") {
            Governorate = "مطروح"
        } else if (Governorates == "34") {
            Governorate = "شمال سيناء"
        } else if (Governorates == "35") {
            Governorate = "جنوب سيناء"
        } else if (Governorates == "88") {
            Governorate = "خارج الجمهورية"
        }
        tbody.innerHTML += `
            <tr>
                <td scope="row">${i + 1}</td>
                <td>${
                  JSON.parse(localStorage.getItem("National_ID"))[i].Name
                }</td>
                <td>${Num}</td>
                <td>${Governorate}</td>
                <td>${EO}</td>
                <td>${history}</td>
            </tr>
        `;
    }
}

Show();

function Download() {
    $("#Table").tblToExcel();
}