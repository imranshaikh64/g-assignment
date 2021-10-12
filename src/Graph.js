import React from "react";
import { Link } from "react-router-dom";


const Graph = () => {
  return (
    <>
      <div className="graph_image">
        <img
          src="https://freepngimg.com/thumb/graphic_design/40023-6-graph-image-free-png-hq.png"
          alt="graphimg"
        />
        <div className="back">
          <Link to="/">
            <h4>Back to homepage🔄</h4>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Graph;