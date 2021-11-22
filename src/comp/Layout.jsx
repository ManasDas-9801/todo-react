import React, { useState } from "react";
import Header from "./Header";

const Layout = () => {
  const raw = [
    {
      id: 1,
      content: "Home work to do ",
      status: true,
    },
    {
      id: 2,
      content: "Code to compile ",
      status: true,
    },
    {
      id: 3,
      content: "Debugging Time ",
      status: false,
    },
  ];

  const [userData, setUserData] = useState("");
  const [rawData, setRawData] = useState(raw);

  const insert = () => {
    let copy = [...rawData];
    copy = [...copy, { id: copy.length + 1, content: userData, status: true }];
    setRawData(copy);
    setUserData("");
  };
  const deleteList = (id) => {
    let filtered = rawData.filter((task) => {
      return task.id !== id;
    });
    setRawData(filtered);
  }

  return (
    <>
      <Header />
      <div className="conatiner mt-4">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="card border shadow">
              <div className="card-header">
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    type="text"
                    onChange={(e) => setUserData(e.currentTarget.value)}
                    value={userData}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => insert()}
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="card-body">
                {rawData.map((task) => (
                  <ul className="list-group mt-3 mb-3 ">
                    <li
                      key={task.id}
                      className="list-group-item list-group-item-action"
                    >
                      {task.id}.{task.content}
                    </li>
                    <div
                      className="btn btn-danger mb-3 b-0"
                      onClick={() => deleteList(task.id)}
                    >
                      X
                    </div>
                    {task.status ? (
                      <span className="float-end badge bg-success mt-2">
                        Completed
                      </span>
                    ) : (
                      <span className="float-end badge bg-danger mt-2">
                        Yet To Do
                      </span>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
