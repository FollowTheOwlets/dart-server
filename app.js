import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3080;
const app = express();

const persons = [
    {firstname: "Vasya", login: "20000234", password: "20000234", token: "qwer-12er-twe3-qw23"},
    {firstname: "Petya", login: "20000235", password: "20000235", token: "tyuu-16sr-wep0-xc65"},
    {firstname: "Vitya", login: "20000236", password: "20000236", token: "poq2-xmn3-804d-ddkr"},
];

let faces = {};
let deps = {};

await fetch("https://app.spbgasu.ru/ws/faces.php")
    .then(r => r.ok ? r : {})
    .then(r => r.json())
    .then(r => {
        faces = r.faces;
        deps = r.deps;
    });

console.log(deps);

console.log(faces);


app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    console.log(req.body);
    const [login, password] = [req.body.login, req.body.password];

    if (login === undefined || password === undefined) {
        res.sendStatus(403);
        return;
    }

    const person = persons.filter(p => p.login === login && p.password === password)[0];
    res.send({person});
});

app.get("/deps", (req, res) => {
    res.send(deps.map(
        e => {
            return {
                id: e.id,
                title: e.title,
                child:faces.filter(el => el.cathedra === e.id)
        }
        }
    ));
})

app.get("/faces", (req, res) => {
    res.send(faces.map(
        e => {
            return {
                id: e.id,
                fullname: e.fullname,
                shortname: e.shortname,
                img: e.img
            }
        }
    ));
})

app.get("/person", (req, res) => {
    const id = req.query.id;
    if (id === undefined) {
        res.sendStatus(403);
        return;
    }
    res.send(faces.filter(e => e.id == id)[0]);
})

app.listen(PORT, () => {
    console.log("server start on port:" + PORT);
});





