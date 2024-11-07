# Image-Gallery-with-React-and-Axios
 Here's a simple and technical README template for your project that retrieves images using React and Axios:  Image Gallery with React and Axios This project is a small React application that fetches random images from the Picsum Photos API and displays them in a grid layout. Users can fetch images by clicking a button.

**Features**
Fetch images from an external API (Picsum Photos API) using Axios
Display images in a responsive grid layout
Button-triggered image fetching
**Technologies Used**
React: JavaScript library for building user interfaces
Axios: Promise-based HTTP client for the browser and Node.js
Tailwind CSS: Utility-first CSS framework for styling

**Installation**
1. Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
2. Navigate to the project directory:
cd your-repo-name
3. Install the dependencies:
npm install

**Usage**
1.Start the development server:
npm start

2. Open your browser and go to http://localhost:3000 to view the app.

3. Click the Get Images button to fetch and display random images.
4. 
**Code Overview**
page.js: The main React component handles fetching and displaying images.
useState hook is used to manage the list of images.
useEffect hook is used to call the API function when the button is clicked.
Axios is used for making HTTP requests to the Picsum API.

**API Reference**
This project uses the following API endpoint:

Picsum Photos API: https://picsum.photos/v2/list


**License**
This project is open source and available under the MIT License.

**ScreenShot:**
![getimage](https://github.com/user-attachments/assets/f62806eb-e012-4d82-95cc-13c62a522665)
