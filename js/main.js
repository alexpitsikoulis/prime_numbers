var array = [];
function prime() {
    var list = document.getElementsByTagName('div')[0];
    list.removeChild(list.childNodes[0]);
    var max = document.getElementsByTagName('input')[0].value;
    for (i=1;i<=max;i++) {
        var c = 0;
        for (j=1;j<=i;j++) {
            if (i % j === 0) {
                c++;
            }
        }
        if (c === 2) {
            array.push(i);
        }
    }
    var newItem = document.createElement('p');
    newItem.innerHTML = array;
    document.getElementsByTagName('div')[0].appendChild(newItem);
}
var button = document.getElementById('button');
button.addEventListener('click', prime);