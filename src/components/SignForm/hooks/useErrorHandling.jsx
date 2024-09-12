import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const useErrorHandling = errors => {
  useEffect(() => {
    const errorMessages = Object.values(errors).map((err, index) => ({
      id: uuidv4(),
      message: err.message,
    }));

    if (errorMessages.length > 0) {
      toast.error(
        <div>
          {errorMessages.map(({ message, id }) => (
            <div key={id}>{message}</div>
          ))}
        </div>
      );
    }
  }, [errors]);
};

export default useErrorHandling;
