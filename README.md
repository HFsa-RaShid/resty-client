# Website Name : RestY

# Assignment_ID: assignment_category_0004
# [Live URL] (https://ass10-resty-client.web.app/)

# Features:
# Homepage Design 
+ Banner: High-quality video showcasing hotel rooms.
+ Map: Displays the hotel's location.
+ Newsletter Signup: Encourages users to subscribe for updates and offers.
+ Featured Rooms: Highlights selected rooms with images, descriptions, and a "Book Now" button.
+ User Reviews: Authentic reviews displayed, sorted by the latest.
# User Authentication 
+ Email and Password Registration: Users can create accounts.
+ Google Authentication: Users can log in using Google via Firebase.
# Rooms Page 
+ Room List: Display of available rooms with images.
+ Room Details: Redirects to a detailed view upon clicking.
+ Filter System: Filter rooms by price range on the server side.
+ Total Reviews: Display the total review count for each room.
# Room Details Page 
+ Detailed room information including description, price, size, availability, images, and special offers.
+ Book Now Button: Allows room booking, ensures room is marked unavailable post-booking.
+ Reviews Section: Shows reviews or a meaningful message if none.
+ Date Picker: Allows users to select a booking date.
+ Booking Confirmation Modal: Displays booking summary and a confirm button.
# My Bookings Page 
+ List of rooms booked by the user.
+ Cancel Booking: Users can cancel with confirmation.
+ Post Reviews: Users can leave reviews for booked rooms.
+ Update Booking Date: Users can modify booking dates with confirmation and database update.
# Review System 
+ Users can post reviews for rooms they have booked, including username, rating, comment, and timestamp.
+ Reviews are displayed on the room details page.
# Access Control 
+ Non-logged-in users cannot book rooms or post reviews.
+ Non-logged-in users can view basic room details.
# 404 Page 
+ Custom 404 page with an engaging image and a "Back to home" button.
Packages
+ Browser Tab Title and Metadata: Implemented with Helmet.
+ Animation Library: Aos for animations.
+ Map Library: Pigeon-maps  functionality.
+ User Reviews Carousel: Display latest reviews prominently.
+ Special Offers and Promotions: Highlight special deals in a popup/modal on the homepage.
+ Booking Cancellation: Users can cancel bookings up to 1 day before the booked date. Canceled rooms become available again.
+ JWT Authentication: Secure token-based authentication for private routes, stored on the client side for email/password and social login.

These features ensure a comprehensive, user-friendly hotel booking platform with secure authentication and a responsive design.
