import Performance from "cards/Performance";
import Footer from "components/Footer";
import React from "react";
import Stats from "sections/Stats";
import UsersSection from "sections/UsersSection";

function HomePage() {
  return (
    <div className="text-white mt-0">
      <Performance />
      <Stats />
      <UsersSection />
      <Footer />
    </div>
  );
}

export default HomePage;
