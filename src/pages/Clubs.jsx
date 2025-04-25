import { useState } from "react";
import clubsData from "../data/clubs.json";
import { Link } from "react-router";
import { Trash } from "phosphor-react";

const Clubs = () => {
  const [clubs] = useState(clubsData);

  return (
    <div className="container max-w-6xl mx-auto py-10">
      <h1 className="bg-blue-50 p-3 rounded-full border border-blue-100 text-xl uppercase text-blue-800 font-bold text-center mb-10">
        Clubs List ({clubs.length})
      </h1>
      <div className="_list-cards grid grid-cols-3 gap-5">
        {clubs.map((club) => {
          return (
            <div
              key={club.id}
              className="_card border-1 border-gray-100 bg-gray-50/50 rounded-lg hover:border-gray-300 hover:bg-gray-50 duration-300 flex gap-5 p-5 text-gray-600"
            >
              <div className="_images w-18 flex items-center">
                <Link to={`/club/${club.id}`} className="">
                  <img src={`/images/clubs/${club.id}.png`} />
                </Link>
              </div>
              <div className="_content flex flex-col flex-1">
                <Link to={`/club/${club.id}`}>
                  <h2 className="font-bold text-lg">{club.name}</h2>
                </Link>

                <p>Foudned in {club.founded}</p>
                <p>
                  {club.city}, {club.country}
                </p>
              </div>
              <div className="_tools flex items-center">
                <Trash
                  size={20}
                  className="text-gray-300 hover:text-red-500 duration-300 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clubs;
