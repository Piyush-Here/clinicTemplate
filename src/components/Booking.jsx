import { useState } from "react";
import styles from "../css/booking.module.css"

function Booking() {
  const [id,setId] = useState("");
  function submitBooking(){
    setId("success-book");
    document.getElementById('success-book').style.display='block';
    document.getElementById('success-book').scrollIntoView({behavior:'smooth',block:'nearest'});
}
  return (
    <>
    <section ClassName={styles.booking} id="booking">
  <div ClassName={styles.bookingInner}>
    <h2>Book an Appointment</h2>
    <p>Fill in your details and we'll confirm within 2 hours.</p>
    <div ClassName={styles.formGrid}>
      <div ClassName={styles.formGroup}><label>Full Name *</label><input type="text" placeholder="Your full name"/></div>
      <div ClassName={styles.formGroup}><label>Phone Number *</label><input type="tel" placeholder="+91 XXXXX XXXXX"/></div>
      <div ClassName={styles.formGroup}><label>Email</label><input type="email" placeholder="your@email.com"/></div>
      <div ClassName={styles.formGroup}><label>Department *</label>
        <select><option>Select Department</option><option>Cardiology</option><option>Dental</option><option>Neurology</option><option>Ophthalmology</option><option>Diagnostics</option><option>General Medicine</option></select>
      </div>
      <div ClassName={styles.formGroup}><label>Preferred Date *</label><input type="date"/></div>
      <div ClassName={styles.formGroup}><label>Preferred Time *</label>
        <select><option>Morning (9–12)</option><option>Afternoon (12–3)</option><option>Evening (3–6)</option></select>
      </div>
      <div ClassName={styles.formGroup.full}><label>Describe your concern</label><textarea placeholder="Brief description of your symptoms or query..."></textarea></div>
      <button ClassName={styles.submitBtn} onclick={submitBooking}>Confirm Appointment →</button>
      <div ClassName={styles.successMsg} id={id}>✅ Appointment request received! We'll call you within 2 hours.</div>
    </div>
  </div>
</section>
    </>
  )
}

export default Booking