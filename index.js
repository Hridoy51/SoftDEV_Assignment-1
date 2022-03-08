const express = require("express");
const dishRouter = require('./routers/dishRoute');
const leaderRouter = require('./routers/leaderRoute');
const promoRouter = require('./routers/promoRoute');


const app = express();

app.use(express.json());
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promos', promoRouter);


app.all('/', (req, res) => {
    res.send("404 NOT FOUND");
})

app.listen(3000, () => {
    console.log("Listening on 3000.....");
});