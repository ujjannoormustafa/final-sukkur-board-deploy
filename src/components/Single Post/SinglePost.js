import Link from "next/link";
import React from "react";

const SinglePost = () => {
  return (
    <section id="single-post" className="wide-80 single-post-section division">
      <div className="container">
        {/* SINGLE POST CONTENT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="single-post-wrapper">
              {/* SINGLE POST TITLE */}
              <div className="single-post-title mb-35 text-center">
                {/* Post Title */}
                <h3 className="h3-md">
                  Egestas volute nemo ipsam and turpis quaerat sodales a sapien
                  landit
                </h3>
                {/* Post Data */}
                <div className="single-post-data">
                  <p>
                    Posted by Joel Peterson on March 15, 2020 in
                    <Link href="#">
                      <a>Ideas &amp; Opinions</a>
                    </Link>
                  </p>
                </div>
              </div>
              {/* END SINGLE POST TITLE */}
              {/* BLOG POST TEXT */}
              <div className="single-post-txt">
                {/* Text */}
                <p>
                  Mauris donec ociis et magnis sapien etiam sapien sem sagittis
                  congue tempor a gravida donec ipsum porta justo integer at
                  odio velna. Maecenas gravida porttitor nunc, quis vehicula
                  magna luctus tempor. Quisque vel laoreet turpis. An augue
                  viverra a augue eget, dictum tempor diam. Sed pulvinar donec
                  ociis et magnis sapien imperdiet dui varius.
                </p>
              </div>
              {/* BLOG MAIN POST IMAGE */}
              <div className="post-inner-img">
                <img
                  className="img-fluid"
                  src="images/blog/post-img-1.jpg"
                  alt="blog-post-image"
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className="single-post-txt">
                {/* Text */}
                <p>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien etiam sapien
                  sem sagittis congue tempor gravida donec enim ipsum porta
                  justo integer at odio velna. Maecenas gravida porttitor nunc,
                  quis vehicula magna luctus tempor. Quisque vel laoreet turpis.
                  Urna augue, viverra a augue eget, dictum tempor diam. Sed
                  pulvinar consectetur nibh, vel imperdiet dui varius viverra.
                  Pellentesque ac massa lorem. Fusce eu cursus fusce non nulla
                  vitae massa
                </p>
                {/* Text */}
                <p>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Curabitur ac
                  dapibus libero. Mauris donec ociis a neque. Phasellus blandit
                  tristique justo ut aliquam. Aliquam vitae molestie nunc sapien
                  justo, aliquet non molestie augue, venenatis nec purus.
                  Aliquam eget lacinia elit. Augue tincidunt tincidunt massa, et
                  porttitor justo blandit.
                </p>
                {/* Small Title */}
                <h5 className="h5-lg">Egestas volutpat egestas</h5>
                {/* Text */}
                <p>
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate molestie bibendum quis, aliquet elementum
                  massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                  cursus est. Fusce non nulla vitae massa placerat vulputate vel
                  a purus. Aliqum mullam blandit tempor sapien gravida donec
                </p>
                {/* QUOTE */}
                <div className="quote">
                  <p>
                    {`"Lorem ipsum dolor sit amet, lectus
                                        laoreet impedit gestas. Aenean magna
                                        ligula eget dolor suscipit egestas
                                        viverra dolor iaculis luctus magna
                                        suscipit egestas "`}
                  </p>
                </div>
                {/* Text */}
                <p>
                  Maecenas gravida porttitor nunc, quis vehicula magna luctus
                  tempor. Quisque vel laoreet turpis urna augue, viverra a augue
                  eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel
                  imperdiet dui varius viverra. Sapien justo massa lorem. Fusce
                  eu cursus non nulla vitae massa placerat purus. Sagittis
                  congue augue egestas volutpat egestas magna suscipit egestas
                  magna ipsum vitae purus efficitur ipsum primis in cubilia
                  laoreet augue egestas luctus donec
                </p>
                {/* INNER IMAGE */}
                <div className="post-inner-img">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width={950}
                      height={450}
                      src="https://www.youtube.com/embed/7e90gBu4pas"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {/* Small Title */}
                <h5 className="h5-lg">Vitae massa placerat vulputate</h5>
                {/* Text */}
                <p>
                  Nullam non scelerisque lectus. In at mauris vel nisl convallis
                  porta at vitae dui. Nam lacus ligula, vulputate molestie
                  bibendum quis, aliquet elementum massa. Vestibulum ut sagittis
                  odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla
                  vitae massa placerat vulputate vel a purus. Aliqum mullam
                  blandit tempor sapien gravida donec
                </p>
                {/* List */}
                <ul className="txt-list mb-15">
                  <li>
                    Vitae auctor integer congue magna at pretium cubilia laoreet
                    augue egestas luctus donec diam. Curabitur ac dapibus
                    libero. Quisque eu tristique neque ipsum porta cubilia
                    laoreet augue egestas
                  </li>
                  <li>
                    Sagittis congue augue egestas volutpat egestas magna vitae
                    auctor eros congue magna nihil impedit ligula risus. Mauris
                    donec ociis et magnis sapien an sapien congue tempor gravida
                    enim ipsum porta cubilia laoreet augue egestas luctus
                    egestas volutpat egestas magna suscipit egestas magna
                  </li>
                </ul>
                {/* Text */}
                <p>
                  Curabitur ac dapibus libero quisque eu tristique neque sellus
                  blandit tristique justo ut aliquam. Aliquam vitae at molestie
                  nunc sapien justo, aliquet non molestie sed, venenatis nec
                  purus. Aliquam eget lacinia tincidunt massa justo. Quisque vel
                  laoreet turpis. Urna augue, viverra a augue eget, dictum
                  tempor diam. Sed pulvinar consectetur nibh, vel imperdiet
                  varius viverra. Pellentesque ac massa lorem. Fusce eu cursus
                  est. Fusce non nulla vitae massa placerat bulum tincidunt
                  tincidunt massa, et porttitor justo viverra a augue eget,
                  dictum tempor diam
                </p>
              </div>
              {/* END BLOG POST TEXT */}
              {/* SINGLE POST SHARE LINKS */}
              <div className="row post-share-links d-flex align-items-center">
                {/* POST TAGS */}
                <div className="col-md-9 col-xl-8 post-tags-list">
                  <span>
                    <Link href="#">
                      <a>eTreeks News</a>
                    </Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>Ideas &amp; Opinions</a>
                    </Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>Education Process</a>
                    </Link>
                  </span>
                </div>
                {/* POST SHARE ICONS */}
                <div className="col-md-3 col-xl-4 post-share-list text-right">
                  <ul className="share-social-icons text-center clearfix">
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-facebook">
                          <i className="fab fa-facebook-square" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="share-ico ico-like">
                          <i className="far fa-bookmark" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END SINGLE POST SHARE */}
              {/* ABOUT POST AUTHOR */}
              <div className="author-senoff d-flex align-items-center">
                {/* Avatar */}
                <img src="images/review-author-7.jpg" alt="author-avatar" />
                {/* Text */}
                <div className="author-senoff-txt">
                  {/* Title */}
                  <h5 className="h5-xs">Published by</h5>
                  <h5 className="h5-lg">Robert Coronado</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                    sapien dolore incidide undo labore dolore incididunt ut
                    labore turpis vitae raesent varius efficitur ipsum primis
                    cubilia laoreet augue egestas luctus donec diam efficitur
                    ipsum primis in cubilia laoreet augue egestas
                  </p>
                  {/* Follow Button */}
                  <div className="author-follow-btn">
                    <Link href="#">
                      <a>Follow</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END ABOUT POST AUTHOR */}
              {/* OTHER POSTS
									============================================= */}
              <div className="other-posts">
                <div id="op-row" className="row d-flex align-items-center">
                  {/* Previous Post */}
                  <div className="col-md-4">
                    <div className="prev-post mb-30 pe-45">
                      <h5 className="h5-xs">
                        <i className="fas fa-arrow-left" />
                        Previous Post
                      </h5>
                      <Link href="/single-post">
                        <a>Congue magna eTreeks purus pretium magnis</a>
                      </Link>
                    </div>
                  </div>
                  {/* All Posts */}
                  <div className="col-md-4 text-center">
                    <div className="all-posts mb-30">
                      <Link href="/blog-listing">
                        <a>
                          <i className="fas fa-th-large" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* Next Post */}
                  <div className="col-md-4 text-right">
                    <div className="next-post mb-30 pl-45">
                      <h5 className="h5-xs">
                        Next Post
                        <i className="fas fa-arrow-right" />
                      </h5>
                      <Link href="/single-post">
                        <a>8 neque dolor primis a libero tempus blandit</a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* END OTHER POSTS */}
              {/* POST COMMENTS */}
              <div className="post-comments">
                {/* Title */}
                <h4 className="h4-sm">4 Comments</h4>
                {/* COMMENT #1 */}
                <div className="d-flex mt-50">
                  {/* Comment-1 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-1.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    {/* Comment-1 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Robert C.
                      </h5>
                      <span className="comment-date">5 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-1 Text */}
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus efficitur ipsum primis in
                      cubilia laoreet augue egestas luctus donec diam neque
                    </p>
                    <hr />
                    {/* COMMENT #2 */}
                    <div className="d-flex mt-3">
                      {/* Comment-2 Avatar */}
                      <Link href="#">
                        <a className="pe-3">
                          <img
                            src="images/post-author-2.jpg"
                            alt="comment-avatar"
                          />
                        </a>
                      </Link>
                      <div className="flex-grow-1 ms-3">
                        {/* Comment-2 Meta */}
                        <div className="comment-meta">
                          <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                            David Smith
                          </h5>
                          <span className="comment-date">6 days ago -</span>
                          <span className="btn-reply">
                            <Link href="#">
                              <a
                                href="#leave-comment"
                                className="internal-link"
                              >
                                <i className="fas fa-reply" />
                                Reply
                              </a>
                            </Link>
                          </span>
                        </div>
                        {/* Comment-2 Text */}
                        <p>
                          Etiam sapien sem magna at vitae pulvinar congue augue
                          egestas pretium neque id viverra suscipit porta
                          ratione, mollis risus lectus porta aliquet lorem and
                          purus mollis
                        </p>
                      </div>
                    </div>
                    {/* END COMMENT #2 */}
                  </div>
                </div>
                {/* END COMMENT #1 */}
                <hr />
                {/* COMMENT #3 */}
                <div className="d-flex mt-40">
                  {/* Comment-4 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-3.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    {/* Comment-4 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Becky Reed
                      </h5>
                      <span className="comment-date">13 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-4 Text */}
                    <p>
                      Porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus neque purus ipsum neque
                      dolor primis libero tempus, tempor posuere ligula varius
                      impedit enim tempor vitae and pulvinar congue augue
                      egestas. Praesent aliquet lorem purus, quis mollis laoreet
                      vitae tortor
                    </p>
                  </div>
                </div>
                {/* END COMMENT #3 */}
                <hr />
                {/* COMMENT #4 */}
                <div className="d-flex mt-40">
                  {/* Comment-4 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-4.jpg"
                    alt="comment-avatar"
                  />
                  <div className="flex-grow-1 ms-3">
                    {/* Comment-4 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-sm mt-0 noto-font-700 purple-color">
                        Rady Smith
                      </h5>
                      <span className="comment-date">42 days ago -</span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-4 Text */}
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue auctor efficitur ipsum primis in
                      cubilia laoreet augue egestas luctus donec diam integer
                      congue
                    </p>
                  </div>
                </div>
                {/* END COMMENT #4 */}
                <hr />
              </div>
              {/*END POST COMMENTS */}
              {/* COMMENT FORM */}
              <div id="leave-comment">
                {/* Title */}
                <h4 className="h4-sm">Leave a Reply</h4>
                {/* Text */}
                <p className="grey-color">
                  {`Your email address will not be published.
                                    All comments go through moderation, so your
                                    comment won't display immediately.`}
                </p>
                <form
                  name="commentForm"
                  onSubmit={(e) => e.preventDefault()}
                  className="row comment-form"
                >
                  <div id="input-message" className="col-md-12 input-message">
                    <p>Add Comment *</p>
                    <textarea
                      className="form-control message"
                      autoComplete="off"
                      name="message"
                      rows={6}
                      placeholder="Enter Your Comment Here* ..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div id="input-name" className="col-md-12">
                    <p>Name*</p>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      className="form-control name"
                      placeholder="Enter Your Name*"
                      required
                    />
                  </div>
                  <div id="input-email" className="col-md-12">
                    <p>Email*</p>
                    <input
                      type="text"
                      name="email"
                      autoComplete="off"
                      className="form-control email"
                      placeholder="Enter Your Email*"
                      required
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-rose tra-black-hover submit"
                    >
                      Post Your Comment
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-md-12 comment-form-msg text-center">
                    <div className="sending-msg">
                      <span className="loading" />
                    </div>
                  </div>
                </form>
              </div>
              {/* END COMMENT FORM */}
            </div>
          </div>
          {/* END SINGLE POST CONTENT */}
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
