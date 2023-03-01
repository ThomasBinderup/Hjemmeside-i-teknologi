let express = require('express');
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser');
let cors = require('cors');
let connection = require('./database');
let mysql = require('mysql2');
let bcrypt = require('bcrypt');
let cookieParser = require('cookie-parser');
const multer = require('multer');

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'Hdu1swl8iek8',
    resave: true,
    saveUninitialized: false,
    cookie: { 
        maxAge: 3600000000,
        secure: false,
    }
}))

app.post('/opretBrugerInformation', (req, res) =>{

    let userCredentialsSQL = `INSERT INTO user_credentials (fornavn, efternavn, telefonnummer, email, adgangskode)
    VALUES (?, ?, ?, ?, ?);`
    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(req.body.confirmAdgangskode, salt);
    connection.query(userCredentialsSQL, [req.body.fornavn.toLowerCase(), req.body.efternavn.toLowerCase(), req.body.telefonnummer.toLowerCase(), req.body.email.toLowerCase(), hashedPassword], function(err, result){
        if (err) throw err;
    });
})

app.post('/loginInformation', (req, res) => {
    let loginSQL = `SELECT * FROM user_credentials WHERE email = ?`
    connection.query(loginSQL, [req.body.loginEmail], async (error, results) => {
        if (error) {
            console.log('an error occured');
            return res.status(500).send("Error accessing the database");
        }

        let hashedPassword = results[0].adgangskode;
        let comparePasswords = await bcrypt.compare(req.body.loginAdgangskode, hashedPassword);
        if (!comparePasswords) {
            return res.status(401).json({
                authorization: false
            })
        } else if (comparePasswords) {
            if (!req.session.user) {
            req.session.user = {}
            }
            req.session.user.authorization = true;
            req.session.save();
            let authorization = { authorization: true}
            
            // save id to session
            req.session.user.id = results[0].user_id;
            console.log(req.session);
            return res.status(200).send(JSON.stringify(authorization))
        }
        return
    })
})

let checkAuthorization = (req,res,next) => {
    let authorization;
    if (req.session.user && req.session.user.authorization) {
        authorization = { authorization: true}

    } else {
        authorization = { authorization: false}
    }
    req.authorization = authorization;
    next();
}

let getUserFromId = async (userId, req) => {
    return new Promise((resolve, reject) => {
    let getUserSQL = `SELECT fornavn, efternavn, email, telefonnummer FROM user_credentials WHERE user_id = ?`;
    connection.query(getUserSQL, [userId], async (err, result) => {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    })
})
}

let getUserAnnonceFromId = async (userId) => {
    return new Promise((resolve, reject) => {
        let annonceSQL = `SELECT * FROM opret_annonce_data WHERE user_id = ?`;
        connection.query(annonceSQL, [userId], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}



app.get('/profilePage', checkAuthorization, (req,res) => {

    if (req.session.user && req.session.user.authorization) {
        res.status(200).send(JSON.stringify(req.authorization));
    } else {
        res.status(200).send(JSON.stringify(req.authorization));
    }
});

app.get('/profileUserInformation', checkAuthorization, async (req,res) => {
    const result = await getUserFromId(req.session.user.id, req);
    const annonceData = await getUserAnnonceFromId(req.session.user.id);
    const response = {
        result: result,
        annonceData: annonceData
    }
    if (req.authorization) {
        res.send(JSON.stringify(response));
    } else {
        res.status(401).send();
    }
})

app.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) {
            console.log(err)
            }
            else {
                let authorization = { authorization: false}
            res.status(200).send(JSON.stringify(authorization));
            }
        })
    }
}) 

app.get('/opretBrugerBtn', checkAuthorization, (req,res) => {
    res.status(200).send(JSON.stringify(req.authorization));
})

app.get('/loginBtn', checkAuthorization, (req,res) => {
    res.status(200).send(JSON.stringify(req.authorization));
})

app.get('/opretDonationBtn', checkAuthorization, (req,res) => {
    res.status(200).send(JSON.stringify(req.authorization));
})

app.get('/donerElektronikBtn', checkAuthorization, (req,res) => {
    res.status(200).send(JSON.stringify(req.authorization));
})

const upload = multer({ dest: './uploads' });

app.post('/submitAnnonceBtn', checkAuthorization, upload.single('file'), (req,res) => {
    let submitAnnonceSQL = 'INSERT INTO opret_annonce_data(user_id, file_reference, titel, ekstra_information, postnummer, `by`, kategori, upload_date) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);'
    connection.query(submitAnnonceSQL, [req.session.user.id, req.file.path, req.body.titel, req.body.ekstraInformation, req.body.postnummer, req.body.by, req.body.kategori, req.body.uploadDate]);
    res.status(200).send(JSON.stringify(req.authorization));
})

app.post('/productPage', async (req, res) => {
    let annonceId = req.body.annonce_id;

    let annonceDataSQL = 'SELECT * FROM opret_annonce_data WHERE annonce_id = ?'
    connection.query(annonceDataSQL, [annonceId], async (err, result) => {
        if (err) {
            return res.status(401).send();
        } else {
            let annonceData = result;
            
            let userData = await getUserFromId(req.session.user.id);
            let data = {
                annonceData: annonceData,
                userData: userData
            }
            res.send(JSON.stringify(data));
        }
    });
})

app.listen(1000, () =>{
    console.log('listening on port 1000');
    connection.connect(function(err){
        if (err) throw err;
        console.log('Database connected!');
    })
})


