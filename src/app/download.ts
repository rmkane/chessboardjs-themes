import client from 'https';
import fs from 'fs';
import { Color, Rank } from './constants';

type ThemeInfoProps = {
    name: string,
    urlTemplate: string;
    colorLookup: object;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
const downloadImage = (url: string, filepath: string):Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

      }
    });
  });
};

const themeTemplates:Array<ThemeInfoProps> = [ {
  name: 'chess24',
  urlTemplate: 'https://d16lfcqjkxdsjm.cloudfront.net/assets/887a54bd2119bf34a0759ec1b6a1967a/images/chess/themes/pieces/chess24/{color}/{rank}.png',
  colorLookup: {
    'w': 'w', 'b': 'b',
  },
}, {
  name: 'metro',
  urlTemplate: 'https://dev.windows.com/en-us/microsoft-edge/testdrive/demos/chess/images/pieces/{color}{rank}.png',
  colorLookup: {
    'w': 'w', 'b': 'b',
  },
}, {
  name: 'wikipedia',
  urlTemplate: 'https://en.wikipedia.org/wiki/File:Chess_{rank}{color}t45.svg',
  colorLookup: {
    'w': 'l', 'b': 'd',
  },
} ];

// TODO - Fix URLS
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
const downloadImages = ():void => {
  themeTemplates.forEach((theme:ThemeInfoProps) => {
    const { colorLookup, name, urlTemplate } = theme;

    if (name !== 'wikipedia') {
      for (const color in Color) {
        for (const rank in Rank) {
          const key = Object.values(Color)[Object.keys(Color).indexOf(color)];
          const c = Object.values(colorLookup)[Object.keys(colorLookup).indexOf(key)];
          const r = Object.values(Rank)[Object.keys(Rank).indexOf(rank)];
          const url = urlTemplate.replace(/{color}/, c).replace(/{rank}/, r);
          console.log(url);
        }
      }
    }
  });
};

export { ThemeInfoProps, downloadImages };
