/* Change image title on page: (not in use)

products = { 
    "1": { "id": "1", "title": "God kvalitet" },
    "2": { "id": "2", "title": "Hurtig" },
    "3": { "id": "3", "title": "Headset" }, 
    "4": { "id": "4", "title": "Skærm3" },
    "5": { "id": "5", "title": "Ny skærm" },
    "6": { "id": "6", "title": "Gammel CPU" },
    "7": { "id": "7", "title": "Ødelagt CPU" },
    "8": { "id": "8", "title": "CE stik" },
    "9": { "id": "9", "title": "Tastatur" }, 
    "10": { "id": "10", "title": "Gammel telefon" },
    "11": { "id": "11", "title": "Dårlig computer" },
    "12": { "id": "12", "title": "Pære" },
    "13": { "id": "13", "title": "Vægt" },
    "14": { "id": "14", "title": "Elektrisk tandbørste" },
    "15": { "id": "15", "title": "Computer mus" }, 
    "16": { "id": "16", "title": "USB stik" },
    "17": { "id": "17", "title": "Telefon i dårlig stand" },
    "18": { "id": "18", "title": "Gammel CPU" },
    "19": { "id": "19", "title": "Skærm" },
    "20": { "id": "20", "title": "Ny skærm" },
    "21": { "id": "21", "title": "Headset" }, 
    "22": { "id": "22", "title": "Skærm3" },
    "23": { "id": "23", "title": "Ny skærm21" },
    "24": { "id": "24", "title": "Gammel CPU" },
    "25": { "id": "25", "title": "Ny skærm" },
    "26": { "id": "26", "title": "Headset" }, 
    "27": { "id": "27", "title": "Skærm3" },
    "28": { "id": "28", "title": "Ny skærm21" },
    "29": { "id": "29", "title": "Skærm" },
    "30": { "id": "30", "title": "Ny skærm" },
    "31": { "id": "31", "title": "Headset" }, 
    "32": { "id": "32", "title": "Skærm3" },
    "33": { "id": "33", "title": "Ny skærm" },
    "34": { "id": "34", "title": "Gammel CPU" },
    "35": { "id": "35", "title": "Ødelagt CPU" },
    "36": { "id": "36", "title": "CE stik" },
    "37": { "id": "37", "title": "Tastatur" }, 
    "38": { "id": "38", "title": "Gammel telefon" },
    "39": { "id": "39", "title": "Dårlig computer" },
    "40": { "id": "40", "title": "Pære" },
    "41": { "id": "41", "title": "Vægt" },
    "42": { "id": "42", "title": "Elektrisk tandbørste" },
    "43": { "id": "43", "title": "Computer mus" }, 
    "44": { "id": "44", "title": "USB stik" },
    "45": { "id": "45", "title": "Telefon i dårlig stand" },
    "46": { "id": "46", "title": "Gammel CPU" },
    "47": { "id": "47", "title": "Skærm" },
    "48": { "id": "48", "title": "Ny skærm" },
    "49": { "id": "49", "title": "Headset" }, 
    "50": { "id": "50", "title": "Skærm3" },
    "51": { "id": "51", "title": "Ny skærm21" },
    "52": { "id": "52", "title": "Gammel CPU" },
    "53": { "id": "53", "title": "Ny skærm" },
    "54": { "id": "54", "title": "Headset" }, 
    "55": { "id": "55", "title": "Skærm3" },
    "56": { "id": "56", "title": "Ny skærm21" }
}

let pageCounterInput = document.getElementById('pageCounterInput');

let storeProductsForDisplay = [];
let i = 0;
function selectTitleToDisplay() {
while (i < Object.keys(products).length) {
    let randomNumberProducts = Math.floor(Math.random() * Object.keys(products).length) + 1;

    if (storeProductsForDisplay.some((item) => {
        return item === products[randomNumberProducts]
    })) {
        // do nothing
    } else {
        storeProductsForDisplay.push(products[randomNumberProducts]);
        i++;
    }
    
}  
return storeProductsForDisplay;
}
selectTitleToDisplay();

let a = pageCounterInput.value;
let b = 0;
function updatePage() {
    a = pageCounterInput.value;

    if (a == '1') {
        b = -28
    }

    let d = -1;

    console.log(i)
    if (pageCounterInput.value === a) {   
        for (let i = (a*28+b); i < (a*28+b)+28 ; i++) {
            d += 1;

            if (d == 27) {
                d = 0;
            } 
            document.getElementById(`title${d}`).innerHTML = storeProductsForDisplay[i].title;
        }
        
    }
}

updatePage()
*/

