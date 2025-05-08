const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const playlist = document.getElementById('playlist');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentTrack = 0;
const tracks = [
    'promo\audio\ 1.Cardao - 90s Guetto (Original Mix).mp3',
    'promo\audio\ 2.Cardao - Urban Mythos (Original Mix).mp3',
    'promo\audio\ 3.Cardao - Street Sonata (Original Mix).mp3',
    'promo\audio\ 4.Cardao - Ritual Guetto Old Rhythms (Original Mix).mp3'
    
];

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
}

function changeTrack(index) {
    currentTrack = index;
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    changeTrack(currentTrack);
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    changeTrack(currentTrack);
}

function updateProgress() {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percent + '%';
}

function seek(event) {
    const percent = (event.clientX - progress.getBoundingClientRect().left) / progress.clientWidth;
    audioPlayer.currentTime = percent * audioPlayer.duration;
    updateProgress();
}

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', nextTrack);