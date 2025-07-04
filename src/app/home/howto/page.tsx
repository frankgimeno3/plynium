import React, { FC } from 'react';

interface HowToProps {
  
}

const HowTo: FC<HowToProps> = ({ }) => {
  return (
    <div>
        <p>How to use plynium?</p>
        <p>AQUI TENDRIAN QUE HABER REDIRECCIONES A PRODUCT Y A BENCHMARK</p>
        <p>Plynium is a platform for professionals who take decisions on the purchasing process of companies</p>
        <p>We offer tools to improve your purchasing on the costs side and on the features side</p>
        <div className='p-12'>
            <p>There are two ways of doing this</p>
            <p>1- Look for products in our database, ask them for prices, and compare to your current ones </p>
            <p>2- Upload your product needs and     </p>
        </div>
        <p>Also, if you have a specific project, plynium allows you to publish your needs </p>
    </div>
  );
};

export default HowTo;