let mainContent = document.getElementsByClassName('mainContent')
let kategorierBtn = document.getElementById('kategorierBtn');
let dropDownMenuKategori = document.getElementById('dropDownMenuKategori'); 

let booleanValue = false;
kategorierBtn.addEventListener('click', () => {
    if (!booleanValue) {
        dropDownMenuKategori.style.display = 'inline'
        booleanValue = true;
    } else if (booleanValue) {
        dropDownMenuKategori.style.display = 'none'
        booleanValue = false;
    }
})

let closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () =>{
    dropDownMenuKategori.style.display = 'none';
    booleanValue = false;
})

pageCounterInput.addEventListener('input', ()=> {
    try {
        let val = `${pageCounterInput.value}`.toString()
        let last = val[val.length - 1]
        let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        if (!nums.includes(last.toString())) {
            pageCounterInput.value = val.slice(0, -1)
        }
    } catch (e) {}
})
let bodyUrl = 'https://pixabay.com/api/?';
let apiKey = 'key=33191128-7a0f2aa1e4dcb1f48d4185c83';
let searchTerm = '&q=electronics';
let imageType = '&image_type=photo';
let perPage = '&per_page=112'

let endPoint = bodyUrl+apiKey+searchTerm+imageType+perPage;

let storeJsonData;

function displayImages() {

}

function removePreviousImages() {

}

let response = fetch(endPoint).then(resolvedValue => {
    return resolvedValue.json();
}).then(response => {
    let storeImageData = [];
    for (let i = 0; i < response.hits.length; i++) {
        storeImageData.push(response.hits[i].webformatURL);
    }

    for (let i = storeImageData.length - 1; i > 0; i--) {
        let swapIndex = Math.floor(Math.random() * (i+1));
        let currentIndex = storeImageData[i];
        storeImageData[i] = storeImageData[swapIndex];
        storeImageData[swapIndex] = storeImageData[i];
    }

    let helperVariable1;
    

    displayImages = function() {
    if (pageCounterInput.value == '1') {
        helperVariable1 = -28
    }
    let assignNumberToImage = 0;
    for (let i = pageCounterInput.value*28+helperVariable1; i < 28*pageCounterInput.value; i++) {

        let img = document.createElement('img');
        img.setAttribute("id", `image${assignNumberToImage}`);

        img.setAttribute("src", `${storeImageData[i]}`);
        if (assignNumberToImage == 27) {
            assignNumberToImage == 0;
        }

        let firstChild = document.getElementsByClassName('imageContainer')[assignNumberToImage].firstChild;
        document.getElementsByClassName('imageContainer')[assignNumberToImage].insertBefore(img, firstChild);

        assignNumberToImage++;
    }
}

displayImages()

let imageElement
    removePreviousImages = function() {
        for (let i = 0; i < 28; i++) {
            document.getElementById(`image${i}`).remove()
            
        }
    }

})

let rightArrowBtn = document.getElementById('rightArrowBtn');
rightArrowBtn.addEventListener('click', () => {
    let convertToNumber = pageCounterInput.value;
    pageCounterInput.value = Number(convertToNumber) + 1
    window.scrollTo(0, 0);
    console.log(document.getElementById('pageCounterInput').value)
    removePreviousImages();
    displayImages();
    
})

let leftArrowBtn = document.getElementById('leftArrowBtn');


leftArrowBtn.addEventListener('click', () => {
    let convertToNumber = pageCounterInput.value;
    pageCounterInput.value = Number(convertToNumber) + -1
    window.scrollTo(0, 0);
    removePreviousImages();
    displayImages();
})

