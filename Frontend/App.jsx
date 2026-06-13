import React, { useState } from 'react';

export default function SunshineDaycareHome() {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    parentName: '', email: '', phone: '', childAge: '', preferredDate: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('http://localhost:5001/api/tour-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ parentName: '', email: '', phone: '', childAge: '', preferredDate: '' });
        // Optional: Auto-close modal after 3 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus(null);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-extrabold text-yellow-500 flex items-center gap-2">
          ☀️ Sunshine Learning
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#services" className="hover:text-yellow-500 transition">Our Services</a>
          <a href="#difference" className="hover:text-yellow-500 transition">Why Us?</a>
          <a href="#policies" className="hover:text-yellow-500 transition">Policies & Contracts</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-24 bg-yellow-50 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Welcome to Sunshine Learning Daycare
        </h1>
        <p className="text-xl max-w-2xl text-gray-700 mb-10">
          Providing a safe, nurturing, and educational environment where your child can learn, play, and shine.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition shadow-lg"
        >
          Schedule a Tour
        </button>
      </header>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div id="services">
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">Our Services</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-2">✓ Full-Day and Half-Day Care</li>
            <li className="flex items-center gap-2">✓ Early Childhood Education</li>
            <li className="flex items-center gap-2">✓ Before and After School Programs</li>
            <li className="flex items-center gap-2">✓ Nutritious Meals and Snacks</li>
          </ul>
        </div>
        <div id="difference">
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-2">★ Certified & CPR-Trained Staff</li>
            <li className="flex items-center gap-2">★ Play-Based Learning Curriculum</li>
            <li className="flex items-center gap-2">★ Secure, Monitored Facilities</li>
            <li className="flex items-center gap-2">★ Daily Updates for Parents</li>
          </ul>
        </div>
      </section>

      {/* Modal Overlay & Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Schedule a Tour</h2>
            
            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                Request received! We'll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg text-center font-medium">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name *</label>
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="Jane Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Child's Age</label>
                  <input type="text" name="childAge" value={formData.childAge} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="e.g. 4" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" />
                </div>
              </div>
              <button type="submit" disabled={status === 'submitting'}
                className="w-full mt-6 bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-700 transition duration-200 disabled:opacity-70">
                {status === 'submitting' ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}