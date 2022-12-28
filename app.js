const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const helmet = require('helmet');

// SWAGGER
// const swaggerUi = require('swagger-ui-express');
// const apiDocumentation = require('./apidocs.json');
// app.use('/rtp-api-doc', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
// END SWAGGER

app.use(helmet());

// app.use(basicAuth({
//     users: {'admin' : 'superadmin'},
//     unauthorizedResponse: basicAuthResponse
// }))

// function basicAuthResponse(req) {
//     return req.auth
//     ? ('Credentials' + req.auth.user + ':' + req.auth.password + 'rejected')
//     : 'Unauthorized'
// }

const allgameRoutes = require('./routes/allgame');
const advantplayRoutes = require('./routes/advantplay');
const ambslotRoutes = require('./routes/ambslot');
const astrotechRoutes = require('./routes/astrotech');
const betsoftRoutes = require('./routes/betsoft');
const cq9Routes = require('./routes/cq9');
const crowdplayRoutes = require('./routes/crowdplay');
const fachaiRoutes = require('./routes/fachai');
const funkygamesRoutes = require('./routes/funkygames');
const habaneroRoutes = require('./routes/habanero');
const ionslotRoutes = require('./routes/ionslot');
const jdbRoutes = require('./routes/jdb');
const jiliRoutes = require('./routes/jili');
const jokerRoutes = require('./routes/joker');
const live22Routes = require('./routes/live22');
const microgamingRoutes = require('./routes/microgaming');
const onetouchRoutes = require('./routes/onetouch');
const pgsoftRoutes = require('./routes/pgsoft');
const playandgoRoutes = require('./routes/playandgo');
const playstarRoutes = require('./routes/playstar');
const playtechRoutes = require('./routes/playtech');
const prgmtcRoutes = require('./routes/prgmtc');
const reelkingdomRoutes = require('./routes/reelkingdom');
const slot88Routes = require('./routes/slot88');
const spadegamingRoutes = require('./routes/spadegaming');
const toptrendgamingRoutes = require('./routes/toptrendgaming');
const yggdrasilRoutes = require('./routes/yggdrasil');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/rtp/', allgameRoutes);
app.use('/rtp/', advantplayRoutes);
app.use('/rtp/', ambslotRoutes);
app.use('/rtp/', astrotechRoutes);
app.use('/rtp/', betsoftRoutes);
app.use('/rtp/', cq9Routes);
app.use('/rtp/', crowdplayRoutes);
app.use('/rtp/', fachaiRoutes);
app.use('/rtp/', funkygamesRoutes);
app.use('/rtp/', habaneroRoutes);
app.use('/rtp/', ionslotRoutes);
app.use('/rtp/', jdbRoutes);
app.use('/rtp/', jiliRoutes);
app.use('/rtp/', jokerRoutes);
app.use('/rtp/', live22Routes);
app.use('/rtp/', microgamingRoutes);
app.use('/rtp/', onetouchRoutes);
app.use('/rtp/', pgsoftRoutes);
app.use('/rtp/', playandgoRoutes);
app.use('/rtp/', playstarRoutes);
app.use('/rtp/', playtechRoutes);
app.use('/rtp/', prgmtcRoutes);
app.use('/rtp/', reelkingdomRoutes);
app.use('/rtp/', slot88Routes);
app.use('/rtp/', spadegamingRoutes);
app.use('/rtp/', toptrendgamingRoutes);
app.use('/rtp/', yggdrasilRoutes);



app.use((req, res, next) => {
    const error = new Error('Tidak Ditemukan');
    error.status = 404;
    next(error);
})

app.use((error, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;