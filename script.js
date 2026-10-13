/**
 * ==========================================================================
 * RUBAYATE HASAN // PORTFOLIO JAVASCRIPT
 * Strictly Vanilla ES6+ JavaScript (Zero Frameworks, Zero Dependencies)
 * Upgrades:
 *  - Intersection Observer "Scroll Spy" with smooth .active class sync
 *  - Subtle Scroll Reveals (IntersectionObserver fade & slide-up)
 *  - Full Modal Accessibility: Focus Trapping, Shift+Tab cycle, ESC & Return Focus
 *  - WAI-ARIA Tablist Navigation (aria-selected, Arrow keys, tabindex)
 *  - Clipboard Actions, Contact Drafter, and Print Engine
 * ==========================================================================
 */

// Architectural Project Specifications Database
const PROJECT_BLUEPRINTS = {
  fabric_inventory: {
    title: "Fabric Inventory & Warehouse Management System",
    category: "Backend & Relational Database",
    role: "Full-Stack Backend Developer & Database Architect",
    stack: "PHP (OOP/Procedural), MySQL (InnoDB), JavaScript, Chart.js, HTML5, CSS3",
    overview: "A role-restricted Enterprise Resource Planning (ERP) web application engineered to eliminate high-risk paper ledgers in textile fabric warehousing. Designed to streamline multi-tier requisition pipelines, inventory depletion auditing, and automated purchase order generation.",
    specs: [
      { label: "Database Architecture", value: "Third Normal Form (3NF) relational schema with composite foreign keys and strict relational integrity constraints." },
      { label: "Concurrency Control", value: "InnoDB table engine with explicit ACID transactions (START TRANSACTION, COMMIT, ROLLBACK) preventing stock race conditions." },
      { label: "Access Control", value: "Granular Role-Based Access Control (RBAC) separating Store Keepers, Procurement Officers, and Executive Auditors." },
      { label: "Reporting & Auditing", value: "CSS print-optimized tabular audit manifests and Chart.js telemetry tracking historical fabric turnover rates." },
      { label: "Notification Triggers", value: "Deterministic automated threshold alerts triggered when raw stock falls below predefined reorder minimums." }
    ],
    technicalHighlights: [
      "Engineered automated reorder calculations preventing mill production halts due to raw textile shortages.",
      "Implemented parametrized database abstraction layers to neutralize SQL injection vulnerabilities across all inventory lookup endpoints.",
      "Constructed print-first ledger stylesheets allowing physical warehouse workers to print standardized dispatch and receiving slips directly."
    ]
  },

  fruit_detection: {
    title: "IoT-Enabled Real-Time Fruit Detection System",
    category: "Embedded IoT & Deep Learning Vision",
    role: "Computer Vision Engineer & Embedded Systems Developer",
    stack: "Python 3.x, Ultralytics YOLOv8, OpenCV, C++, ESP32-CAM, Arduino IDE",
    overview: "A distributed IoT computer vision pipeline streaming live optical frames from a low-power edge microcontroller (ESP32-CAM) to a remote workstation for hardware-accelerated deep learning inference. Solves edge compute constraints by offloading inference.",
    specs: [
      { label: "Edge Hardware", value: "ESP32-CAM module running custom C++ firmware (OV2640 sensor, 2.4 GHz 802.11b/g/n Wi-Fi)." },
      { label: "Frame Transmission", value: "High-throughput, low-overhead HTTP/MJPEG streaming socket pipeline over a local wireless subnetwork." },
      { label: "Neural Model", value: "Custom-trained Ultralytics YOLOv8 neural network fine-tuned on multi-class fruit defect & maturity datasets." },
      { label: "Benchmark Accuracy", value: "Achieved 0.928 mAP@0.5 across real-time evaluation batches under varying ambient lighting conditions." },
      { label: "Processing Latency", value: "Decoupled dual-thread ingestion: Thread A maintains network buffer; Thread B performs OpenCV transformations & GPU inference." }
    ],
    technicalHighlights: [
      "Decoupled edge frame acquisition from compute-intensive neural inference, bypassing ESP32 SRAM limitations.",
      "Achieved 0.928 mAP@0.5 with high frame rate throughput by implementing frame skipping and batch dimension optimization.",
      "Configured OpenCV preprocessing pipeline featuring automatic histogram equalization to maintain detection stability in varying greenhouse lighting."
    ]
  },

  irrigation_system: {
    title: "Object-Oriented Smart Irrigation System Simulation",
    category: "Systems & Object-Oriented Software",
    role: "C++ Software Engineer",
    stack: "C++17, Object-Oriented Architecture, Runtime Polymorphism, File I/O Streams",
    overview: "A modular, extensible software simulation model designed around strict Object-Oriented Design (OOD) principles. Simulates real-time soil moisture depletion dynamics, automated solenoid valve actuation, and persistent audit logging without hardware dependencies.",
    specs: [
      { label: "Core OOP Pattern", value: "Abstract Base Classes (`ISensor`, `IActuator`, `IrrigationController`) utilizing C++ virtual dispatch and pure virtual methods." },
      { label: "Mathematical Model", value: "Exponential soil drying curves governed by configurable evapotranspiration rates and environmental humidity factors." },
      { label: "Memory Management", value: "Zero memory leakage achieved through Resource Acquisition Is Initialization (RAII) and modern smart pointer ownership." },
      { label: "Data Persistence", value: "Robust `std::fstream` sequential logging recording timestamps, moisture readings, and valve cycle durations." },
      { label: "Extensibility", value: "Pluggable driver interface allowing newly implemented hardware protocols or simulated climate conditions without altering controller logic." }
    ],
    technicalHighlights: [
      "Designed clean inheritance hierarchies adhering to the Open/Closed Principle (OCP) and Liskov Substitution Principle (LSP).",
      "Eliminated raw pointer operations in favor of `std::unique_ptr` and structured deterministic cleanup cycles.",
      "Constructed a CLI dashboard rendering real-time ASCII moisture graphs and simulated pump status transitions."
    ]
  },

  survey_platform: {
    title: "Multi-Role Survey & Feedback Management Platform",
    category: "Backend & Web Architecture",
    role: "Full-Stack Web Developer",
    stack: "PHP, MySQL (InnoDB), JavaScript, Tailwind CSS, RESTful API",
    overview: "A full-stack feedback collection ecosystem featuring an interactive client-side questionnaire builder, role-restricted dashboard analytics, and atomic transaction guarantees for submission integrity.",
    specs: [
      { label: "Survey Form Engine", value: "Dynamic DOM-based questionnaire builder supporting multiple question types (Likert scale, multiple choice, free text, conditional branches)." },
      { label: "Data Integrity", value: "Atomic database transactions ensuring that multi-page survey responses are either committed in entirety or rolled back upon network interruption." },
      { label: "Authorization Model", value: "Multi-tier RBAC separating Respondent, Surveyor, and Administrator privileges with server-side session validation." },
      { label: "Security Hardening", value: "HTML-purified input sanitization, strict CSRF token validation on state-mutating requests, and PDO prepared statements." },
      { label: "Analytics Pipeline", value: "Aggregated SQL analytical queries computing response distributions, completion rates, and demographic breakdowns." }
    ],
    technicalHighlights: [
      "Engineered a normalized database schema accommodating heterogeneous survey structures without resorting to unindexed JSON blobs.",
      "Implemented client-side draft autosave backed by localStorage with seamless server synchronization.",
      "Designed a responsive administrative console providing instant analytical summaries without third-party cloud analytics dependencies."
    ]
  },

  portfolio_website: {
    title: "Personal Portfolio Website",
    category: "Front-End Engineering & Systems Design",
    role: "Front-End Engineer & UI/UX Designer",
    stack: "Vanilla HTML5, CSS3, Modern JavaScript (ES6+)",
    overview: "A high-performance personal developer portfolio engineered strictly with vanilla web standards. Developed under an editorial minimalist aesthetic with 1px architectural grids, zero pill badges, and an integrated print curriculum vitae engine.",
    specs: [
      { label: "Framework Dependency", value: "0 external JavaScript frameworks or UI component libraries; zero bundle overhead; instant First Contentful Paint." },
      { label: "Design Constitution", value: "Strict editorial typography hierarchy ('Poppins' with monospace accents), low-saturation palette, and negative space geometry." },
      { label: "Accessibility (a11y)", value: "Full keyboard navigation (Tab/Shift+Tab focus trap in dialogs, Escape-to-close, Return-focus), semantic landmarks, and WCAG AA contrast." },
      { label: "Print Optimization", value: "Comprehensive `@media print` stylesheet with URL expansion transforming the portfolio into a formal recruiter-ready technical CV." },
      { label: "Color System", value: "Pure CSS custom properties supporting an understated Off-White editorial daylight theme and Slate Charcoal night theme." }
    ],
    technicalHighlights: [
      "Built with strict Zero-Pill discipline: metadata rendered cleanly as unboxed text with typographic separators.",
      "Engineered an interactive architecture drawer modal with focus trapping and smooth backdrop transitions.",
      "Zero telemetry, zero external tracker scripts, and 100% portable single-directory deployability."
    ]
  }
};

