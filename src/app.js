import express from "express";
import morgan from 'morgan';
// rutas
import productsRoutes from './routes/products.routes'
// APP
const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json("welcome")
})

// Importación de rutas
app.use('/products' ,productsRoutes);

export default app;