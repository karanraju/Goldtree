import Swal from 'sweetalert2';

const handleEditClick = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You are about to view this item.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, view it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Viewed!',
        'You are not able to view right now.',
        'warning'
      );
    }
  });
};

export default handleEditClick;
