import styles from '../css/contact.module.css'
import { useState } from 'react';

function Contact() {
  const [id, setId] = useState("");

  function submitContact() {
    setId("success-contact");
    setTimeout(() => {
      const el = document.getElementById('success-contact');
      if (el) el.style.display = 'block';
    }, 0);
  }

  return (
    <>
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <div>
            <h2>Get in Touch</h2>
            <p>Have questions about treatments, pricing, or insurance? We're happy to help.</p>
            
            {/* FIX: replaced styles.serviceCard with styles.contactDetail */}
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📍</div>
              <span>123 Health Avenue, Bhubaneswar, Odisha 751001</span>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📞</div>
              <span>+91 98765 43210</span>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📧</div>
              <span>info@medicare-clinic.com</span>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>🕐</div>
              <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.contactFormGrid}>
              <div className={styles.contactFormGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className={styles.contactFormGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="+91..." />
              </div>
              <div className={`${styles.contactFormGroup} ${styles.full}`}>
                <label>Message</label>
                <textarea
                  placeholder="Your message..."
                  style={{ minHeight: "110px" }}
                ></textarea>
              </div>
              <button
                className={styles.contactSubmitBtn}
                onClick={submitContact}
              >
                Send Message →
              </button>
              <div className={styles.contactSuccessMsg} id={id}>
                ✓ Message sent! We'll respond shortly.
              </div>
            </div>
          </div>

        </div>
      </section>
      <footer className={styles.footer}>
        © 2025 MediCare Clinic. All rights reserved. | Bhubaneswar, Odisha
      </footer>
    </>
  )
}

export default Contact