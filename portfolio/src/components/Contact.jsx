import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      // Remove trailing slash if it exists to prevent double slash like .app//contact
      const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      const apiUrl = rawApiUrl.endsWith('/') ? rawApiUrl.slice(0, -1) : rawApiUrl;
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' }); // reset form
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000); // clear success message
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ loading: false, success: false, error: 'Failed to connect to the server.' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="p-3 bg-white dark:bg-darkCard rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
                    <FiMail className="w-5 h-5" />
                  </span>
                  <span className="font-medium">hello@example.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="p-3 bg-white dark:bg-darkCard rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
                    <FiLinkedin className="w-5 h-5" />
                  </span>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="p-3 bg-white dark:bg-darkCard rounded-full shadow-sm border border-slate-100 dark:border-slate-800">
                    <FiGithub className="w-5 h-5" />
                  </span>
                  <span className="font-medium">GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form className="card space-y-4" onSubmit={handleSubmit}>
              
              {status.success && (
                <div className="p-3 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-lg text-sm border border-green-200 dark:border-green-800">
                  Your message has been sent successfully!
                </div>
              )}
              
              {status.error && (
                <div className="p-3 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg text-sm border border-red-200 dark:border-red-800">
                  {status.error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors dark:text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none dark:text-white"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.loading}
                className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : (
                  <>Send Message <FiSend className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
