const app= require('./server');
const PORT=process.env.PORT || 3000;

app.listen(PORT, () => console.log(`studiously serving silly sounds on port http://localhost:${PORT}`))

