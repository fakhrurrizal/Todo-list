import React, { useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCategory } from "../../action/CategoryAction";
import ListCategory from "../List/ListCategory";


const Category = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [isAdd, setIsAdd] = useState(false);
    const category_name = useRef();
    console.log("user", user._id);
    
    const reset = () => {
        category_name.current.value=""
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newCategroy = {
            category_name: category_name.current.value,
            userId : user._id
      }
    dispatch(addCategory(newCategroy))
    reset();
  };

  return (
    <div className="h-screen pl-40 mb-5 w-[32rem] pt-32 bg-white">
      <span className="font-bold text-[24px] mt-20 text-black">All Categories</span>
      <ListCategory/>
      <span className="flex mt-3 font-bold">
        <MdAdd className="mt-1 mr-2" /> 
        {!isAdd ? (
            <span onClick={() => setIsAdd(true)}>
                New Category
            </span>
        ):(
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                ref={category_name}
                className="border-b focus:outline-none focus:border-slate-400 focus:border-b-2 transition-colors "
                placeholder="New Category"
            />
            </form>
        )}
        
      </span>
    </div>
  );
};

export default Category;
