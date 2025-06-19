import { describe, it, expect } from 'vitest';
import { parsePdf } from './index.js';
import fs from 'node:fs/promises';
import path from 'node:path';

describe('parsePdf', () => {
  it('should successfully parse valid PDF data', async () => {
    const validPdfBuffer = await fs.readFile(path.join(__dirname, 'pdfs', 'valid.pdf'));

    const doc = await parsePdf(validPdfBuffer);
    expect(doc.numPages).toBe(1);
    const page = await doc.getPage(1);
    expect(page).toBeDefined();
  });

  it('should fail to parse invalid PDF data', async () => {
    const invalidBuffer = await fs.readFile(path.join(__dirname, 'pdfs', 'invalid.pdf'));

    await expect(parsePdf(invalidBuffer)).rejects.toThrow();
  });
});
