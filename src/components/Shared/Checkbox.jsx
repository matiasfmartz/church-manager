import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, id, name, checked, onChange, ...props }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className="mr-1"
      {...props}
    />
    <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