// Initialize DOM Events when document is ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigationScrollSpy();
  initScrollReveals();
  initProjectFiltering();
  initProjectModal();
  initClipboardActions();
  initContactForm();
  initPrintButton();
});

/**
 * --------------------------------------------------------------------------
 * 1. THEME TOGGLING (Editorial Light & Editorial Dark)
 * --------------------------------------------------------------------------
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('rubayate_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  updateThemeToggleIcon();

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('rubayate_theme', newTheme);
    updateThemeToggleIcon();
  });
}

function updateThemeToggleIcon() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const currentTheme = document.documentElement.getAttribute('data-theme');
  const iconSpan = themeToggleBtn.querySelector('.theme-icon');
  if (iconSpan) {
    iconSpan.textContent = currentTheme === 'dark' ? '☀' : '☾';
  }
}

/**
 * --------------------------------------------------------------------------
 * 2. INTERSECTION OBSERVER "SCROLL SPY" & NAVIGATION
 * --------------------------------------------------------------------------
 */
function initNavigationScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Mobile menu drawer toggle
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (sections.length === 0) return;

  // Function to set the active link given an active section id
  const setActiveLink = (sectionId) => {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  // IntersectionObserver to detect which section is currently centered/active
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Fallback scroll listener for page bottom edge case (activates #contact)
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      setActiveLink('contact');
    }
  }, { passive: true });
}

