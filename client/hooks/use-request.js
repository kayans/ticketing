import axios from 'axios';
import { useState } from 'react';

// Create the hook
export default ({ url, method, body, onSuccess }) => {
  // Create some pieces of error states, by default is null
  const [errors, setErrors] = useState(null);

  // Create the function
  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      // method === 'post' || 'get' || 'patch' and so on
      const response = await axios[method](url, { ...body, ...props });

      // Redirect to landing page
      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
