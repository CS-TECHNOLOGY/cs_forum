import axios from 'axios';

const HOST_API = process.env.REACT_APP_HOST_API || 'http://localhost:5000';

export const postService = async (url, body, token = '') => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['bearer'] = token;
    }

    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      { headers }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const res = error.response.data.message;
      throw res;
    } else {
      throw error;
    }
  }
};

export const getService = async (url, params = '', token = '') => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['bearer'] = token;
    }

    let queryString = '';
    if (params) {
      queryString = `?${Object.keys(params)
        .map((key) => `${key}=${params[key] || ''}`)
        .join('&')}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    debugger;
    if (error.response) {
      const res = error.response.data.message;
      throw res;
    } else {
      throw error;
    }
  }
};

export const putService = async (url, body, token = '') => {
  try {
    const headers = {
      Accept: 'application/json ',
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['bearer'] = token;
    }

    const response = await axios.put(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(':');
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};

export const deleteService = async (url, params, token = '') => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['bearer'] = token;
    }

    let queryString = '';
    if (params) {
      queryString = `?${Object.keys(params)
        .map((key) => `${key}=${params[key] || ''}`)
        .join('&')}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(':');
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
