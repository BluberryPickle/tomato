
//function to set the properties of menu cards.
function properties() {
    var items = ['Al-Faham','Chicken Curry','Fish Curry']; //li of items
    var cost = ['₹400','₹300','₹200']; //li of costs
    var place = ['Cook door','Copper Spoon','Pepper Restaurant ']
    var count;
    for (count = 1 ; count < 4 ; count++ ){ //Loop to set the properties of each card.
        var box = document.getElementById('box'+count);
        box.style.height='450px';
        var img_div = document.getElementById('img'+count+'_text');
        var para = document.createElement('h1');
        img_div.appendChild(para);
        var text = document.createTextNode(items[count-1]);
        para.appendChild(text)
        para = document.createElement('h2');
        img_div.appendChild(para);
        text = document.createTextNode(cost[count-1]);
        para.appendChild(text);
        para = document.createElement("h2");
        img_div.appendChild(para);
        text = document.createTextNode(place[count-1]);
        para.appendChild(text)
        var button = document.createElement('button');
        button.type='button'
        button.addEventListener('click',function(){
            id = this.id
            quantity(id);
        });
        img_div.appendChild(button);
        var bid = 'add'+count;
        button.className='button1';
        button.id=bid;
        document.getElementById(bid).innerHTML='<i class="fas fa-cart-plus"></i>';

    }
}

//Function to replace html contents
function replace() {
    document.getElementById("main_text").innerHTML=" ";
    document.getElementById("main_text").innerHTML='<p style="font-size: 34px;">Explore our wide variety of Non-veg dishes!</p> '
    document.getElementById("container").innerHTML=" ";
    var container = document.getElementById('container');
    var c= 'box';
    var count;
    for (count = 1; count < 4 ; count++ ){
        var box = document.createElement('div');
        box.className = c;
        var bnum = "box"+count;
        var inum = "img"+count;
        box.id = bnum;
        container.appendChild(box);
        var img = document.createElement('img');
        var div = document.getElementById(bnum);
        div.appendChild(img);
        img.src="images/"+inum+".jpg";
        var text_div = document.createElement('div');
        box.appendChild(text_div);
        var cid = 'img'+count+'_text';
        text_div.className='img_text';
        text_div.id = cid;
    }
    properties()
}

/*function to store*/

function storage(id) {
    if(sessionStorage.getItem('cart')==null){
        alert('if')
        var cart = {}
        cart[id]=1;
        sessionStorage.setItem('cart',JSON.stringify(cart));
    }
    else {
        alert('else')
        var rcart = JSON.parse(sessionStorage.getItem('cart'));
        if (rcart[id]==null){
            rcart[id]=1;
        }
        else {
            var rcart = JSON.parse(sessionStorage.getItem('cart'));
            var old = Number(rcart[id]);
            old++;
            rcart[id]=old;
            sessionStorage.setItem('cart',JSON.stringify(rcart));
    
        }
    }
}

function quantity(id) {
    document.getElementById('obar').style.display="block";
    var p = document.getElementById("op");
    var num = p.innerHTML;
    num++;
    document.getElementById('op').innerHTML=num; 
    var price = {add1:'400',add2:'300',add3:'200'};
    var tot = document.getElementById('tot');
    var subtot = tot.innerHTML;
    subtot = (Number(subtot) + Number(price[id]));
    tot.innerHTML=subtot;
    storage(id);
}


