import React, { useState, useEffect } from "react";
import { Container, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import axios from "axios";
import ProfileModal from "./ProfileModal";
import BookingModal from "./BookingModal";
import CartModal from "./CartModal";
import NotificationModal from "./NotificationModal";
import OfferModal from "./OfferModal";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [carts, setCarts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [offers, setOffers] = useState([]);

  // State for Modals
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);

  // State for Selected Items
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedCart, setSelectedCart] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // State for Form Data
  const [profileFormData, setProfileFormData] = useState({
    rating: "",
    avatar: "",
    bio: "",
  });
  const [bookingFormData, setBookingFormData] = useState({
    make_up: false,
    wig: false,
    clothes: false,
    // Add other booking fields
  });
  const [cartFormData, setCartFormData] = useState({
    // Add cart fields
  });
  const [notificationFormData, setNotificationFormData] = useState({
    // Add notification fields
  });
  const [offerFormData, setOfferFormData] = useState({
    // Add offer fields
  });

  useEffect(() => {
    fetchProfiles();
    fetchBookings();
    fetchCarts();
    fetchNotifications();
    fetchOffers();
  }, []);

  // Fetch Functions for Each Entity

  const fetchProfiles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/profiles/");
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/bookings/");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchCarts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/carts/");
      setCarts(response.data);
    } catch (error) {
      console.error("Error fetching carts:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/notifications/");
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const fetchOffers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/offers/");
      setOffers(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  // Profile Functions
  const handleProfileEdit = (profile) => {
    setSelectedProfile(profile);
    setProfileFormData({
      rating: profile.rating,
      avatar: profile.avatar,
      bio: profile.bio,
    });
    setShowProfileModal(true);
  };

  const handleProfileAdd = () => {
    setSelectedProfile(null);
    setProfileFormData({
      rating: "",
      avatar: "",
      bio: "",
    });
    setShowProfileModal(true);
  };

  const handleProfileSave = async () => {
    try {
      if (selectedProfile) {
        await axios.put(`http://localhost:8000/api/profiles/${selectedProfile.id}/`, profileFormData);
      } else {
        await axios.post("http://localhost:8000/api/profiles/", profileFormData);
      }
      fetchProfiles();
      setShowProfileModal(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  // Booking Functions
  const handleBookingEdit = (booking) => {
    setSelectedBooking(booking);
    setBookingFormData({
      make_up: booking.make_up,
      wig: booking.wig,
      clothes: booking.clothes,
      // Set other booking fields
    });
    setShowBookingModal(true);
  };

  const handleBookingAdd = () => {
    setSelectedBooking(null);
    setBookingFormData({
      make_up: false,
      wig: false,
      clothes: false,
      // Initialize other booking fields
    });
    setShowBookingModal(true);
  };

  const handleBookingSave = async () => {
    try {
      if (selectedBooking) {
        await axios.put(`http://localhost:8000/api/bookings/${selectedBooking.id}/`, bookingFormData);
      } else {
        await axios.post("http://localhost:8000/api/bookings/", bookingFormData);
      }
      fetchBookings();
      setShowBookingModal(false);
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  const handleCartAdd = async () => {
    try {
      // Implement logic to add a new cart
      await axios.post('http://localhost:8000/api/carts/', cartFormData);
      fetchCarts(); // Fetch updated carts after adding
    } catch (error) {
      console.error('Error adding cart:', error);
    }
  };
  
  const handleNotificationAdd = async () => {
    try {
      // Implement logic to add a new notification
      await axios.post('http://localhost:8000/api/notifications/', notificationFormData);
      fetchNotifications(); // Fetch updated notifications after adding
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };
  
  const handleOfferAdd = async () => {
    try {
      // Implement logic to add a new offer
      await axios.post('http://localhost:8000/api/offers/', offerFormData);
      fetchOffers(); // Fetch updated offers after adding
    } catch (error) {
      console.error('Error adding offer:', error);
    }
  };
  
  const handleCartEdit = async (cart) => {
    try {
      // Implement logic to edit an existing cart
      await axios.put(`http://localhost:8000/api/carts/${cart.id}/`, cartFormData);
      fetchCarts(); // Fetch updated carts after editing
    } catch (error) {
      console.error('Error editing cart:', error);
    }
  };
  
  const handleNotificationEdit = async (notification) => {
    try {
      // Implement logic to edit an existing notification
      await axios.put(`http://localhost:8000/api/notifications/${notification.id}/`, notificationFormData);
      fetchNotifications(); // Fetch updated notifications after editing
    } catch (error) {
      console.error('Error editing notification:', error);
    }
  };
  
  const handleOfferEdit = async (offer) => {
    try {
      // Implement logic to edit an existing offer
      await axios.put(`http://localhost:8000/api/offers/${offer.id}/`, offerFormData);
      fetchOffers(); // Fetch updated offers after editing
    } catch (error) {
      console.error('Error editing offer:', error);
    }
  };
  

  // Add similar functions for other entities

  return (
    <Container>
      <h1>Entities</h1>
      <Button variant="contained" color="primary" onClick={handleProfileAdd}>
        Add Profile
      </Button>
      <Button variant="contained" color="primary" onClick={handleBookingAdd}>
        Add Booking
      </Button>
      <Button variant="contained" color="primary" onClick={handleCartAdd}>
        Add Cart
      </Button>
      <Button variant="contained" color="primary" onClick={handleNotificationAdd}>
        Add Notification
      </Button>
      <Button variant="contained" color="primary" onClick={handleOfferAdd}>
        Add Offer
      </Button>

      <h2>Profiles</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Bio</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell>{profile.user.username}</TableCell>
              <TableCell>{profile.rating}</TableCell>
              <TableCell>{profile.bio}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleProfileEdit(profile)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Bookings</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Make-up</TableCell>
            <TableCell>Wig</TableCell>
            <TableCell>Clothes</TableCell>
            {/* Add other table headers */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.make_up ? "Yes" : "No"}</TableCell>
              <TableCell>{booking.wig ? "Yes" : "No"}</TableCell>
              <TableCell>{booking.clothes ? "Yes" : "No"}</TableCell>
              {/* Add other table cells */}
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleBookingEdit(booking)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Carts</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sessions</TableCell>
            <TableCell>Customer</TableCell>
            {/* Add other table headers */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>{cart.sessions}</TableCell>
              <TableCell>{cart.customer}</TableCell>
              {/* Add other table cells */}
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleCartEdit(cart)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Notifications</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Read</TableCell>
            {/* Add other table headers */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow key={notification.id}>
              <TableCell>{notification.user}</TableCell>
              <TableCell>{notification.message}</TableCell>
              <TableCell>{notification.read ? "Yes" : "No"}</TableCell>
              {/* Add other table cells */}
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleNotificationEdit(notification)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Offers</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Wig Price</TableCell>
            <TableCell>Clothes Price</TableCell>
            <TableCell>Make-up Price</TableCell>
            {/* Add other table headers */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell>{offer.wig_price}</TableCell>
              <TableCell>{offer.clothes_price}</TableCell>
              <TableCell>{offer.make_up_price}</TableCell>
              {/* Add other table cells */}
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleOfferEdit(offer)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ProfileModal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={selectedProfile}
        formData={profileFormData}
        onChange={setProfileFormData}
        onSave={handleProfileSave}
        isNew={!selectedProfile}
      />

      <BookingModal
        open={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        booking={selectedBooking}
        formData={bookingFormData}
        onChange={setBookingFormData}
        onSave={handleBookingSave}
        isNew={!selectedBooking}
      />

      {/* Include modals for other entities */}
    </Container>
  );
}

export default App;
