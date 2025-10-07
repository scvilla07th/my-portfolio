// Basic interactivity: mobile nav, smooth scroll, contact form stub, resume link print
document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => nav.classList.toggle('show'));

  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });

  // resume link prints/resume page should open
  const resumeLink = document.getElementById('downloadResume');
  if(resumeLink){
    resumeLink.addEventListener('click', (e)=>{
      // allow default navigation to resume.html; resume page has Print button
    });
  }
});

// contact form (non-server) — shows a friendly message and provides mailto fallback
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if(!name || !email || !message){
    status.textContent = 'Please complete all fields.';
    return false;
  }

  // This is a client-side placeholder. Replace with your backend or EmailJS integration.
  status.textContent = 'Thanks — your message looks good. Use the email button to send it directly.';
  // optionally open mailto
  // window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${encodeURIComponent(message + '\n\nReply to: ' + email)}`;
  return false;
}

function mailtoMe(){
  const name = document.getElementById('name').value.trim() || 'Contact';
  const email = document.getElementById('email').value.trim() || '';
  const msg = document.getElementById('message').value.trim() || 'Hi — I want to connect.';
  window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent('Portfolio: ' + name)}&body=${encodeURIComponent(msg + '\n\nReply to: ' + email)}`;
}
