function rotatewheel(){
    let b = document.querySelector(".wheel").style.rotate
    let a = Math.random()
    let v = (a *360)+600
    if (b.slice(0,2)<-1){
        document.querySelector(".wheel").style.rotate= v+"deg"
    }
    else{
        document.querySelector(".wheel").style.rotate= -v+"deg"
    } 
}

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter"){
        rotatewheel()
    }
})
   
