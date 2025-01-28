import { jwtDecode } from "jwt-decode";

const TokenService = (function tokenService() {
  const setToken = (tokenObj) => {
    if (tokenObj.access) {
      localStorage.setItem("access_token", tokenObj.access);
    }
    if (tokenObj.refresh) {
      localStorage.setItem("refresh_token", tokenObj.refresh);
    }
  };

  const getAccessToken = () => localStorage.getItem("access_token");

  const getRefreshToken = () => localStorage.getItem("refresh_token");

  const getTokenValidity = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const dateNow = Date.now() / 1000; // Convert to seconds
      return decodedToken.exp > dateNow;
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  };

  const getAccessTokenValidity = () => {
    const accessToken = getAccessToken();
    return accessToken ? getTokenValidity(accessToken) : null;
  };

  const getRefreshTokenValidity = () => {
    const refreshToken = getRefreshToken();
    return refreshToken ? getTokenValidity(refreshToken) : null;
  };

  const clearToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return {
    setToken,
    getAccessToken,
    getRefreshToken,
    getAccessTokenValidity,
    getRefreshTokenValidity,
    clearToken,
  };
})();

export default TokenService;
