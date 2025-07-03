import React, { FC } from 'react';
import Skeleton from '../Skeleton';

interface MaterialsProps {
  
}

const Materials: FC<MaterialsProps> = ({ }) => {
  return (
    <Skeleton industryElement='construction materials'/>
  );
};

export default Materials;