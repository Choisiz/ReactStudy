import React from "react";
import { withRouter } from "react-router-dom";
const WithRouterSample = ({ match, location, history }) => {
  console.log("m", match);
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        row={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        row={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
