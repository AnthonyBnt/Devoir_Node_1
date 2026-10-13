// La déstructuration permet de récupérer directement les deux éléments dont
// j'ai besoin, au lieu de passer par un objet du type userData.users.
const { users, formatUsers } = require("./userData");

// __filename contient le chemin complet de ce fichier, tandis que __dirname
// correspond au dossier dans lequel il se trouve. Ça aide à situer le script.
console.log("Fichier courant (__filename) :", __filename);
console.log("Répertoire courant (__dirname) :", __dirname);

// J'envoie le tableau au formateur, puis j'affiche les chaînes obtenues.
console.log("Liste formatée des utilisateurs :");
console.log(formatUsers(users));
