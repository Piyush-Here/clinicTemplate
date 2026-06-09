import styles from '../css/doctors.module.css'

function Doctors() {
  return (
    // FIX: section must wrap ALL content; the original had div tags outside section
    <section className={styles.doctors} id="doctors">
      <div>Meet the Team</div>
      <h2>Our Specialist Doctors</h2>
      <p>Board-certified physicians with 10+ years of experience each.</p>
      <div className={styles.doctorsGrid}>
        <div className={styles.docCard}>
          <div className={styles.docImg}>Doctor Photo Here</div>
          <div className={styles.docInfo}>
            <h4>Dr. Anjali Sharma</h4>
            <span>Cardiologist – MBBS, MD</span>
          </div>
        </div>
        <div className={styles.docCard}>
          <div className={styles.docImg}>Doctor Photo Here</div>
          <div className={styles.docInfo}>
            <h4>Dr. Rohan Patel</h4>
            <span>Neurologist – MBBS, DM</span>
          </div>
        </div>
        <div className={styles.docCard}>
          <div className={styles.docImg}>Doctor Photo Here</div>
          <div className={styles.docInfo}>
            <h4>Dr. Priya Nair</h4>
            <span>General Physician – MBBS, MD</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors