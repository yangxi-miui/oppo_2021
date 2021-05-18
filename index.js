window.onload = function () {
    // search 部分
    var value = document.querySelector('.ipt');
    var button = document.querySelector('.but');
    var tankuang = document.querySelector('.tankuang');
    var close = document.querySelector('.close');
    button.addEventListener('click', function () {
        if (value.value == '') {
            // alert('不能为空')
            tankuang.style.transition = 'all 0.5s'
            // tankuang.style.width = '1000px'
            // tankuang.style.height = '400px'
            tankuang.style.transform = 'scale(1)'
        } else {
            value.value = ''
        }
    })
    close.onclick = function () {
        tankuang.style.transform = 'scale(0)'
        tankuang.style.transition = 'all 0.5s'
    }
    var images = document.querySelector('.box1');
    var imgs = ['index.jpg', 'ditu.jpg']
    images.style.backgroundSize = '100%';
    images.style.backgroundImage = 'url(' + imgs[0] + ')';
    var links = [];
    var i = 0;
    setInterval(function () {
        images.style.backgroundImage = 'url(' + imgs[i] + ')';
        images.style.backgroundSize = '100%';
        i++;
        if (i == imgs.length) {
            i = 0;
        }
    }, 3000)
    // images.style.backgroundSize = '50%';

    // 弹窗部分
}
