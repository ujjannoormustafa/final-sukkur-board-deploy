import Router from "next/router";
import React from "react";
const Demo3Hero3 = () => {
  return (
    <section id="hero-3" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-lg-8 offset-lg-2">
            <div className="hero-txt text-center white-color">
              {/* Title */}
              <h2 className="h2-xs">
                <span>2,769 online courses</span> from the leading experts
              </h2>
              {/* Text */}
              <p className="p-md">
                Feugiat primis ligula risus auctor egestas augue mauri viverra
                tortor in iaculis a placerat eugiat mauris ipsum in viverra
                viverra tortor
              </p>
              {/*Hero Search Form */}
              <form
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  Router.push({
                    pathname: "/categories-list",
                  });
                }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What do you want to learn?"
                    aria-label="Search"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3Hero3;
