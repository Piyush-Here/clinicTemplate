import styles from '../css/hero.module.css'

function Hero() {
  function handlePrimary() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  }
  function handleOutline() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* FIX: <section> had no className — wrapping div had the hero class instead */}
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <div>
            <div className={styles.heroBadge}>Trusted Healthcare Since 2010</div>
            <h1>Your Health, Our <em>Priority</em> Always</h1>
            <p>
              Expert care from certified specialists. From routine checkups to
              complex diagnostics – we're with you every step.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary} onClick={handlePrimary}>
                Book Appointment
              </button>
              <button className={styles.btnOutline} onClick={handleOutline}>
                Our Services
              </button>
            </div>
          </div>
          <div className={styles.rel}>
            <div className={styles.heroImg}></div>
            <div className={styles.statPill}>
              <strong>4500+</strong>Happy Patients
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero