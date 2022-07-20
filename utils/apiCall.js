import Snackbar from './notistick/Snackbar';
import axios from 'axios';

export async function sendData(api, formData, succesMessage) {
  try {
    const response = await axios.post(api, formData);
    if (response.data.status === 'success') {
      Snackbar.success(succesMessage);
    }
    console.log(response);
    // const token=response.data.token;
    // console.log(token);
    //       console.log(response);
  } catch (err) {
    Snackbar.error(err.response.data.message);
    console.log(err)
  }
}
export async function updateData(api, formData, succesMessage) {
  try {
    const response = await axios.patch(api, formData);
    if (response.data.status === 'success') {
      Snackbar.success(succesMessage);
    }
  } catch (err) {
    Snackbar.error(err.response.data.message);

  }
}
