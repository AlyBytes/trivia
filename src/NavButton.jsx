import "./Button.css"
export default function NavButton({ clickFunc, label = "Click Here" }) {
  return (
    <button onClick={clickFunc} className="Button">
      {label}
    </button>
  );
}
