import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../../redux/user/user.actions.js';
import { closeModal } from '../../../redux/modal/modal.slice';
import { http } from '../../../http/index.js';
import { toast } from 'react-toastify';
import { useState } from 'react';

const useAuth = (typeForm, reset) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async body => {
    try {
      setIsLoading(true);
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
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error(
          'A user with this email already exists, go to the login form'
        );
      } else {
        toast.error('Something went wrong, please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading };
};

export default useAuth;
