// src/Components/HomePage/HomePage.jsx
import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: `Men's Fashion`,
    image:
      "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
  },
  {
    name: `Women's Fashion`,
    image:
      "https://media.gettyimages.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=gi&k=20&c=KLbDZP59SwdV8H1DI1NPivMtYvnNxV6zsljjXagBUVg=",
  },
  {
    name: "Electronics",
    image:
      "https://e7.pngegg.com/pngimages/791/606/png-clipart-home-appliance-technique-for-you-washing-machines-clothes-dryer-others-miscellaneous-electronics.png",
  },
  {
    name: "Accessories",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/007/974/855/small_2x/top-view-travel-accessories-with-shoes-map-smartphone-with-mockup-screen-hat-tourist-essentials-photo.jpg",
  },
];

const featuredProducts = [
  {
    name: "Wireless Headphones",
    description: "Experience immersive sound",
    image:
      "https://shop.zebronics.com/cdn/shop/files/Zeb-Thunderpro-blue-pic-1.jpg?v=1709202990&width=1200",
  },
  {
    name: "Smart Watch",
    description: "Stay connected on the go",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPip9Q5wUYZwjCFVLR39r5uoXbJnaIAaJoCg&s",
  },
  {
    name: "Leather Handbag",
    description: "Elegant and spacious",
    image:
      "https://media.istockphoto.com/id/1302787124/photo/beige-leather-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=fOO0zCBqF3rbiGLLHwgtOMHxt66adpKikE7Fs2C_fDs=",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "I love the quality and style of these products. The delivery was fast and the customer service was excellent.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4wgcKE1VD6Fjdzl2wkeY3lyijIo4_lOc7w&s",
  },
  {
    name: "David L.",
    text: "Great selection of products and the company is very professional. I'm very happy with my purchase.",
    image:
      "https://www.bbva.com/wp-content/uploads/2017/03/David-Puente-Global-Head-of-Retail-Client-Solutions.jpg",
  },
  {
    name: "Emily R.",
    text: "The fashion items are trendy and affordable. I always find something I love on this site.",
    image:
      "https://www.investcorp.com/wp-content/uploads/2019/11/Mason_Emily-0001.jpg",
  },
];

const address = "Shop no 337, 338, Pvt Market, Dilsukhnagar";
const contactNo = "7675904571";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.928254735459!2d78.53851759999999!3d17.367185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e959015689%3A0xfe758eee6bc055ac!2sPvt%20market%20kothapet%20dilsukhnagar%20Hyderabad%20500035!5e0!3m2!1sen!2sin!4v1759999191745!5m2!1sen!2sin";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    window.scrollTo(0, 0);
    const routes = {
      "Electronics": "/userproducts",
      "Men's Fashion": "/mensfashion",
      "Accessories": "/accessories",
      "Women's Fashion": "/womensfashion",
    };
    if (routes[categoryName]) {
      navigate(routes[categoryName]);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="carousel-image"
                src="https://templates.simplified.co/thumb/3446e660-7af3-4ff6-86ce-755afcde8fcd.jpg"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document
                    .getElementById("categories-id")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://graphicsfamily.com/wp-content/uploads/edd/2023/12/Fashion-Web-Banner-Design-1180x664.jpg"
                alt="Second slide"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document
                    .getElementById("categories-id")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.pinimg.com/1200x/d2/b9/40/d2b940959caadeaf591041c70ab7a0ab.jpg"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document
                    .getElementById("categories-id")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" id="categories-id">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => handleCategoryClick(cat.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCategoryClick(cat.name);
                }
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="category-image"
                style={{ marginTop: "50px", height: "150px", width: "120px" }}
              />
              <p className="catgeory-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limited Time Deals Section */}
      <section className="deals-section">
        <div className="deal-content">
          <h2>Limited Time Deals</h2>
          <h3>Flash Sale: up to 50% OFF</h3>
          <p>
            Don't miss our biggest flash sale of the season. Shop now and save
            on your favorite items.
          </p>

          <button className="shop-now-btn">
            <a
              href="#categories-id"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Shop Now
            </a>
          </button>
        </div>
        <div className="deal-image">
          <img
            src="https://res.cloudinary.com/sricharan/image/upload/v1758774697/Screenshot_2025-09-25_100012_r82hhd.png"
            alt="Limited Time Deal"
          />
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials-section">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-avatar"
              />
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            title="Google Map Location"
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-details">
          <h2 className="details-title">Visit Our Location</h2>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <p className="detail-text">
              Address:
              <br />
              <span className="address-link">{address}</span>
            </p>
          </div>
          <div className="detail-item">
            <i className="fas fa-phone"></i>
            <p className="detail-text">
              Call Us:
              <br />
              <a href={`tel:${contactNo}`} className="phone-link">
                {contactNo}
              </a>
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default HomePage;