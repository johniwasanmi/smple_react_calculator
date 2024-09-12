import "./button.css";
interface Props {
  text: string; // Changed to string to accommodate symbols like `+`, `-`, etc.
  clickHandler: (value: string) => void; // Function to handle button click
}

const Button = ({ text, clickHandler }: Props) => {
  return (
    <div
      id="button-div"
      className="btn col mt-3 m-2 ms-3"
      onClick={() => clickHandler(text)}
    >
      {text}
    </div>
  );
};

export default Button;
