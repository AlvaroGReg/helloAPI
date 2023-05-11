/*Project for leaning and testing how api works

i want to ask for data and retrieve another for testing both*/

const express = require('express')
const app = express()

app.use(express.json())

var nombres = [
    "Juan",
    "Carlos",
    "Ana",
    "María",
    "Pedro",
    "Ñarta",
    "Luis",
    "Laura",
    "Diego",
    "Lucía",
    "Ricardo",
    "Ñisabel",
    "Jorge",
    "Pablo",
    "Sofía",
    "Fernando",
    "Natalia",
    "Ñalejandro",
    "Cristina",
    "Esteban",
    "Elena",
    "Gonzalo",
    "Silvia",
    "Guillermo",
    "Raquel",
    "Roberto",
    "Adriana",
    "Ñiguel",
    "Patricia",
    "Manuel",
    "Inés",
    "Alberto",
    "Teresa",
    "Santiago",
    "Olga",
    "Andrés",
    "Beatriz",
    "Álvaro",
    "🙂",
    "David",
    "Clara",
    "José",
    "Daniela",
    "Ignacio",
    "Lucas",
    "Marina",
    "Francisco",
    "💖",
    "Ñantonio",
    "🦄",
]

/* This code is defining a GET endpoint for the path '/getlist'. When a GET request is made to this
endpoint, the function specified as the second argument is executed. */
app.get('getlist', (req, res) =>{


	if (req.params.num){
		res.send(JSON.stringify({Response:"REQFAIL"}))
	}else{

		const num = req.params.num
		const list = createArray(num)
	
		res.send(JSON.stringify(list))
	}
})

app.listen(3000, () => console.log('API listening on port 3000'));

/**
 * The function creates an array of objects representing students with random names and grades.
 * @param length - The length parameter is the number of elements that the array will have. It is used
 * to determine the size of the array and how many times the for loop will run to create new objects to
 * add to the array.
 * @returns an array of objects representing students, with each object containing an id, a randomly
 * generated name from an array of names, and a randomly generated grade between 0 and 10. The length
 * of the array is determined by the input parameter "length".
 */
function createArray(length){

	var cantidadDeAlumnos 	= length;
	var alumnosArray 		= new Array(cantidadDeAlumnos)
	
	for (var n = 0; n < cantidadDeAlumnos; n++) {
		var newAlumno = {
			id: n + 1,
			nombre: nombres[Math.floor(Math.random() * nombres.length)],
			nota: Math.floor(Math.random() * 11)
		}
	
		alumnosArray[n] = newAlumno
	}
	return alumnosArray
}