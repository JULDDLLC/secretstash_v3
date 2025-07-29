import jsPDF from 'jspdf';
import { Secret } from '@/types/secret';

export const exportToPDF = (secrets: Secret[]) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(168, 85, 247);
  doc.text('🔐 SecretStash Export', 20, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);
  doc.text(`Total Secrets: ${secrets.length}`, 20, 50);
  
  // Line separator
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 55, 190, 55);
  
  let yPosition = 70;
  
  secrets.forEach((secret, index) => {
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }
    
    // Secret header
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. ${secret.name}`, 20, yPosition);
    
    yPosition += 10;
    
    // Category
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Category: ${secret.category.replace('-', ' ').toUpperCase()}`, 25, yPosition);
    
    yPosition += 8;
    
    // Description
    if (secret.description) {
      doc.text(`Description: ${secret.description}`, 25, yPosition);
      yPosition += 8;
    }
    
    // Value (truncated for security)
    const truncatedValue = secret.value.length > 20 
      ? secret.value.substring(0, 20) + '...' 
      : secret.value;
    doc.text(`Value: ${truncatedValue}`, 25, yPosition);
    
    yPosition += 8;
    
    // Tags
    if (secret.tags.length > 0) {
      doc.text(`Tags: ${secret.tags.join(', ')}`, 25, yPosition);
      yPosition += 8;
    }
    
    // Created date
    doc.text(`Created: ${secret.createdAt.toLocaleDateString()}`, 25, yPosition);
    
    yPosition += 15;
    
    // Separator line
    doc.setDrawColor(230, 230, 230);
    doc.line(20, yPosition - 5, 190, yPosition - 5);
  });
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`SecretStash by JULDD LLC - Page ${i} of ${pageCount}`, 20, 285);
  }
  
  // Save the PDF
  doc.save(`secretstash-export-${new Date().toISOString().split('T')[0]}.pdf`);
};