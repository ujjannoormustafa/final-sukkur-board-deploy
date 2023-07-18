import Link from "next/dist/client/link";
const Paggination = ({ setActive, active, state }) => {
  return (
    <div className="page-pagination division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(active === 1 ? 1 : active - 1);
                      }}
                      className="page-link"
                      tabIndex={-1}
                    >
                      <i className="fas fa-angle-left" />
                    </a>
                  </Link>
                </li>
                {state &&
                  state.map((s, i) => (
                    <li
                      className={`page-item ${active === s ? "active" : ""}`}
                      key={i}
                    >
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            setActive(s);
                          }}
                          className="page-link"
                        >
                          {s}
                          <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                <li className="page-item">
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(
                          active === state.length ? state.length : active + 1
                        );
                      }}
                      className="page-link"
                    >
                      <i className="fas fa-angle-right" />
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Paggination;
