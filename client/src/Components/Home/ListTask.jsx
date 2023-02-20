// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../../action/AuthAction";
// import { API } from "../../config/Api";

// let data = [
//   {
//     name: "belanja",
//     is_done: 1,
//     category: "work"
//   }
// ]


// const ListTask = () => {
//   const dispatch = useDispatch()
//   const [isChecked, setIsChecked] = useState(false);
//   const handleLogOut = ()=> {
//     dispatch(logout())
//   }

//   // async function handleUpdateIsDone(id_items, current_status) {
//   //   try {
//   //     await API.patch(
//   //       `/todo-items/${id_items}`,
//   //       { is_done: current_status == 1 ? 0 : 1 },
//   //       { validateStatus: () => true }
//   //     );
//   //     // listRefetch();
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }


//   return (
//     <div className="pt-20 w-full bg-white">
//       <div className="ml-10">
//         <div className="justify-between flex">
//           <span className="text-[30px] text-black font-bold">All Task</span>
//           <button onClick={handleLogOut} className="text-[14px] mr-4 bg-pink px-4  active:bg-red-500  hover:bg-red-400 rounded-md text-white">Logout</button>
//         </div>
//         <form>
//           <input
//             type="text"
//             className="border-2 py-2 px-2 rounded-sm focus:border-grey  w-[35rem]"
//           />
//         </form>
//         <div>
//           {data.map((task)=>(
//             <div className="mt-5 flex">
//             <input
//               type="checkbox"
//               checked={task.is_done === 0 ? isChecked : !isChecked}
//               // onChange={() => handleUpdateIsDone(task.id, task.is_done)}
//               className="text-gray-900 bg-gray-400 mr-5 rounded-full w-7 h-7 mt-1 border-pink cursor-pointer focus:border-pink focus:border"
//             />
//             <p
//             className={ 
//               task.is_done === 0
//                 ? "none text-[25px] ml-0"
//                 : "line-through text-pink  text-[25px] ml-0"
//             }
//             >
//               {task.name}
//             </p>
//             <span className="ml-5 mt-1 bg-aqua px-3 py-1  text-white rounded-full">{task.category}</span>
//           </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListTask;
