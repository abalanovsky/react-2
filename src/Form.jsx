//Form events
import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
      formSubmitted: false,
      formErrors: {},
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formSubmitted: false});
    if (this.validateForm()) {
      this.setState({formSubmitted: true});
      console.log('Вас було успішно зареєстровано');
    } else {
      console.error('Щось пішло не так');
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value });
  }

  handleFocus = (event) => {
    const { name } = event.target;
    const formErrors = {...this.state.formErrors};
    delete formErrors[name]
    this.setState({formErrors})
  }

  handleBlur = (event) => {
    const {name, value} = event.target;
    const formErrors = {...this.state.formErrors};
    switch (name) {
      case 'firstName':
        value.length < 2 && (formErrors.firstName = 'Імʼя не може бути менше 2 символів');
        break;
      case 'email':
        value.length === 0 ? (formErrors.email = 'Email є обовʼязковим') :
            !this.validateEmail(value) && (formErrors.email = 'Невірний формат поштової адреси');
        break;
      case 'password':
        !this.validatePassword(value) && (formErrors.password =
            'Пароль повинен містити мінімум 8 символів, мінімум одну велику та малу літери, одне число та один спецсимвол');
        break;
      case 'confirmPassword':
        value !== this.state.password && (formErrors.confirmPassword = 'Паролі не співпадають');
        break;
    }
    this.setState({formErrors});
  }

  validateForm = () => {
    return Object.keys(this.state.formErrors).length === 0 && this.state.confirmPassword === this.state.password;
  }

  validatePassword = (value) => {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    return regex.test(value);
  }

  validateEmail = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email)
  }
  render() {
    const {firstName, email, password, confirmPassword, formErrors, formSubmitted} = this.state;
    const styleForm = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '25px 25px',
      padding: '15px',
      border: '1px solid lightgreen',
      borderRadius: '5px',
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={styleForm}>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              placeholder={'Some'}
              value={firstName}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {formErrors.firstName && <span>{formErrors.firstName}</span>}
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              placeholder={'Some'}
              value={email}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Pass:</label>
            <input
              type="text"
              name="password"
              placeholder={'Some'}
              value={password}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password: </label>
            <input
              type="text"
              name="confirmPassword"
              placeholder={'Some'}
              value={confirmPassword}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
          </div>
          <button type='submit' style={{ width: '100px' }} disabled={!firstName || !email || !password || !confirmPassword}>
            Реєструватись
          </button>
          {formSubmitted && <p>Вас було успішно зареєстровано</p>}
        </form>
      </div>
    );
  }
}

export default Form;
