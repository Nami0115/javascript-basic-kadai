const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    setTimeout(function (){
        const text = document.getElementById('text');
        text.innerText = 'ボタンをクリックしました';
        }, 2000);
    });