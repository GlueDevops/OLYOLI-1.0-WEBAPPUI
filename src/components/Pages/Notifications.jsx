import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BottomNav from "../Elements/BottomNav";
import NavbarPrivate from "../Elements/Navbar/NavbarPrivate";
import Notification from "../Elements/Notification";
import BackArrow from "../Widgets/BackArrow";

const Notifications = () => {
  return (
    <main className='secondary-spacing-with-navbar'>
      <NavbarPrivate />
      <BackArrow />
      <div className='notifications-container'>
        <h1 className='notifications-header'>Notifications</h1>
        <nav className='notifications-nav'>
          <NavLink to='faqs'>FAQS</NavLink>
          <NavLink to='likes'>Likes</NavLink>
          <NavLink to='follows'>Follows</NavLink>
          <NavLink to='general'>General</NavLink>
        </nav>
        <Outlet />
      </div>
      <BottomNav />
    </main>
  );
};

export default Notifications;
