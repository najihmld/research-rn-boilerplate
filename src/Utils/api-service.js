/* eslint-disable no-undef */
import { isEmpty } from 'lodash';
import axios from 'axios';
import commonStore from '../Stores/common';

const APP_URL = 'https://autozenapi.themarsdigital.net';

const FetchApi = (url, params) => new Promise((resolve, reject) => {
  commonStore.setState({ isLoading: true });

  const options = {
    method: 'GET'
  };
  if (!isEmpty(params)) {
    if (params.method) {
      options.method = params.method;
      if (params.formData) {
        options.data = params.body;
      } else {
        options.data = JSON.stringify(params.body);
      }
    } else {
      options.method = 'POST';
      options.data = JSON.stringify(params);
    }
  }

  if (!isEmpty(params) && params.headers) {
    options.headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': params.headers['Content-Type']
    };
  } else {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }

  const fixUrl = () => {
    if (!isEmpty(params)) {
      if (params.url) {
        return params.url;
      }
      return `${APP_URL}/${url}`;
    }
    return `${APP_URL}/${url}`;
  };

  axios({
    method: options.method,
    url: fixUrl(),
    data: options.data,
    headers: options.headers
  }).then((res) => {
    commonStore.setState({ isLoading: false });
    resolve(res.data);
  }).catch((err) => {
    commonStore.setState({ isLoading: false });
    if (err.response?.data) {
      const { message } = err.response?.data;
      commonStore.setState({ message });
      reject(err.response.data);
    } else {
      commonStore.setState({ message: err.message });
      reject(err);
    }
  });
});

export default FetchApi;
