function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>

        <div className="row">
          <div className="col-md-8 mb-4">
            <h1 className="fs-3 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="mb-3"
            />
            <div className="link-list d-flex flex-wrap">
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>

          
          <div className="col-md-4">
            <h1 className="fs-3 mb-3">Featured</h1>
            <ol className="ps-3">
              <li>
                <a href="">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;