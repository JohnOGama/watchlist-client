import React, { useEffect } from "react";
import Input from "../components/Input";
import { useState } from "react";
const baseURL = import.meta.env.VITE_BASE_URL;
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState();
  const [year, setYear] = useState();
  const [thumbnail, setThumbnail] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const createMovie = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          stars,
          year,
          slug,
          description,
          link,
          thumbnail,
        }),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.log("Failed to submit");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [image, setImage] = useState(
    "https://www.topnotchegypt.com/wp-content/uploads/2020/11/no-image.jpg"
  );
  const handleCat = (e) => {
    setCategory(e.target.value.split(",").map((category) => category.trim()));
  };

  const onChangeThumbnail = (e) => {
    const res = e.target.value;

    if (res) {
      setThumbnail(res);
      setImage(res);
    }
    if (res === "") {
      setImage(
        "https://www.topnotchegypt.com/wp-content/uploads/2020/11/no-image.jpg"
      );
      setThumbnail("");
    }
  };

  return (
    <div className="text-white max-w-[800px] mx-auto flex flex-col justify-center  gap-3 px-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl uppercase mt-3">Add Movie</h1>
        <Link to="/" className=" bg-black/50 rounded-full py-2 px-2 mt-3">
          <FiArrowLeft className="text-white" size={25} />
        </Link>
      </div>
      <div>
        <img src={image} className="h-[200px] w-full object-cover object-top" />
      </div>
      <form className="w-full flex flex-col gap-2 mt-0 " onSubmit={createMovie}>
        <Input
          type="text"
          placeholder="Title"
          className="outline-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category (seperated by commas)"
          className="outline-0"
          value={category}
          onChange={handleCat}
        />
        <Input
          type="text"
          placeholder="Slug"
          className="outline-0"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Rate 1-5"
          className="outline-0"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Year"
          className="outline-0"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Thumbnail (Link)"
          className="outline-0"
          value={thumbnail}
          onChange={onChangeThumbnail}
        />
        <Input
          type="text"
          placeholder="Movie (Link)"
          className="outline-0"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="name"
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          className="pl-3 w-full outline-0 bg-stone-300/10 py-2 resize-none h-[130px]"
        ></textarea>
        <button className="bg-[#FC4F03] w-full py-2 rounded-full mt-3 shadow-lg shadow-[#FC4F03]/50  text-center">
          Add movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
