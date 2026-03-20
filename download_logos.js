const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode >= 400) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const main = async () => {
  try {
    console.log('Downloading TNMGRMU...');
    await download('https://upload.wikimedia.org/wikipedia/en/5/5a/The_Tamilnadu_Dr._M.G.R._Medical_University_Logo.png', 'public/logos/tnmgrmu.png');
    
    console.log('Downloading INC...');
    await download('https://upload.wikimedia.org/wikipedia/en/c/ca/Indian_Nursing_Council_logo.png', 'public/logos/inc.png');
    
    console.log('Downloading Govt TN...');
    await download('https://upload.wikimedia.org/wikipedia/commons/8/81/Tamil_Nadu_Government_Logo.svg', 'public/logos/govt-tn.svg');
    
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
};

main();