let topBtns = document.getElementsByClassName('topBtn1');

    for (let i = 0; i < topBtns.length; i++) {
    topBtns[i].addEventListener('click', (event) => {
        document.getElementById('headerForImages').innerHTML = event.target.innerHTML;
        hideDonerElektronikPage();
        hideLoginPage();
        hideOpretBrugerPage();
        hideOpretDonationPage();
        hideProfilePage();
        showMainPage();
        document.getElementById('footer').style.top = '1800px';
    })
    }

document.getElementById('logoBtn').addEventListener('click', () => {
    document.getElementById('headerForImages').innerHTML = 'Gratis tilfældigt elektronik'
})

// change navigation colors
let arrayTopBtns = document.getElementsByClassName('topBoxBtn');

function removeWhiteBtns(event) {
    for (let i = 0; i < arrayTopBtns.length; i++) {
    arrayTopBtns[i].style.color = 'black';
    profileBtn.style.boxShadow = '0px 0px 2px 2px black';
    }
    event.target.style.color = 'white';
    
    profileBtn.style.color = 'black';
}

function whiteProfileBtn(authorization) {
    if (authorization) {
        for(let i = 0; i < arrayTopBtns.length; i++) {
        arrayTopBtns[i].style.color = 'black'
        }
        profileBtn.style.boxShadow = '0px 0px 2px 2px white';
    }
}

let changeNavigationColors = () => {
    let previousClicked;
    
    for (let i = 0; i < arrayTopBtns.length; i++) {
        arrayTopBtns[i].onclick = () => {
            if (previousClicked) {
                previousClicked.style.color = ''
            }
            arrayTopBtns[i].style.color = 'white';
            profileBtn.style.boxShadow = '0px 0px 2px 2px black';
            previousClicked = arrayTopBtns[i];
            showElementFunctions();
            loginBtn.style.color = 'black';
        }
    }

}

changeNavigationColors();

// opret bruger page and functions
let opretBrugerPage = document.getElementById('opretBrugerPage')
let opretBrugerBtn = document.getElementById('opretBrugerBtn')

let showMainPage = () => {
    mainContent[0].style.display = 'initial';
    mainContent[1].style.display = 'initial';
    mainContent[2].style.display = 'initial';
}

let hideMainPage = () => {
    mainContent[0].style.display = 'none';
    mainContent[1].style.display = 'none';
    mainContent[2].style.display = 'none';
}

let loginPage = document.getElementById('loginPage');
let loginBtn = document.getElementById('log-inBtn');

let showLoginPage = () => {
    loginPage.style.display = 'inline-block';
}

let hideLoginPage = () => {
    loginPage.style.display = 'none';
}

let showOpretBrugerPage = () => {
    opretBrugerPage.style.display = 'inline-block';
}

let hideOpretBrugerPage = () => {
    opretBrugerPage.style.display = 'none';
}

let opretDonationPage = document.getElementById('opretDonationPage');

let hideOpretDonationPage = () => {
    opretDonationPage.style.display = 'none';
}

let showOpretAnnoncePage = () => {
    opretDonationPage.style.display = 'initial';
}

let donerElektronikPage = document.getElementById('donerElektronikPage');

let showDonerElektronikPage = () => {
    donerElektronikPage.style.display = 'initial';
}

let hideDonerElektronikPage = () => {
    donerElektronikPage.style.display = 'none';
}

let profilePage = document.getElementById('profilePage');

let hideProfilePage = () => {
    profilePage.style.display = 'none';
}

let showProfilePage = () => {
    profilePage.style.display = 'initial';
}

opretBrugerBtn.addEventListener('click', (event) => {

    fetch('http://localhost:1000/opretBrugerBtn', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.authorization) {
            whiteProfileBtn(data.authorization);
            hideMainPage();
            hideOpretBrugerPage();
            hideLoginPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            showProfilePage();
        } else if (!data.authorization) {
            hideMainPage();
            hideLoginPage();
            showOpretBrugerPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            removeWhiteBtns(event);
            document.getElementById('footer').style.top = '664px';
        }
    })
})

// login page

