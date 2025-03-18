let cur = document.querySelector("#cursor")

document.addEventListener("mousemove", e => {
    let { x, y } = e
    console.log(x,y)
    cur.style.top =y +"px"
    cur.style.left =x +"px"
})
document.querySelector("#nav>h1").addEventListener("mouseenter", e => {
    cur.style.opacity=0
})
