import { useState } from "react";
import clubsData from "../data/clubs.json";
import { Link } from "react-router";

const Clubs = () => {
  const [clubs] = useState(clubsData);

  return (
    <div className="_list-cards grid grid-cols-3 gap-5">
      {clubs.map((club) => {
        return (
          <div
            key={club.id}
            className="_card border-1 border-gray-100 bg-gray-50/50 rounded-lg hover:border-gray-300 hover:bg-gray-50 duration-300"
          >
            <Link to={`/club/${club.id}`} className="flex gap-5 p-5 text-gray-600">
              <div className="_images w-20">
                <img src={`/images/clubs/${club.id}.png`} />
              </div>
              <div className="_content flex flex-col">
                <h2 className="font-bold text-lg">{club.name}</h2>
                <p>Foudned in {club.founded}</p>
                <p>
                  {club.city}, {club.country}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Clubs;