loginBtn.addEventListener('click', (event) => {
    fetch('http://localhost:1000/loginBtn', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.authorization) {
            whiteProfileBtn(data.authorization);
            hideMainPage();
            hideOpretBrugerPage();
            hideLoginPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            showProfilePage();
            
        } else if (!data.authorization) {
            hideMainPage();
            hideOpretBrugerPage();
            showLoginPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            removeWhiteBtns(event);
            removeElementFunctions();
            document.getElementById('footer').style.top = '664px';
            
        }
    })
})

// donation page

let chooseFile = document.getElementById('chooseFile');
let fileText = document.getElementById('fileText');

fileText.style.fontWeight = 'bold'

if (chooseFile.files.length === 0) {
    fileText.innerHTML = `Ingen billeder uploaded` + `<span id="noUpload1" class="material-symbols-outlined closeAndVerifySymbol">
    cancel
    </span>`
}

chooseFile.addEventListener('change', () => {
if (chooseFile.files.length === 0) {
    fileText.innerHTML = 'Ingen billeder uploaded' + `<span id="noUpload2" class="material-symbols-outlined closeAndVerifySymbol">
    cancel
    </span>`
    
} else {
    fileText.innerHTML = 'Billede er uploadet' + `<span id="uploaded" class="material-symbols-outlined closeAndVerifySymbol">
    verified
    </span>`
}
})

let tilføjStedText = document.getElementById('tilføjStedText');
tilføjStedText.style.fontWeight = 'bold';

let tilføjStedInput = document.getElementById('tilføjStedInput');


if (tilføjStedInput.files.length === 0) {
    tilføjStedText.innerHTML = `Ingen billeder uploaded` + `<span id="noUpload1" class="material-symbols-outlined closeAndVerifySymbol">
    cancel
    </span>`
}

tilføjStedInput.addEventListener('change', () => {
    if (tilføjStedInput.files.length === 0) {
        tilføjStedText.innerHTML = 'Ingen billeder uploaded' + `<span id="noUpload2" class="material-symbols-outlined closeAndVerifySymbol">
        cancel
        </span>`
        
        
    } else {
        tilføjStedText.innerHTML = 'Billede er uploadet' + `<span id="uploaded" class="material-symbols-outlined closeAndVerifySymbol">
        verified
        </span>`
    }
})

// opret donation page
let opretDonationBtn = document.getElementById('opretDonationBtn')
opretDonationBtn.addEventListener('click', (event) => {

    fetch('http://localhost:1000/opretDonationBtn', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.authorization) {
            showOpretAnnoncePage();
            hideMainPage();
            hideLoginPage();
            hideOpretBrugerPage();
            hideDonerElektronikPage();
            hideProfilePage();
            removeWhiteBtns(event);
            removeElementFunctions();
            document.getElementById('footer').style.top = '750px';
        } else if (!data.authorization) {
            hideMainPage();
            hideOpretBrugerPage();
            showLoginPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            removeWhiteBtns(event);
            document.getElementById('footer').style.top = '664px';
            loginBtn.style.color = 'white';
            opretDonationBtn.style.color = 'black';
        }
})

})
// doner elektronik page
let donerElektronikBtn = document.getElementById('doner');
donerElektronikBtn.addEventListener('click', (event) => {
    fetch('http://localhost:1000/donerElektronikBtn', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.authorization) {
            hideMainPage();
            hideLoginPage();
            hideOpretBrugerPage();
            showDonerElektronikPage();
            hideOpretDonationPage();
            hideProfilePage();
            removeWhiteBtns(event);
            document.getElementById('footer').style.top = '664px';
        } else if (!data.authorization) {
            hideMainPage();
            hideOpretBrugerPage();
            showLoginPage();
            hideOpretDonationPage();
            hideDonerElektronikPage();
            removeWhiteBtns(event);
            loginBtn.style.color = 'white';
            donerElektronikBtn.style.color = 'black';
            document.getElementById('footer').style.top = '664px';
        }
})

})

// remove ads function
let topBtnsArr = document.getElementsByClassName('topBtn');

