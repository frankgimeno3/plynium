import React, { FC } from 'react';

interface BlogAdminProps {
  
}

const BlogAdmin: FC<BlogAdminProps> = ({ }) => {
  return (
    <div className='min-h-screen mt-24'>
        <p className='text-7xl text-red-400'> 
          Desde aquí se administra el newsroom de plynium
        </p>
        <p>Posts list</p>
    </div>
  );
};

export default BlogAdmin;