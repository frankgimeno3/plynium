import React, { FC } from 'react';
import Skeleton from '../Skeleton';

interface MachineryProps {
  
}

const Machinery: FC<MachineryProps> = ({ }) => {
  return (
    <Skeleton industryElement='construction machinery'/>
  );
};

export default Machinery;