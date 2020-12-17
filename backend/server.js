import express from 'express';
import cors from 'cors';
import ParseToCSV from './service/ParseToCSV';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/', (request, response) => {
  const { json } = request.body;
  const csv = ParseToCSV(json);
  if (csv === 'error') {
    return response.status(400).json({ error: 'JSON is not valid!' });
  }
  return response.json(csv);
});

app.listen(3333, () => {
  console.log(' Server on 3333');
});
