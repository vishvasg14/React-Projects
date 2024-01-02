import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //if course is already liked
      setLikedCourses((previousCourses) =>
        previousCourses.filter((cid) => cid !== course.id)
      );
      toast.warning("Course is removed!!");
    }
    //if courses in not liked
    else {
      //courses array is empty
      setLikedCourses((previousCourses) => [...previousCourses, course.id]);
      toast.success("You liked this Course!!");
    }
  }

  return (
    <div className="w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt="imgs" />

        <div className=" w-[30px] h-[30px] border-2 rounded-full absolute right-1 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.55rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.55rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white ">
          {
            course.description.length > 100
            ? (course.description.substr(0, 100))+"..."
            : (course.description)
            }
        </p>
      </div>
    </div>
  );
};

export default Card;
