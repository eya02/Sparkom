import Swal from "sweetalert2";

export default function SweetAlert(title, text, icon) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "OK",
  });
}
