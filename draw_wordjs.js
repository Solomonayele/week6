

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('#image-text')
input.disabled = true

let image = new image()
image.src ='solomon.jpg'

image.addEventListener('load',function (){
    context.drawImage(image,0, 0)
    input.disabled= false
})



