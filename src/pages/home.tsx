import React, { FC } from 'react';

const Home: FC = () => {

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>HOME</h1>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <iframe
              title="Home"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kkeRVk3s89A"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
