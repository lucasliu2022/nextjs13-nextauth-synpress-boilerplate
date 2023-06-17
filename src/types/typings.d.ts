type TUserWallets = {
  id?: string;
  title: string;
  icon: string;
  address: string;
  network: number;
  user_id: string;
  created_at?: string;
  updated_at?: string;
};

type TUserData = {
  id: string;
  email: string;
  verified: boolean;
  username?: string;
  phone_number?: string;
  is_admin?: boolean;
  wallets?: TUserWallets[];
  accounts?: SocialAccount[];
  bio?: string;
  profile_image?: string;
  banner_image?: string;
  handle?: string;
  first_name?: string;
  last_name?: string;
  provider?: string;
  accessToken?: string;
  links?: UserLink[];
  has_password: boolean;
  created_at: string;
};
