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
      return { ...state, validatingToken: false, isLoggedIn: false, publicKey: '' };
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
    // axios.defaults.headers.common['publicKey'] = '';
    cookie.remove('publicKey');
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now().toString());
    window.localStorage.removeItem('userData');
    window.location.assign('/login');
  };

  useEffect(() => {
    try {
      const publicKey = cookie.get('publicKey');
      // const profile = cookie.get('profile');

      if (publicKey) {
        const tokenContent = jwtDecode<any>(publicKey);
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
      console.log(error);
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
      Router.push('/login');
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
