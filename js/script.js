// Variabili
const imageVariable = document.querySelector('#image');
const titleVariable = document.querySelector('#title-color');
const paragraphVariable = document.querySelector('#paragpaph-color');
const paddingXVariable = document.querySelector('#padding_x');
const paddingYVariable = document.querySelector('#padding_y');
const borderVariable = document.querySelector('#radius-border');
const cardVariable = document.querySelector('#card');


//Event list
imageVariable.addEventListener('change', (e)=>{
	const immagine = document.querySelector('#card img');
	immagine.src = e.target.value;
});

titleVariable.addEventListener('input', (e)=>{
	const titolo = document.querySelector('#card h2');
	titolo.style.color = e.target.value;

});
paragraphVariable.addEventListener('input', (e)=>{
	const testo = document.querySelector('#card p');
	testo.style.color = e.target.value;

});
paddingXVariable.addEventListener('input', (e)=>{
 const paddingDiv = document.querySelector('#card div');
	paddingDiv.style.paddingLeft = `${e.target.value}px`;
	paddingDiv.style.paddingRight = `${e.target.value}px`;

});
paddingYVariable.addEventListener('input', (e)=>{
	const paddingDivY = document.querySelector('#card div');
	   paddingDivY.style.paddingTop = `${e.target.value}px`;
	   paddingDivY.style.paddingBottom = `${e.target.value}px`;
   
   });