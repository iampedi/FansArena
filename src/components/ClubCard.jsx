import { Trash } from "phosphor-react";
import ClubImage from "../components/ClubImage";
import { Link } from "react-router";

const ClubCard = (props) => {
  return (
    <div
      key={props.club.id}
      className="_card border-1 border-gray-100 bg-gray-50/50 rounded-lg hover:border-gray-300 hover:bg-gray-50 duration-300 flex gap-5 p-5 text-gray-600"
    >
      <div className="_images w-18 flex items-center shrink-0">
        <Link to={`/club/${props.club.slug}`}>
          <ClubImage slug={props.club.slug} name={props.club.name} />
        </Link>
      </div>

      <div className="_content flex flex-col flex-grow min-w-0">
        <Link to={`/club/${props.club.slug}`}>
          <h2 className="font-bold text-lg truncate">{props.club.name}</h2>
        </Link>

        {props.club.founded && <p>Foudned in {props.club.founded}</p>}
        {(props.club.city || props.club.country) && (
          <p>
            {props.club.city}, {props.club.country}
          </p>
        )}
      </div>
      <div className="_tools flex items-center">
        <Trash
          onClick={() => props.deleteClub(props.club.id)}
          size={20}
          className="text-gray-300 hover:text-red-500 duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ClubCard;
