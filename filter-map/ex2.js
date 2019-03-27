/* Array.prototype.map ET filter - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)

En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Tableau en entrée:
[
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

Sortie attendue:
['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']

*/

function getCampusesTeachingReact(campuses) {
  let tab = campuses.filter(campuse => {
    for (let i = 0; i < campuse.curriculums.length; i++) {
      if (campuse.curriculums[i] === 'JS/React') {
        return campuse.city; 
      }  
    }
  })
 let result = tab.map(citySchool => {
    return citySchool.city;
  })
  return result;
}


// function getJedisNames(characters) {
//   tab = characters.filter(character => {
//      return character.side.endsWith('light');   
//    })
//    result = tab.map(nameStarWars => {
//      return nameStarWars.name;
//    })
//    return result;
//  }


module.exports = getCampusesTeachingReact;
