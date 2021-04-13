declare namespace Auth {
  interface LoginResponse {
    expires: number;
    hasCompletedSignup: boolean;
    id: number;
    issued: number;
    token: string;
    data: Users.AdminData;
  }

  interface SignUpResponse {
    expires: number;
    message: string;
    id: number;
    issued: number;
    token: string;
  }

  interface AuthContext {
    validatingToken: boolean;
    tokenContent: null | TokenContent;
  }

  interface TokenContent {
    email: string;
    id: number;
    role: 'investor';
    userType: 'User';
    accountId: number;
    iat: number;
    exp: number;
  }

  interface AuthActionsContext {
    logout: () => void;
  }
}
