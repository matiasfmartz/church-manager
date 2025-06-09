import { useState, useEffect } from 'react';

/**
 * useForm - Custom hook for handling form state and changes
 * @param {object} initialValues - Initial state of the form
 * @returns {object} - { formData, handleChange, handleCheckboxChange, handleSelectChange, setFormData, resetForm }
 */
export default function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSelectChange = (selectedOption, action) => {
    setFormData((prev) => ({
      ...prev,
      [action.name]: selectedOption,
    }));
  };

  const resetForm = () => setFormData(initialValues);

  // Allow reset if initialValues change (e.g. on modal open)
  useEffect(() => {
    setFormData(initialValues);
  }, [JSON.stringify(initialValues)]);

  return {
    formData,
    handleChange,
    handleCheckboxChange,
    handleSelectChange,
    setFormData,
    resetForm,
  };
}
