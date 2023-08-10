const baseURL = import.meta.env.VITE_BASE_URL;
import useFetch from "../hooks/useFetch";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  function StarRate({ numStar }) {
    let rate = [];
    for (let i = 0; i < numStar; i++) {
      rate.push(
        <span key={i}>
          <AiTwotoneStar />
        </span>
      );
    }
    return <div className="flex text-[12px]  text-yellow-300">{rate}</div>;
  }

  return (
    <>
      {data?.map((item) => (
        <Link
          to={`movies/${item.slug}`}
          className="md:hover:scale-105 mx-2  relative bg-[#282831] rounded-md mt-6 hover:bg-[#4D4D53] duration-300 "
          key={item._id}
        >
          <img
            className="rounded-t-md w-full h-[250px] object-cover"
            src={item.thumbnail}
            alt={item.title}
          />

          <div className=" px-2 py-3 text-md h-[80px]">
            <h1 className="text-sm">{item.title}</h1>
            <div className="absolute bottom-1 flex text-sm items-center justify-between w-[90%]">
              <div>
                <StarRate numStar={item.stars} />
              </div>
              <p className="text-[14px]">{item.year}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
