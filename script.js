class SongRecommender {
  constructor(genre) {
    this.genre = genre;
    this.apiKey = "a86427cfdd16f0c4cbbbc5152be41a63";
    this.apiUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${this.genre}&api_key=${this.apiKey}&format=json`;
    this.songList = [];
    this.currentSong = null;
  }

  async fetchSongs() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      const tracks = data.tracks.track;

      for (let i = 0; i < tracks.length; i++) {
        const song = {
          name: tracks[i].name,
          artist: tracks[i].artist.name,
          image: tracks[i].image[3]["#text"],
          album: tracks[i].album.title,
          date: tracks[i].date,
        };
        this.songList.push(song);
      }
    } catch (error) {
      console.log(error);
    }
  }

  generateSong() {
    const randomIndex = Math.floor(Math.random() * this.songList.length);
    this.currentSong = this.songList[randomIndex];
  }

  displaySong() {
    const titleEl = document.querySelector(".title");
    const artistEl = document.querySelector(".artist");
    const albumEl = document.querySelector(".album");
    const dateEl = document.querySelector(".date");
    const coverArtEl = document.querySelector(".cover-art img");

    titleEl.textContent = this.currentSong.name;
    artistEl.textContent = this.currentSong.artist;
    albumEl.textContent = this.currentSong.album;
    dateEl.textContent = this.currentSong.date;
    coverArtEl.src = this.currentSong.image;
  }
}

const genreInput = document.getElementById("genre").innertext;
const submitBtn = document.getElementById("submit").innertext;

const songRecommender = new SongRecommender();

submitBtn.addEventListener("click", async () => {
  songRecommender.genre = genreInput.value;
  songRecommender.apiUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${songRecommender.genre}&api_key=${songRecommender.apiKey}&format=json`;

  await songRecommender.fetchSongs();
  songRecommender.generateSong();
  songRecommender.displaySong();
});
