/* ================================
   VISUALIAN WEBSITE - SITE JS
   Interactive & Smooth Animations
   ================================ */

(function () {
  'use strict';

  // ========== INITIALIZATION ==========
  initAOS();
  initGSAP();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initBackToTop();
  initTestimonialSlider();
  initFormValidation();
  initLazyLoading();
  initParallax();

  // ========== AOS INITIALIZATION ==========
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
      });
    }
  }

  // ========== GSAP ANIMATIONS ==========
  function initGSAP() {
    if (typeof gsap === 'undefined') return;

    // Register ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero section animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero__description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero__buttons a', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.4')


    // Counter animation
    const counters = document.querySelectorAll('.hero .grid > div > span:first-child');
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const suffix = counter.textContent.replace(/[0-9]/g, '');

      gsap.from(counter, {
        scrollTrigger: {
          trigger: counter,
          start: 'top 100%',
          toggleActions: 'play none none none'
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        onUpdate: function () {
          counter.textContent = Math.ceil(counter.textContent) + suffix;
        }
      });
    });
  }

  // ========== NAVBAR SCROLL EFFECT ==========
  function initNavbar() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav__link');

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Update active nav link based on scroll position
      let current = '';
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });

      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });

    // Initial check
    updateNavbar();
  }

  // ========== MOBILE MENU ==========
  function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
      const icon = navToggle.querySelector('i');

      if (navMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.add('hidden');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.add('hidden');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // ========== SMOOTH SCROLL ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========== BACK TO TOP BUTTON ==========
  function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== TESTIMONIAL SLIDER ==========
  function initTestimonialSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    if (cards.length === 0) return;

    let currentSlide = 0;
    const totalSlides = cards.length;

    function showSlide(index) {
      // Remove active class from all
      cards.forEach(card => card.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Add active class to current
      cards[index].classList.add('active');
      dots[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', function () {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto slide
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const sliderContainer = document.querySelector('.testimonials__slider');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', function () {
        clearInterval(autoSlideInterval);
      });

      sliderContainer.addEventListener('mouseleave', function () {
        autoSlideInterval = setInterval(nextSlide, 5000);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });
  }

  // ========== FORM VALIDATION ==========
  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Field ini wajib diisi');
          } else {
            input.classList.remove('error');
            removeError(input);
          }

          // Email validation
          if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              isValid = false;
              input.classList.add('error');
              showError(input, 'Email tidak valid');
            }
          }

          // Phone validation
          if (input.type === 'tel' && input.value.trim()) {
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(input.value)) {
              isValid = false;
              input.classList.add('error');
              showError(input, 'Nomor telepon tidak valid');
            }
          }
        });

        if (isValid) {
          // Show success message
          showNotification('Terima kasih! Pesan Anda telah terkirim.', 'success');
          form.reset();
        }
      });

      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', function () {
          if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('error');
            showError(this, 'Field ini wajib diisi');
          } else {
            this.classList.remove('error');
            removeError(this);
          }
        });

        input.addEventListener('input', function () {
          if (this.classList.contains('error') && this.value.trim()) {
            this.classList.remove('error');
            removeError(this);
          }
        });
      });
    });
  }

  function showError(input, message) {
    removeError(input);
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = '#ef4444';
    error.style.fontSize = '0.875rem';
    error.style.marginTop = '0.25rem';
    error.style.display = 'block';
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  function removeError(input) {
    const error = input.parentNode.querySelector('.error-message');
    if (error) error.remove();
  }

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    const colors = {
      success: '#10b981',
      error: '#ef4444',
      info: '#3b82f6'
    };

    Object.assign(notification.style, {
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      background: colors[type] || colors.info,
      color: '#fff',
      padding: '1rem 1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      zIndex: '9999',
      animation: 'slideInRight 0.3s ease',
      maxWidth: '400px'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // ========== LAZY LOADING ==========
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ========== PARALLAX EFFECT ==========
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // ========== ANIMATIONS ==========
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    .error {
      border-color: #ef4444 !important;
    }

    /* Mobile menu animation */
    @media (max-width: 768px) {
      #nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: all 0.3s ease;
      }

      #nav-menu.hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
      }

      #nav-menu:not(.hidden) {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // ========== PERFORMANCE OPTIMIZATION ==========
  // Debounce function for scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ========== ACCESSIBILITY ==========
  // Add keyboard navigation support
  document.addEventListener('keydown', function (e) {
    // Skip to main content with "Ctrl/Cmd + Shift + M"
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
      e.preventDefault();
      const main = document.querySelector('main') || document.querySelector('section');
      if (main) main.focus();
    }
  });

  // Focus trap for modal dialogs (if any)
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  // ========== CONSOLE MESSAGE ==========
  console.log('%c🚀 Visualian Website', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
  console.log('%c✨ Built with HTML, TailwindCSS, GSAP & AOS', 'color: #6b7280; font-size: 14px;');
  console.log('%c💼 Looking for developers? Visit: visualian.id', 'color: #10b981; font-size: 14px;');

})();
