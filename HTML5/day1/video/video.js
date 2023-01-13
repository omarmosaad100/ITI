var video = document.getElementById("video");
var frameSlider = document.getElementById("frameSlider");

document.getElementById("play").onclick = function(){
    video.play();
}

document.getElementById("stop").onclick = function(){
    video.pause();
}

document.getElementById("first").onclick = function(){
    video.currentTime=1;
}
document.getElementById("last").onclick = function(){
    video.currentTime = video.duration-2;
}
document.getElementById("back").onclick = function(){
    video.currentTime -= 10; 
}
document.getElementById("forward").onclick = function(){
    video.currentTime += 10; 
}
document.getElementById("volumeSlider").onchange = function(){
    video.volume = this.value / 100;
}
frameSlider.onchange = function(){
    video.currentTime = this.value * video.duration / 100 -1;
}
video.ontimeupdate = function(){
    frameSlider.value = video.currentTime;
}
document.getElementById("muter").onclick = function(){
    if (video.volume === 0)
    {
        video.volume = previousVolume;
        document.getElementById("volumeSlider").value = video.volume * 100;
    }
    else
    {
        previousVolume = video.volume;
        video.volume = 0;
        document.getElementById("volumeSlider").value = 0;
    }
}
document.getElementById("speed").onchange = function(){
    video.playbackRate = this.value;
}
