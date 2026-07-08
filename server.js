const express = require('express'); 
const app = express(); 
const PORT = 3000; 
app.get('/', (req, res) => { 
res.send('Hello DevOps ! Ton serveur Express fonctionne.'); 
}); 
app.listen(PORT, () => { 
console.log(`Application démarrée sur http://localhost:${PORT}`); 
});
