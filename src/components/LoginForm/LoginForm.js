import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import { FormLogin, LoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <input type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <input type="password" name="password" />
      </LoginLabel>
      <button type="submit">Log In</button>
    </FormLogin>
  );
};

// ----------

// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
// import css from './LoginForm.module.css';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
