// Etape 1 : première possibilité 
function sum1(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum
}

// seconde possibilité 
function sum1(nums) {
  let sum = 0;
  nums.forEach(num => sum += num) //Prendre chaque élément du tableau 
  return sum
}

// troisième possibilité
function sum1(nums) {
  return nums.reduce((total, num) => total + num); //utilisée pour réduire un tableau en une seule valeur en exécutant une fonction donnée
}

// étape 2 pour trouver un nombre entier 
function sum2(nums) {
  if (nums % 1 === 0) {
    // yes it's an integer.
    return "True";
  }
  else {
    return "false"
    // no it's an integer
  }
}

// étape 2 - fonction récursive
function sum2(num) {
  if (num.length < 1)
    return 0;
  return num.pop() + sum2(num)
}

// étape 3 
//la factorielle d’un nombre est le produit de tous les entiers compris entre 1 et lui-même.
function factorial(num) {
  if (num === 0)
    return 1;
  return num * factorial(num - 1);
}

// étape 4 avec la boucle for
//la suite de Fibonacci est une suite d'entiers dans laquelle chaque terme 
//est la somme des deux termes qui le précèdent. 
function fibonacci(x) {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;

  for (let i = 2; i <= x; i++) {
    //somme des deux derniers nombres
    somme = n1 + n2;
    //assigner la dernière valeur à la première
    n1 = n2;
    //attribuer la somme au dernier
    n2 = somme;
  }

  return x ? n2 : n1;
}

// étape 4 en utlisant la récursivité 
function fibonacci(nbr) {
  if (nbr < 2) {
    return nbr;
  }
  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}

