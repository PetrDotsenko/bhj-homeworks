let timer;
let x = 59;
countDown();
function countDown(){
    document.getElementById('timer').innerHTML = x;
    x--;
    if (x < 0) {
        clearTimeout('timer');
        alert('Вы победили в конкурсе!');
    } else {
        timer = setTimeout(countDown, 1000);
    }
}