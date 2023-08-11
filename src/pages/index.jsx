import Button from "../components/Button";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BASE_URL;

function index() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  let url = baseURL;
  if (selectedCategory) {
    url += `?category=${selectedCategory}`;
  }

  const { data, error, loading } = useFetch(url);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    const totalPages = Math.ceil(data.length / postsPerPage);

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };
  const prevPage = (pageNumber) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="max-w-[800px] text-white mx-auto pt-7 px-4 md:px-5 lg:px-0">
      <div className="flex justify-between items-center">
        <div className="md:flex md:justify-between md:items-center md:flex-col ">
          <h1 className="font-[500] text-3xl tracking-[2px] md:text-4xl md:tracking-[-1px]">
            WatchList
          </h1>
          <p className="text-sm md:text-[14px] ">All your favorite movies</p>
        </div>
        <div>
          <button
            onClick={() => navigate("/addMovie")}
            className="text-[13px] border-[#FC4F03] border-[1px] py-1 px-3 rounded-sm text-[#FC4F03]"
          >
            ADD MOVIE
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full mt-3 text-sm text-white">
        <label className="">Category</label>
        <select
          className="bg-[#282831] pl-1 outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
        <Card data={currentPosts} url={url} />
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default index;
