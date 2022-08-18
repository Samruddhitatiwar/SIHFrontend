import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function counter(props) {
  return (
    
      <table className="counter-bg">
        <tr>
          <td>
            <div className="up">
              <ArrowUpwardIcon />
              <h3>vacancies generated</h3>
              <button className="btn btn-light">{props.vacancies}</button>
            </div>
          </td>
          <td>
            <div className="down">
              <ArrowDownwardIcon />
              <h3>recruitments done</h3>
              <button className="btn btn-light">{props.recruitments}</button>
            </div>
          </td>
        </tr>
      </table>
   
  );
}
export default counter;
