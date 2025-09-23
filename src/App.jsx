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
    <div className="container">
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

        <section className="features">
          <h2>Our Features & Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Red-Themed Web Design</h3>
              <p>We create stunning, responsive websites with a bold red touch that captures attention and drives engagement.</p>
            </div>
            <div className="card">
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions designed to meet your unique business needs, with a focus on performance and style.</p>
            </div>
            <div className="card">
              <h3>Branding & Identity</h3>
              <p>Build a memorable brand with our expert design team, ensuring your identity is as bold as your vision.</p>
            </div>
            <div className="card">
              <h3>Digital Marketing</h3>
              <p>Boost your online presence with targeted campaigns and strategies that deliver real results.</p>
            </div>
            <div className="card">
              <h3>E-Commerce Solutions</h3>
              <p>Launch or upgrade your online store with our seamless, user-friendly e-commerce platforms.</p>
            </div>
            <div className="card">
              <h3>Mobile App Development</h3>
              <p>Reach your audience on the go with custom mobile apps that are fast, intuitive, and visually striking.</p>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Our Values</h2>
          <div className="cards">
            <div className="card">
              <h3>Innovation</h3>
              <p>We constantly seek out new ideas and creative solutions to stay ahead in the industry and provide unique value to our clients.</p>
            </div>
            <div className="card">
              <h3>Integrity</h3>
              <p>We conduct our business with honesty and transparency, building trust with our clients and partners.</p>
            </div>
            <div className="card">
              <h3>Collaboration</h3>
              <p>We believe teamwork and open communication drive the best results, both within our company and with our clients.</p>
            </div>
            <div className="card">
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality in everything we do, from our services to our customer support.</p>
            </div>
          </div>
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
    </div>
  );
}

export default App;
