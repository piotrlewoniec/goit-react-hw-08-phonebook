// import axios, { isCancel, AxiosError } from 'axios';
import axios from 'axios';
export async function axiosData({ header, parameters, data }) {
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
