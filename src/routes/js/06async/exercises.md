Asynkronitet
Dessa övningsuppgifter är relaterade till Promises och Async och Await, du kan hitta  utgångspunkten för i mappen “async”:
https://bitbucket.org/vinnovera/fend22-frontendprojekt/src/main/exercises/06async/
Promises
I alla de här uppgifterna skall du skapa ett eller flera Promise-objekt. I nästan alla uppgifter skall du också skapa en funktion som returnerar ditt Promise. Detta är det vanligaste sättet att använda sig av promises. 

Du skapar ett nytt Promise-objekt med new-operatorn:

const wait = new Promise(function(resolve, reject) {
  // Din kod
})

Ett Promise-objekt tar emot en callback-funktion, som kommer att köras direkt. Den callback-funktionen får två argument, två funktioner. Dessa brukar kallas resolve och reject. 
När ditt promise är färdigt med sin uppgift så skall den köra resolve. Om den misslyckas brukar den köra reject. 
Ett promise kör alltid antingen det ena eller det andra, har den kört en resolve eller en reject är promise:t färdigt. 
resolve och reject är funktioner. De tar ett argument. Detta är vad som är tillgängligt när du sätter handlers på ditt promise. 
Handlers är callback-funktioner som körs på att ett promise resolvar respektive rejectar. 
then() används för resolve, och catch() för reject.

1. wait
Skapa ett Promise-objekt (du behöver inte skapa en funktion, bara ett Promise), som kör en resolve efter 500ms:

wait.then(function() {
  console.log('We waited') // Detta körs efter 500ms
})


2. greaterThan10
Skapa en funktion, greaterThan10, som tar emot ett tal som argument, och returnerar ett Promise. 
Om talet som skickas in är större än 10 skall ditt promise resolva, annars rejecta:

greaterThan10(12).then(function() {
  console.log('Success!')
})

greaterThan10(5).catch(function() {
  console.log('Fail!')
})


3. makeUpperCase
Skapa en funktion, makeUpperCase(), som tar emot en sträng och returnerar ett promise. 
Om det som skickas in är en sträng, så skall ditt promise resolva, och skicka tillbaka strängen som uppercase. 
Om det som skickas in inte är en sträng, så skall ditt promise rejecta med ett meddelande: “Not a string”:

makeUpperCase('jonas').then(function(result) {
  console.log(result) // JONAS
})

makeUpperCase(5).catch(function(error) {
  console.log(error) // Not a string
})


4. delay
Skapa en funktion, delay, som tar emot ett tal som argument och returnerar ett promise. 
Ditt promise skall resolva efter så många millisekunder som argumentet som skickades in:

delay(1000).then(function() {
  console.log('We waited') // Körs efter 1000 millisekunder
})


5. haystack
Du har följande data:

const hayStack = [
  {
    id: 0,
    name: 'STRAW'
  },
  {
    id: 1,
    name: 'GRASS'
  },
  {
    id: 2,
    name: 'NEEDLE'
  },
  {
    id: 3,
    name: 'STICK'
  }
]

Skriv en funktion, findByName(), som tar emot en sträng och en array med objekt, och returnerar ett promise. 
Om du kan hitta ett objekt med ett namn som matchar strängen skall ditt promise resolva med det objektet. 
Annars skall du rejecta med meddelandet: “Matching object not found”

findByName('NEEDLE', hayStack).then(function(result) {
  console.log(result) // { id: 2, name: 'Needle' }
})

findByName('FOOTBALL', hayStack).catch(function(error) {
  console.log(error) // Matching object not found
})


6. Promisify
Att göra en funktion till ett Promise kallas för “promisify”, och det är vad du ska göra nu. I mappen 06 finns en HTML-fil med en knapp, och en div. I main.js finns en animations-funktion, som flyttar på lådan när användaren klickar på knappen. 
Nu tar funktionen “transition” emot en callback-funktion som körs när animationen är klar. Ändra så att den istället returnerar ett promise som resolvar när animationen är klar.
Ändra så att text-ändringen på boxElem istället sker i en then(). 


7. Kedja then
Man kan “kedja” promises, genom att köra ett promise i en then. 
Gör så att du flyttar lådan först till en position, och sedan till en annan (t.ex. ändra ‘left’ först, och sen ‘top’), och när båda animatonerna är färdiga, så gör du text-ändringen.


8. Async / Await
Ändra så att istället för att göra två animationer och sen en textändring med then, så gör du det med async / await istället. 
