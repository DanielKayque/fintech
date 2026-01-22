import React from 'react';

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

const Input = ({ label, id, ...props }: IDateInput) => {
  return (
    <div className="">
      <label
        htmlFor={label}
        className="block font-semibold text-base bg-cor4 p-padrao rounded-[var(--spacing-padrao)] mb"
      >
        {label}
      </label>
      <input name={id} type="date" {...props} className="text-base font-mono bg-cor4 p-padrao rounded-[var(--spacing-padrao)]" />
    </div>
  );
};

export default Input;
