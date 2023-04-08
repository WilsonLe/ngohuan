import { z } from 'zod';
import legacyConfig from '../legacy-config';

const FooterColumn = z.object({ content: z.string() });
export const FooterData = z
  .object({
    columns: z.array(FooterColumn).default([]),
  })
  .default({
    columns: [
      { content: `<h1>${legacyConfig.footer.title}</h1>` },
      {
        content: `
<h3>${legacyConfig.footer.topLeft.title}</h3>
<p>${legacyConfig.footer.topLeft.text1}</p>
<p>${legacyConfig.footer.topLeft.text2}</p>
<p>${legacyConfig.footer.topLeft.text3}</p>
<p>${legacyConfig.footer.topLeft.text4}</p>
`,
      },
    ],
  });

export type FooterData = z.infer<typeof FooterData>;
