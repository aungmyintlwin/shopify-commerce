import { getItem } from './appStorage';
import {BACKEND_API_URL} from '@env';
 
const api = BACKEND_API_URL;

// FetchPost
export const fetchPost = async (route: string, data: {}) => {
  let lang = 'en';
  let res = await getItem('@lang');
  if(res){
    lang = res;
  }
  let response = null;
  try {
    response = await fetch(api + route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Accept-Language": `${lang}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(data)
    });
    if (response != null) {
      let jsonRes = await response.json();
      return { data : jsonRes, success: response.status === 200, status: response.status };
    } 
  } catch (e) {
    console.error(e);
  }
  return null;
};

// FetchPost With Token

export const fetchPostByToken = async (route: string, data: {}, token: string) => {
  let lang = 'en';
  let res = await getItem('@lang');
  if(res){
    lang = res;
  }
  let response = null;
  try {
    response = await fetch(api + route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Accept-Language": `${lang}`,
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data)
    });
    if (response != null) {
      let json = await response.json();
      return {...json, success: json.success || response.status === 200 || response.status === 201, status: response.status};
    }
  } catch (e) {
    console.log(e);
  }
  return null;
};


// FetchPostImageUPload With Token

export const fetchPostImageUpload = async (
    route: string,
    data: FormData,
    token: string
  ) => {
    let lang = 'en';
    let res = await getItem('@lang');
    if(res){
      lang = res;
    }
    let response = null;
    try {
      response = await fetch(api + route, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          "Accept-Language": `${lang}`,
          Authorization: 'Bearer ' + token,
        },
        body: data
      });
      if (response != null) {
        let json = await response.json();
        return {...json, success: json.success || response.status === 200 || response.status === 201, status: response.status};
      }
    } catch (e) {
      console.log( 'Promise Rejected');
    }
  
    return null;
  };

  // FetchGet

export const fetchGet = async (route: string) => {
  let lang = 'en';
  let res = await getItem('@lang');
  if(res){
    lang = res;
  }
    let response = null;
    try {
      response = await fetch(api + route, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Accept-Language": `${lang}`,
        }
      });
      if (response != null) {
        let json = await response.json();
        return json;
      }
    } catch (e) {
      console.log('Promise Rejected');
    }
    return null;
  };
  

  
// FetchGet With Token

export const fetchGetByToken = async (route: string, token: string) => {
    let lang = 'en';
    let res = await getItem('@lang');
    if(res){
      lang = res;
    }
    let response = null;
    try {
      response = await fetch(api + route, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Accept-Language": `${lang}`,
          Authorization: 'Bearer ' + token,
        }
      });
      if (response != null) {
        let json = await response.json();
        return {...json, success: json.success || response.status === 200 || response.status === 201, status: response.status};
      }
    } catch (e) {
      console.log('Promise Rejected');
    }
    return null;
  };
  