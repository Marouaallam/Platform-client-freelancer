import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsSearchHeart } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

export const Searchbar = () => {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/project");
        setCards(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, []);

  const handleFilter = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    if (input) {
      const res = cards.filter(f => f.nomProjet.toLowerCase().includes(input.toLowerCase()));
      setData(res);
    } else {
      setData([]);
    }
  };

  return (
    <>
      <div className="mt-3 flex justify-center">
        <form action="" className="relative w-max">
          <BsSearchHeart size={20} className="absolute right-3 top-3 text-black" />
          <input
            type="search"
            className="relative cursor-pointer z-10 h-12 w-12 rounded-full border-0 bg-transparent pl-12 outline-none transition-all duration-300 ease-in-out focus:w-56 focus:cursor-text focus:bg-[#DAE0FF] focus:pl-4 focus:pr-4"
            placeholder="search..."
            onChange={handleFilter}
          />
        </form>
      </div>
      {searchInput && (
        <div className="mt-4 p-3 gap-3 bg-[#DAE0FF]">
          {data.map((d, i) => (
            <div key={i}>
              <button onClick={() => navigate(`/project/${d._id}`)}>{d.nomProjet}</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};



