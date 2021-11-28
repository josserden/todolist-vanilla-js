import Swal from 'sweetalert2';

export const onError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  });
};

export const onSuccess = () => {
  Swal.fire('Good job!', 'You clicked the button!', 'success');
};

export const onWarning = () => {
  Swal.fire('The Internet?', 'That thing is still around?', 'question');
};
