import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const BlogCard = () => {

  // const kalp = <FontAwesomeIcon icon="fa-regular fa-heart" />
  return (
    <div className="w-60">
      <div className="w-64 my-5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt=""
        />
      </div>
      <div className="mx-3">
        <h4 className="font-semibold">TITLE</h4>
        <p className=" overflow-hidden whitespace-nowrap text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum nemo ipsam et, quis soluta corporis, ab repellendus quas rem eaque veritatis culpa officia deleniti ea, perspiciatis minus explicabo alias?
        </p>
      </div>
      <div className="flex gap-4 justify-around my-5">
        <button><FaHeart className="text-red-500 size-5"/><span>15</span></button>
        <button><BiSolidCommentDetail className="size-5" /><span>15</span></button>
        <p><FaEye /><span>15</span></p>
      </div>
      <div className="flex justify-center ">
              <button className="bg-teal-400 hover:bg-teal-300  px-4 py-2 rounded-lg w-56 text-white hover:text-red-500 font-semibold">READ MORE</button>
      </div>

    </div>
  );
};

export default BlogCard;
