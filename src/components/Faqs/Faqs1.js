import React, { useState } from "react";

const Faqs1 = () => {
  const [active, setActive] = useState(1);
  const activeLi = (value) => (active === value ? "current" : "");
  return (
    <section id="faqs-1" className="bg-fixed wide-70 faqs-section division">
      <div className="container">
        <div className="row">
          {/* TABS NAVIGATION */}
          <div className="col-lg-5">
            <div className="tabs-nav clearfix">
              <ul className="tabs-1">
                {/* TAB-1 LINK */}
                <li
                  className={`tab-link ${activeLi(1)}`}
                  onClick={() => setActive(1)}
                  data-tab="tab-1"
                >
                  <img
                    className="img-55"
                    src="images/icons/lesson.png"
                    alt="tab-icon"
                  />
                  <div className="tab-link-txt">
                    <h5 className="h5-xs">Account &amp; Learning</h5>
                    <p>
                      Discover how to manage or upgrade your Treeks account and
                      fix login issues
                    </p>
                  </div>
                </li>
                {/* TAB-2 LINK */}
                <li
                  className={`tab-link ${activeLi(2)}`}
                  onClick={() => setActive(2)}
                  data-tab="tab-2"
                >
                  <img
                    className="img-50"
                    src="images/icons/certificate.png"
                    alt="tab-icon-icon"
                  />
                  <div className="tab-link-txt">
                    <h5 className="h5-xs">Certification &amp; Payments</h5>
                    <p>
                      Find out how Treeks Certification works, and your payment
                      and delivery options
                    </p>
                  </div>
                </li>
                {/* TAB-3 LINK */}
                <li
                  className={`tab-link ${activeLi(3)}`}
                  onClick={() => setActive(3)}
                  data-tab="tab-3"
                >
                  <img
                    className="img-50"
                    src="images/icons/documents.png"
                    alt="tab-icon-icon"
                  />
                  <div className="tab-link-txt">
                    <h5 className="h5-xs">Mobile Applications</h5>
                    <p>
                      How to make the most out of your learning through Mobile
                      Applications
                    </p>
                  </div>
                </li>
                {/* TAB-4 LINK */}
                <li
                  className={`tab-link ${activeLi(4)}`}
                  onClick={() => setActive(4)}
                  data-tab="tab-4"
                >
                  <img
                    className="img-55"
                    src="images/icons/trophy.png"
                    alt="tab-icon-icon"
                  />
                  <div className="tab-link-txt">
                    <h5 className="h5-xs">Treeks Premium</h5>
                    <p>
                      Helpful information to get you started on Treeks and solve
                      technical issues
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* END TABS NAVIGATION */}
          {/* TABS CONTENT */}
          <div className="col-lg-7">
            <div className="tabs-content">
              {/* TAB-1 CONTENT */}
              <div id="tab-1" className={`tab-content ${activeLi(1)}`}>
                {/* CATEGORY TITLE */}
                <div className="category-title">
                  {/* Title */}
                  <h4 className="h4-md">Account &amp; Learning</h4>
                  {/* Text */}
                  <p className="p-md">
                    Integer congue magna at pretium purus pretium ligula rutrum
                    at risus luctus eros dolor auctor ipsum blandit purus
                    vehicula magna and luctus tempor quisque
                  </p>
                </div>
                {/* QUESTION #1 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-md">
                    What can I expect from an online course?
                  </h5>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </li>
                    <li>
                      Risus at congue etiam and aliquam sapien egestas posuere a
                      cubilia
                    </li>
                    <li>
                      Nullam rutrum eget nunc varius etiam mollis risus at
                      congue etiam and aliquam sapien egestas, congue gestas
                      posuere cubilia undo congue ipsum
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #1 */}
                {/* QUESTION #2 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    How do Self-Paced Tutorial courses work?
                  </h5>
                  {/* Answer */}
                  <p>
                    An augue egestas an ipsum vitae emo ligula volute ante ipsum
                    primis in faucibus sit ametn in odio. Integer congue leo
                    metus, eu mollis lorem viverra suscipit and lectus magna. At
                    sagittis congue augue egestas egestas magna ipsum vitae
                    purus
                  </p>
                </div>
                {/* END QUESTION #2 */}
                {/* QUESTION #3 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    What if I need help after enrolling?
                  </h5>
                  {/* Text */}
                  <p>
                    An augue egestas an ipsum vitae emo ligula volute ante ipsum
                    primis in faucibus sit ametn in odio. Integer congue leo
                    metus, eu mollis lorem viverra suscipit
                  </p>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>
                      Nullam rutrum eget nunc varius etiam mollis risus at
                      congue etiam sapien
                    </li>
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #3 */}
                {/* QUESTION #4 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    What happens when I finish a course?
                  </h5>
                  {/* Answer */}
                  <p>
                    Faucibus sit ametn in odio integer congue leo metus, eu
                    mollis lorem viverra suscipit lectus magna. At sagittis
                    congue augue egestas egestas magna ipsum vitae purus ipsum
                    primis in cubilia laoreet augue egestas luctus donec diam
                    ociis ultrice
                  </p>
                </div>
                {/* END QUESTION #4 */}
              </div>
              {/* END TAB-1 CONTENT */}
              {/* TAB-2 CONTENT */}
              <div id="tab-2" className={`tab-content ${activeLi(2)}`}>
                {/* CATEGORY TITLE */}
                <div className="category-title">
                  {/* Title */}
                  <h4 className="h4-md">Certification &amp; Payments</h4>
                  {/* Text */}
                  <p className="p-md">
                    Integer congue magna at pretium purus pretium ligula rutrum
                    at risus luctus eros dolor auctor ipsum blandit purus
                    vehicula magna and luctus tempor quisque
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">Do you have non-profit discount?</h5>
                  {/* Answer */}
                  <p>
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae and congue auctor magna nihil
                    impedit ligula risus. Mauris donec ociis magnis sapien etiam
                    sapien sagittis congue tempor gravida donec enim ipsum porta
                    justo
                  </p>
                </div>
                {/* END QUESTION #5 */}
                {/* QUESTION #6 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">Do you have a free trial?</h5>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>
                      Nullam rutrum eget nunc varius etiam mollis risus at
                      congue etiam undo aliquam sapien egestas, congue gestas
                      posuere cubilia undo congue ipsum mauris
                    </li>
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #6 */}
                {/* QUESTION #7 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    What is Card Verification Code (CVC)?
                  </h5>
                  {/* Answer */}
                  <p>
                    Maecenas gravida porttitor nunc, quis vehicula magna luctus
                    tempor. Quisque vel laoreet turpis. Urna augue, viverra a
                    augue eget, dictum tempor diam. Sed pulvinar consectetur
                    nibh, vel imperdiet dui varius viverra ac massa lorem
                    vulputate
                  </p>
                </div>
                {/* END QUESTION #7 */}
                {/* QUESTION #8 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">How can I pay for my certificate?</h5>
                  {/* Answer */}
                  <p>
                    An augue egestas an ipsum vitae emo ligula volute ante ipsum
                    primis in faucibus sit ametn in odio. Integer congue leo
                    metus, eu mollis lorem viverra suscipit undo lectus magna.
                    At sagittis congue augue egestas magna ipsum vitae and purus
                  </p>
                </div>
                {/* END QUESTION #8 */}
              </div>
              {/* END TAB-2 CONTENT */}
              {/* TAB-3 CONTENT */}
              <div id="tab-3" className={`tab-content ${activeLi(3)}`}>
                {/* CATEGORY TITLE */}
                <div className="category-title">
                  {/* Title */}
                  <h4 className="h4-md">Mobile Applications</h4>
                  {/* Text */}
                  <p className="p-md">
                    Integer congue magna at pretium purus pretium ligula rutrum
                    at risus luctus eros dolor auctor ipsum blandit purus
                    vehicula magna and luctus tempor quisque
                  </p>
                </div>
                {/* QUESTION #9 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    How can I download the treeks Android App?
                  </h5>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>Vitae auctor integer congue magna at pretium</li>
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum and luctus risus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor
                    </li>
                    <li>
                      Sagittis congue augue egestas volutpat egestas magna donec
                      ociis
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #9 */}
                {/* QUESTION #10 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    How do I start a course using the IOS App?
                  </h5>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>
                      An augue egestas an ipsum vitae emo ligula volute ante
                      ipsum primis faucibus sit ametn in odio. Integer congue
                      metus, eu mollis lorem viverra suscipit lectus
                    </li>
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum and luctus risus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #10 */}
                {/* QUESTION #11 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    How do I make a payment using the Android App?
                  </h5>
                  {/* Answer */}
                  <p>
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae and congue auctor magna nihil
                    impedit ligula risus. Mauris donec ociis magnis sapien etiam
                    sapien sagittis congue tempor gravida donec enim ipsum porta
                    justo
                  </p>
                  {/* List */}
                  <ul className="txt-list mb-15">
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </li>
                    <li>
                      Risus at congue etiam and aliquam sapien egestas posuere a
                      cubilia
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #11 */}
              </div>
              {/* END TAB-3 CONTENT */}
              {/* TAB-4 CONTENT */}
              <div id="tab-4" className={`tab-content ${activeLi(4)}`}>
                {/* CATEGORY TITLE */}
                <div className="category-title">
                  {/* Title */}
                  <h4 className="h4-md">Treeks Premium</h4>
                  {/* Text */}
                  <p className="p-md">
                    Integer congue magna at pretium purus pretium ligula rutrum
                    at risus luctus eros dolor auctor ipsum blandit purus
                    vehicula magna and luctus tempor quisque
                  </p>
                </div>
                {/* QUESTION #11 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">What is Treeks Premium Monthly?</h5>
                  {/* Answer */}
                  <ul className="txt-list mb-15">
                    <li>
                      Nullam rutrum eget nunc varius etiam mollis risus at
                      congue etiam and aliquam sapien egestas, congue gestas
                      posuere cubilia undo congue ipsum mauris
                    </li>
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #11 */}
                {/* QUESTION #12 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">How much does Premium Monthly cost?</h5>
                  {/* Answer */}
                  <p>
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae and congue auctor magna nihil
                    impedit ligula risus. Mauris donec ociis magnis sapien etiam
                    sapien sagittis congue tempor gravida donec enim ipsum porta
                    justo
                  </p>
                  {/* List */}
                  <ul className="txt-list mb-15">
                    <li>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </li>
                    <li>
                      Risus at congue etiam and aliquam sapien egestas posuere a
                      cubilia
                    </li>
                  </ul>
                </div>
                {/* END QUESTION #12 */}
                {/* QUESTION #13 */}
                <div className="question">
                  {/* Question */}
                  <h5 className="h5-sm">
                    Can I get a refund if I cancel my subscription?
                  </h5>
                  {/* Answer */}
                  <p>
                    An augue egestas an ipsum vitae emo ligula volute ante ipsum
                    primis in faucibus sit ametn in odio. Integer congue leo
                    metus, eu mollis lorem viverra suscipit lectus magna. At
                    sagittis congue augue egestas magna ipsum vitae and purus
                  </p>
                </div>
                {/* END QUESTION #13 */}
              </div>
              {/* END TAB-4 CONTENT */}
            </div>
          </div>
          {/* END TABS CONTENT */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Faqs1;
