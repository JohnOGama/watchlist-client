import { Link, useParams, useNavigate, redirect } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const baseURL = import.meta.env.VITE_BASE_URL;
import { AiTwotoneStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../components/Button";
import { MdEditNote } from "react-icons/md";

const Movie = () => {
  const param = useParams();
  const { data, loading, error } = useFetch(baseURL + `/${param.slug}`);

  const navigate = useNavigate();

  function StarRate({ numStar }) {
    let rate = [];
    for (let i = 0; i < numStar; i++) {
      rate.push(
        <span key={i}>
          <AiTwotoneStar />
        </span>
      );
    }

    return (
      <div className="flex text-[11px] ml-3  text-yellow-300 ">{rate}</div>
    );
  }

  const redirectLink = (slug) => {
    if (slug) {
      navigate(`/movies/${slug}`);
    }
  };

  const { data: movie } = useFetch(baseURL);

  const removeMovie = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/${data._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/");
        console.log("movie removed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full h-screen ">
          <div className="md:max-w-[1000px] mx-auto lg:flex lg:justify-center items-center">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              className="w-full h-[500px] object-cover z-2 bg-fixed lg:h-[750px] lg:rounded-md lg:w-[400px] "
            />

            <div className="text-white h-full flex flex-col pt-[40px] rounded-t-[30px] z-5 absolute bottom-0 bg-black/90 max-w-full top-[45%] px-5  lg:relative">
              <h1 className="text-2xl font-bold text-center">{data?.title}</h1>
              <div className="flex items-center justify-center text-sm gap-4 text-stone-500 mt-2">
                <h1 className="">{data?.year}</h1>

                <h1>ratings: {data?.stars}/5</h1>
              </div>
              <Button href={data?.link}>Watch Now</Button>
              <div>
                <h1 className="text-xl font-[600] mb-2 mt-5">Storyline</h1>
                <p className="text-sm leading-6 text-justify text-stone-400">
                  {data?.description}
                </p>
              </div>
              <div>
                <h1 className="text-xl font-[600] mb-2 text-left mt-5">
                  Genres
                </h1>

                <div className="flex gap-4 mb-7">
                  {data?.category?.map((item, index) => (
                    <li
                      className="list-none bg-gray-600/70 px-4 py-2 rounded-full text-sm text-stone-300"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </div>
                <h1 className="text-xl font-[600] mb-3">Movies Suggestion</h1>
                <div className="overflow-x-auto scrollbar-hide ">
                  <div className="flex  gap-2  mb-10  w-[800px]">
                    {movie?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => redirectLink(item.slug)}
                      >
                        <img
                          src={item.thumbnail}
                          className="relative w-[500px] h-[250px] object-cover "
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute top-[-350px] flex justify-between items-center w-[80%] lg:top-8 lg:w-[95%] ">
                  <Link to="/" className=" bg-black/50 rounded-full py-2 px-2">
                    <FiArrowLeft className="text-white" size={25} />
                  </Link>
                  <Link
                    to={`/editmovie/${data?.slug}`}
                    className=" bg-black/50 rounded-full py-2 px-2"
                  >
                    <MdEditNote size={25} />
                  </Link>
                </div>
              </div>
              <div>
                <button
                  className="text-white w-full bg-red-600 py-2 rounded-full mb-5"
                  onClick={removeMovie}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
