import fs from 'fs';
import path from 'path';

import FormData from 'form-data';

const banner: Buffer = fs.readFileSync(path.join(__dirname, '../assets/banner.gif'));

const bannerMessage: FormData = new FormData();

bannerMessage.append('payload_json', JSON.stringify({ attachments: [{ id: 0, filename: 'banner.gif' }] }));
bannerMessage.append('files[0]', banner, {
  filename: 'banner.gif',
  contentType: 'image/gif',
});

export default bannerMessage;
