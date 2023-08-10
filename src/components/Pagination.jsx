import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="w-ull flex justify-center items-center  my-10">
      <ul className="flex md:gap-3 w-full justify-center items-center">
        <button
          onClick={() => prevPage(pageNumber.length)}
          className="flex items-center gap-3"
        >
          <BsArrowLeft />
          PREV
        </button>
        {pageNumber.map((number) => (
          <li key={number} className={`py-1 px-1 `}>
            <a
              onClick={() => paginate(number)}
              className={`${
                number === currentPage
                  ? "text-red-500 border-b-2 border-red-500 px-3 cursor-pointer"
                  : "text-white px-3 cursor-pointer"
              }`}
            >
              {number}
            </a>
          </li>
        ))}

        <button onClick={nextPage} className="flex items-center gap-3">
          NEXT
          <BsArrowRight />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
