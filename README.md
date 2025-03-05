# CodeVault - Générateur de Mots de Passe Sécurisés

Une application React moderne qui génère des mots de passe cryptographiquement sécurisés avec des options de personnalisation avancées.

## 🔐 Fonctionnalités

- **Personnalisation complète** des mots de passe :
  - Longueur ajustable
  - Inclusion/exclusion de majuscules, minuscules, chiffres et symboles
  - Génération multiple (plusieurs mots de passe à la fois)
- **Génération sécurisée** utilisant `crypto-random-string` pour une entropie maximale
- **Copie en un clic** vers le presse-papiers
- **Interface utilisateur intuitive** avec retour visuel
- **Validations** pour assurer des mots de passe robustes

## 🛠️ Technologies utilisées

- **React 18** pour une UI réactive et des performances optimales
- **Vite** comme build tool pour un développement rapide
- **ES6+** pour une code base moderne et maintenable
- **crypto-random-string** pour la génération cryptographique des mots de passe
- **CSS moderne** pour le styling des composants

## 📋 Compétences techniques démontrées

- **Gestion des états** avec React Hooks (useState)
- **Architecture par composants** modulaire et réutilisable
- **Validation des données utilisateur** et gestion des cas limites
- **Manipulation du presse-papiers** avec l'API Clipboard
- **Gestion des événements** et formulaires en React
- **Intégration de bibliothèques tierces** pour des fonctionnalités avancées

## 🚀 Installation et démarrage

```bash
# Cloner le dépôt
git clone https://github.com/techmefr/codevault.git
cd codevault

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173)

## 🧪 Fonctionnement technique

L'application utilise une architecture à composants :

1. **PasswordGenerator** : Composant principal qui gère :
   - Les états des options de personnalisation
   - La logique de génération des mots de passe
   - Le rendu du formulaire et des résultats

2. **CopyButton** : Composant réutilisable qui :
   - Encapsule la logique de copie dans le presse-papiers
   - Fournit un retour visuel à l'utilisateur
   - Gère les erreurs potentielles

### Sécurité

La génération des mots de passe est basée sur la bibliothèque `crypto-random-string` qui utilise des méthodes cryptographiques pour assurer une entropie maximale, rendant les mots de passe générés hautement sécurisés contre les attaques de force brute et par dictionnaire.

## 💡 Améliorations potentielles

- Ajout d'un indicateur de force du mot de passe
- Sauvegarde locale des mots de passe générés (avec chiffrement)
- Options avancées pour exclure les caractères ambigus
- Thème sombre/clair
- Tests unitaires et d'intégration
- Exportation au format CSV/JSON

## 🌐 Build et déploiement

```bash
# Créer une version de production
npm run build

# Prévisualiser la version de production localement
npm run preview
```

---

✨ **Développé par [TechmeFR](https://github.com/techmefr)**
