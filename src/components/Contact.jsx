import styles from '../css/contact.module.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {useState} from 'react';
function Contact() {
  const animatedRef = useScrollAnimation();
  const [id,setId] = useState("");
  function submitContact(){
    setId("success-contact");
    document.getElementById('success-contact').style.display='block';
}
  return (
   <>
   <section className={styles.contact} id="contact">
  <div className={styles.contactInner}>
    <div>
      <h2>Get in Touch</h2>
      <p>Have questions about treatments, pricing, or insurance? We're happy to help.</p>
      <div ref={animatedRef} className={styles.contactDetail}><div className={styles.contactIcon}>📍</div>123 Health Avenue, Bhubaneswar, Odisha 751001</div>
      <div ref={animatedRef} className={styles.contactDetail}><div className={styles.contactIcon}>📞</div>+91 98765 43210</div>
      <div ref={animatedRef} className={styles.contactDetail}><div className={styles.contactIcon}>📧</div>info@medicare-clinic.com</div>
      <div ref={animatedRef} className={styles.contactDetail}><div className={styles.contactIcon}>🕘</div>Mon–Sat: 9:00 AM – 7:00 PM</div>
    </div>
    <div className={styles.contactForm}>
      <div className={styles.contactFormGrid}>
        <div className={styles.contactFormGroup}><label>Name</label><input type="text" placeholder="Your name"/></div>
        <div className={styles.contactFormGroup}><label>Phone</label><input type="tel" placeholder="+91..."/></div>
        <div className={styles.contactFormGroup.full}><label>Message</label><textarea placeholder="Your message..." style={{"min-height":"110px"}}></textarea></div>
        <button className={styles.contactSubmitBtn} onClick={submitContact}>Send Message →</button>
        <div className={styles.contactSuccessMsg} id={id}>✅ Message sent! We'll respond shortly.</div>
      </div>
    </div>
  </div>
</section>
<footer className={styles.footer}>© 2025 MediCare Clinic. All rights reserved. | Bhubaneswar, Odisha</footer>

   </>
  )
}

export default Contact