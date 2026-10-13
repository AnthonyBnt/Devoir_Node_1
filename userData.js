// Ce fichier regroupe les données des utilisateurs et les fonctions qui les
// manipulent. On peut ensuite le réutiliser dans un autre fichier avec require().
const users = [
    {name: "John", age: 30, email: "john@gmail.com"},
    {name: "Claude", age: 13, email: "Claude@gmail.com"},
    {name: "Sarah", age: 20, email: "Sarah@gmail.com"},
]


// Je parcours le tableau et je transforme chaque objet utilisateur en une
// phrase plus lisible. Cette fonction ne filtre pas les données : elle les
// présente simplement sous forme de chaînes.
function formatUsers(users) {
    return users.map(user =>
        `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}`
    );
}

// Cette fonction garde uniquement les utilisateurs qui ont au moins 18 ans.
function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

// find() renvoie le premier utilisateur avec cet email. Si aucun ne correspond,
// le résultat est null pour pouvoir gérer clairement le cas où il est absent.
function findUserByEmail(users, email) {
    return users.find(user => user.email === email) ?? null;
}

console.log("Liste formatée des majeurs uniquement :");
console.log(formatUsers(getAdults(users)));

const foundUser = findUserByEmail(users, "Sarah@gmail.com");
if (foundUser) {
    console.log("Utilisateur trouvé :", foundUser);
} else {
    console.log("Utilisateur introuvable");
}

// module.exports indique ce que les autres fichiers ont le droit de récupérer
// avec require(). Ici, j'exporte les données et les fonctions pour les réutiliser.
module.exports = {
    users,
    formatUsers,
    getAdults,
    findUserByEmail,
};
