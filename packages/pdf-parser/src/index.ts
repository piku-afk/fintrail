import { getDocument, type PDFDocumentProxy } from 'pdfjs-dist/legacy/build/pdf.mjs';

/**
 * Parses a PDF file and returns a PDFDocumentProxy object.
 * @async
 * @param {ArrayBuffer} pdfBuffer - The PDF data to parse.
 * @returns {Promise<PDFDocumentProxy>} A promise that resolves to the PDFDocumentProxy.
 * @throws {Error} If the PDF cannot be parsed or is invalid, the promise will be rejected with an error.
 */
export const parsePdf = async (pdfBuffer: ArrayBuffer): Promise<PDFDocumentProxy> => {
  return getDocument({ data: pdfBuffer }).promise;
};
