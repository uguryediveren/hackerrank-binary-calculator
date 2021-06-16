var tempFirst;
var tempSecond;

function action(e) {
    /* Older IE browsers have a srcElement property,
    but other browsers have a 'target' property; 
    Set btn to whichever exists. */
    var btn = e.target || e.srcElement;
    if (btn.id == "btnClr") {
        document.getElementById("res").innerHTML = ""
    } else if (btn.id == "btn0" || btn.id == "btn1") {
        document.getElementById("res").innerHTML += btn.innerHTML
    } else if (btn.id == "btnSum") {
        tempFirst = document.getElementById("res").innerHTML
        document.getElementById("res").innerHTML += btn.innerHTML
        tempFirst = parseInt(tempFirst, 2)
        console.log(tempFirst + " toplamaFirst");
    } else if (btn.id == "btnSub") {
        tempFirst = document.getElementById("res").innerHTML
        document.getElementById("res").innerHTML += btn.innerHTML
        tempFirst = parseInt(tempFirst, 2)
        console.log(tempFirst + " cikarmaFirst");
    } else if (btn.id == "btnMul") {
        tempFirst = document.getElementById("res").innerHTML
        document.getElementById("res").innerHTML += btn.innerHTML
        tempFirst = parseInt(tempFirst, 2)
        console.log(tempFirst + " carpimFirst");
    } else if (btn.id == "btnDiv") {
        tempFirst = document.getElementById("res").innerHTML
        tempFirst = Number(tempFirst)
        console.log(tempFirst+" ");
        document.getElementById("res").innerHTML += btn.innerHTML
    } else if (btn.id == "btnEql") {
        var length = document.getElementById("res").innerHTML.length
        for (var i = 0; i < length; i++) {
            if (document.getElementById("res").innerHTML[i] == "*") {
                console.log("carpma");
                var index = i;
                tempSecond = document.getElementById("res").innerHTML.slice(index + 1)
                tempSecond = parseInt(tempSecond, 2)
                var total = (tempFirst * tempSecond).toString(2)
                console.log(total + " carpmaLog");
                document.getElementById("res").innerHTML = total
            } else if (document.getElementById("res").innerHTML[i] == "/") {
                console.log("bolme");
                var index = i;
                console.log(tempFirst + "first");
                tempSecond = document.getElementById("res").innerHTML.slice(index + 1)
                tempSecond = Number(tempSecond)
                console.log(tempSecond + "sekond");
                var divide = tempFirst / tempSecond;
                document.getElementById("res").innerHTML = Math.floor(divide)
            } else if (document.getElementById("res").innerHTML[i] == "+") {
                console.log("toplama");
                var index = i;
                tempSecond = document.getElementById("res").innerHTML.slice(index + 1)
                tempSecond = parseInt(tempSecond, 2)
                var total = (tempFirst + tempSecond).toString(2)
                console.log(total + " totalLog");
                document.getElementById("res").innerHTML = total
            } else if (document.getElementById("res").innerHTML[i] == "-") {
                console.log("cıkarma");
                var index = i;
                tempSecond = document.getElementById("res").innerHTML.slice(index + 1)
                tempSecond = parseInt(tempSecond, 2)
                var remain = (tempFirst - tempSecond).toString(2)
                console.log(total + " totalLog");
                document.getElementById("res").innerHTML = remain
            }
        }
    }
}


document.getElementById("btn0").addEventListener("click", action)
document.getElementById("btn1").addEventListener("click", action)
document.getElementById("btnClr").addEventListener("click", action)
document.getElementById("btnEql").addEventListener("click", action)



document.getElementById("btnSum").addEventListener("click", action)
document.getElementById("btnSub").addEventListener("click", action)
document.getElementById("btnMul").addEventListener("click", action)
document.getElementById("btnDiv").addEventListener("click", action)








