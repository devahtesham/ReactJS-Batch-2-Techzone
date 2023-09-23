
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


const successToast = (message) => toast.success(message);
const warningToast = (message) => toast.warn(message);



export {
    successToast, warningToast, ToastContainer
}
