import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = ({ label, id, name, value, onChange, options, placeholder, isLoading, noOptionsMessage }) => (
  <div className="flex-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <Select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      isLoading={isLoading}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      classNamePrefix="react-select"
    />
  </div>
);

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
};

export default CustomSelect;
