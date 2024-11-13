
# Form Validation Demo

This project is a **demonstration** of the [Form Validation Library](https://github.com/Vaishnav-io/form-validation-library) designed for **React** applications. It showcases the library's capabilities in validating form fields with a variety of rules and offers a practical guide on how to integrate it into your own applications.

## About the Demo

The **Form Validation Library** is a robust solution for handling form validation in React projects. This demo project highlights its features, providing a simple yet powerful way to integrate validation into forms across your projects.

The demo includes a **registration form** with the following validation rules:

- **Required fields**: Ensures fields are filled out.
- **Email validation**: Verifies proper email format.
- **Phone number validation**: Ensures a valid 10-digit phone number.
- **Password strength**: Checks for minimum length and requires at least one uppercase letter, one number, and one special character.
- **Password confirmation**: Ensures the "confirm password" field matches the password.

You can explore the demo form, see the validation in action, and easily integrate similar validation logic into your own applications.

## Features

- **Real-time field validation**: Fields are validated as you type.
- **Comprehensive built-in validation rules**: Includes common rules like `required`, `email`, `phone`, `password`, and custom rules like `isAdult`.
- **Easy to use**: Simply import the library and apply validation to form fields with minimal configuration.
- **Customizable**: Easily extend with custom validation rules specific to your needs.

## Getting Started

To get started with this demo project, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/your-org/form-validation-demo.git
```

### 2. Install dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd form-validation-demo
npm install
```

### 3. Start the development server

Run the development server:

```bash
npm start
```

### 4. View the demo

Open your browser and go to `http://localhost:3000` to see the demo in action.

## Example Usage

This demo showcases how to use the Form Validation Library to handle form validation.

1. **Import the validation functions**:

```javascript
import { validateField, validateForm } from '@your-org/form-validation';
```

2. **Define your form validation rules**:

```javascript
const formRules = {
  name: ['required', { minLength: 2 }, 'isAlphabetic'],
  email: ['required', 'email'],
  phone: ['required', 'phone'],
  password: ['password'],
  confirmPassword: ['required', { matches: 'password' }],
};
```

3. **Validate fields on change**:

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: validateField(name, value, formRules[name], formData),
  }));
};
```

4. **Validate the entire form on submit**:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  const formErrors = validateForm(formData, formRules);
  setErrors(formErrors);

  if (Object.keys(formErrors).length === 0) {
    console.log('Form submitted successfully:', formData);
  } else {
    console.log('Form has errors:', formErrors);
  }
};
```

## Available Validation Rules

The library comes with several built-in validation rules:

- **required**: Ensures the field is not empty.
- **email**: Validates that the field contains a valid email address.
- **phone**: Ensures the field contains a valid 10-digit phone number.
- **password**: Validates the password field (minimum length, uppercase, number, special character).
- **minLength**: Ensures the field has a minimum number of characters.
- **isAdult**: Ensures the date of birth field represents someone 18 or older.
- **isAlphabetic**: Ensures the field contains only alphabetic characters.
- **matches**: Ensures the field matches another field value (e.g., password confirmation).

### Custom Validation Rules

You can also define your own custom validation rules to meet the needs of your application. Simply add them to the `validationRules` object in the library and use them across your forms.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

We welcome contributions! If you find any bugs or have suggestions for improvements, feel free to:

- Fork the repository.
- Submit an issue or pull request with your changes.

## Questions or Issues?

For any questions or issues, feel free to open an [issue](https://github.com/Vaishnav-io/form-validation-library/issues) in the repository.

<a href="https://discord.gg/yNKKCqkSAX" target="_blank">
  <img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" alt="Join Discord"">
</a>

---

By using this the Form Validation Library, you can easily validate form data in your React applications, ensuring robust data validation with minimal effort. Explore the library's capabilities and customize it for your specific use cases.
