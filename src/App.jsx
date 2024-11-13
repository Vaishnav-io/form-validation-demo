import { useState } from 'react';
import { validateField, validateForm } from './formValidation';

function App() {

  // Initialize errors state and form data

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  // Define validation rules for each field
  
  const formRules = {
    name: ['required', { minLength: 2 },'isAlphabetic'],
    email: ['required', 'email'],
    phone: ['required', 'phone'],
    dob: ['required', 'isAdult'],
    password: ['password'],
    confirmPassword: ['required', { matches: formData.password }],
  };

  // Handle change in form input

  const handleEvent = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Perform real-time validation
    const error = validateField(name, value, formRules[name], formData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validate fields when onBlur or onSubmit

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Validate on blur only
    const error = validateField(name, value, formRules[name], formData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields on form submission
    const formErrors = validateForm(formData, formRules);
    setErrors(formErrors);

    // Check if the form has no errors and log
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name" /* This should match the state property */
              value={formData.name}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.name}</p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email" /* This should match the state property */
              value={formData.email}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone" /* This should match the state property */
              value={formData.phone}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.phone}</p>
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob" /* This should match the state property */
              value={formData.dob}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.dob}</p>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password" /* This should match the state property */
              value={formData.password}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.password}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword" /* This should match the state property */
              value={formData.confirmPassword}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEvent}
              onBlur={handleBlur}
            />
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
