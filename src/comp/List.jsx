import React,{useState} from "react";

function List () {

   const raw =[

           {
             'id':1,
             'content':"Home work to do ",
             'status':true,
           },
           {
             'id':2,
             'content':"Code to compile ",
             'status':true,
           },
           {
             'id':3,
             'content':"Debugging Time ",
             'status':false,
           },
   ]



  const [data,setData] =useState(raw);
  const deleteList = (id) => {
    let filtered = data.filter(task =>{
      return task.id !== id;
    })
    setData(filtered);
  }

  return (
    <>
     
       {
         data.map(task =>(

          <ul className="list-group mt-3 mb-3 ">
                 <li key={task.id} className="list-group-item list-group-item-action">{task.id}.{task.content}</li>
                 <div className="btn btn-danger mb-3 b-0" onClick={()=>deleteList(task.id)}>X</div>
                 {
                   (task.status)?
                   <span  className="float-end badge bg-success mt-2">Completed</span> :
                   <span  className="float-end badge bg-danger mt-2">Yet To Do</span>
                 }
          </ul>

         ))
       }
     
     
    </>
  );
};
export default List;
