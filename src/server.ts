import app from './app';
import mongoose from 'mongoose';
import { DB_URL, PORT } from './app/config';

main()
  .then(() => console.log('DB connection established'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL as string);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
