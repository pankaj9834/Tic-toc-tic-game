var a = 1;

function fill(control) {
    if (a <= 9) {
        if (a % 2 != 0) {
            document.getElementById(control.id).innerHTML = "X";

        } else {
            document.getElementById(control.id).innerHTML = "0";

        }
        a++;
        if (checkwin()) {
            alert("Win The Match");
            reset();
        }
    } else {
        alert("Match Drawn");
        reset();
    }

}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("Div" + i).innerHTML = "";

    }
    a = 1;



}

function checkcondition(div1, div2, div3) {
    if (getData(div1) != "" && getData(div2) != "" && getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)); {
        return true;
    }

}

function getData(Div) {
    return document.getElementById("div").innerHTML;

}

function checkwin() {
    if (checkcondition('div1', 'div2', 'div3') || checkcondition('div4', 'div5', 'div6') || checkcondition('div7 ', 'div8', 'div9') || checkcondition('div1', 'div5', 'div9') ||
        checkcondition('div3', 'div5', 'div7') || checkcondition("div1", 'div4', 'div7') || checkcondition('div2', 'div5', 'div8') || checkcondition('div3', 'div6', 'div9')); {
        return true;
    }

}