import { useState } from "react";
import clubsData from "../data/clubs.json";
import { Link } from "react-router";

const Clubs = () => {
  const [clubs] = useState(clubsData);

  return (
    <div>
      {clubs.map((club) => {
        return (
          <div key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Clubs;
