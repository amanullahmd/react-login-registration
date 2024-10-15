/**
 * reportWebVitals function
 *
 * This function is used to measure and report web performance metrics.
 * It checks if a callback function is provided, and if so, it imports
 * the 'web-vitals' library dynamically to gather various performance metrics.
 *
 * The metrics collected include:
 * - CLS (Cumulative Layout Shift): Measures visual stability.
 * - FID (First Input Delay): Measures responsiveness.
 * - FCP (First Contentful Paint): Measures loading performance.
 * - LCP (Largest Contentful Paint): Measures loading performance of the largest content element.
 * - TTFB (Time to First Byte): Measures server response time.
 *
 * @param {Function} onPerfEntry - A callback function that will be called with the performance metrics.
 */
const reportWebVitals = onPerfEntry => {
  // Check if the callback function is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the performance metric functions with the callback
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals; // Export the function for use in other parts of the application
