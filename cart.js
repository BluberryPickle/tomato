function retrieve() {
    var items = ['Al-Faham','Chicken Curry','Fish Curry'];
    var place = ['Cook door','Copper Spoon','Pepper Restaurant ']
    var cost = ['400','300','200'];
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    var i ;
    var container = document.getElementById('container');
    for (i=1; i < 4; i++){
        var num = Number(cart['add'+i]);
        if (num>0){
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
            var price = document.createElement('div')
            iblock.appendChild(price);
            price.className='price';
            var total = (num*Number(cost[i-1]));
            price.innerHTML='<p><b>QTY: '+num+'</b></p><br><p><b>Cost: ₹'+total+'</b></p>'
            if (sessionStorage.getItem('subtot')==null) {
                sessionStorage.setItem('subtot',total);
            }
            else {
                total = Number(sessionStorage.getItem('subtot'))+Number(total);
                sessionStorage.setItem('subtot',total);
            }
        }
    }
            var paybar = document.getElementById('pay');
            var payamount = document.createElement('div');
            payamount.className='pclass';
            paybar.appendChild(payamount);
            payamount.innerHTML='<p> Subtotal : '+Number(sessionStorage.getItem('subtot'))+' </p>';    
}

function check() {
    var stat = sessionStorage.getItem('stat');
    if (stat == "out") {
        
    }
}