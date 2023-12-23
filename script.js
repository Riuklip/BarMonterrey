(function(){
    const slider=[...document.querySelectorAll('.slide__cuerpo')];
    const arrowafter=document.querySelector('#after');
    const arrowbefore=document.querySelector('#before');
    let valor;


    console.log(slider);
    arrowafter.addEventListener('click',()=>changepos(1));
    arrowbefore.addEventListener('click',()=>changepos(-1));

    function changepos(change){
        const elemact = Number(document.querySelector('.slide--show').dataset.id)
        valor=elemact;
        valor+=change;
        console.log(valor)

       

        // if(valor===0 || valor==slider.length+1){
        //     valor=valor === 0 ? slider.length : 1;
        // }

        // slider[elemact-1].classList.toggle('slide--show');
        // slider[valor-1].classList.toggle('slide--show');
        if(valor===0){
            slider[elemact-1].classList.toggle("slide--show");
            slider[3].classList.toggle("slide--show");
        }else if(valor===5){
            slider[elemact-1].classList.toggle("slide--show");
            slider[0].classList.toggle("slide--show")
        }else{
            slider[elemact-1].classList.toggle("slide--show");
            slider[valor-1].classList.toggle('slide--show')
     }
   
   
    }

 

    
})()