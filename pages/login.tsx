import { useState } from 'react';
import { CircularProgress, TextField, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Head from 'next/head';
import Link from 'next/link';
import Select from 'react-select';
import AuthLayout from '../components/auth/AuthLayout';

import cookie from 'js-cookie';
import axios from 'axios';
import makeApiCall from '../utils/api';
import { useRouter } from 'next/dist/client/router';
import { Formik } from 'formik';
import yup from '../utils/yup';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'europe', label: 'Europe' },
];

const validationSchema = yup.object().shape({
  username: yup.string().required('Enter your username'),
  password: yup.string().required('Enter your password'),
});

export default function Login(): JSX.Element {
  const router = useRouter();

  const [loginError, setLoginError] = useState('');
  const [loginDetailsError, setLoginDetailsError] = useState('');
  const [showPassword, setPasswordVisibility] = useState(false);

  async function login(payload: { username: string; password: string; region: string }) {
    setLoginError('');
    try {
      const { content, error } = await makeApiCall<Auth.LoginResponse>('/customer/login', 'post', {
        data: payload,
      });
      localStorage.setItem('userData', JSON.stringify(content));
      cookie.set('publicKey', content.data[0].publicKey);
      cookie.set('userID', content.data[0].userID);
      cookie.set('username', content.data[0].username);

      if (error.status === '1') {
        setLoginDetailsError(error.message);
        // return;
      }
      await router.push('/');
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <AuthLayout title="Welome to the Log in page">
      <Head>
        <title>Log in</title>
      </Head>

      <Formik
        initialValues={{ username: '', password: '', region: 'africa' }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form
            className="w-full sm:w-3/4 sm:mx-auto md:w-full px-4 px-md-6 login__page"
            onSubmit={handleSubmit}
          >
            {loginError && <p className="text-red text-sm mb-4">{loginError}</p>}
            {loginDetailsError && <p className="text-red text-sm mb-4">{loginDetailsError}</p>}
            <div className="flex flex-col mb-5">
              {/* <label className="text-purple text-sm mb-1">Email address</label> */}
              <TextField
                id="username"
                label="Username"
                type="text"
                variant="outlined"
                className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                value={values.username}
                error={touched.username && !!errors.username}
                helperText={touched.username ? errors.username : ''}
                onChange={handleChange}
                size="small"
              />

              {/* <input
                className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                type="email"
                value={values.email}
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : ''}
                placeholder="ayomideolopha@gmail.com"
                onChange={handleChange}
              /> */}
            </div>
            <div className="flex flex-col mb-5">
              {/* <label className="text-purple text-sm mb-1">Password</label> */}
              <TextField
                id="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                className="bg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                value={values.password}
                error={touched.password && !!errors.password}
                helperText={touched.password ? errors.password : ''}
                onChange={handleChange}
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordVisibility(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
              {/* <input
                className="xbg-gray-200 focus:bg-white border border-purple text-purple py-2 px-3 focus:outline-none rounded text-sm"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                error={touched.password && !!errors.password}
                helperText={touched.password ? errors.password : ''}
                placeholder="Password"
                onChange={handleChange}
              /> */}
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-purple text-sm mb-1">Region</label>
              <Select options={options} defaultValue="africa" onChange={handleChange} />
            </div>
            <div>
              <button
                className="bg-purple w-full py-3 text-sm text-center text-white rounded mt-3 border focus:outline-none border-purple"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <CircularProgress color="inherit" className="text-white" size={22} />
                ) : (
                  'Log in'
                )}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/forgotten-password">
                <a className="text-purple my-4 hover:underline text-sm">Forgotten password?</a>
              </Link>
              <Link href="/signup">
                <a className="text-purple my-4 hover:underline text-sm">Register</a>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
}
