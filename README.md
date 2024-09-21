# Ashish Danu's Portfolio

This is my personal portfolio website built with React and Chakra UI. The project showcases my skills, experience, and personal projects, while offering a clean and responsive user interface. Below is a breakdown of the file structure, functionality, and instructions for running the project.

## Features

- **Responsive Design**: The website is fully responsive across different screen sizes, from mobile devices to desktop browsers.
- **Smooth Animations**: Subtle animations and hover effects enhance the user experience without overwhelming the design.
- **Tech Stack Icons**: Highlights my technology stack with dynamic icons.
- **Scroll Animations**: Interactive animations triggered during scrolling.
- **Social Media Links**: Footer includes links to social media platforms.
- **Visitor Counter**: Displays the number of visitors to the portfolio in the footer.
  
## File Structure

├── assets/ │ └── (Profile pictures, logos, and any static images) ├── components/ │ ├── AboutMe.jsx # "About Me" section │ ├── Education.jsx # Displays my education credentials │ ├── Footer.jsx # Footer with social media links and visitor counter │ ├── Head.jsx # Header section including title and navigation │ ├── Project.jsx # Displays portfolio projects with descriptions and links │ ├── ScrollAnimation.css # Styles for scroll-triggered animations │ ├── ScrollAnimation.jsx # JavaScript file to manage scroll-triggered animations │ ├── TechStack.jsx # Displays the technologies I use with icons ├── App.jsx # Main application component ├── Logos.jsx # Contains import paths for various logos and icons ├── index.css # Global CSS for the project └── main.jsx # Entry point for the React application

markdown
Copy code

## Components Overview

- **AboutMe.jsx**: Includes a short biography with an image and animation effects.
- **Education.jsx**: Lists academic qualifications with icons from `react-icons`.
- **Footer.jsx**: Displays social media links and a visitor counter (commented section for social media links that can be added).
- **Head.jsx**: Contains the page header and navigation elements.
- **Project.jsx**: Shows a list of projects with titles, descriptions, and GitHub/demo links.
- **ScrollAnimation.jsx**: Handles animations that trigger on scroll using custom CSS classes from `ScrollAnimation.css`.
- **TechStack.jsx**: Displays my tech stack using icons for React, Firebase, SQL, Tailwind CSS, and more.

## Technologies Used

- **React.js**: Core framework for building the website.
- **Chakra UI**: For responsive layout and pre-styled components.
- **CSS3**: For additional styling.
- **React Icons**: Iconography for technologies and social media.
- **Firebase**: Backend integration for potential future expansion (user data, authentication).
- **GitHub**: Links to my projects.

## Visitor Counter Setup

The footer has a visitor counter feature. To enable it:
1. Integrate a database or service (such as Firebase, or a simple backend API) to track and increment visits.
2. Display the counter in the footer.

## Instructions

### 1. Installation

Clone the repository:

```bash
git clone https://github.com/Ashishdanu/portfolio.git
cd portfolio
Install the dependencies:

bash
Copy code
npm install
2. Running the Project
To run the project locally:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

3. Building the Project
To create a production build:

bash
Copy code
npm run build
This will generate the optimized static files for production deployment.

4. Adding Social Media Links
To add your social media links:

Open Footer.jsx.
Uncomment the relevant section where the social media icons are present.
Add your URLs in the appropriate locations.
jsx
Copy code
// Example:
// <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
//   <Icon as={FaInstagram} boxSize={6} />
// </a>
Future Improvements
Dynamic Content Loading: Integrate Firebase for content management.
Blog Section: Add a blog for sharing tech articles.
Dark Mode: Toggle between light and dark themes.
Contact
Feel free to reach out via email: ashishdanu1100@gmail.com

