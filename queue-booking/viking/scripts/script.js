var arr = new Array(3).fill().map(() => new Array(9).fill(0));

function calculateCost(n) {

    var n = document.getElementById("num").value;
    var cost = n * 100;

    document.getElementById("cost").innerHTML = `${cost} Baht`;
}

function orderQueue(n, m) {

    var num = parseInt(document.getElementById("num").value);

    if (arr[n][m] + num <= 10) {

        arr[n][m] += num;

        alert("Order Success.")
    }

    else {

        alert("Queue is fully.")
    }

    queueCheck(n, m);
}

function queueCheck(n, m) {

    document.getElementById("queue").innerHTML = `Queue now ${arr[n][m]}/10`
}