let removeElementFunctions = () => {
    console.log('hello from removeElementFunctions')
    let backgroundImageHelper = document.getElementById('backgroundImageHelper');
    backgroundImageHelper.style.display = 'initial';
    for (let a = 0; a < topBtnsArr.length; a++) {
        if (topBtnsArr[a].style.color == 'white') {
            for(let i = 4; i < 10; i++) {
                let element = document.getElementById(`reklame${i}`);
                element.style.display = 'none';
            }
            for (let b = 2; b < 7; b++) {
                let backgroundImages = document.getElementById(`backgroundImage${b}`);
                backgroundImages.style.display = 'none';
            }
        }
    }
}

let showElementFunctions = () => {
    for (let a = 0; a < topBtns.length; a++) {
        if (topBtns[a].style.color == 'white') {
            for(let i = 4; i < 10; i++) {
                let element = document.getElementById(`reklame${i}`);
                element.style = 'display: flex; justify-content: center; align-items: center;';
                for (let b = 2; b < 7; b++) {
                    let backgroundImages = document.getElementById(`backgroundImage${b}`);
                    backgroundImages.style.display = 'initial';
                }
                document.getElementById('backgroundImageHelper').style.display = 'none';
            }
        }
    }
}
console.log(topBtnsArr);

for (let i = 0; i < topBtnsArr.length; i++) {
topBtnsArr[i].addEventListener('click', removeElementFunctions)
}

// HTTP request:

