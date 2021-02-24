const body= document.getElementById("body");
const color = ['red', ,'cyan', 'teal', 'gray' ,'pink', 'silver', 'emerald', 'purple', 'khaki', 'plum', 'kelly', 'forest', 'indigo', 'marine', 'amber', 'beige'];
const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44']
const ti2me = "30000"






for (i=0 ;i<300 ; i++){
    const block_n = document.createElement("div");
    body.appendChild(block_n);

    const Oq = Math.random()*color.length;
    const assa = Math.random()*list.length;
    const x_cr = Math.random()*1500;
    const y_cr = Math.random()*1050;
    const x_cor = Math.random()*23000;
    const y_cor = Math.random()*10000;
    block_n.style.width = x_cr +'px';
    block_n.style.height = y_cr+ 'px';
    block_n.style.backgroundColor = color[parseInt(Oq)];
    block_n.style.position = 'absolute';
    block_n.style.left = x_cor * 10 +'px';
    block_n.style.top = y_cor * 10+ 'px';
    block_n.innerHTML = list[parseInt(assa)];
    
   

    

 
}

function rest(){
    window.location.reload()
}

setInterval(rest,200);


    



