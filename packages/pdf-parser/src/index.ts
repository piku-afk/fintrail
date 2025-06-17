import { getDocument, type PDFDocumentProxy } from 'pdfjs-dist';

export const parsePdf = async (file: File): Promise<PDFDocumentProxy> => {
  const pdfFileBuffer = await file.arrayBuffer();

  return getDocument({ data: pdfFileBuffer }).promise;
};
