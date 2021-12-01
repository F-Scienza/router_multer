const express = require('express');
const Contenedor = require('./contenedor');
const { Router } = express;

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const router = Router();
const productos = new Contenedor(__dirname + "/data/productos.json")

productos.init()

router.get("/", (req, res)=>{
    return res.json(productos.productList);
})
router.get("/:id", async (req, res) => {
    let id = req.params.id //leemos lo que pasó por url el usuario
	return res.json(await productos.getById(id));
});

router.post("/", (req, res) => {
	let obj = req.body;
	return res.json(productos.addProduct(obj));
});

router.put("/:id", (req, res) => {
	let obj = req.body;
	let id = req.params.id;
	return res.json(productos.update(id, obj));
});

app.use("/api/productos/", router)
app.use(express.static("./views"))
app.listen(3000)