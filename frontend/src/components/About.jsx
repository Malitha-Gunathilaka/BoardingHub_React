import React from 'react';

const About = () => {
  const features = [
    {
      title: "Wide Selection",
      description: "Access to diverse boarding options across different locations and price ranges."
    },
    {
      title: "Verified Listings",
      description: "All properties are verified to ensure safety and reliability for our users."
    },
    {
      title: "Easy Booking",
      description: "Streamlined booking process with secure payment options."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries."
    }
  ];

  return (
    <div id="about-section" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BoardingHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BoardingHub is your trusted platform for finding the perfect boarding place. 
            We connect property owners with people looking for quality accommodation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide a seamless and reliable platform that helps people find their ideal boarding places
              while helping property owners reach potential tenants. We strive to make the process of
              finding accommodation as simple and stress-free as possible.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading platform for boarding accommodation, known for trust,
              reliability, and excellent user experience. We aim to revolutionize how people
              find and book boarding places across the globe.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose BoardingHub?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;