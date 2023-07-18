import Link from "next/dist/client/link";
const PageTitle = ({ pageTitle, motherTitle, url }) => {
  return (
    <div id="breadcrumb" className="division">
      <div className="container">
        <div className="row">
          {/* BREADCRUMB NAV */}
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/demo-1">Home</Link>
                </li>
                {motherTitle && (
                  <li className="breadcrumb-item">
                    <Link href={`/${url}`}>{motherTitle}</Link>
                  </li>
                )}
                <li className="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default PageTitle;
