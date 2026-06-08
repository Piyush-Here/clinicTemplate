import styles from '../css/services.module.css'

function Services() {
  return (
<>
    <section className={styles.Services} id="services">
  <div className={styles.servicesInner}>
    <div className={styles.sectionLabel}>What We Offer</div>
    <h2>Comprehensive Medical Services</h2>
    <div className={styles.servicesGrid}>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>🫀</div><h3>Cardiology</h3><p>Advanced cardiac care with cutting-edge diagnostics and personalised treatment plans.</p></div>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>🦷</div><h3>Dental Care</h3><p>Full-spectrum dental services from cleaning to implants, handled with precision.</p></div>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>🧠</div><h3>Neurology</h3><p>Expert neurological consultations and brain imaging for complex conditions.</p></div>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>👁️</div><h3>Ophthalmology</h3><p>Complete eye care — vision testing, surgery and post-operative follow-up.</p></div>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>🩻</div><h3>Diagnostics</h3><p>In-house MRI, CT scans and pathology labs for fast, accurate results.</p></div>
      <div className={styles.serviceCard}><div className={styles.serviceIcon}>💊</div><h3>General Medicine</h3><p>Routine consultations, health checkups and chronic disease management.</p></div>
    </div>
  </div>
</section>

</>
  )
}

export default Services