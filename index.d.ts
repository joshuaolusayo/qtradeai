declare namespace Auth {
  interface LoginResponse {
    error: {
      message: null | string;
      status: null | string;
    };
    success: {
      message: null | string;
      status: null | string;
    };
    content: AdminData;
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

declare interface AdminData {
  data: {
    fullname: null | string;
    userID: null | string;
    username: null | string;
    publicKey: null | string;
    state: null | string;
    lg: null | string;
    phone: null | string;
    email: null | string;
    address: null | string;
    parent: null | string;
    dateJoined: null | string;
    birthday: null | string;
    profile: null | string;
    occupation: null | string;
    BMToken: null | string;
    totalWithdrawal: null | string;
    totalSubscription: null | string;
    parentName: null | string;
    parentOccupation: null | string;
    parentPhone: null | string;
    ParentProfile: null | string;
    stateName: null | string;
    lgName: null | string;
  }[];
}
