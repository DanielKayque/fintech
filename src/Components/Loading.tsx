import React from 'react';

const style: React.CSSProperties = {
  border: 'var(--spacing-padrao) solid var(--color-2)',
  width: 'var(--spacing-small)',
  height: 'var(--spacing-small)',
  borderRadius: '50%',
  borderRightColor: 'black',
};

const Loading = () => {
  return (
    <div className="w-10 min-h-10 border-8 rounded-full border-r-cor2 animate-spin"></div>
  );
};

export default Loading;
