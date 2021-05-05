declare namespace Auth {
  interface LoginResponse {
    error: {
      message: string | null;
      status: string | null;
    };
    success: {
      message: string | null;
      status: string | null;
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
    fullname: string | null;
    userID: string | null;
    username: string | null;
    publicKey: string | null;
    state: string | null;
    lg: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    parent: string | null;
    dateJoined: string | null;
    birthday: string | null;
    profile: string | null;
    occupation: string | null;
    BMToken: string | null;
    totalWithdrawal: string | null;
    totalSubscription: string | null;
    parentName: string | null;
    parentOccupation: string | null;
    parentPhone: string | null;
    ParentProfile: string | null;
    stateName: string | null;
    lgName: string | null;
  }[];
}

declare namespace Packages {
  interface GetPackages {
    data: {
      calculatedPrice: string | null;
      'carbonus1/18000': string | null;
      'carbonus2/18000': string | null;
      'carbonus3/18000': string | null;
      'carbonus4/18000': string | null;
      'carbonus5/18000': string | null;
      'carbonus/18000': string | null;
      color: string | null;
      currencyName: string | null;
      details: string | null;
      duration: string | null;
      gei: string | null;
      'geibonus/18000': string | null;
      gracedays: string | null;
      id: string | null;
      lv1bmt: string | null;
      lv1bmts: string | null;
      lv1commission: string | null;
      lv2bmt: string | null;
      lv2bmts: string | null;
      lv2commission: string | null;
      lv3bmt: string | null;
      lv3bmts: string | null;
      lv3commission: string | null;
      lv4bmt: string | null;
      lv4commission: string | null;
      lv5bmt: string | null;
      lv5commission: string | null;
      masternode: string | null;
      maturity: string | null;
      name: string | null;
      price: string | null;
      'prodbonus1/18000': string | null;
      'prodbonus2/18000': string | null;
      'prodbonus3/18000': string | null;
      'prodbonus4/18000': string | null;
      'prodbonus5/18000': string | null;
      'prodbonus/18000': string | null;
      profit: string | null;
      reward: string | null;
      'trustcommitment/18000': string | null;
    }[];
  }
}

declare namespace Stockist {
  interface GetStockist {
    data: {
      address: string | null;
      area: string | null;
      email: string | null;
      id: string | null;
      lg: string | null;
      name: string | null;
      owner: string | null;
      phone: string | null;
      state: string | null;
    }[];
  }
}

declare namespace BeepEstate {
  interface GetBeepEstate {
    data: {
      calculatedPrice: string | null;
      'carbonus1/18000': string | null;
      'carbonus2/18000': string | null;
      'carbonus3/18000': string | null;
      'carbonus4/18000': string | null;
      'carbonus5/18000': string | null;
      'carbonus/18000': string | null;
      color: string | null;
      currencyName: string | null;
      details: string | null;
      duration: string | null;
      gei: string | null;
      'geibonus/18000': string | null;
      gracedays: string | null;
      id: string | null;
      lv1bmt: string | null;
      lv1bmts: string | null;
      lv1commission: string | null;
      lv2bmt: string | null;
      lv2bmts: string | null;
      lv2commission: string | null;
      lv3bmt: string | null;
      lv3bmts: string | null;
      lv3commission: string | null;
      lv4bmt: string | null;
      lv4commission: string | null;
      lv5bmt: string | null;
      lv5commission: string | null;
      masternode: string | null;
      maturity: string | null;
      name: string | null;
      price: string | null;
      'prodbonus1/18000': string | null;
      'prodbonus2/18000': string | null;
      'prodbonus3/18000': string | null;
      'prodbonus4/18000': string | null;
      'prodbonus5/18000': string | null;
      'prodbonus/18000': string | null;
      profit: string | null;
      reward: string | null;
      'trustcommitment/18000': string | null;
    };
  }
}

declare namespace Orders {
  interface GetOrders {
    data: {
      BMCoin: string | null;
      amount: string | null;
      area: string | null;
      camount: string | null;
      commitment: string | null;
      commitmentFee: string | null;
      completed: string | null;
      completedBy: string | null;
      cstat: string | null;
      currency: string | null;
      dispatchBatch: string | null;
      finalearning: string | null;
      gei: string | null;
      geibonus: string | null;
      grace: string | null;
      id: string | null;
      lg: string | null;
      maturity: string | null;
      message: null;
      orderCount: string | null;
      orderID: string | null;
      package: string | null;
      packageDetails: string | null;
      packageName: string | null;
      packagePrice: string | null;
      padType: string | null;
      partnerAddress: null;
      partnerEmail: null;
      partnerName: null;
      partnerOwner: null;
      partnerPhone: null;
      pickUp: string | null;
      referrals: string | null;
      state: string | null;
      status: string | null;
      transDate: string | null;
      unitPrice: string | null;
      userID: string | null;
    };
  }
}
