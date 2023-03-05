
import React from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


// This is a functional component that displays a loading spinner using the MySwal library.
function LoadingSpinner() {
   // Use the useEffect hook to display the loading spinner when the component mounts.
  useEffect(() => {
    MySwal.fire({
      title: <p>Loading...</p>,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        MySwal.showLoading();
      }
    });
  }, []);
   // Return null because this component doesn't render any UI elements itself.
  return null;
}
// Export the LoadingSpinner component as the default export of this module.
export default LoadingSpinner;
