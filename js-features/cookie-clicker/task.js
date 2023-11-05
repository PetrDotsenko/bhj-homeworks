let x = 1;

function toCount(){
    const element = document.getElementById('clicker__counter').innerHTML = x;
    const cookie = document.getElementById('cookie');
    x++;
    if (cookie.style.width === '200px') {
        cookie.style.width = '100px';
    } else if (cookie.style.width === '100px') {
        cookie.style.width = '200px';
    }
}


cookie.addEventListener("click", toCount);