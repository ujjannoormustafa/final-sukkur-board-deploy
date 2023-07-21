import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const BlogListingNews3 = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#article", sort, active);
    let list = document.querySelectorAll("#article");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="news-3" className="pt-100 news-section division">
        <div className="container">
          <div className="row">
            {/* BLOG POSTS HOLDER */}
            <div className="col-lg-9">
              <div className="posts-holder pe-25">
                {/* ARTICLE #1 */}
                <div>
                  <div className="article-3 row d-flex align-items-center b-bottom">
                    {/* Article Preview */}
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src="images/blog/article-3.jpg"
                        alt="article-preview"
                      />
                    </div>
                    {/* Article Text */}
                    <div className="col-md-8">
                      {/* Title */}
                      <h4 className="h4-sm">
                        <Link href="/single-post">
                          <span>Ligula varius magna porta a pretium</span>
                        </Link>
                      </h4>
                      {/* Post Author */}
                      <span>March 11, 2020 - By Joel Peterson</span>
                      {/* Text */}
                      <p>
                        Vitae auctor integer a congue magna undo pretium at
                        purus pretium ligula a rutrum luctus risus and ultrice
                        blandit justo and purus ipsum neque dolor primis libero
                        tempus, tempor posuere ligula...
                      </p>
                      {/* Post Tags */}
                      <div className="tags-cloud">
                        <span className="badge">
                          <Link href="#">
                            <span>Ideas &amp; Opinions</span>
                          </Link>
                        </span>
                        <span className="badge">
                          <Link href="#">
                            <span>Students</span>
                          </Link>
                        </span>
                        <span className="badge">
                          <Link href="#">
                            <span>eTreeks News</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END ARTICLE #1 */}
                {/* ARTICLE #2 */}

                <div>
                  <div className="article-3 row d-flex align-items-center b-bottom">
                    {/* Article Preview */}
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src="images/blog/article-5.jpg"
                        alt="article-preview"
                      />
                    </div>
                    {/* Article Text */}
                    <div className="col-md-8">
                      {/* Title */}
                      <h4 className="h4-sm">
                        <Link href="/single-post">
                          <span>20 magna undo at purus pretium</span>
                        </Link>
                      </h4>
                      {/* Post Author */}
                      <span>March 04, 2020 - By Jennifer K.</span>
                      {/* Text */}
                      <p>
                        Integer a congue magna undo pretium at purus pretium
                        ligula and rutrum luctus risus and ultrice blandit justo
                        purus ipsum neque dolor primis libero tempus, tempor
                        posuere ligula varius impedit...
                      </p>
                      {/* Post Tags */}
                      <div className="tags-cloud">
                        <span className="badge">
                          <Link href="#">
                            <span>eTreeks News</span>
                          </Link>
                        </span>
                        <span className="badge">
                          <Link href="#">
                            <span>eTreeks for Business</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END ARTICLE #2 */}
                {/* ARTICLE #3 */}

                <div>
                  <div className="article-3 row d-flex align-items-center b-bottom">
                    {/* Article Preview */}
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src="images/blog/article-8.jpg"
                        alt="article-preview"
                      />
                    </div>
                    {/* Article Text */}
                    <div className="col-md-8">
                      {/* Title */}
                      <h4 className="h4-sm">
                        <Link href="/single-post">
                          <span>
                            12 dolor primis libero tempus ligula at varius magna
                            porta a pretium
                          </span>
                        </Link>
                      </h4>
                      {/* Post Author */}
                      <span>February 24, 2020 - By Michael Deal</span>
                      {/* Text */}
                      <p>
                        Vitae auctor integer a congue magna undo pretium at
                        purus pretium ligula a rutrum luctus risus and ultrice
                        blandit justo purus ipsum...
                      </p>
                      {/* Post Tags */}
                      <div className="tags-cloud">
                        <span className="badge">
                          <Link href="#">
                            <span>Education Process</span>
                          </Link>
                        </span>
                        <span className="badge">
                          <Link href="#">
                            <span>Students</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END ARTICLE #3 */}
                {/* ARTICLE #4 */}

                <div>
                  <div className="article-3 row d-flex align-items-center">
                    {/* Article Preview */}
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src="images/blog/article-2.jpg"
                        alt="article-preview"
                      />
                    </div>
                    {/* Article Text */}
                    <div className="col-md-8">
                      {/* Title */}
                      <h4 className="h4-sm">
                        <Link href="/single-post">
                          <span>
                            Ultrice eTreeks justo purus ipsum igula varius magna
                            porta a pretium
                          </span>
                        </Link>
                      </h4>
                      {/* Post Author */}
                      <span>February 19, 2020 - By Aaron Wall</span>
                      {/* Text */}
                      <p>
                        Pretium at purus pretium ligula and rutrum luctus risus
                        undo ultrice blandit justo purus ipsum neque dolor
                        primis libero tempus...
                      </p>
                      {/* Post Tags */}
                      <div className="tags-cloud">
                        <span className="badge">
                          <Link href="#">
                            <span>eTreeks News</span>
                          </Link>
                        </span>
                        <span className="badge">
                          <Link href="#">
                            <span>Education Process</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END ARTICLE #4 */}
              </div>
            </div>
            {/* END BLOG POSTS HOLDER */}
            {/* SIDEBAR */}
            <spanside id="sidebar" className="col-lg-3">
              {/* SEARCH FIELD */}
              <div id="search-field" className="sidebar-div mb-50">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-field"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {/* BLOG CATEGORIES */}
              <div className="blog-categories sidebar-div mb-50">
                <ul className="blog-category-list clearfix">
                  <li>
                    <Link href="#">
                      <span>eTreeks News</span>
                    </Link>
                    <span>(36)</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span>Students &amp; Instructors</span>
                    </Link>
                    <span>(81)</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span>Ideas &amp; Opinions</span>
                    </Link>
                    <span>(76)</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span>Education Process</span>
                    </Link>
                    <span>(143)</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span>eTreeks for Business</span>
                    </Link>
                    <span>(24)</span>
                  </li>
                  <li>
                    <Link href="#">
                      <span>Uncategorized</span>
                    </Link>
                    <span>(42)</span>
                  </li>
                </ul>
              </div>
            </spanside>
            {/* END SIDEBAR */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <Paggination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default BlogListingNews3;
