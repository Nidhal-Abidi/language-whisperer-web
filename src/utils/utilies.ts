export const getLoginPageErrorMessage = (error: string) => {
  switch (error) {
    case "CredentialsSignin":
      return "Invalid email or password. Please try again.";

    case "Configuration":
      return "There was a problem with the server configuration.";

    case "CallbackRouteError":
    case "SessionTokenError":
    case "JWTSessionError":
      return "Authentication error";

    case "OAuthAccountNotLinked":
      return "Email is already linked to a different OAuth provider";

    case "AccessDenied":
      return "User denied permission during OAuth flow or GitHub blocked the request";

    case "OAuthSignin":
      return "OAuth signin error";

    default:
      return "An unexpected error occurred. Please try again.";
  }
};

export function getRegisterPageErrorMessage(error: string) {
  switch (error) {
    case "UserExists":
      return "An account with this email already exists. Please try logging in instead.";
    case "DatabaseError":
      return "There was a problem creating your account. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}
