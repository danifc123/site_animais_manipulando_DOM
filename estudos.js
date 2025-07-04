//Seletores 
const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection);

const tagName = document.getElementsByTagName('dt')
console.log(tagName); //console.log(tagName[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

//seoletores que serao mais usados
const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')
//para ver a diferença entre as duas podemos perceber que enquanto o gridSectionHtml atualiza caso colocamos mais uma classe com o codigo abaixo

// primeiraUl.classList.add('grid-section')

//ou seja enquanto HTML é ao vivo o outro é estático
console.log(gridSectionHtml)
console.log(gridSectionNode)

//só no gridSectionNode que seria por causa do queryselector realizar esse codigo abaixo:
gridSectionNode.forEach(function (item, index) {
  console.log(item)
});

//como transformar um arrayLike em um array para depois conseguir utilizar o foreach caso seja um htmlcollection
const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function (item) {
  console.log(item);
})

//Exercício
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const teste = document.querySelectorAll('img[src^="img/imagem"]')
console.log(teste);

// Selecione todos os links internos (onde o href começa com #)
const linkAtividade = document.querySelectorAll('[href^="#"]')
console.log(linkAtividade);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)
// Selecione o último p do site

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1])
/* 
ou é possivel fazer ded uma forma mais resumida essa ultima linha
console.log(ultimoP[-- ultimoP.lenght])
*/

/* **FOREACH**
const imgs = document.querySelectorAll('img');

imgs.forEach(function(img){
  console.log(img)
});

é necessario transformar array´sLike em array antes de implementar o foreach
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  console.log(item, index, array);
});




 **ARROWFUNCTION ** 
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array) => {
  console.log(item, index, array)
});

 PARTICULARIDADES DA SINTAXE 
-----> argumento único não precisa de parênteses mas sempre vamos colocar para manter um padrao
imgs.forEach(item => {
  console.log(item);
});
é possivel tirar as chaves '{}' quando tiver só em 1 linha
let i = 0;
imgs.forEach((item) => console.log(i++));

-----> multiplos argumentos utilizam parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
  });

-----> sem argumentos precisa dos parênteses 'vazio'
let i = 0;
imgs.forEach(() => {
  console.log(i++);
  });
*/


//Exercícios
/*
// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((item)=>{
    console.log(item);
});
// E agora com a mesma variavel mostre o texto dos parágrafos no console
paragrafo.forEach((item) => {
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(()=> {
  console.log(i++);
});

imgs.forEach(() => i++);

*/


//Exercícios
// Adicione a classe ativo a todos os itens do menu

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu

