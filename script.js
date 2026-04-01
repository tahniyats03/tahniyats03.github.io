# Tahniyat Shaikh Portfolio Website

Copy each file into your project folder with the exact names.

---

# index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tahniyat Shaikh | Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="bg-blur blur1"></div>
  <div class="bg-blur blur2"></div>

  <nav class="navbar">
    <div class="logo">Tahniyat.</div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section class="hero">
    <div class="hero-text">
      <p class="small-title">HELLO, I'M</p>
      <h1>Tahniyat Shaikh</h1>
      <h2>BCA Student & Aspiring Web Developer</h2>
      <p class="hero-desc">
        Passionate about creating beautiful websites, learning new technologies,
        and building creative projects.
      </p>

      <div class="hero-buttons">
        <a href="#projects" class="btn primary">View Projects</a>
        <a href="#contact" class="btn secondary">Contact Me</a>
      </div>
    </div>

    <div class="hero-card">
      <div class="card-glow"></div>
      <h3>Future Goals</h3>
      <p>✔ Become a skilled Web Developer</p>
      <p>✔ Learn React & Full Stack</p>
      <p>✔ Build amazing projects in college</p>
    </div>
  </section>

  <section id="about" class="section glass">
    <h2>About Me</h2>
    <p>
      I am a motivated BCA student at MIT Vishwapragya University, Solapur.
      I love web development, coding, and learning new technologies.
      I enjoy turning ideas into stylish and interactive websites.
    </p>
  </section>

  <section id="skills" class="section">
    <h2>Technical Skills</h2>

    <div class="skills-grid">
      <div class="skill-card">
        <span>🌐</span>
        <h3>Frontend</h3>
        <p>HTML, CSS, JavaScript, React</p>
      </div>

      <div class="skill-card">
        <span>💻</span>
        <h3>Programming</h3>
        <p>Java, C, Python</p>
      </div>

      <div class="skill-card">
        <span>🎓</span>
        <h3>Certifications</h3>
        <p>HTML, CSS & Java Certification from Johns Hopkins University</p>
      </div>
    </div>
  </section>

  <section id="projects" class="section">
    <h2>Projects</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Restaurant Management System</h3>
        <p>
          An integrated project made to manage restaurant orders, bills,
          and customer details efficiently.
        </p>
      </div>

      <div class="project-card">
        <h3>Portfolio Website</h3>
        <p>
          A personal website to showcase my skills, projects, and achievements.
        </p>
      </div>

      <div class="project-card">
        <h3>Resume Website</h3>
        <p>
          A digital resume website with modern design and responsive layout.
        </p>
      </div>
    </div>
  </section>

  <section id="contact" class="section glass">
    <h2>Contact Me</h2>

    <div class="contact-box">
      <p>📧 tahniyats3e@gmail.com</p>
      <p>📱 +91 7219071544</p>
    </div>
  </section>

  <footer>
    <p id="year"></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

# style.css

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  scroll-behavior:smooth;
}

body{
  font-family:'Poppins',sans-serif;
  background: linear-gradient(135deg,#0f172a,#1e1b4b,#312e81);
  color:white;
  min-height:100vh;
  overflow-x:hidden;
}

.bg-blur{
  position:fixed;
  border-radius:50%;
  filter:blur(120px);
  z-index:-1;
}

.blur1{
  width:250px;
  height:250px;
  background:#7c3aed;
  top:50px;
  left:50px;
}

.blur2{
  width:300px;
  height:300px;
  background:#06b6d4;
  bottom:50px;
  right:50px;
}

.navbar{
  width:90%;
  margin:20px auto;
  padding:18px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.15);
  backdrop-filter:blur(12px);
  border-radius:20px;
  position:sticky;
  top:15px;
  z-index:100;
}

.logo{
  font-size:1.5rem;
  font-weight:700;
  color:#c084fc;
}

.navbar ul{
  display:flex;
  list-style:none;
  gap:25px;
}

.navbar a{
  text-decoration:none;
  color:white;
  font-weight:500;
  transition:0.3s;
}

.navbar a:hover{
  color:#67e8f9;
}

.hero{
  width:90%;
  margin:60px auto;
  display:grid;
  grid-template-columns:1.3fr 1fr;
  gap:50px;
  align-items:center;
}

.small-title{
  color:#67e8f9;
  letter-spacing:3px;
  margin-bottom:10px;
}

.hero h1{
  font-size:4rem;
  line-height:1.1;
}

.hero h2{
  font-size:1.7rem;
  color:#cbd5e1;
  margin:15px 0;
}

.hero-desc{
  color:#d1d5db;
  max-width:600px;
  line-height:1.8;
}

.hero-buttons{
  margin-top:30px;
  display:flex;
  gap:15px;
}

.btn{
  padding:14px 28px;
  border-radius:14px;
  text-decoration:none;
  font-weight:600;
  transition:0.3s;
}

.primary{
  background:linear-gradient(90deg,#8b5cf6,#06b6d4);
  color:white;
}

.secondary{
  border:1px solid rgba(255,255,255,0.3);
  color:white;
}

.btn:hover{
  transform:translateY(-4px);
  box-shadow:0 12px 30px rgba(0,0,0,0.3);
}

.hero-card,
.glass,
.skill-card,
.project-card,
.contact-box{
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.12);
  backdrop-filter:blur(14px);
  border-radius:24px;
}

.hero-card{
  padding:35px;
  position:relative;
  overflow:hidden;
}

.card-glow{
  position:absolute;
  width:180px;
  height:180px;
  background:#8b5cf6;
  filter:blur(80px);
  top:-40px;
  right:-40px;
}

.hero-card h3{
  margin-bottom:20px;
  font-size:1.6rem;
}

.hero-card p{
  margin:15px 0;
  color:#e5e7eb;
}

.section{
  width:90%;
  margin:50px auto;
  padding:50px;
}

.section h2{
  font-size:2.3rem;
  margin-bottom:30px;
  text-align:center;
}

.section p{
  text-align:center;
  line-height:1.8;
  color:#d1d5db;
}

.skills-grid,
.projects-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
}

.skill-card,
.project-card{
  padding:30px;
  transition:0.3s;
}

.skill-card:hover,
.project-card:hover{
  transform:translateY(-8px);
  box-shadow:0 15px 40px rgba(0,0,0,0.3);
}

.skill-card span{
  font-size:2rem;
}

.skill-card h3,
.project-card h3{
  margin:18px 0;
}

.contact-box{
  padding:30px;
  max-width:500px;
  margin:0 auto;
  text-align:center;
}

.contact-box p{
  margin:12px 0;
  font-size:1.1rem;
}

footer{
  text-align:center;
  padding:30px;
  color:#cbd5e1;
}

@media(max-width:900px){
  .hero{
    grid-template-columns:1fr;
    text-align:center;
  }

  .hero-buttons{
    justify-content:center;
  }

  .navbar{
    flex-direction:column;
    gap:15px;
  }

  .navbar ul{
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero h1{
    font-size:3rem;
  }

  .section{
    padding:35px 20px;
  }
}
```

---

# script.js

```javascript
const year = document.getElementById("year");
year.innerText = `© ${new Date().getFullYear()} Tahniyat Shaikh | All Rights Reserved`;

const cards = document.querySelectorAll('.skill-card, .project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});
```

---

# Extra Idea

If you want to impress your HOD even more, later you can add:

* Your photo in the hero section
* A downloadable resume button
* Animated typing effect for your role
* GitHub and LinkedIn icons
* A dark/light mode toggle
* Small project screenshots inside project cards