// opret bruger page
let submitOpretBrugerBtn = document.getElementById('submitOpretBrugerBtn');
submitOpretBrugerBtn.addEventListener('click', () => {
    let opretInputArray = document.getElementsByClassName('opretInput');
    
    let fornavn = document.getElementById('fornavnInput');
    let regexOnlyText = new RegExp('^[a-zA-Z]+$');

    if (fornavn.value.length < 2 || !regexOnlyText.test(fornavn.value)) {
        let fornavnLabel = document.getElementById('fornavnLabel');
        fornavnLabel.innerHTML += ' ugyldigt';
        fornavnLabel.style.color = 'red';
        return
    }

    let efternavnInput = document.getElementById('efternavnInput');

    if (efternavnInput.value.length < 2 || !regexOnlyText.test(efternavnInput.value)) {
        let efternavnLabel = document.getElementById('efternavnLabel');
        efternavnLabel.innerHTML += ' ugyldigt';
        efternavnLabel.style.color = 'red';
        return
    }

    let telefonnummerInput = document.getElementById('telefonnummerInput');
    let regexOnlyNumbers = new RegExp('^[0-9]+$');

    if (telefonnummerInput.value.length < 8 || 8 < telefonnummerInput.value.length || !regexOnlyNumbers.test(telefonnummerInput.value)) {
        let telefonnummerLabel = document.getElementById('telefonnummerLabel');
        telefonnummerLabel.innerHTML += ' ugyldigt';
        telefonnummerLabel.style.color = 'red';
        return
    }

    let email = opretInputArray[3].value.toLowerCase();
    let emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
    if(!emailRegex.test(email)) {
        let emailLabel = document.getElementById('emailLabel');
        emailLabel.innerHTML += ' ugyldig';
        emailLabel.style.color = 'red';
        return
    }

    let nyAdgangskodeInput = document.getElementById('nyAdgangskodeInput');
    
    if (nyAdgangskodeInput.value.length < 7 || nyAdgangskodeInput.value.length > 40) {
        let nyAdgangskodeLabel = document.getElementById('nyAdgangskodeLabel');
        nyAdgangskodeLabel.innerHTML += ' ugyldig';
        nyAdgangskodeLabel.style.color = 'red';
        return
    }

    let confirmAdgangskodeInput = document.getElementById('confirmAdgangskodeInput');

    if (confirmAdgangskodeInput.value !== nyAdgangskodeInput.value) {
        let confirmAdgangskodeLabel = document.getElementById('confirmAdgangskodeLabel');
        confirmAdgangskodeLabel.innerHTML += ' ugyldig';
        confirmAdgangskodeLabel.style.color = 'red';
        return
    }
    

    let JSObject = {
        fornavn: opretInputArray[0].value,
        efternavn: opretInputArray[1].value,
        telefonnummer: opretInputArray[2].value,
        email: opretInputArray[3].value,
        nyAdgangskode: opretInputArray[4].value,
        confirmAdgangskode: opretInputArray[5].value
    }

    fetch('http://localhost:1000/opretBrugerInformation', {
        method: 'POST',
        body: JSON.stringify(JSObject),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
})

// login page:
let submitLoginPage = document.getElementById('submitLoginPage');

let loginEmail = document.getElementById('loginEmail');
let loginAdgangskode = document.getElementById('loginAdgangskode');

submitLoginPage.addEventListener('click', () => {
    
    let loginData = {
        loginEmail: loginEmail.value.toLowerCase(),
        loginAdgangskode: loginAdgangskode.value
    }

fetch('http://localhost:1000/loginInformation', {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include'
})
.then((response) => {
    return response.json();
    })
.then((data) =>{
    if (data.authorization) {
        location.reload();
    } else {

    }
})
.catch((err) => {
    console.log(err);
})
}) 

// profileBtn

let profileBtn = document.getElementById('profileBtn');
profileBtn.addEventListener('click', (event) => {
    
    fetch('http://localhost:1000/profilePage', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
       if (data.authorization) {
        hideMainPage();
        hideLoginPage();
        hideOpretBrugerPage();
        hideOpretDonationPage();
        hideDonerElektronikPage();
        showProfilePage();
        removeWhiteBtns(event);
        
        profileBtn.style.boxShadow = '0px 0px 2px 2px white';
       } else if (!data.authorization) {
        hideMainPage();
        showLoginPage();
        hideOpretBrugerPage();
        hideOpretDonationPage();
        hideDonerElektronikPage();
        removeWhiteBtns(event);
        removeElementFunctions();
        for(let i = 4; i < 10; i++) {
            let element = document.getElementById(`reklame${i}`);
            element.style.display = 'none';
        }
        for (let b = 2; b < 7; b++) {
            let backgroundImages = document.getElementById(`backgroundImage${b}`);
            backgroundImages.style.display = 'none';
        }
        document.getElementById('footer').style.top = '664px';
        
        loginBtn.style.color = 'white';
       }
    }) 
})

let capitalizeWord = (word) => {
    let char = word.charAt(0).toUpperCase();
    word = word.slice(1);
    char += word;
    return char;
}

let requestMade = false;

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'style') {
        if (document.getElementsByClassName('opslag')) {
            opslagGrid.innerHTML = '';
        }
        if(profileBtn.style.boxShadow == 'white 0px 0px 2px 2px' && !requestMade) {
            requestMade = true;
            fetch('http://localhost:1000/profileUserInformation', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
            credentials: 'include'
         })
         .then((response) =>{
            return response.json();
         })
         .then((data) => {
            console.log(data);
            let fornavn = data.result[0].fornavn;
            fornavn = capitalizeWord(fornavn);
            let efternavn = data.result[0].efternavn;
            efternavn = capitalizeWord(efternavn);
            let email = data.result[0].email;
            email = capitalizeWord(email);
            let telefonnummer = data.result[0].telefonnummer;
            document.getElementById('profileName').innerHTML = fornavn + ' ' + efternavn;
            document.getElementById('profileEmail').innerHTML = email; 
            document.getElementById('profileTelefonnummer').innerHTML = telefonnummer;
            document.getElementById('profileHeader').innerHTML = `Welcome to your profile, ${fornavn}!`;
            let opslagGrid = document.getElementById('opslagGrid');

            for (let i = data.annonceData.length -1; i >= 0; i--) {
                let opslag = `<div class="opslag" ><img src="${data.annonceData[i].file_reference}" class="opslagImg" data-id="${data.annonceData[i].annonce_id}" >
                <p class="opslagText">${data.annonceData[i].titel}</p>
                <button class="opslagBtn1">Fjern opslag</button>
                <button class="opslagBtn2">Se opslag</button>
            </div>`
                opslagGrid.innerHTML += opslag;

                let opslagImgArray = document.getElementsByClassName('opslagImg');


                if (data.annonceData.length <= 3) {
                    document.getElementById('footer').style.top = '664px';
                    let reklamerClass = document.getElementsByClassName('reklame');
                    for (let i = 3; i < 9; i++) {
                        reklamerClass[i].style.display = 'none';
                    }
                    document.getElementById('reklame1').style.display = 'none';

                } else if (data.annonceData.length <= 6 && data.annonceData.length > 3) {
                    document.getElementById('footer').style.top = '926px';
                    let reklamerClass = document.getElementsByClassName('reklame');
                    for (let i = 3; i < 9; i++) {
                        reklamerClass[i].style.display = 'none';
                    }
                    for (let b = 4; b < 7; b++) {
                        let backgroundImages = document.getElementById(`backgroundImage${b}`);
                        backgroundImages.style.display = 'none';
                    }

                } else if (data.annonceData.length <= 9 && data.annonceData > 6) {
                    document.getElementById('footer').style.top = '1188px';
                    /*262 */
                    let reklamerClass = document.getElementsByClassName('reklame');
                    for (let i = 6; i < 9; i++) {
                        reklamerClass[i].style.display = 'none';
                    }
                } else if (data.annonceData.length <= 12 && data.annonceData > 9) {
                    document.getElementById('footer').style.top = '1450px';
                } else if (data.annonceData.length <= 15 && data.annonceData > 12) {
                    document.getElementById('footer').style.top = '1712px';
                }

for (let i = 0; i < opslagImgArray.length; i++) {
    opslagImgArray[i].addEventListener('click', (event) => {
        let annonce_id = event.target.dataset.id;

        let data = { annonce_id: annonce_id }
        fetch('http://localhost:1000/productPage', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let titel = capitalizeWord(data.annonceData[0].titel);
            let kategori = capitalizeWord(data.annonceData[0].kategori);
            let by = capitalizeWord(data.annonceData[0].by);

            let fornavn = capitalizeWord(data.userData[0].fornavn);
            let efternavn = capitalizeWord(data.userData[0].efternavn);
            let email = capitalizeWord(data.userData[0].email);

            let product = `<div id="backwardBtn"><span class="material-symbols-outlined">
            undo
            </span></div>
            <img id="productPageImage" src="${data.annonceData[0].file_reference}">
            <div id="productPageInformation">
                <div id="productPageTitel">Titel</div><div id="productPageInformationText">Information</div><span id="productPageInformationActualText">${data.annonceData[0].ekstra_information}</span>
                <br><span id="productPageActualTitel">${titel}</span>
                <br>
                <div id="productPageKategori">Kategori</div><br><span id="productPageActualKategori">${kategori}</span>
                <br>
                <div id="productPagePostnummerBy">Postnummer, By </div><br><span id="productPageActualPostnummerBy">${data.annonceData[0].postnummer}, ${by}</span><br>
                <p id="productPageRedigerOpslag">Rediger opslag</p>
                <div id="kontaktDonator">
                <div id="productPageKontaktInformation">Kontakt donator</div>
                <div id="productName">${fornavn} ${efternavn}</div>
                <div id="productEmail">${email}</div>
                <div id="productTelefonnummer">${data.userData[0].telefonnummer}</div>
                </div>
            </div>`
            let productPage = document.getElementById('productPage');
            productPage.innerHTML = '';
            productPage.innerHTML += product;
            productPage.style.display = 'initial';
            profilePage.style.display = 'none';

            document.getElementById('backwardBtn').addEventListener('click', () => {
                profilePage.style.display = 'initial';
                productPage.style.display = 'none';
            })
            console.log(data);
        })
        .catch((err) => {
            console.log(err)
        })
    })
}
            }
            requestMade = false;
         })
         .catch((err) => {
            console.log(err);
         })
        }
      }
    }
)
})


