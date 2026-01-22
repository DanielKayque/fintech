import React, { useEffect } from 'react';

const Title = ({ title }: { title: string }) => {
  const { pathname } = window.location;

  return (
    <div className="box bg-cor3">
      <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  );
};

export default Title;
