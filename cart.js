function retrieve() {
    var items = ['Al-Faham','Chicken Curry','Fish Curry'];
    var place = ['Cook door','Copper Spoon','Pepper Restaurant ']
    cart = JSON.parse(sessionStorage.getItem('cart'));
    var i ;
    var container = document.getElementById('container');
    for (i=1; i < 4; i++){
        if (cart['add'+i]!=undefined){
            var iblock = document.createElement('div');
            container.appendChild(iblock);
            iblock.className = 'iblock';
            img = document.createElement('img');
            iblock.appendChild(img);
            img.src = '/images/img'+i+'.jpg';
            var div = document.createElement('div');
            iblock.appendChild(div)
            div.className='text';
            var h1 = document.createElement('h1');
            div.appendChild(h1);
            h1.innerHTML=items[i-1];
            var p = document.createElement('p');
            div.appendChild(p);
            p.style.fontSize='25px';
            p.innerHTML=place[i-1];

        }
    }
}