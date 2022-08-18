import React from "react";
import Image1 from "./SCHEMES.png";
function schemes() {
  return (
    <div className="schemeouter">
      <div className="schemeInnerImage">
        <img className="schemeImage" src={Image1} alt="" />
      </div>
      <h3>
        Learn more about the various College and Faculty development Schemes by
        GuruRec
      </h3>
      {/* scrollspy */}
      <div
        className="scroller"
        style={{ margin: "50px", backgroundColor: "#dff6ff" }}
      >
        <div className="row">
          <div className="col-3">
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Scheme 1
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Scheme 2
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Scheme 3
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Scheme 4
              </a>
            </div>
          </div>
          <div className="col-5">
            <div
              style={{ height: "200px", overflowY: "scroll" }}
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabindex="0"
            >
              <h4 id="list-item-1">Item 1</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde, aperiam assumenda nam, temporibus esse eum nulla
                et impedit debitis obcaecati expedita ducimus laboriosam ad
                aliquid eligendi excepturi sed! Officia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Provident unde, aperiam
                assumenda nam, temporibus esse eum nulla et impedit debitis
                obcaecati expedita ducimus laboriosam ad aliquid eligendi
                excepturi sed! Officia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Provident unde, aperiam assumenda nam,
                temporibus esse eum nulla et impedit debitis obcaecati expedita
                ducimus laboriosam ad aliquid eligendi excepturi sed! Officia.
              </p>
              <h4 id="list-item-2">Item 2</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde, aperiam assumenda nam, temporibus esse eum nulla
                et impedit debitis obcaecati expedita ducimus laboriosam ad
                aliquid eligendi excepturi sed! Officia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Provident unde, aperiam
                assumenda nam, temporibus esse eum nulla et impedit debitis
                obcaecati expedita ducimus laboriosam ad aliquid eligendi
                excepturi sed! Officia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Provident unde, aperiam assumenda nam,
                temporibus esse eum nulla et impedit debitis obcaecati expedita
                ducimus laboriosam ad aliquid eligendi excepturi sed! Officia.
              </p>
              <h4 id="list-item-3">Item 3</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde, aperiam assumenda nam, temporibus esse eum nulla
                et impedit debitis obcaecati expedita ducimus laboriosam ad
                aliquid eligendi excepturi sed! Officia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Provident unde, aperiam
                assumenda nam, temporibus esse eum nulla et impedit debitis
                obcaecati expedita ducimus laboriosam ad aliquid eligendi
                excepturi sed! Officia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Provident unde, aperiam assumenda nam,
                temporibus esse eum nulla et impedit debitis obcaecati expedita
                ducimus laboriosam ad aliquid eligendi excepturi sed! Officia.
              </p>
              <h4 id="list-item-4">Item 4</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde, aperiam assumenda nam, temporibus esse eum nulla
                et impedit debitis obcaecati expedita ducimus laboriosam ad
                aliquid eligendi excepturi sed! Officia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Provident unde, aperiam
                assumenda nam, temporibus esse eum nulla et impedit debitis
                obcaecati expedita ducimus laboriosam ad aliquid eligendi
                excepturi sed! Officia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Provident unde, aperiam assumenda nam,
                temporibus esse eum nulla et impedit debitis obcaecati expedita
                ducimus laboriosam ad aliquid eligendi excepturi sed! Officia.
              </p>
            </div>
          </div>
          <div className="col-4 announcements">
            <h5>News and Announcements</h5>
            <ul>
              <li>
                <h6>Monday, October 9, 2017</h6>
                <p>
                  Last date for online applications under AICTE AQIS-Hostel for
                  SC/ST Students Scheme u
                </p>
              </li>
              <li>
                <h6>Monday, October 9, 2017</h6>
                <p>
                  Last date for online applications under AICTE AQIS-Hostel for
                  SC/ST Students Scheme u
                </p>
              </li>
              <li>
                <h6>Monday, October 9, 2017</h6>
                <p>
                  Last date for online applications under AICTE AQIS-Hostel for
                  SC/ST Students Scheme u
                </p>
              </li>
            </ul>
            <button type="button" className="btn btn-secondary">
              Read More
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
      <h3>Footer</h3>
    </div>
  );
}
export default schemes;
