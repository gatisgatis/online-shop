import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/common/button/button';
import { Modal } from '../components/common/modal/modal';

const Home: FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="container dsdasd">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>HOME</h1>
            <div className="sticky-btn">
              <Button onClick={() => history.push('/catalog')}>Apskatīt piedāvājumu</Button>
            </div>
            <br />
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div className="fancyShit" />
              <img
                className="cat2"
                src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"
                alt="cat"
              />
            </Modal>
            <p style={{ fontSize: '3rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus
              perferendis, pariatur doloribus tempore natus? Sapiente consequatur sit quis,
              quibusdam unde provident beatae illum eius id aperiam. Itaque nesciunt ullam voluptas,
              vel nobis non tempore dolores aliquam necessitatibus quo nulla voluptatem omnis, dicta
              laudantium expedita, voluptates totam ex saepe? Cum laudantium deleniti similique
              ipsum non eligendi vero quae nihil neque autem. Fugiat iste, ipsum tempora laboriosam
              exercitationem, saepe dolorum numquam temporibus quas voluptatibus ut, sapiente
              perspiciatis iusto quibusdam asperiores sint facilis non rem natus excepturi culpa!
              Nihil in neque officiis quibusdam perferendis voluptatem vel iusto ratione modi
              sapiente voluptate mollitia, debitis saepe unde vero tenetur odio architecto iste
              nesciunt voluptates blanditiis quo. Minima assumenda inventore, consequuntur ullam
              porro quae tenetur eligendi obcaecati in ea illo ipsa vero. Corporis ducimus fugit
              iste! Necessitatibus neque perspiciatis ut sed repudiandae aliquid dicta quisquam eos
              quasi labore. In ex ipsam dicta voluptatum totam, cum et accusamus officia delectus
              voluptate, fugiat ullam officiis enim, veritatis quae error minima sint quod! Ratione
              iusto, vitae porro at sapiente quasi repellendus adipisci autem facere, saepe amet
              consequatur, mollitia iure tempora? Repellat rem distinctio ad ratione quos saepe
              nostrum similique impedit neque, vitae consequuntur in quia assumenda debitis
              voluptatem perferendis ea ipsam quam, dolorum odit ex quod, necessitatibus sapiente!
              Cumque voluptas a, aliquid voluptatibus alias eveniet enim est, eaque placeat magni
              qui architecto nisi voluptatum nesciunt nostrum. Magnam aperiam sint reiciendis
              aliquid sed veniam laboriosam nostrum culpa voluptas sequi quibusdam repudiandae
              adipisci, quam et at ipsa voluptatem repellendus fugiat corporis quaerat ab? Aperiam
              corrupti, quas in nam obcaecati magni repellendus odit minima voluptate eligendi,
              ducimus nostrum voluptatem? Expedita neque officiis tenetur non, adipisci esse ab
              dolorem beatae accusantium odio iure aut. In quisquam aut sit sint pariatur aperiam
              explicabo atque ducimus quo ea! Expedita architecto sed, commodi ad sit debitis
              consectetur minima maiores non enim distinctio magni consequatur culpa ut modi
              mollitia. Delectus facilis qui, voluptates laborum ab asperiores ut quam enim eveniet
              excepturi tempora sunt dicta iusto hic doloremque voluptatum laudantium ipsam iure
              molestias aperiam dolorem dignissimos. Optio voluptatem, assumenda inventore quis
              aperiam veniam molestiae nesciunt. Obcaecati modi illo molestiae, animi cupiditate est
              facere repellat voluptatibus aliquam minima culpa quibusdam maxime corrupti earum
              totam vitae magni blanditiis iure ut tenetur dolorem vero distinctio quidem. Porro,
              libero nisi nam asperiores consectetur commodi doloribus veniam corporis nostrum
              delectus natus! Totam itaque eaque quos eum cupiditate quas obcaecati. Sapiente
              tempora a officia voluptate vitae voluptatibus, ullam facilis voluptatem sunt
              architecto non, exercitationem dolor eos eveniet possimus. Praesentium mollitia, unde
              maiores tempore quisquam quia illum quibusdam earum similique? Expedita neque ratione
              tenetur ullam nesciunt nobis et. Consequatur alias sunt autem minus beatae, cum quas
              quam animi quisquam reiciendis earum odit ad ducimus, laborum exercitationem fuga?
              Fugiat, officiis at odit quo natus eius saepe beatae sit unde reprehenderit, non
              tempora repudiandae blanditiis provident fuga minus aliquam quos voluptate commodi,
              incidunt atque possimus in facere? Aperiam, architecto a totam quis ullam
              necessitatibus nam corporis dolorum nobis voluptate facere fuga, libero, doloremque
              sed voluptatum numquam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
