(function(){
    const slider=[...document.querySelectorAll('.slide__cuerpo')];
    const arrowafter=document.querySelector('#after');
    const arrowbefore=document.querySelector('#before');
    const hide1 = document.querySelector('#btnhide1');
    const show1 = document.querySelector('#btnshow1');
    const hide2 = document.querySelector('#btnhide2');
    const show2 = document.querySelector('#btnshow2');
    const hide3 = document.querySelector('#btnhide3');
    const show3 = document.querySelector('#btnshow3');
    const hide4 = document.querySelector('#btnhide4');
    const show4 = document.querySelector('#btnshow4');
    const hide5 = document.querySelector('#btnhide5');
    const show5 = document.querySelector('#btnshow5');
    const hide6 = document.querySelector('#btnhide6');
    const show6 = document.querySelector('#btnshow6');
    const hide7 = document.querySelector('#btnhide7');
    const show7 = document.querySelector('#btnshow7');
    const hide8 = document.querySelector('#btnhide8');
    const show8 = document.querySelector('#btnshow8');
    const hide9 = document.querySelector('#btnhide9');
    const show9 = document.querySelector('#btnshow9');
    const hide10 = document.querySelector('#btnhide10');
    const show10 = document.querySelector('#btnshow10');
    const hide11 = document.querySelector('#btnhide11');
    const show11 = document.querySelector('#btnshow11');
    const hide12 = document.querySelector('#btnhide12');
    const show12 = document.querySelector('#btnshow12');
    const hide13 = document.querySelector('#btnhide13');
    const show13 = document.querySelector('#btnshow13');
    const hide14 = document.querySelector('#btnhide14');
    const show14 = document.querySelector('#btnshow14');
    const hide15 = document.querySelector('#btnhide15');
    const show15 = document.querySelector('#btnshow15');
    const hide16 = document.querySelector('#btnhide16');
    const show16 = document.querySelector('#btnshow16');
    const hide17 = document.querySelector('#btnhide17');
    const show17 = document.querySelector('#btnshow17');
    const hide18 = document.querySelector('#btnhide18');
    const show18 = document.querySelector('#btnshow18');
    const hide19 = document.querySelector('#btnhide19');
    const show19 = document.querySelector('#btnshow19');
    const hide20 = document.querySelector('#btnhide20');
    const show20 = document.querySelector('#btnshow20');
    const hide21 = document.querySelector('#btnhide21');
    const show21 = document.querySelector('#btnshow21');
    const hide22 = document.querySelector('#btnhide22');
    const show22 = document.querySelector('#btnshow22');
    const hide23 = document.querySelector('#btnhide23');
    const show23 = document.querySelector('#btnshow23');
    const hide24 = document.querySelector('#btnhide24');
    const show24 = document.querySelector('#btnshow24');
    const hide25 = document.querySelector('#btnhide25');
    const show25 = document.querySelector('#btnshow25');
    const hide26 = document.querySelector('#btnhide26');
    const show26 = document.querySelector('#btnshow26');
    const hide27 = document.querySelector('#btnhide27');
    const show27 = document.querySelector('#btnshow27');
    const hide28 = document.querySelector('#btnhide28');
    const show28 = document.querySelector('#btnshow28');
    let valor;


    console.log(arrowafter);
    //alexander
    arrowafter.addEventListener('click',()=>changepos(1));
    arrowbefore.addEventListener('click',()=>changepos(-1));
    show1.addEventListener("click", () => alter1(-1));
    hide1.addEventListener("click", () => alter1(1));
    function alter1(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide1").style.display = "block";
            document.getElementById("hide1").style.transform = "translateY(0px)";
            document.getElementById("btnshow1").style.display="none"
            document.getElementById("btnhide1").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide1").style.display = "none";
            document.getElementById("btnshow1").style.display="block"
            document.getElementById("btnhide1").style.display="none"
        }
        
    }
    //caipiriña
    show2.addEventListener("click", () => alter2(-1));
    hide2.addEventListener("click", () => alter2(1));
    function alter2(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide2").style.display = "block";
            document.getElementById("hide2").style.transform = "translateY(0px)";
            document.getElementById("btnshow2").style.display="none"
            document.getElementById("btnhide2").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide2").style.display = "none";
            document.getElementById("btnshow2").style.display="block"
            document.getElementById("btnhide2").style.display="none"
        }
        
    }
    //caipiroska
    show3.addEventListener("click", () => alter3(-1));
    hide3.addEventListener("click", () => alter3(1));
    function alter3(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide3").style.display = "block";
            document.getElementById("hide3").style.transform = "translateY(0px)";
            document.getElementById("btnshow3").style.display="none"
            document.getElementById("btnhide3").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide3").style.display = "none";
            document.getElementById("btnshow3").style.display="block"
            document.getElementById("btnhide3").style.display="none"
        }
        
    }
    //piña colada
    show4.addEventListener("click", () => alter4(-1));
    hide4.addEventListener("click", () => alter4(1));
    function alter4(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide4").style.display = "block";
            document.getElementById("hide4").style.transform = "translateY(0px)";
            document.getElementById("btnshow4").style.display="none"
            document.getElementById("btnhide4").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide4").style.display = "none";
            document.getElementById("btnshow4").style.display="block"
            document.getElementById("btnhide4").style.display="none"
        }
        
    }
    //camara de gas
    show5.addEventListener("click", () => alter5(-1));
    hide5.addEventListener("click", () => alter5(1));
    function alter5(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide5").style.display = "block";
            document.getElementById("hide5").style.transform = "translateY(0px)";
            document.getElementById("btnshow5").style.display="none"
            document.getElementById("btnhide5").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide5").style.display = "none";
            document.getElementById("btnshow5").style.display="block"
            document.getElementById("btnhide5").style.display="none"
        }
        
    }
    //daikiri de menta
    show6.addEventListener("click", () => alter6(-1));
    hide6.addEventListener("click", () => alter6(1));
    function alter6(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide6").style.display = "block";
            document.getElementById("hide6").style.transform = "translateY(0px)";
            document.getElementById("btnshow6").style.display="none"
            document.getElementById("btnhide6").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide6").style.display = "none";
            document.getElementById("btnshow6").style.display="block"
            document.getElementById("btnhide6").style.display="none"
        }
        
    }
    //daikiri narural
    show7.addEventListener("click", () => alter7(-1));
    hide7.addEventListener("click", () => alter7(1));
    function alter7(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide7").style.display = "block";
            document.getElementById("hide7").style.transform = "translateY(0px)";
            document.getElementById("btnshow7").style.display="none"
            document.getElementById("btnhide7").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide7").style.display = "none";
            document.getElementById("btnshow7").style.display="block"
            document.getElementById("btnhide7").style.display="none"
        }
        
    }
    //daikiri de fresa
    show8.addEventListener("click", () => alter8(-1));
    hide8.addEventListener("click", () => alter8(1));
    function alter8(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide8").style.display = "block";
            document.getElementById("hide8").style.transform = "translateY(0px)";
            document.getElementById("btnshow8").style.display="none"
            document.getElementById("btnhide8").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide8").style.display = "none";
            document.getElementById("btnshow8").style.display="block"
            document.getElementById("btnhide8").style.display="none"
        }
        
    }
    //varadero sunrise
    show9.addEventListener("click", () => alter9(-1));
    hide9.addEventListener("click", () => alter9(1));
    function alter9(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide9").style.display = "block";
            document.getElementById("hide9").style.transform = "translateY(0px)";
            document.getElementById("btnshow9").style.display="none"
            document.getElementById("btnhide9").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide9").style.display = "none";
            document.getElementById("btnshow9").style.display="block"
            document.getElementById("btnhide9").style.display="none"
        }
        
    }
    //sexonthebeach
    show10.addEventListener("click", () => alter10(-1));
    hide10.addEventListener("click", () => alter10(1));
    function alter10(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide10").style.display = "block";
            document.getElementById("hide10").style.transform = "translateY(0px)";
            document.getElementById("btnshow10").style.display="none"
            document.getElementById("btnhide10").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide10").style.display = "none";
            document.getElementById("btnshow10").style.display="block"
            document.getElementById("btnhide10").style.display="none"
        }
        
    }
    //mojito
    show11.addEventListener("click", () => alter11(-1));
    hide11.addEventListener("click", () => alter11(1));
    function alter11(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide11").style.display = "block";
            document.getElementById("hide11").style.transform = "translateY(0px)";
            document.getElementById("btnshow11").style.display="none"
            document.getElementById("btnhide11").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide11").style.display = "none";
            document.getElementById("btnshow11").style.display="block"
            document.getElementById("btnhide11").style.display="none"
        }
        
    }
    show12.addEventListener("click", () => alter12(-1));
    hide12.addEventListener("click", () => alter12(1));
    function alter12(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide12").style.display = "block";
            document.getElementById("hide12").style.transform = "translateY(0px)";
            document.getElementById("btnshow12").style.display="none"
            document.getElementById("btnhide12").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide12").style.display = "none";
            document.getElementById("btnshow12").style.display="block"
            document.getElementById("btnhide12").style.display="none"
        }
        
    }
    show13.addEventListener("click", () => alter13(-1));
    hide13.addEventListener("click", () => alter13(1));
    function alter13(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide13").style.display = "block";
            document.getElementById("hide13").style.transform = "translateY(0px)";
            document.getElementById("btnshow13").style.display="none"
            document.getElementById("btnhide13").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide13").style.display = "none";
            document.getElementById("btnshow13").style.display="block"
            document.getElementById("btnhide13").style.display="none"
        }
        
    }
    show14.addEventListener("click", () => alter14(-1));
    hide14.addEventListener("click", () => alter14(1));
    function alter14(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide14").style.display = "block";
            document.getElementById("hide14").style.transform = "translateY(0px)";
            document.getElementById("btnshow14").style.display="none"
            document.getElementById("btnhide14").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide14").style.display = "none";
            document.getElementById("btnshow14").style.display="block"
            document.getElementById("btnhide14").style.display="none"
        }
        
    }
    show15.addEventListener("click", () => alter15(-1));
    hide15.addEventListener("click", () => alter15(1));
    function alter15(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide15").style.display = "block";
            document.getElementById("hide15").style.transform = "translateY(0px)";
            document.getElementById("btnshow15").style.display="none"
            document.getElementById("btnhide15").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide15").style.display = "none";
            document.getElementById("btnshow15").style.display="block"
            document.getElementById("btnhide15").style.display="none"
        }
        
    }
    show16.addEventListener("click", () => alter16(-1));
    hide16.addEventListener("click", () => alter16(1));
    function alter16(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide16").style.display = "block";
            document.getElementById("hide16").style.transform = "translateY(0px)";
            document.getElementById("btnshow16").style.display="none"
            document.getElementById("btnhide16").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide16").style.display = "none";
            document.getElementById("btnshow16").style.display="block"
            document.getElementById("btnhide16").style.display="none"
        }
        
    }
    show17.addEventListener("click", () => alter17(-1));
    hide17.addEventListener("click", () => alter17(1));
    function alter17(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide17").style.display = "block";
            document.getElementById("hide17").style.transform = "translateY(0px)";
            document.getElementById("btnshow17").style.display="none"
            document.getElementById("btnhide17").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide17").style.display = "none";
            document.getElementById("btnshow17").style.display="block"
            document.getElementById("btnhide17").style.display="none"
        }
        
    }
    show18.addEventListener("click", () => alter18(-1));
    hide18.addEventListener("click", () => alter18(1));
    function alter18(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide18").style.display = "block";
            document.getElementById("hide18").style.transform = "translateY(0px)";
            document.getElementById("btnshow18").style.display="none"
            document.getElementById("btnhide18").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide18").style.display = "none";
            document.getElementById("btnshow18").style.display="block"
            document.getElementById("btnhide18").style.display="none"
        }
        
    }
    show19.addEventListener("click", () => alter19(-1));
    hide19.addEventListener("click", () => alter19(1));
    function alter19(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide19").style.display = "block";
            document.getElementById("hide19").style.transform = "translateY(0px)";
            document.getElementById("btnshow19").style.display="none"
            document.getElementById("btnhide19").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide19").style.display = "none";
            document.getElementById("btnshow19").style.display="block"
            document.getElementById("btnhide19").style.display="none"
        }
        
    }
    show20.addEventListener("click", () => alter20(-1));
    hide20.addEventListener("click", () => alter20(1));
    function alter20(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide20").style.display = "block";
            document.getElementById("hide20").style.transform = "translateY(0px)";
            document.getElementById("btnshow20").style.display="none"
            document.getElementById("btnhide20").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide20").style.display = "none";
            document.getElementById("btnshow20").style.display="block"
            document.getElementById("btnhide20").style.display="none"
        }
        
    }
    show21.addEventListener("click", () => alter21(-1));
    hide21.addEventListener("click", () => alter21(1));
    function alter21(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide21").style.display = "block";
            document.getElementById("hide21").style.transform = "translateY(0px)";
            document.getElementById("btnshow21").style.display="none"
            document.getElementById("btnhide21").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide21").style.display = "none";
            document.getElementById("btnshow21").style.display="block"
            document.getElementById("btnhide21").style.display="none"
        }
        
    }
    show22.addEventListener("click", () => alter22(-1));
    hide22.addEventListener("click", () => alter22(1));
    function alter22(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide22").style.display = "block";
            document.getElementById("hide22").style.transform = "translateY(0px)";
            document.getElementById("btnshow22").style.display="none"
            document.getElementById("btnhide22").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide22").style.display = "none";
            document.getElementById("btnshow22").style.display="block"
            document.getElementById("btnhide22").style.display="none"
        }
        
    }
    show23.addEventListener("click", () => alter23(-1));
    hide23.addEventListener("click", () => alter23(1));
    function alter23(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide23").style.display = "block";
            document.getElementById("hide23").style.transform = "translateY(0px)";
            document.getElementById("btnshow23").style.display="none"
            document.getElementById("btnhide23").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide23").style.display = "none";
            document.getElementById("btnshow23").style.display="block"
            document.getElementById("btnhide23").style.display="none"
        }
        
    }
    show24.addEventListener("click", () => alter24(-1));
    hide24.addEventListener("click", () => alter24(1));
    function alter24(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide24").style.display = "block";
            document.getElementById("hide24").style.transform = "translateY(0px)";
            document.getElementById("btnshow24").style.display="none"
            document.getElementById("btnhide24").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide24").style.display = "none";
            document.getElementById("btnshow24").style.display="block"
            document.getElementById("btnhide24").style.display="none"
        }
        
    }
    show25.addEventListener("click", () => alter25(-1));
    hide25.addEventListener("click", () => alter25(1));
    function alter25(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide25").style.display = "block";
            document.getElementById("hide25").style.transform = "translateY(0px)";
            document.getElementById("btnshow25").style.display="none"
            document.getElementById("btnhide25").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide25").style.display = "none";
            document.getElementById("btnshow25").style.display="block"
            document.getElementById("btnhide25").style.display="none"
        }
        
    }
    show26.addEventListener("click", () => alter26(-1));
    hide26.addEventListener("click", () => alter26(1));
    function alter26(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide26").style.display = "block";
            document.getElementById("hide26").style.transform = "translateY(0px)";
            document.getElementById("btnshow26").style.display="none"
            document.getElementById("btnhide26").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide26").style.display = "none";
            document.getElementById("btnshow26").style.display="block"
            document.getElementById("btnhide26").style.display="none"
        }
        
    }
    show27.addEventListener("click", () => alter27(-1));
    hide27.addEventListener("click", () => alter27(1));
    function alter27(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide27").style.display = "block";
            document.getElementById("hide27").style.transform = "translateY(0px)";
            document.getElementById("btnshow27").style.display="none"
            document.getElementById("btnhide27").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide27").style.display = "none";
            document.getElementById("btnshow27").style.display="block"
            document.getElementById("btnhide27").style.display="none"
        }
        
    }
    show28.addEventListener("click", () => alter28(-1));
    hide28.addEventListener("click", () => alter28(1));
    function alter28(change) {
        let value = 0;
        console.log(change);
        if (change === -1) {
            value = 1;
            document.getElementById("hide28").style.display = "block";
            document.getElementById("hide28").style.transform = "translateY(0px)";
            document.getElementById("btnshow28").style.display="none"
            document.getElementById("btnhide28").style.display="block"
        } else if (change === 1) {
            value = 0;
            document.getElementById("hide28").style.display = "none";
            document.getElementById("btnshow28").style.display="block"
            document.getElementById("btnhide28").style.display="none"
        }
        
    }


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