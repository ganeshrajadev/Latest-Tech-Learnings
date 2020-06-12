import express, { Request, Response, Application } from 'express';
import fs from 'fs';
const app: Application = express();

const data: string = fs.readFileSync('./data/super_hero.json').toString();

const SuperHeroData: any = JSON.parse(data);

app.get('/', function (req: Request, res: Response) {
  const randomSuperHero = SuperHeroData[Math.floor(Math.random() * SuperHeroData.length)];
  res.json(randomSuperHero);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
