
import React from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);



function LoadingSpinner() {
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
  
  return null;
}
export default LoadingSpinner;
