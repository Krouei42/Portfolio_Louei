    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 70 + 'ms';
      observer.observe(el);
    });

    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('open');
    }

    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      btn.textContent = 'Transmission Successful ✓';
      btn.style.background = 'var(--cyan)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Transmit Message →';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
      }, 3000);
    }