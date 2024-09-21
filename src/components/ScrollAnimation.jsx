// // components/ScrollAnimation.js
// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import './ScrollAnimation.css'; // Create this CSS file for animations

// const ScrollAnimation = ({ children }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger only once
//     threshold: 0.1, // Adjust to your needs
//   });

//   return (
//     <div
//       ref={ref}
//       className={`scroll-animation ${inView ? 'fade-in' : 'fade-out'}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollAnimation;
