var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//initialize video
	video = document.querySelector("#player1")
	//autoplay and looping
	video.loop = false
	video.autoplay = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	//initializes the volume, but doesn't change it
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
 });

 document.querySelector("#pause").addEventListener("click", function() {
	 console.log("Pause Video")
	 video.pause()
 });

 document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow the video speed")
	video.playbackRate *= 0.95
	console.log("speed is", video.playbackRate)
 });

 document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up the video")
	video.playbackRate /= 0.95
	console.log("speed is", video.playbackRate)
 });

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead")
	video.currentTime += 15
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("video current time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true
		this.innerHTML = "Unmute"
		console.log("mute the video")
	} else {
		video.muted = false
		console.log("unmute the video")
		this.innerHTML = "Mute"
	}
});

//use this keyword for slider
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML =  this.value + "%"
});

//old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school design enabled")
	document.getElementById("player1").classList.add("oldSchool")
});

//original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original style")
	document.getElementById("player1").classList.remove("oldSchool")
});


