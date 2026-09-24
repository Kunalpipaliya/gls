/**
 * Utility for direct download of Gomzi Lifesciences Catalog & Product Brochure
 */

export const BROCHURE_FILE_NAME = 'Gomzi_Lifesciences_Catalog_2026.pdf';
export const BROCHURE_FILE_URL = '/brochure/Gomzi_Lifesciences_Catalog_2026.pdf';

/**
 * Directly downloads the Gomzi Lifesciences Catalog PDF.
 * Uses native download link with fallback.
 */
export async function downloadBrochureDirectly() {
  try {
    // Primary approach: Direct link download
    const link = document.createElement('a');
    link.href = BROCHURE_FILE_URL;
    link.download = BROCHURE_FILE_NAME;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Error initiating brochure download:', error);
    // Secondary fallback: window.open
    window.open(BROCHURE_FILE_URL, '_blank');
    return false;
  }
}
