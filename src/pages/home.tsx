import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/common/button/button';
import { Modal } from '../components/common/modal/modal';
import { ImageBlur } from '../components/image-blur/image-blur';
import { HOME_IMAGES } from '../data/slides_images';

const Home: FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const goToCatalog = () => {
    // te var kādu konkrētu settingu katalogā eneiblot uzreiz. piemēram, konkrētu kategoriju vai arī sort order
    history.push('/catalog');
  };

  return (
    <section>
      <div className="container-md">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="sticky-btn">
              <Button onClick={() => history.push('/catalog')}>Apskatīt piedāvājumu</Button>
            </div>
            <br />
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div className="fancyShit" />
            </Modal>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="row">
              <div className="col-xs-12 mb-2">
                <ImageBlur
                  image={HOME_IMAGES[0]}
                  aspectRatio={1.6}
                  text="TOP-NOTCH"
                  onClick={goToCatalog}
                />
              </div>
              <div className="col-xs-6 mb-2">
                <ImageBlur image={HOME_IMAGES[1]} aspectRatio={0.8} text="NEWEST" />
              </div>
              <div className="col-xs-6 mb-2">
                <ImageBlur image={HOME_IMAGES[2]} aspectRatio={0.8} text="OLD STUFF" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="row">
              <div className="col-xs-12 mb-2">
                <ImageBlur image={HOME_IMAGES[3]} aspectRatio={1} />
              </div>
              <div className="col-xs-6 mb-2">
                <ImageBlur image={HOME_IMAGES[4]} aspectRatio={2} text="GOODIES" />
              </div>
              <div className="col-xs-6 mb-2">
                <ImageBlur image={HOME_IMAGES[5]} aspectRatio={2} text="BEST OFFER" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
