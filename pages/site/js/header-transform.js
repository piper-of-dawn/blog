// header-transform.js
// Transforms all sidebar section headers to be uppercase and enclosed within [ ]

document.addEventListener('DOMContentLoaded', function() {
  // Select all sidebar group label elements
  const sidebarHeaders = document.querySelectorAll('[data-slot="sidebar-group-label"]');
  
  // Process each sidebar header
  sidebarHeaders.forEach(function(header) {
    // Skip headers that are already transformed
    if (header.innerHTML.match(/^\s*\[.*\]\s*$/)) {
      return;
    }
    
    // Get the current text content
    const text = header.textContent.trim();
    
    // Transform to uppercase and enclose in brackets
    const transformedText = `[${text.toUpperCase()}]`;
    
    // Replace the header content
    header.textContent = transformedText;
  });
  
  console.log('Sidebar headers transformed to uppercase and enclosed in brackets');
});