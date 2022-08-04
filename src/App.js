import axios from "axios";
import { useEffect, useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const colors = ["orange", "blue", "yellow", "green", "purple", "indigo", "red"];

function App() {
  const [colorIndex, setColorIndex] = useState(1);
  const [quoteIndex, setQuoteIndex] = useState(1);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const res = await axios(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    setQuotes(res.data.quotes);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const getRandomColorIndex = () => Math.floor(Math.random() * colors.length);

  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const handleClick = () => {
    setColorIndex(getRandomColorIndex());
    setQuoteIndex(getRandomQuoteIndex());
  };

  return (
    <div
      className={`flex justify-center items-center w-full h-screen bg-${colors[colorIndex]}-400`}
    >
      <div
        className={`w-[620px] h-96 rounded-md bg-white px-6 py-5 flex flex-col items-center text-${colors[colorIndex]}-400`}
      >
        <p className="mb-4 text-xl text-center">{quotes[quoteIndex]?.quote}</p>
        <p className="text-sm self-end">{quotes[quoteIndex]?.author}</p>

        <button
          onClick={handleClick}
          className={`w-80 py-2 bg-${colors[colorIndex]}-400 rounded-sm text-white mt-auto font-bold text-xl hover:bg-${colors[colorIndex]}-800 transition-colors ease-in duration-300`}
        >
          Random Quote
        </button>
        <div className="self-start flex gap-4 mt-6">
          <BsFacebook size={30} className="cursor-pointer" />
          <BsTwitter size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default App;
