# @fintrail/pdf-parser

`@fintrail/pdf-parser` provides a simple, pre-configured interface for parsing PDF files using [pdfjs-dist](https://github.com/mozilla/pdf.js). It is designed for use across Fintrail projects, enabling easy extraction of PDF document data in both Node.js and browser environments.

## Usage

```typescript
import { parsePdf } from '@fintrail/pdf-parser';

const pdfBuffer = /* get your ArrayBuffer */;
const pdfDoc = await parsePdf(pdfBuffer);

console.log(await pdfDoc.getMetadata());
console.log(await pdfDoc.getPage(1));
```
