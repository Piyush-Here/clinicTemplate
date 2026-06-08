import styles from '../css/testimonials.module.css'
function Testimonials() {

  return (
    <>
    <section className={styles.testi}>
  <div>Patient Stories</div>
  <h2>What Our Patients Say</h2>
  <div className={styles.testiGrid}>
    <div className={`${styles.serviceCard} animate-on-scroll`}><div className={styles.stars}>★★★★★</div><p>"The cardiology team diagnosed my condition quickly. Truly professional and caring staff."</p><div className={styles.testiAuthor}>Suresh Kumar, Bhubaneswar</div></div>
    <div className={`${styles.serviceCard} animate-on-scroll`}><div className={styles.stars}>★★★★★</div><p>"Best dental experience I've had. Painless procedure and friendly doctors. Highly recommended."</p><div className={styles.testiAuthor}>Meena Das, Cuttack</div></div>
    <div className={`${styles.serviceCard} animate-on-scroll`}><div className={styles.stars}>★★★★★</div><p>"Online booking worked perfectly. My MRI report was ready same day. Excellent service."</p><div className={styles.testiAuthor}>Prakash Mohanty, Puri</div></div>
  </div>
</section>
    </>
  )
}

export default Testimonials