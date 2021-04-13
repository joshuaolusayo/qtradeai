import axios from 'axios';
import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Router from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';

const initialState = {
  tokenContent: null,
  validatingToken: true,
};

const AuthContext = createContext<Auth.AuthContext>(initialState);
const AuthActionsContext = createContext<{ logout: () => void }>({
  logout: () => {
    return;
  },
});

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'save_user_details': {
      return { ...state, validatingToken: false, isLoggedIn: true, ...action.payload };
    }
    case 'end_login_check': {
      return { ...state, validatingToken: false };
    }
    case 'logout': {
      return { ...state, validatingToken: false, isLoggedIn: false, token: '' };
    }
    default: {
      throw new Error('Invalid auth reducer action type');
    }
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // listen for logout event and log user out of all tabs/windows
  useAuthChanged();
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = async () => {
    axios.defaults.headers.common.Authorization = '';
    cookie.remove('token');
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now().toString());
    window.location.assign('/auth/login');
  };

  useEffect(() => {
    try {
      const token = cookie.get('token');
      // const profile = cookie.get('profile');

      if (token) {
        const tokenContent = jwtDecode<any>(token);
        // const profileContent = jwtDecode<any>(token);

        dispatch({
          type: 'save_user_details',
          payload: {
            tokenContent,
          },
        });
      }

      dispatch({ type: 'end_login_check' });
    } catch (error) {
      logout();
    }
  }, []);

  if (state.validatingToken) return null;

  return (
    <AuthActionsContext.Provider value={{ logout }}>
      <AuthContext.Provider
        value={{
          tokenContent: state.tokenContent,
          validatingToken: state.validatingToken,
        }}
      >
        {children}
      </AuthContext.Provider>
    </AuthActionsContext.Provider>
  );
};

export const useAuth: () => Auth.AuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthActions: () => Auth.AuthActionsContext = () => {
  const context = useContext(AuthActionsContext);

  if (context === undefined) {
    throw new Error('useAuthActions must be used within an AuthProvider');
  }
  return context;
};

function useAuthChanged() {
  const syncLogout = (event: StorageEvent) => {
    if (event.key === 'logout') {
      Router.push('/auth/login');
    }
  };

  useEffect(() => {
    window.addEventListener('storage', syncLogout);

    return () => {
      window.removeEventListener('storage', syncLogout);
      window.localStorage.removeItem('logout');
    };
  }, []);
}

export default AuthProvider;
