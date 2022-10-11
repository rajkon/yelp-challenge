import CONSTANTS from "utils/constants";

/**
 * Generate base URL including  required params
 * @param {string}
 * @returns {string}
 */
const getBaseURL = (url: string): string => {
  return `${url}?${new URLSearchParams({
    limit: "50",
  }).toString()}`;
};

/**
 * Service object exported to use across application
 */
const service = {
  /*   get: async (url: string, params: object) => {
    try {
      let response = await fetch(
        `${getBaseURL(url)}&${new URLSearchParams({
          ...params,
        }).toString()}`,
        {
          method: "GET",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'Authorization;': `Bearer ${CONSTANTS.API_KEY}`
          },
        }
      ).then((res) => res.json());

      if (response.Response === "False") {
        throw Error(response.Error);
      } else {
        return response;
      }
    } catch (error) {
      throw error;
    }
  }, */
  post: async (url: string, data: object) => {
    const response = await fetch(getBaseURL(url), {
      method: "POST",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
      },
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  },

  getSearchRes: async (url: string, params: string) => {
    console.log("calling search..");
    try {
      let response = await fetch(`http://localhost:3001/api`, {
        method: "GET",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          // 'Authorization;': `Bearer ${CONSTANTS.API_KEY}`
        },
      }).then((res) => {
        console.log("in search client ui", { res });
        return res.json();
      });

      if (response.Response === "False") {
        throw Error(response.Error);
      } else {
        return response;
      }
    } catch (error) {
      throw error;
    }
  },

  getReview: async (url: string, params: object) => {
    try {
      let response = await fetch(`http://localhost:3001/review`, {
        method: "GET",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          accept: "application/json",
          // "Content-Type": "application/x-www-form-urlencoded", // application/x-www-form-urlencoded, application/json
          "Content-Type":"text/plain;charset=UTF-8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          // 'Authorization;': `Bearer ${CONSTANTS.API_KEY}`
        },
      }).then((res) => {
        console.log({ res });
        return res;
      });
      const res = response.text();
      console.log("in ui resp1:", res);
      return res;
      // if (response.Response === "False") {
      //   throw Error(response.Error);
      // } else {
      //   return response;
      // }
    } catch (error) {
      throw error;
    }
  },
};
export default service;
