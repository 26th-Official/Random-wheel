function rotatewheel(){
    let a = Math.random()
    console.log(a)
    let v = (a *360)+360
    console.log(v)
    document.querySelector(".wheel").style.rotate= v+"deg"
}


