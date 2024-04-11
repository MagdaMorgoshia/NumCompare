function calc() {
    var deviderNums_A = [];
    var deviderNums_B = [];
    var numA = document.getElementById('numberA').value;
    var numB = document.getElementById('numberB').value;

    var numAResultColumn = document.getElementById('numAResult');
    var numBResultColumn = document.getElementById('numBResult');

    numAResultColumn.innerHTML = "";
    numBResultColumn.innerHTML = "";

    for (var i = 1; i <= numA; i++) {
        if (numA % i === 0) {
            deviderNums_A.push(i);
        }
    }

    for (var i = 1; i <= numB; i++) {
        if (numB % i === 0) {
            deviderNums_B.push(i);
        }
    }

    for (var i = 0; i < deviderNums_A.length; i++) {
        var newNode = document.createElement('div');
        newNode.classList.add('num');

        if (deviderNums_B.find(x => x == deviderNums_A[i])) {
            newNode.classList.add('checked');
        }

        newNode.textContent = deviderNums_A[i];
        numAResultColumn.append(newNode);
    }

    for (var i = 0; i < deviderNums_B.length; i++) {
        var newNode = document.createElement('div');
        newNode.classList.add('num');

        if (deviderNums_A.find(x => x == deviderNums_B[i])) {
            newNode.classList.add('checked');
        }

        newNode.textContent = deviderNums_B[i];
        numBResultColumn.append(newNode);
    }
}