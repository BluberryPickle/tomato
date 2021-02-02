//function to set the properties of menu cards.
function properties() {
    //Lists of items and cost respectively.
    var items = ['Al-Faham','Chicken Curry','Fish Curry']; 
    var cost = ['₹400','₹300','₹200'];
    var count;
    for (count = 1 ; count < 4 ; count++ ){ //Loop to set the properties of each card.
        var box = document.getElementById('box'+count);
        box.style.height='400px';
        var img_div = document.getElementById('img'+count+'_text');
        var para = document.createElement('p');
        img_div.appendChild(para);
        para.style = " font-size :30px";
        var text = document.createTextNode(items[count-1]);
        para.appendChild(text)
        para = document.createElement('p');
        img_div.appendChild(para);
        text = document.createTextNode(cost[count-1]);
        para.appendChild(text)
    }
}

//Function to replace html contents
function replace() {
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
        img.width="100%";
        img.style="height: 243px";
        var text_div = document.createElement('div');
        box.appendChild(text_div);
        var cid = 'img'+count+'_text';
        text_div.className=cid;
        text_div.id = cid;
    }
    properties()
}