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

export const headerDeafultURL = {
  baseURL: `https://${apikeyMOCKAPI}.mockapi.io/api/pml/v1/`,
};

export const paramsDefault = {
  page: 1,
  limit: 10,
};

//https://connections-api.herokuapp.com/docs/

export const headerDeafultURLHeroKuapp = {
  baseURL: `https://connections-api.herokuapp.com/`,
};

export const headerDefaultRegister = {
  method: 'post',
  accept: 'application/json',
  url: '/users/signup',
};
