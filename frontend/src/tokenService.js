import { jwtDecode } from "jwt-decode";

const TokenService = (function tokenService() {
  const setToken = (tokenObj) => {
    if (tokenObj.access) {
      localStorage.setItem("accessToken", tokenObj.access);
    }
    if (tokenObj.refresh) {
      localStorage.setItem("refreshToken", tokenObj.refresh);
    }
  };

  const getAccessToken = () => localStorage.getItem("accessToken");

  const getRefreshToken = () => localStorage.getItem("refreshToken");

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
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
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
