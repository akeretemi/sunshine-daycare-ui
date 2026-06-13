import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Initialize Formspree with your endpoint ID
  const [state, handleSubmit] = useForm("mgobppwb");

  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-gray-800">
      
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-sm flex justify-between items-center px-8 relative z-30">
        <div className="text-2xl font-extrabold text-yellow-500 flex items-center gap-2">
          ☀️ Sunshine Learning
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="hidden md:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition"
        >
          Schedule Tour
        </button>
      </nav>

      {/* ========================================================= */}
      {/* Hero Section with Background Image & Dark Overlay         */}
      {/* ========================================================= */}
      <header className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* The Background Image itself */}
        <img 
          src="/sunshine-learning-hero.png"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Sunshine Learning Daycare
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed font-medium drop-shadow">
            Providing a safe, nurturing, and educational environment where your child can learn, play, and shine.
          </p>
          
          {/* Prominent Call to Action */}
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition shadow-lg flex items-center gap-2"
          >
            ☀️ Schedule a Tour
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* Main Content - High-Converting Copy                       */}
      {/* ========================================================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Services Section */}
        <div id="services">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-yellow-400 inline-block pb-2 text-gray-900">
            Our Services
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-700 flex items-center gap-2">
                ✓ Flexible Full & Part-Time Care
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Accommodating schedules designed for working families, accepting children from 6 weeks to 12 years old.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-700 flex items-center gap-2">
                ✓ Early Childhood Education
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                A structured, play-based curriculum focused on cognitive, motor, and vital social-emotional development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-700 flex items-center gap-2">
                ✓ Before & After School Club
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Safe transportation options, dedicated homework assistance, and engaging extracurricular activities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-700 flex items-center gap-2">
                ✓ Wholesome Nutrition Program
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Healthy, balanced meals and snacks prepared daily to fuel your child's growth and energy.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="difference">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-yellow-400 inline-block pb-2 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                ★ Exceptional Safety & Security
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                State-of-the-art secure entry systems, comprehensive surveillance, and fully CPR/First-Aid certified staff.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                ★ Real-Time Parent Communication
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Total peace of mind with daily digital updates, milestone tracking, and photos sent directly to your phone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                ★ Low Teacher-to-Child Ratios
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Smaller group sizes ensure your child receives the personalized attention and nurturing care they deserve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                ★ Enriching Learning Environments
              </h3>
              <p className="text-gray-600 mt-1 pl-6">
                Thoughtfully designed, modern classrooms full of natural light that inspire creativity and curiosity.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* Important Info - Policies & Contracts                     */}
      {/* ========================================================= */}
      <section id="policies" className="bg-white py-20 px-6 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Parent Resources & Policies</h2>
          <p className="mb-12 text-lg text-gray-600">
            We believe in complete transparency. Review our guidelines, daily schedules, and enrollment contracts below so you know exactly what to expect when joining the Sunshine family.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Document Card 1 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-400 transition group">
              <div className="text-cyan-600 text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Parent Handbook</h3>
              <p className="text-sm text-gray-500 mb-6">Sick policies, drop-off times, and daily protocols.</p>
              <button className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">
                Download PDF
              </button>
            </div>

            {/* Document Card 2 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-400 transition group">
              <div className="text-cyan-600 text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enrollment Contract</h3>
              <p className="text-sm text-gray-500 mb-6">Tuition rates, payment schedules, and agreements.</p>
              <button className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">
                Download PDF
              </button>
            </div>

            {/* Document Card 3 */}
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-400 transition group">
              <div className="text-cyan-600 text-4xl mb-4 group-hover:scale-110 transition-transform">📅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Holiday Schedule</h3>
              <p className="text-sm text-gray-500 mb-6">A complete list of our planned closures for the year.</p>
              <button className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Footer                                                    */}
      {/* ========================================================= */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-gray-800 pb-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-500 mb-4 flex items-center justify-center md:justify-start gap-2">
              ☀️ Sunshine Learning
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Providing a safe, nurturing, and educational environment where your child can learn, play, and shine.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition">Our Services</a></li>
              <li><a href="#difference" className="hover:text-cyan-400 transition">Why Choose Us</a></li>
              <li><a href="#policies" className="hover:text-cyan-400 transition">Policies & Contracts</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-cyan-500 text-lg">📍</span> 123 Learning Lane
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-cyan-500 text-lg">📞</span> (555) 000-0000
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-cyan-500 text-lg">✉️</span> hello@sunshinedaycare.com
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="text-sm text-gray-600 text-center">
          &copy; {new Date().getFullYear()} Sunshine Learning Daycare. All rights reserved.
        </div>
      </footer>

      {/* ========================================================= */}
      {/* Schedule a Tour Modal (Formspree Integration)             */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {/* Success State or Form UI */}
            {state.succeeded ? (
              <div className="text-center py-10">
                <div className="text-green-500 text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h2>
                <p className="text-gray-600">
                  Thank you! We have received your tour request and will reach out shortly to confirm the details.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Schedule a Tour</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-1">Parent's Name *</label>
                    <input 
                      id="parentName" 
                      name="parentName" 
                      type="text" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                    <ValidationError prefix="Name" field="parentName" errors={state.errors} />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>

                  {/* Child Age & Date Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-1">Child's Age</label>
                      <input 
                        id="childAge" 
                        name="childAge" 
                        type="text" 
                        placeholder="e.g. 4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
                      <input 
                        id="preferredDate" 
                        name="preferredDate" 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}