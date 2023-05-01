const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors({
  origin: '*',
}));

app.get('/', routes.index)
app.get('/parks', routes.parks);
app.get('/random', routes.random);
app.get('/recommended-airbnbs', routes.recommendedAirbnbs);
app.get('/most-biodiverse-airbnbs', routes.mostBiodiverseAirbnbs);
app.get('/popular-species', routes.popularSpecies);
app.get('/species-for-photographers', routes.speciesForPhotographers);

app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});

module.exports = app;
