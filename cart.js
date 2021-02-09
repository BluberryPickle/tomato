function retrieve() {
    cart = JSON.parse(sessionStorage.getItem('cart'));
    var i ;
    var counter = 1;
    for (i=0; i < 3; i++){
        var container = document.getElementById('container');
        var iblock = document.createElement('div');
        container.appendChild(iblock);
        iblock.className = 'iblock';
        /*iblock.id = "add"+counter ; */
        img = document.createElement('img');
        iblock.appendChild(img);
        img.src = '/images/img'+counter+'.jpg';
        counter ++
    }
}