const config = { attributes: true, attributeFilter: ['style'] };
observer.observe(profileBtn, config);


let logoBtn = document.getElementById('logoBtn').addEventListener('click', () => {
    location.reload();
})

let genreInput = document.getElementById('genreInput');
let andetOptionInput = document.getElementById('andetOptionInput')
genreInput.addEventListener('change', () => {
    if (genreInput.value == 'Andet') {
        andetOptionInput.style.display = 'initial';
    }

    if (genreInput.value !== 'Andet') {
        andetOptionInput.style.display = 'none';
    }
})

let profileLogoutBtn = document.getElementById('profileLogoutBtn');
profileLogoutBtn.addEventListener('click', () => {
    fetch('http://localhost:1000/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        if (!data.authorization) {
            location.reload();
        }  
    }).catch('error occured while logging out')
})

let submitAnnonceBtn = document.getElementById('submitAnnonceBtn');
submitAnnonceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    //inputs
    let titelInput = document.getElementById('titelInput');
    let chooseFile1 = document.getElementById('chooseFile');
    let ekstraInformationInput = document.getElementById('extraInformationInput');
    let lokationInput = document.getElementById('lokationInput');

    //labels
    let titelLabel = document.getElementById('titelLabel');
    let ekstraInformationLabel = document.getElementById('ekstraInformationLabel');
    let lokationLabel = document.getElementById('lokationLabel');
    let genreLabel = document.getElementById('genreLabel');

    titelLabel.style.color = '';
    titelLabel.innerHTML = 'Titel';
    ekstraInformationLabel.style.color = '';
    ekstraInformationLabel.innerHTML = 'Ekstra information';
    lokationLabel.style.color = '';
    lokationLabel.innerHTML = 'Hvor kan det hentes?';

    let titelRegex = new RegExp('^[a-zA-Z0-9æøå ,.ÆØÅ]{2,30}$')
    if (!titelRegex.test(titelInput.value)) {
        titelLabel.innerHTML += ' ugyldig';
        titelLabel.style.color = 'red';
        return
    }

    let imageRegex = new RegExp('^[ÆØÅæøåa-zA-Z0-9_-]+\.(jpg|jpeg|gif|JPG|JPEG|GIF|png|PNG|BMP|bmp|WebP|webp|SVG|svg|SVG|svg)$');
    if (!imageRegex.test(chooseFile1.files[0].name)) {
        fileText.innerHTML = `Ugyldigt billede fil` + `<span id="noUpload3" class="material-symbols-outlined closeAndVerifySymbol">
    cancel
    </span>`
    }

    let ekstraInformationRegExp = new RegExp('^[a-zA-Z0-9æøå -:,.ÆØÅ]{5,280}$');
    if (!ekstraInformationRegExp.test(ekstraInformationInput.value)) {
        ekstraInformationLabel.innerHTML += ' ugyldig';
        ekstraInformationLabel.style.color = 'red';
        return
    }

    let postnummerByRegex = new RegExp(`^[0-9]{4}$`);

    let lokationInput1 = document.getElementById('lokationInput1');
    let postnummerByRegex1 = new RegExp('^[a-zA-Z0-9æøå ,.ÆØÅ]{2,30}$');

    if (!postnummerByRegex.test(lokationInput.value) || !postnummerByRegex1.test(lokationInput1.value)) {
        lokationLabel.innerHTML += ' ugyldig';
        lokationLabel.style.color = 'red';
        return
    }

    let andetInputRegex = new RegExp('^[a-zA-Z0-9æøå ÆØÅ]{4,25}');
    if (!andetInputRegex.test(andetOptionInput.value) && genreInput.value == 'Andet') {
        genreLabel.innerHTML += ' ugyldig';
        genreLabel.style.color = 'red';
        return
    }
    
    let file = chooseFile1.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('titel', titelInput.value);
    let date = Date.now();
    formData.append('ekstraInformation', ekstraInformationInput.value);
    formData.append('postnummer', lokationInput.value);
    formData.append('by', lokationInput1.value);
    if (genreInput.value == 'Andet') {
        formData.append('kategori', andetOptionInput.value); 
    } else {
        formData.append('kategori', genreInput.value);
    }
    formData.append('uploadDate', date);
    
    fetch('http://localhost:1000/submitAnnonceBtn', {
        method: 'POST',
        body: formData,
        credentials: 'include'
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
})  

/*headers: {
        'Content-Type': 'multipart/form-data'
        }, */