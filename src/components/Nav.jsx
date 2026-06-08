import styles from '../css/nav.module.css'

function Nav() {
  return (
    <>
    <nav>
  <div className={styles.navInner}>
    <div className={styles.logo}>Medi<span>Care</span></div>
    <ul className={styles.navLinks}>
      <li><a href="#services">Services</a></li>
      <li><a href="#doctors">Doctors</a></li>
      <li><a href="#booking">Book</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className={styles.navCta} onclick="document.getElementById('booking').scrollIntoView({behavior:'smooth'})">Book Appointment</button>
  </div>
</nav>
    </>
    
  )
}

export default Nav