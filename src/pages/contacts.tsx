import React, { FC, useState } from 'react';
import Input from '../components/common/input/input';

const Contacts: FC = () => {
  const [inputField, setInputField] = useState('');

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>Contacts page</h1>
            <br />
            <p>Nothing to see here so far</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
