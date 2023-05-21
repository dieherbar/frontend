import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router';


export default function MyButton(props) {
  const router = useRouter();
  function handleRegisterClick() {
    router.push('/registro');
  }
  return (
    <>
      <Button
        variant={props.variant}
        color={props.color}
        className={props.className}
        /* onClick={() => {
          alert(
            "clicked"
          ); //Asociamos con evento onClick. Mediante props: texto del botón etc
        }} */
        onClick={handleRegisterClick}
      >
        {props.icon} {props.text}
      </Button>
    </>
  );
}
