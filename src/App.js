import { useState } from "react";
import "./styles.css";
import myImage from "/src/hero-img.svg";

const musicDB = {
  Rock: [
    {
      name: '"Bohemian Rhapsody" by Queen',
      rating: "4.9/5"
    },
    {
      name: '"Stairway to Heaven" by Led Zeppelin',
      rating: "4.9/5"
    },
    {
      name: '"Hotel California" by Eagles',
      rating: "4.8/5"
    }
  ],
  Pop: [
    {
      name: '"Shape of You" by Ed Sheeran',
      rating: "4.5/5"
    },
    {
      name: '"Uptown Funk" by Mark Ronson ft. Bruno Mars',
      rating: "4.4/5"
    },
    {
      name: '"Someone Like You" by Adele',
      rating: "4.7/5"
    }
  ],
  HipHop: [
    {
      name: '"Lose Yourself" by Eminem',
      rating: "4.7/5"
    },
    {
      name: '"Old Town Road" by Lil Nas X ft. Billy Ray Cyrus',
      rating: "4.2/5"
    },
    {
      name: '"Sicko Mode" by Travis Scott',
      rating: "4.3/5"
    }
  ],
  Bollywood: [
    {
      name: '"Tum Hi Ho" from the movie Aashiqui 2',
      rating: "4.6/5"
    },
    {
      name: '"Chaiyya Chaiyya" from the movie Dil Se',
      rating: "4.5/5"
    },
    {
      name: '"Kal Ho Naa Ho" from the movie Kal Ho Naa Ho',
      rating: "4.7/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Rock");

  function onGenreCLickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Welcome to GoodMusic
        </h1>
        <p>Tells You The Best in Genre</p>
      </header>
      <section class="genre-section">
        <img src={myImage} className="responsive-image" alt="prop" />
        <h2>Choose a Genre</h2>
        <div class="genre-buttons">
          {Object.keys(musicDB).map(function (genre) {
            return (
              <button
                class="genre-button"
                onClick={() => onGenreCLickHandler(genre)}
              >
                {genre}
              </button>
            );
          })}
        </div>
        <hr />
        <div className="songs">
          <ul className="song-list">
            {musicDB[selectedGenre].map((item) => {
              return (
                <li className="song-list-item">
                  <div className="song-name">{item.name}</div>
                  <div className="song-rating">
                    <span>⭐</span>
                    {item.rating}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <footer className="footer">
        <span>Made with 💙 By Prabhakar Maurya</span>
      </footer>
    </div>
  );
}
