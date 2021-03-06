const express = require('express');

const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//connecting mongoose
connectDB();
//body-parser


/*IMPORTANT*/
/* Run   npm run dev in  terminal to concurently start frontend and backend 

or Run npm start in terminal to start backend 
then cd client then run npm start to run frontend


*/


app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/auth'));

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on PORT ${port}`);
});
 