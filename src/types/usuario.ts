export type Usuario = {
  idUsuario: string;
  nome: string;
  email: string;
  created_at: Date;
  profilePicture: string;
};

export type UsuarioAuth = {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  picture: string;
  preferred_username: string;
  provider_id: string;
  sub: string;
  user_name: string;
};
