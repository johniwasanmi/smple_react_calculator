import "./screen.css";

interface Props {
  input: string;
}
const Screen = ({ input }: Props) => {
  return (
    <div id="screen">
      <input id="input_screen" type="text" value={input} readOnly />
    </div>
  );
};

export default Screen;
