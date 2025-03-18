function updateFields() {
    const shape = document.getElementById("shape").value;
    const inputFields = document.getElementById("inputFields");
    inputFields.innerHTML = "";
    
    if (shape === "chunhat") {
        inputFields.innerHTML = '<input type="number" id="length" placeholder="nhap chieu dai">' +
                                '<input type="number" id="width" placeholder="nhap chieu rong">';
    } else if (shape === "tamgiac") {
        inputFields.innerHTML = '<input type="number" id="side1" placeholder="nhap canh 1">' +
                                '<input type="number" id="side2" placeholder="nhap canh 2">' +
                                '<input type="number" id="side3" placeholder="nhap canh 3">';
    } else if (shape === "tron") {
        inputFields.innerHTML = '<input type="number" id="radius" placeholder="nhap ban kinh">';
    }
}

function calculate() {
    const shape = document.getElementById("shape").value;
    let chuvi = 0, dientich = 0, errorMsg = "";
    
    if (shape === "chunhat") {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            errorMsg = "khong phai la so hop le!!!";
        } else {
            chuvi = 2 * (length + width);
            dientich = length * width;
        }
    } 
    else if (shape === "tamgiac") {
        let side1 = parseFloat(document.getElementById("side1").value);
        let side2 = parseFloat(document.getElementById("side2").value);
        let side3 = parseFloat(document.getElementById("side3").value);
        
        if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
            errorMsg = "khong phai la so hop le!!!";
        } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
            errorMsg = "bat dang thuc tam giac!!!";
        } else {
            chuvi = side1 + side2 + side3;
            let s = chuvi / 2;
            dientich = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        }
    }
    else if (shape === "tron") {
        let radius = parseFloat(document.getElementById("radius").value);

        if (isNaN(radius) || radius <= 0) {
            errorMsg = "khong phai la so hop le!!!";
        } else {
            chuvi = 2 * radius * Math.PI;
            dientich = Math.pow(radius, 2) * Math.PI;
        }
    }
    
    document.getElementById("error").textContent = errorMsg;
    document.getElementById("chuvi").textContent = errorMsg ? "" : chuvi.toFixed(2);
    document.getElementById("dientich").textContent = errorMsg ? "" : dientich.toFixed(2);
}
