import { useState } from "react";
import cryptoRandomString from "crypto-random-string";
import CopyButton from "./CopyButton";
function PasswordGenerator() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numberOfPasswords, setNumberOfPasswords] = useState(1);
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const isNonNegativeInt = (number) => {
    return Number.isInteger(number) && number >= 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNonNegativeInt(passwordLength)) {
      alert(
        "La longueur du mot de passe doit être un nombre entier non négatif."
      );
      return;
    }

    const generatedPasswordsArray = [];
    for (let i = 0; i < numberOfPasswords; i++) {
      generatedPasswordsArray.push(generatePassword());
    }

    setGeneratedPasswords(generatedPasswordsArray);
  };

  const generatePassword = () => {
    let allowedCharacters = uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    allowedCharacters += lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    allowedCharacters += numbers ? "0123456789" : "";
    allowedCharacters += symbols ? "!?@#$%^&*()" : "";

    const length = isNonNegativeInt(passwordLength)
      ? Math.max(4, passwordLength)
      : 12;
    const password = cryptoRandomString({
      length: length,
      characters: allowedCharacters,
    });

    return password;
  };

  return (
    <div>
      <h1>Générateur de mot de passe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de mots de passe :</label>
          <input
            type="number"
            value={numberOfPasswords}
            onChange={(e) => setNumberOfPasswords(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <label>Longueur du mot de passe (minimum 4) :</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <label>Caractères autorisés :</label>
          <input
            type="checkbox"
            defaultChecked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />{" "}
          Majuscules
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />{" "}
          Minuscules
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />{" "}
          Chiffres
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />{" "}
          Symboles
        </div>
        {generatedPasswords.length > 0 && (
          <div>
            <h2>Mots de passe générés</h2>
            {generatedPasswords.map((password, index) => (
              <div className="listCreatedPassword" key={index}>
                <p>{password}</p>
                <CopyButton text={password} />
              </div>
            ))}
          </div>
        )}

        <button type="submit">Générer</button>
      </form>
    </div>
  );
}

export default PasswordGenerator;
