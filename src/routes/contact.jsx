import { useParams } from "react-router-dom";

export default function Contact() {
  const params = useParams();

  return (
    <div id="contact">
      <strong>{params.id}</strong>
    </div>
  );
}
