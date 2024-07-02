# Website Name : RestY

# [Server Github] (https://github.com/HFsa-RaShid/resty-server)

# Concept and Problem Solved
RestYRestY is a user-friendly hotel booking platform designed to make finding and booking accommodations easy and efficient. It addresses the need for an intuitive system that provides room availability, booking options, user reviews, and special offers.

# Key Features
+ Homepage Design
  + Visual Banner: Images or videos of hotel rooms.
  + Interactive Map: Displays the hotel's location.
  + Featured Rooms: Highlights selected rooms with a "Book Now" button.
  + User Reviews: Shows authentic user ratings and comments.
+ User Authentication
  + Email/Password Login: Secure account creation and login.
  + Google Login: Easy login with Google via Firebase.
+ Room Management
  + Rooms Page: Lists available rooms with price and review filters.
  + Room Details Page: Detailed room information and booking options.
  + My Bookings Page: Manage bookings, update dates, and post reviews.

# Technologies Used
Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase, JWT
Animations: AOS (Animate on Scroll)
Mapping: Pigeon-maps


# Local Setup Guide
To run EduConnect locally on your machine, follow these steps:
+ Clone the Client Repository:
  + git clone https://github.com/HFsa-RaShid/resty-client.git
  + cd resty-client

+ Clone the Client Repository:
  + git clone https://github.com/HFsa-RaShid/resty-server.git
  + cd resty-server

+ Install Dependencies:
  + npm install

+ Set Environment Variables:
  + Create a .env file in the root directory and configure necessary environment variables such as database connection URI, JWT secret key, and OAuth credentials.

+ Start the Server:
  + Install nodemon globally (if you haven't already):npm install -g nodemon

+ Access the Application:
  + Open your web browser and navigate to http://localhost:5000  to access the locally running instance of EduConnect.