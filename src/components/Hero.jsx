import styles from '../css/hero.module.css' 

function Hero() {
  return (
    <>
    <section>
  <div className={styles.hero}>
    <div>
      <div className={styles.heroBadge}>Trusted Healthcare Since 2010</div>
      <h1>Your Health, Our <em>Priority</em> Always</h1>
      <p>Expert care from certified specialists. From routine checkups to complex diagnostics — we're with you every step.</p>
      <div className={styles.heroBtns}>
        <button className="btn-primary" onclick="document.getElementById('booking').scrollIntoView({behavior:'smooth'})">Book Appointment</button>
        <button className="btn-outline" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">Our Services</button>
      </div>
    </div>
    <div className={styles.rel}>
      <div className={styles.heroImg}></div>
      <div className={styles.statPill}><strong>4500+</strong>Happy Patients</div>
    </div>
  </div>
</section>
    </>
    
  )
}

export default Hero