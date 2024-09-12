import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useErrorHandling = errors => {
  useEffect(() => {
    const errorMessages = Object.values(errors).map(err => err.message);
    if (errorMessages.length > 0) {
      toast.error(
        <div>
          {errorMessages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      );
    }
  }, [errors]);
};

export default useErrorHandling;
