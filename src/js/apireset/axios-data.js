// import axios, { isCancel, AxiosError } from 'axios';
import axios from 'axios';
export async function axiosData({
  header,
  parameters,
  data,
  auth,
  authorization,
  authorizationHeaders,
}) {
  try {
    const response = await axios(
      {
        ...header,
        params: {
          ...parameters,
        },
        data: { ...data },
      },
      { signal: AbortSignal.timeout(5000) }
    );
    return response;
  } catch (error) {
    return error;
  }
}

// const response = await axios(
// {
//   ...header,
//   defaults: {
//     headers: {
//       common: { Authorization: authorization },
//       post: { Authorization: authorization },
//     },
//   },
//   headers: {
//     Authorization: authorizationHeaders,
//   },
//   params: {
//     ...parameters,
//   },
//   data: { ...data },
//   auth: { ...auth },
// }
