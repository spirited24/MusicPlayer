let progress = document.getElementById("progress");
        let music = document.getElementById("music");
        let controlIcon = document.getElementById("controlIcon");

        music.onloadedmetadata = function() {
            progress.max = music.duration;
            progress.value = music.currentTime;
        };

        function playPause() {
            if(controlIcon.classList.contains("fa-pause")){
                music.pause();
                controlIcon.classList.remove("fa-pause");
                controlIcon.classList.add("fa-play");
            } else {
                music.play();
                controlIcon.classList.add("fa-pause");
                controlIcon.classList.remove("fa-play");
            };
        };

        document.addEventListener("keydown", function(event) {
            if (event.code === "Space") {
                playPause();
            }
        });

        if(music.play()) {
            setInterval(() => {
                progress.value = music.currentTime},500);
        }

        progress.onchange = function() {
            music.play();
            music.currentTime = progress.value;
            controlIcon.classList.add("fa-pause");
            controlIcon.classList.remove("fa-play");

        }