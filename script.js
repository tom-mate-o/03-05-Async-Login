let getuserName = prompt("Type in your username"); // Abfrage des Benutzernamens (Tom)
let getUserPassword = prompt("Type in your password"); // Abfrage des Passworts (p4ssw0r5)

function loginUser(username, password) { // Funktion loginUser mit den Parametern username und password
    return new Promise((resolve,reject) => { // Rückgabe einer neuen Promise (Promise bedeutet, dass eine Funktion asynchron ausgeführt wird)
        setTimeout ( () => { // setTimeout Funktion mit einer Verzögerung von 1500ms
            if (username == "Tom" && password == "p4ssw0r5") { // Wenn username gleich "Tom" und password gleich "p4ssw0r5" ist, dann
                resolve ({userEmail : "kontakt@codingschule.de"}); // Rückgabe der Email-Adresse
            } else { // Ansonsten
                reject ("Login failed"); // Rückgabe der Fehlermeldung "Login failed"
            }
        }, 1500)
})
}

function getUserDetails(userEmail) { // Funktion getUserDetails mit dem Parameter userEmail
    return new Promise((resolve,reject) => { // Rückgabe einer neuen Promise
        setTimeout (() => { 
            resolve ({userPostcode : "40476"}); // Rückgabe der Postleitzahl
        }, 1500)
    })
}


async function getUser(){ // asynchrone Funktion getUser
    let user = await loginUser(getuserName, getUserPassword); // Variable user (wartet auf) den Wert der Funktion loginUser mit den Parametern getuserName und getUserPassword
    let profile = await getUserDetails(user.userEmail); // Variable profile (wartet auf) den Wert der Funktion getUserDetails mit dem Parameter user.userEmail
    console.log(user, profile);
}

getUser();