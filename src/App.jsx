import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <header className="hero">
        <h1>Welcome to Redoff</h1>
        <p>Innovating the future, one red solution at a time.</p>
      </header>

      <main>
        <section className="about">
          <h2>About Redoff</h2>
          <p>
            Redoff is a cutting-edge company specializing in red-themed technology and design solutions.
            Our mission is to bring passion, energy, and innovation to every project we undertake.
            From custom software to vibrant branding, we help businesses stand out in a crowded world.
          </p>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Red-Themed Web Design</li>
            <li>Custom Software Development</li>
            <li>Branding & Identity</li>
            <li>Digital Marketing</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Redoff. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
