console.log('JavaScript Time Guys');
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:5501/songs/${folder}/`);
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let tds = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < tds.length; index++) {
    const element = tds[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
  return songs;
}

const playMusic = (track, pause = false) => {
  currentSong.src = `/songs/${currFolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "play.svg";
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main() {
  songs = await getSongs("ncs"); // Corrected folder path
  playMusic(songs[0], true);

  displayAlbums();
  let a = await fetch(`http://127.0.0.1:5501/songs/ncs/`); // Corrected folder path
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + `<li>
            <img class="invert" src="music.svg" alt="song1" />
            <div class="info">
              <div> ${song.replaceAll("%20", " ")}</div>
              <div>song artist</div>
            </div>
            <div class="playnow">
              <span>Play Now</span>
              <img class="invert" src="play.svg" alt="sdf">
            </div>
        </li>`;
  }

  Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  });

  currentSong.addEventListener("timeupdate", () => {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) / 100;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left-box").style.left = "0px";
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left-box").style.left = "-320%";
  });

  previous.addEventListener("click", () => {
    console.log("Previous clicked");
    console.log(currentSong);
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if ((index - 1) >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  next.addEventListener("click", () => {
    console.log("Next clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if ((index + 1) < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value);
    currentSong.volume = parseInt(e.target.value) / 100;
  });

  Array.from(document.getElementsByClassName(".card")).forEach(e => {
    console.log(e);
    e.addEventListener("click", async item => {
      songs = await getSongs("ncs"); // Corrected folder path
      item.dataset.folder;
    });
  });

  document.querySelector(".volume>img").addEventListener("click", e => {
    console.log(e.target);
    console.log("changing,e.target.src");
    if (e.target.src.includes("volume.svg")) {
      e.target.src.replace("volume.svg", "mute.svg");
      currentSong.volume = 0;
      document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    } else {
      e.target.src = e.target.src.replace("mute.svg", "volume.svg");
      currentSong.volume = .10;
      document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
    }
  });
}

main();
