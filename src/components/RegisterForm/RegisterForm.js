import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FormLogin, LoginLabel } from 'components/LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Username
        <input type="text" name="name" />
      </LoginLabel>
      <LoginLabel>
        Email
        <input type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <input type="password" name="password" />
      </LoginLabel>
      <button type="submit">Register</button>
    </FormLogin>
  );
};
