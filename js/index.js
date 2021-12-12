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
                    Error.innerHTML =
                        Error.innerHTML = '<p class="Errors"> الرقم القومي غير صالح </p>';
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
        Error.innerHTML = "<p class=\"Errors\">من فضلك املاء المدخلات</p>";
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
        ArrayNums.push(Num)
        bools = (ArrayNums.indexOf(input.value) >= 0) ? false : true;
        console.log(bools);
        // NAME = () ? "no" : JSON.parse(localStorage.getItem("National_ID"))[i].Name;
        if (input.value == Num) {
            console.log();
            NAME = JSON.parse(localStorage.getItem("National_ID"))[ArrayNums.indexOf(Num)].Name
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
        array.push({ "Id": input.value, "Name": text.value });
        localStorage.setItem("National_ID", JSON.stringify(array));
        tbody.innerHTML = "";
        Show();
        input.value = "";
    } else {
        Error.innerHTML = "<p dir=\"rtl\"class = \"Errors\">الرقم القومي ده : " + input.value + " مستعمل من قبل وباسم: " + NAME + "</p>"
    }

    if (localStorage.getItem("National_ID").length == 2) {
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
        array.push({ "Id": input.value, "Name": text.value });
        localStorage.setItem("National_ID", JSON.stringify(array));
        tbody.innerHTML = "";
        Show();
        input.value = "";
        text.value = "";
    }

}

// 30801052405375
// 26206202402211

function Show() {
    let Storage = JSON.parse(localStorage.getItem("National_ID")).length;
    for (let i = 0; i < Storage; i++) {
        let Num = JSON.parse(localStorage.getItem("National_ID"))[i].Id;
        let EO =
            Num.slice(Num.length - 2, Num.length - 1) % 2 == 0 ? "انثي" : "ذكر";
        let Years = Num.slice(0, Num.length - 13) == "2" ? "19" : "20";
        let history =
            Years +
            Num.slice(1, Num.length - 11) +
            "/" +
            Num.slice(3, Num.length - 9) +
            "/" +
            Num.slice(5, Num.length - 7);
        tbody.innerHTML += `
            <tr>
                <td scope="row">${i + 1}</td>
                <td>${JSON.parse(localStorage.getItem("National_ID"))[i].Name}</td>
                <td>${Num}</td>
                <td>${EO}</td>
                <td>${history}</td>
            </tr>
        `;
    }
}

Show();

let Data = [];

function Download() {
    Data = [];
    let trs = document.querySelectorAll("table tbody tr")
    trs.forEach(tr => {
        let trs = tr.querySelectorAll("td")

        Data.push({ "id": trs[0].innerHTML, "NationalID": trs[1].innerHTML, "Type": trs[2].innerHTML, "birthDay": trs[3].innerHTML })
    })
    var json = JSON.stringify(Data);

    $('#Table').tblToExcel();
}




// Reomve The Spacing
// input.replace(/ /g, "")
// Download JSON FILE

// function download(filename, textInput) {
// var element = document.createElement('a');
// element.setAttribute('href', 'data:json/plain;charset=utf-8, ' + encodeURIComponent(textInput));
// element.setAttribute('download', filename);
// document.body.appendChild(element);
// element.click();
// }