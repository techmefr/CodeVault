import PropTypes from "prop-types";
import "./copyButton.css";

function CopyButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Mot de passe copié dans le presse-papiers !");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie dans le presse-papiers : ", err);
      });
  };

  return (
    <label className="checkbox-btn">
      <label htmlFor="checkbox"></label>
      <input id="checkbox" type="checkbox" onChange={copyToClipboard} />
      <span className="checkmark"></span>
    </label>
  );
}

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyButton;
