import { _ } from "libs";
import Ajax from "services/ajax";
import App from "app";

var AUTHORIZATION_TOKEN_URL = "https://launchpad.37signals.com/authorization/token";

export default {
  current: function() {
    return localStorage.getItem("currentToken");
  },

  clearCurrentCredentials: function() {
    localStorage.clear("currentToken");
    localStorage.clear("refreshToken");
  },

  fetch: function(authCode) {
    var tokenPromise = this.tokenRequest({
      code: authCode,
      type: "web_server"
    });

    tokenPromise.then(this.cacheToken);

    return tokenPromise;
  },

  refresh: function() {
    var tokenPromise = this.tokenRequest({
      refresh_token: localStorage.getItem("refreshToken"),
      type: "refresh"
    });

    tokenPromise.then(this.cacheToken);

    return tokenPromise;
  },

  cacheToken: function(request) {
    var data = request.response;

    localStorage.setItem("currentToken", data.access_token);

    if (data.refresh_token) {
      localStorage.setItem("refreshToken", data.refresh_token);
    }
  },

  tokenRequest: function(options) {
    _.defaults(options, {
      client_id: App.clientId,
      redirect_uri: App.redirectUri,
      client_secret: App.clientSecret
    });

    return Ajax({
      url: AUTHORIZATION_TOKEN_URL,
      method: "POST",
      data: options
    });
  }
};
