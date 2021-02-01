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
    }
}