/*
Rename the first form 'cityWhile'.
Use two while loops. 
Get as many cities from the user as they want - stop getting cities when the user says to stop. 
The user can use any case mixture in their input (eg. SAN FranciSCO)
Cities go into an array named 'cities'.  
When city input is done, use a while loop that outputs to the console each city on its' own line in all lower case, using a template literal.
The output must be in this format:

eg. say the user inputs "OmaHa" and "St. LOUIS"
The output would look like this:

omaha
st. louis
*/

let cityName = ""

let cityArray = []

while (cityName !== null){
  //while cityName is not null, run loop
  cityName = prompt("Type a city name.")
  cityName = cityName.toLowerCase()
  cityArray.push(cityName)
  console.log(`${cityArray}`)
  break
  cityName = prompt("Type a city name.")
}
