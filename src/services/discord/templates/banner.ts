import fs from 'fs';

import FormData from 'form-data';

const banner: Buffer = fs.readFileSync('./assets/banner.gif');

export const bannerTemplate: FormData = new FormData();

bannerTemplate.append('payload_json', JSON.stringify({ attachments: [{ id: 0, filename: 'banner.gif' }] }));
bannerTemplate.append('files[0]', banner, {
  filename: 'banner.gif',
  contentType: 'image/gif',
});
