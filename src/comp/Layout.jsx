import React from "react";
import Header from "./Header";
import Insert from "./Insert";
import List from "./List";
const  Layout = () => {
    return(
        <>
            <Header />
            <div className="conatiner mt-4">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="card border shadow">
                            <div className="card-header">
                            <Insert/>
                            </div>
                            <div className="card-body">
                               <List />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;