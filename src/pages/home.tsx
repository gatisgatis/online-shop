import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/common/button/button';

const Home: FC = () => {
  const history = useHistory();

  return (
    <section>
      <div className="container dsdasd">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>HOME</h1>
            <Button onClick={() => history.push('/catalog')}>Apskatīt piedāvājumu</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
