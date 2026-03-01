import React, { useState } from "react";
import MeImage from "./assets/me.png";

const App = () => {
  const [targetNumber, setTargetNumber] = useState(() =>
    Math.floor(Math.random() * 101),
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Enter a number between 0 and 100.");
  const [guessesLeft, setGuessesLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const startNewGame = () => {
    setTargetNumber(Math.floor(Math.random() * 101));
    setGuess("");
    setMessage("Enter a number between 0 and 100.");
    setGuessesLeft(10);
    setGameOver(false);
    setHistory([]);
  };

  const handleGuess = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (gameOver) return;

    const num = parseInt(guess);
    if (isNaN(num) || num < 0 || num > 100) {
      setMessage("Error: Print only numbers from 0 to 100.");
      return;
    }

    const newGuessesLeft = guessesLeft - 1;
    setGuessesLeft(newGuessesLeft);

    if (num === targetNumber) {
      setMessage(
        `Extraordinary! ${num} is correct. You have the gift of clairvoyance.`,
      );
      setGameOver(true);
    } else if (newGuessesLeft === 0) {
      setMessage(
        `Tragic! You are out of attempts. The secret number was ${targetNumber}.`,
      );
      setGameOver(true);
    } else if (num < targetNumber) {
      setMessage(`Higher... ${num} is too low.`);
      setHistory((prev) => [...prev, `${num} (Too Low)`]);
    } else {
      setMessage(`Lower... ${num} is too high.`);
      setHistory((prev) => [...prev, `${num} (Too High)`]);
    }
    setGuess("");
  };

  return (
    <div className="min-h-screen bg-[#f9f7f1] text-black font-serif p-4 md:p-8 selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto border-x-2 border-black px-4 md:px-8 shadow-sm bg-[#fcfbf9]">
        <header className="border-b-4 border-black pt-8 pb-4 mb-6">
          <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span>Vol. I — No. 1</span>
            <span>Davao City, Philippines</span>
            <span>Sunday, March 1, 2026</span>
            <span>Price: 10 Cents</span>
          </div>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-center uppercase tracking-tighter mb-2"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Daily Gold Ship
          </h1>
          <div className="border-t-2 border-black pt-2 flex justify-between items-center text-sm md:text-base font-semibold uppercase">
            <span>"Sailing Through The Sea of Technology"</span>
            <span>Exclusive Profile Edition</span>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b-4 border-black pb-8 mb-8">
          <aside className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black pr-0 lg:pr-8 pb-6 lg:pb-0">
            <div className="mb-6">
              <div className="w-full aspect-3/4 bg-gray-200 border-2 border-black flex items-center justify-center mb-2 overflow-hidden relative group">
                <img
                  src={MeImage}
                  alt="Portrait of Loejee Miguel L. Dulaugon"
                  className="object-cover w-full h-full grayscale contrast-125"
                />
              </div>
              <p className="text-xs text-right italic">Fig. 1 - The Subject</p>
            </div>

            <h2 className="text-xl font-bold uppercase border-b border-black mb-3">
              Vital Statistics
            </h2>
            <ul className="text-sm space-y-2 mb-6">
              <li>
                <strong>Name:</strong>
                <br /> Loejee Miguel L. Dulaugon
              </li>
              <li>
                <strong>Born:</strong>
                <br /> July 11, 2003 (Age 22)
              </li>
              <li>
                <strong>Academic Standing:</strong>
                <br /> BSIT 3B
              </li>
            </ul>

            <h2 className="text-xl font-bold uppercase border-b border-black mb-3">
              Personal Ledger
            </h2>
            <div className="text-sm space-y-4">
              <div>
                <strong>Likes & Hobbies:</strong>
                <p>
                  Programming, Calisthenics, Bouldering, Gaming, Drawing, Linux,
                  and Anime.
                </p>
              </div>
              <div>
                <strong>Dislikes:</strong>
                <p>
                  Spaghetti code, Minor Subjects, Windows 11, My Commute Time
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold uppercase border-b border-black mb-3 mt-6">
              Social Telegraph
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/loejeemiguellawas.dulaugon"
                  className="underline decoration-1 underline-offset-2 hover:bg-black hover:text-white transition-colors"
                >
                  Facebook Directory
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/loeloeloeman/"
                  className="underline decoration-1 underline-offset-2 hover:bg-black hover:text-white transition-colors"
                >
                  Instagram Telegram
                </a>
              </li>
            </ul>
          </aside>

          <article className="lg:col-span-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black pr-0 lg:pr-8 pb-6 lg:pb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-none mb-4 uppercase">
              Local IT Student Makes Waves in Web Development
            </h2>
            <h3 className="text-xl italic mb-6">
              An exclusive look into the life and mind of Loejee Miguel, a
              rising talent in BSIT 3B.
            </h3>

            <div className="text-base md:text-lg leading-relaxed text-justify columns-1 md:columns-2 gap-6">
              <p className="mb-4">
                <span className="float-left text-6xl font-black pr-2 pt-2 leading-none">
                  L
                </span>
                I am a neurodivergent absent-minded loser boi. I recently
                discovered my passion for Calisthenics and Bouldering and it has
                been the only sport I actually liked ever since I was a kid.
              </p>
              <p className="mb-4">
                I love programming, I went to become a programmer/software
                developer because I have the passion of creating things.
                Whethere it'd be art or something entirely functional.
              </p>
              <p className="mb-4">
                I love anime, specifically the objectively best anime there is,
                Attack On Titan. Anime has been the only other thing keeping me
                mentally well rounded as a brain air refresher. I used to love
                gaming until I got too busy, I currently am pursuing a
                passionate dream of starting my own business and being able to
                live completely financially free. I want moni.
              </p>
            </div>
          </article>

          <aside className="lg:col-span-3 flex flex-col">
            <div className="border-4 border-black p-4 bg-white h-full flex flex-col">
              <div className="text-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  The Number Oracle
                </h2>
                <p className="text-xs italic mt-1">
                  Daily Amusements & Puzzles
                </p>
              </div>

              <div className="grow">
                <p className="text-sm text-justify mb-4">
                  Test your clairvoyance! The Oracle has chosen a secret number
                  between <strong>0 and 100</strong>. You have exactly{" "}
                  <strong>{guessesLeft}</strong> attempts remaining to uncover
                  it.
                </p>

                <div className="bg-black text-white p-3 text-center font-bold text-sm mb-4 min-h-12 flex items-center justify-center">
                  {message}
                </div>

                <form
                  onSubmit={handleGuess}
                  className="mb-4 flex flex-col gap-3"
                >
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    disabled={gameOver}
                    className="w-full border-2 border-black p-2 text-center text-xl font-bold disabled:bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter 0-100"
                  />
                  {!gameOver ? (
                    <button
                      type="submit"
                      className="w-full bg-black text-white uppercase font-bold py-2 border-2 border-black hover:bg-white hover:text-black transition-colors"
                    >
                      Submit Guess
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={startNewGame}
                      className="w-full bg-white text-black uppercase font-bold py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      Play Again
                    </button>
                  )}
                </form>

                {history.length > 0 && (
                  <div className="mt-4 border-t border-black pt-2">
                    <p className="text-xs font-bold uppercase mb-1">
                      Previous Guesses:
                    </p>
                    <ul className="text-xs space-y-1">
                      {history.map((h, i) => (
                        <li
                          key={i}
                          className="border-b border-dotted border-gray-400 pb-1"
                        >
                          Attempt {i + 1}: {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </main>

        <footer className="text-center text-xs uppercase font-bold pb-8 tracking-widest">
          <p>© 2026 Daily Gold Ship Publishing. All Rights Reserved.</p>
          <p>Printed for the Practical Examination of L.M.L.D.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
