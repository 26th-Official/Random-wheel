function rotatewheel(){
    let b = document.querySelector(".wheel").style.rotate
    console.log(b)
    let a = Math.random()
    console.log(a)
    let v = (a *360)+360
    console.log(v)
    if (b.slice(0,2)<-1){
        document.querySelector(".wheel").style.rotate= v+"deg"
        b = false
    }
    else{
        document.querySelector(".wheel").style.rotate= -v+"deg"
        b = true
    }
    
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name == "Enter"){
        rotatewheel()
    }
})
   
