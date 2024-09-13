// src/hooks/useAuth.js
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../../redux/user/user.actions.js';
import { closeModal } from '../../../redux/modal/modal.slice';
import { http } from '../../../http/index.js';
import { toast } from 'react-toastify';

const useAuth = (typeForm, reset) => {
  const dispatch = useDispatch();

  const onSubmit = async body => {
    try {
      const requestData = { ...body };
      if (typeForm === 'signin') {
        delete requestData.name;
      }
      const endpoint =
        typeForm === 'signup' ? '/users/signup' : '/users/signin';
      const { data } = await http.post(endpoint, requestData);
      if (data) {
        localStorage.setItem('authToken', data.token);
        dispatch(fetchCurrentUser());
        reset();
        dispatch(closeModal());
        toast.success(
          `${typeForm === 'signup' ? 'Signup' : 'Signin'} successful!`
        );
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error(
          'A user with this email already exists, go to the login form'
        );
      } else {
        toast.error('Something went wrong, please try again.');
      }
    }
  };

  return { onSubmit };
};

export default useAuth;