/**
 * --------------------------------------------------------------------------
 * 3. SUBTLE SCROLL REVEALS (Intersection Observer Fade-In & Slide-Up)
 * --------------------------------------------------------------------------
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length === 0) return;

  // If browser doesn't support IntersectionObserver or user prefers reduced motion
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * --------------------------------------------------------------------------
 * 4. PROJECT FILTERING (WAI-ARIA Tablist, aria-selected & Keyboard Nav)
 * --------------------------------------------------------------------------
 */
function initProjectFiltering() {
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = document.querySelectorAll('.project-card');
  const counterSpan = document.getElementById('project-count-display');
  const tablist = document.querySelector('.filter-button-group');
  const projectsGrid = document.getElementById('projects-grid');

  if (filterButtons.length === 0) return;

  const selectTab = (btn) => {
    const filterCategory = btn.getAttribute('data-filter');
    const tabId = btn.getAttribute('id');

    // Update active states and ARIA attributes
    filterButtons.forEach(b => {
      const isSelected = b === btn;
      b.classList.toggle('active', isSelected);
      b.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      b.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    if (projectsGrid && tabId) {
      projectsGrid.setAttribute('aria-labelledby', tabId);
    }

    // Filter project cards in DOM
    let visibleCount = 0;
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterCategory === 'all' || cardCategory === filterCategory) {
        card.style.display = 'grid';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterSpan) {
      counterSpan.textContent = `Showing ${visibleCount} of ${projectCards.length} Projects`;
    }
  };

  // Click handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectTab(btn);
    });
  });

  // Keyboard navigation for WAI-ARIA tablist (ArrowLeft, ArrowRight, Home, End)
  if (tablist) {
    tablist.addEventListener('keydown', (e) => {
      const currentIndex = filterButtons.indexOf(document.activeElement);
      if (currentIndex === -1) return;

      let nextIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % filterButtons.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + filterButtons.length) % filterButtons.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = filterButtons.length - 1;
      }

      if (nextIndex !== null) {
        filterButtons[nextIndex].focus();
        selectTab(filterButtons[nextIndex]);
      }
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 5. MODAL ACCESSIBILITY WITH BULLETPROOF FOCUS TRAPPING
 * --------------------------------------------------------------------------
 */
function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalDialog = modalBackdrop?.querySelector('.modal-dialog');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const inspectButtons = document.querySelectorAll('.btn-inspect');

  if (!modalBackdrop || !modalDialog || !modalCloseBtn) return;

  const modalTitle = document.getElementById('modal-project-title');
  const modalCategory = document.getElementById('modal-project-category');
  const modalRole = document.getElementById('modal-project-role');
  const modalStack = document.getElementById('modal-project-stack');
  const modalOverview = document.getElementById('modal-project-overview');
  const modalSpecsBody = document.getElementById('modal-specs-table-body');
  const modalHighlightsList = document.getElementById('modal-highlights-list');

  let triggerButton = null;

  // Keyboard event handler for trapping focus and handling ESC
  const handleModalKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      // Find all current focusable elements inside the modal
      const focusableElements = Array.from(modalDialog.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(el => el.offsetParent !== null); // Ensure visible

      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: if on first element or modal container, wrap to last
        if (document.activeElement === firstElement || document.activeElement === modalDialog) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  // Open modal
  inspectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerButton = e.currentTarget;

      const projectId = btn.getAttribute('data-project');
      const data = PROJECT_BLUEPRINTS[projectId];
      if (!data) return;

      // Populate content
      modalTitle.textContent = data.title;
      modalCategory.textContent = data.category;
      modalRole.textContent = data.role;
      modalStack.textContent = data.stack;
      modalOverview.textContent = data.overview;

      // Populate specs table
      modalSpecsBody.innerHTML = '';
      data.specs.forEach(spec => {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = spec.label;
        const td = document.createElement('td');
        td.textContent = spec.value;
        tr.appendChild(th);
        tr.appendChild(td);
        modalSpecsBody.appendChild(tr);
      });

      // Populate highlights
      modalHighlightsList.innerHTML = '';
      data.technicalHighlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        modalHighlightsList.appendChild(li);
      });

      // Show modal
      modalBackdrop.classList.add('open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Attach keyboard focus trap
      document.addEventListener('keydown', handleModalKeyDown);

      // Shift DOM focus to the modal container / close button
      modalDialog.setAttribute('tabindex', '-1');
      modalCloseBtn.focus();
    });
  });

  // Close modal
  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Remove focus trap listener
    document.removeEventListener('keydown', handleModalKeyDown);

    // Return focus to the exact button that triggered the modal
    if (triggerButton && typeof triggerButton.focus === 'function') {
      triggerButton.focus();
    }
  };

  modalCloseBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 6. CLIPBOARD COPY UTILITIES & TOAST FEEDBACK
 * --------------------------------------------------------------------------
 */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch {
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied: ${textToCopy}`);
        } catch {
          showToast('Failed to copy to clipboard.');
        }
        document.body.removeChild(textArea);
      }
    });
  });
}

function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="color: var(--accent-primary);">✓</span> <span>${escapeHtml(message)}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * 7. CONTACT MESSAGE FORM DRAFTER
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-inquiry-form');
  const statusElement = document.getElementById('form-status-message');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name')?.value.trim();
    const email = document.getElementById('sender-email')?.value.trim();
    const subject = document.getElementById('sender-subject')?.value.trim() || 'Software Engineering Internship Opportunity';
    const message = document.getElementById('sender-message')?.value.trim();

    if (!name || !email || !message) {
      if (statusElement) {
        statusElement.textContent = 'Please fill out all required fields (Name, Email, Message).';
        statusElement.className = 'form-status error';
      }
      return;
    }

    const recipient = 'rubayethassan98@gmail.com';
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n[Sent from Rubayate Hasan Portfolio]`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    if (statusElement) {
      statusElement.textContent = 'Email client opened with pre-filled message. Thank you!';
      statusElement.className = 'form-status success';
    }

    showToast('Email client opened. Direct copy also available.');
  });
}

/**
 * --------------------------------------------------------------------------
 * 8. PRINT / EXPORT CV CONTROLS
 * --------------------------------------------------------------------------
 */
function initPrintButton() {
  const printButtons = document.querySelectorAll('.btn-print-cv');
  printButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}
