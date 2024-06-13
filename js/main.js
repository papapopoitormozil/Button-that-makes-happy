'use strict'

let button = document.querySelector("img")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")
let h2 = document.querySelector("h2")
let video = document.querySelector("video")
let a = document.querySelector("a")
let pVideo = document.querySelector(".p-video")

var clickSound = new Audio('./src/click.waw')

button.onclick = click; startDelay

function click() {
    clickSound.play
    setTimeout(startVideo, 1000)
}

function startVideo() {
    button.style.display = "none"
    h1.style.display = "none"
    h2.style.display = "none"
    p.style.display = "none"
    video.style.display = "block"
    a.style.display = "block"
    pVideo.style.display = "block"
}