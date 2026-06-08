import styles from '..css/testimonials.module.css'

function Testimonials() {
  return (
    <>
    <section class={styles.testi}>
  <div className="section-label">Patient Stories</div>
  <h2>What Our Patients Say</h2>
  <div class={styles.testiGrid}>
    <div class={styles.testiCard}><div class={styles.stars}>★★★★★</div><p>"The cardiology team diagnosed my condition quickly. Truly professional and caring staff."</p><div class={styles.testiAuthor}>Suresh Kumar, Bhubaneswar</div></div>
    <div class={styles.testiCard}><div class={styles.stars}>★★★★★</div><p>"Best dental experience I've had. Painless procedure and friendly doctors. Highly recommended."</p><div class={styles.testiAuthor}>Meena Das, Cuttack</div></div>
    <div class={styles.testiCard}><div class={styles.stars}>★★★★★</div><p>"Online booking worked perfectly. My MRI report was ready same day. Excellent service."</p><div class={styles.testiAuthor}>Prakash Mohanty, Puri</div></div>
  </div>
</section>
    </>
  )
}

export default Testimonials