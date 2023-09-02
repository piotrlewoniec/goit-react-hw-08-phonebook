import { apikeyMOCKAPI } from './apikey';

export const headerDefaultGet = {
  method: 'get',
  accept: 'application/json',
};

export const headerDefaultPost = {
  method: 'post',
  'content-type': 'application/json',
};

export const headerDefaultDelete = {
  method: 'delete',
  'content-type': 'application/json',
};

export const headerDefaultURL = {
  baseURL: `https://${apikeyMOCKAPI}.mockapi.io/api/pml/v1/`,
};

export const paramsDefault = {
  page: 1,
  limit: 10,
};

//https://connections-api.herokuapp.com/docs/

export const headerDefaultURLHeroKuapp = {
  baseURL: `https://connections-api.herokuapp.com/`,
};

export const headerDefaultRegister = {
  method: 'post',
  accept: 'application/json',
  url: '/users/signup',
};

export const headerDefaultLogin = {
  method: 'post',
  accept: 'application/json',
  url: '/users/login',
};

export const headerDefaultLogout = {
  method: 'post',
  accept: 'application/json',
  url: '/users/logout',
};

export const headerDefaulUserInfo = {
  method: 'get',
  accept: 'application/json',
  url: '/users/current',
};

export const headerDefaultDownload = {
  method: 'get',
  accept: 'application/json',
  url: '/contacts',
};

export const headerDefaultUpload = {
  method: 'post',
  accept: 'application/json',
  url: '/contacts',
};

export const headerDefaultRemove = {
  method: 'delete',
  accept: 'application/json',
  url: '/contacts',
};

export const headerDefaultUpdate = {
  method: 'patch',
  accept: 'application/json',
  url: '/contacts',
};
