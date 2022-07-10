const starback = new Starback("#canvas", {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    type: 'dot',
    quantity: 300,
    starSize: [1,5],
    direction: 20,
    starColor: 'white',
    randomOpacity: [0.7, 1],
    backgroundColor: 'transparent'
})

// Parallax
let bg = document.querySelector('.bg img')

window.addEventListener('mousemove', e => {
    let transform = `scale(1.1) `
    let sensitivity = 0.05
    let translateX = (e.clientX - (window.innerWidth / 2)) * sensitivity
    let translateY = (e.clientY - (window.innerHeight / 2)) * sensitivity
    transform += `translate(${translateX}px, ${translateY}px)`
    console.log(transform)
    bg.style.transform = transform
})