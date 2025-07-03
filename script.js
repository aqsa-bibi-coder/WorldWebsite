 const servicesTrigger = document.getElementById('servicesTrigger');
    const servicesDropdown = document.getElementById('servicesDropdown');
    const dropdownParents = document.querySelectorAll('.nav-item.dropdown-parent');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    // Desktop: show on hover for services mega dropdown
    function handleDesktopServicesDropdown() {
        servicesTrigger.addEventListener('mouseenter', () => {
            if (window.innerWidth > 960) {
                servicesDropdown.classList.add('active');
            }
        });

        servicesTrigger.addEventListener('mouseleave', () => {
            if (window.innerWidth > 960) {
                setTimeout(() => {
                    if (!servicesDropdown.matches(':hover')) {
                        servicesDropdown.classList.remove('active');
                    }
                }, 200);
            }
        });

        servicesDropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 960) {
                servicesDropdown.classList.add('active');
            }
        });

        servicesDropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 960) {
                servicesDropdown.classList.remove('active');
            }
        });
    }

    // Desktop: show on hover for simple dropdowns
    dropdownParents.forEach(parent => {
        const parentLink = parent.querySelector('a');
        const simpleDropdown = parent.querySelector('.simple-dropdown');

        parentLink.addEventListener('mouseenter', () => {
            if (window.innerWidth > 960) {
                simpleDropdown.style.display = 'block';
            }
        });

        parent.addEventListener('mouseleave', () => {
            if (window.innerWidth > 960) {
                setTimeout(() => {
                    if (!parent.matches(':hover')) {
                        simpleDropdown.style.display = 'none';
                    }
                }, 200);
            }
        });
    });

    // Mobile: Open mobile menu overlay
    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    // Mobile: Close mobile menu overlay
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        // Collapse all submenus when closing the main menu
        document.querySelectorAll('.mobile-menu-item.open').forEach(item => {
            item.classList.remove('open');
        });
    }

    // Mobile: Toggle submenu
    function toggleSubmenu(item) {
        if (window.innerWidth <= 960) {
            const submenu = item.nextElementSibling;
            // Check if the next sibling is a submenu
            if (submenu && submenu.classList.contains('mobile-submenu')) {
                item.classList.toggle('open');
                // Close other open submenus within the mobile menu content
                document.querySelectorAll('.mobile-menu-content > .mobile-menu-item.open').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });
            } else {
                // If it's a direct link, navigate
                const link = item.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        }
    }

    // Attach to window object to be accessible from inline onclick
    window.openMobileMenu = openMobileMenu;
    window.closeMobileMenu = closeMobileMenu;
    window.toggleSubmenu = toggleSubmenu;

    // Handle resize to reset mobile menu state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 960) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.querySelectorAll('.mobile-menu-item.open').forEach(item => {
                item.classList.remove('open');
            });
        }
    });

    // Initial binding for desktop dropdowns
    handleDesktopServicesDropdown();
//        const content = {
//   software: {
//     heading: "Custom Software Tailored to Your Business",
//     items: ["Web apps", "ERP/CRM systems", "Automation tools", "Third-party integrations", "Secure architecture"],
//     circle: "95%",
//     note: "Client satisfaction through custom-built software",
//     dummy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Nullam id dolor id nibh ultricies vehicula."
    
//   },

//   website: {
//     heading: "Beautiful and Functional Websites",
//     items: ["Responsive design", "CMS integration", "SEO-friendly", "Fast loading", "User-friendly navigation"],
//     circle: "90%",
//     note: "Users trust professionally designed websites"
//   },
//   application: {
//     heading: "Mobile and Desktop App Development",
//     items: ["Android/iOS apps", "Cross-platform", "Flutter/React Native", "UI/UX design", "App store deployment"],
//     circle: "88%",
//     note: "Boost engagement with smooth apps"
//   },
//   access: {
//     heading: "Advanced Access Control Systems",
//     items: ["RFID card entry", "Fingerprint/Face recognition", "Remote access", "Log tracking", "Secure locking"],
//     circle: "85%",
//     note: "Enhance office security and access"
//   },
//   cctv: {
//     heading: "24/7 Smart CCTV Surveillance",
//     items: ["HD IP cameras", "Night vision", "Remote view", "Cloud backup", "Motion alerts"],
//     circle: "92%",
//     note: "Improved safety with CCTV monitoring"
//   },
//   graphic: {
//     heading: "Creative Graphic Designing Services",
//     items: ["Logos & Branding", "Posters & Flyers", "Business cards", "Social media designs", "UI mockups"],
//     circle: "87%",
//     note: "Brand value increases with good design"
//   },
//   digital: {
//     heading: "Full-Service Digital Marketing",
//     items: ["SEO", "PPC Ads", "Social media marketing", "Email campaigns", "Analytics & Reports"],
//     circle: "89%",
//     note: "Grow audience & leads through digital presence"
//   },
//   network: {
//     heading: "Reliable Networking Solutions",
//     items: ["LAN/WAN setup", "Firewall", "WiFi coverage", "VPN & Remote access", "Server management"],
//     circle: "91%",
//     note: "Strong networks = smoother operations"
//   }
// };

// const tabs = document.querySelectorAll(".tab");
// const desktopText = document.getElementById("text-content");
// const desktopCircle = document.getElementById("circle-box");


// function renderContent(type) {
//   const data = content[type];
//   if (!data) return;

//   // Desktop content
//   desktopText.innerHTML = `
//     <h2>${data.heading}</h2>
//     <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
//     <div class="learn-more">LEARN MORE</div>
//   `;
//   desktopCircle.innerHTML = `
//     <div class="circle">${data.circle}</div>
//     <p>${data.note}</p>
//   `;
//   desktopText.innerHTML += `
//   <p style="margin-top:60px; font-size:18px; color:#666; text-align: justify; direction: ltr;">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   </p>
// `;

//   // Mobile content
//   const mobileDiv = document.querySelector(`.mobile-content[data-content="${type}"]`);
//   if (mobileDiv) {
//     mobileDiv.innerHTML = `
//       <div class="text-content">
//         <h2>${data.heading}</h2>
//         <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
//         <div class="learn-more">LEARN MORE</div>
//       </div>
//       <div class="circle-box">
//         <div class="circle">${data.circle}</div>
//         <p>${data.note}</p>
//       </div>
//     `;
//   }
// }

// // Initial load (desktop)
// renderContent("software");

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     const isMobile = window.innerWidth <= 768;
//     const type = tab.getAttribute("data-tab");

//     if (!isMobile) {
//       // Desktop: make tab active
//       document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
//       tab.classList.add("active");
//       renderContent(type);
//     } else {
//       // Mobile
//       const contentBox = tab.nextElementSibling;
//       const isOpen = contentBox.classList.contains("open");

//       // Close all tabs
//       document.querySelectorAll(".mobile-content").forEach(box => box.classList.remove("open"));
//       document.querySelectorAll(".tab").forEach(t => {
//         t.classList.remove("open");
//         t.classList.remove("active");
//       });

//       if (!isOpen) {
//         contentBox.classList.add("open");
//         tab.classList.add("open");
//         tab.classList.add("active"); // ✅ This line adds purple bg
//         renderContent(type);
//       }
//     }
//   });
// });
const content = {
  software: {
    heading: "Custom Software Tailored to Your Business",
    items: ["Web apps", "ERP/CRM systems", "Automation tools", "Third-party integrations", "Secure architecture"],
    circle: "95%",
    note: "Client satisfaction through custom-built software",
    description: "Our software solutions are fully customized to meet the exact needs of your business. From automation tools to secure integrations, we deliver scalable systems that drive growth and efficiency."
  },
  website: {
    heading: "Beautiful and Functional Websites",
    items: ["Responsive design", "CMS integration", "SEO-friendly", "Fast loading", "User-friendly navigation"],
    circle: "90%",
    note: "Users trust professionally designed websites",
    description: "We build visually appealing and high-performance websites that are fully optimized for SEO, speed, and user experience, helping your brand make a strong online impact."
  },
  application: {
    heading: "Mobile and Desktop App Development",
    items: ["Android/iOS apps", "Cross-platform", "Flutter/React Native", "UI/UX design", "App store deployment"],
    circle: "88%",
    note: "Boost engagement with smooth apps",
    description: "Our app development team creates seamless mobile and desktop apps tailored to your users' needs, combining sleek UI with powerful functionality."
  },
  access: {
    heading: "Advanced Access Control Systems",
    items: ["RFID card entry", "Fingerprint/Face recognition", "Remote access", "Log tracking", "Secure locking"],
    circle: "85%",
    note: "Enhance office security and access",
    description: "We install and manage intelligent access control systems that ensure secure, trackable, and restricted entry for better facility management and safety."
  },
  cctv: {
    heading: "24/7 Smart CCTV Surveillance",
    items: ["HD IP cameras", "Night vision", "Remote view", "Cloud backup", "Motion alerts"],
    circle: "92%",
    note: "Improved safety with CCTV monitoring",
    description: "Keep your premises protected with our smart CCTV surveillance systems featuring cloud storage, motion detection, and real-time remote monitoring."
  },
  graphic: {
    heading: "Creative Graphic Designing Services",
    items: ["Logos & Branding", "Posters & Flyers", "Business cards", "Social media designs", "UI mockups"],
    circle: "87%",
    note: "Brand value increases with good design",
    description: "Our design team crafts powerful visual identities — from logos to UI mockups — helping businesses communicate effectively and stand out creatively."
  },
  digital: {
    heading: "Full-Service Digital Marketing",
    items: ["SEO", "PPC Ads", "Social media marketing", "Email campaigns", "Analytics & Reports"],
    circle: "89%",
    note: "Grow audience & leads through digital presence",
    description: "We grow your digital footprint with data-driven strategies, combining SEO, ads, social media, and reporting to generate qualified leads and engagement."
  },
  network: {
    heading: "Reliable Networking Solutions",
    items: ["LAN/WAN setup", "Firewall", "WiFi coverage", "VPN & Remote access", "Server management"],
    circle: "91%",
    note: "Strong networks = smoother operations",
    description: "We design and implement secure, scalable networks — including VPNs, firewalls, and server systems — to support fast and reliable communication."
  }
};

const tabs = document.querySelectorAll(".tab");
const desktopText = document.getElementById("text-content");
const desktopCircle = document.getElementById("circle-box");

function renderContent(type) {
  const data = content[type];
  if (!data) return;

  // Desktop content
  desktopText.innerHTML = `
    <h2>${data.heading}</h2>
    <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
    <div class="learn-more">LEARN MORE</div>
    <p style="margin-top:60px; font-size:18px; color:#666; text-align: justify; direction: ltr;">
      ${data.description}
    </p>
  `;
  desktopCircle.innerHTML = `
    <div class="circle">${data.circle}</div>
    <p>${data.note}</p>
  `;

  // Mobile content
  const mobileDiv = document.querySelector(`.mobile-content[data-content="${type}"]`);
  if (mobileDiv) {
    mobileDiv.innerHTML = `
      <div class="text-content">
        <h2>${data.heading}</h2>
        <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
        <div class="learn-more">LEARN MORE</div>
      </div>
      <div class="circle-box">
        <div class="circle">${data.circle}</div>
        <p>${data.note}</p>
      </div>
      <p style="margin-top:15px; font-size:14px; color:#666;">${data.description}</p>
    `;
  }
}

// Initial content load
renderContent("software");

// Event listeners for tabs
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 768;
    const type = tab.getAttribute("data-tab");

    if (!isMobile) {
      document.querySelector(".tab.active")?.classList.remove("active");
      tab.classList.add("active");
      renderContent(type);
    } else {
      const contentBox = tab.nextElementSibling;
      const isOpen = contentBox.classList.contains("open");

      document.querySelectorAll(".mobile-content").forEach(box => box.classList.remove("open"));
      document.querySelectorAll(".tab").forEach(t => {
        t.classList.remove("open");
        t.classList.remove("active");
      });

      if (!isOpen) {
        contentBox.classList.add("open");
        tab.classList.add("open");
        tab.classList.add("active");
        renderContent(type);
      }
    }
  });
});
//     const content = {
//   software: {
//     heading: "Custom Software Tailored to Your Business",
//     items: ["Web apps", "ERP/CRM systems", "Automation tools", "Third-party integrations", "Secure architecture"],
//     circle: "95%",
//     note: "Client satisfaction through custom-built software",
//     dummy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Nullam id dolor id nibh ultricies vehicula."
    
//   },

//   website: {
//     heading: "Beautiful and Functional Websites",
//     items: ["Responsive design", "CMS integration", "SEO-friendly", "Fast loading", "User-friendly navigation"],
//     circle: "90%",
//     note: "Users trust professionally designed websites"
//   },
//   application: {
//     heading: "Mobile and Desktop App Development",
//     items: ["Android/iOS apps", "Cross-platform", "Flutter/React Native", "UI/UX design", "App store deployment"],
//     circle: "88%",
//     note: "Boost engagement with smooth apps"
//   },
//   access: {
//     heading: "Advanced Access Control Systems",
//     items: ["RFID card entry", "Fingerprint/Face recognition", "Remote access", "Log tracking", "Secure locking"],
//     circle: "85%",
//     note: "Enhance office security and access"
//   },
//   cctv: {
//     heading: "24/7 Smart CCTV Surveillance",
//     items: ["HD IP cameras", "Night vision", "Remote view", "Cloud backup", "Motion alerts"],
//     circle: "92%",
//     note: "Improved safety with CCTV monitoring"
//   },
//   graphic: {
//     heading: "Creative Graphic Designing Services",
//     items: ["Logos & Branding", "Posters & Flyers", "Business cards", "Social media designs", "UI mockups"],
//     circle: "87%",
//     note: "Brand value increases with good design"
//   },
//   digital: {
//     heading: "Full-Service Digital Marketing",
//     items: ["SEO", "PPC Ads", "Social media marketing", "Email campaigns", "Analytics & Reports"],
//     circle: "89%",
//     note: "Grow audience & leads through digital presence"
//   },
//   network: {
//     heading: "Reliable Networking Solutions",
//     items: ["LAN/WAN setup", "Firewall", "WiFi coverage", "VPN & Remote access", "Server management"],
//     circle: "91%",
//     note: "Strong networks = smoother operations"
//   }
// };

// const tabs = document.querySelectorAll(".tab");
// const desktopText = document.getElementById("text-content");
// const desktopCircle = document.getElementById("circle-box");


// function renderContent(type) {
//   const data = content[type];
//   if (!data) return;

//   // Desktop content
//   desktopText.innerHTML = `
//     <h2>${data.heading}</h2>
//     <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
//     <div class="learn-more">LEARN MORE</div>
//   `;
//   desktopCircle.innerHTML = `
//     <div class="circle">${data.circle}</div>
//     <p>${data.note}</p>
//   `;
//   desktopText.innerHTML += `
//   <p style="margin-top:60px; font-size:18px; color:#666; text-align: justify; direction: ltr;">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   </p>
// `;

//   // Mobile content
//   const mobileDiv = document.querySelector(`.mobile-content[data-content="${type}"]`);
//   if (mobileDiv) {
//     mobileDiv.innerHTML = `
//       <div class="text-content">
//         <h2>${data.heading}</h2>
//         <ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>
//         <div class="learn-more">LEARN MORE</div>
//       </div>
//       <div class="circle-box">
//         <div class="circle">${data.circle}</div>
//         <p>${data.note}</p>
//       </div>
//     `;
//   }
// }

// // Initial load (desktop)
// renderContent("software");

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     const isMobile = window.innerWidth <= 768;
//     const type = tab.getAttribute("data-tab");

//     if (!isMobile) {
//       // Desktop: make tab active
//       document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
//       tab.classList.add("active");
//       renderContent(type);
//     } else {
//       // Mobile
//       const contentBox = tab.nextElementSibling;
//       const isOpen = contentBox.classList.contains("open");

//       // Close all tabs
//       document.querySelectorAll(".mobile-content").forEach(box => box.classList.remove("open"));
//       document.querySelectorAll(".tab").forEach(t => {
//         t.classList.remove("open");
//         t.classList.remove("active");
//       });

//       if (!isOpen) {
//         contentBox.classList.add("open");
//         tab.classList.add("open");
//         tab.classList.add("active"); // ✅ This line adds purple bg
//         renderContent(type);
//       }
//     }
//   });
// });
    
 document.querySelectorAll('.step-form').forEach(form => {
      const inputField = form.querySelector('.inputField');
      const prevBtn = form.querySelector('.prevBtn');
      const nextBtn = form.querySelector('.nextBtn');
      const progressBar = form.previousElementSibling.querySelector('.progress-bar');
      const successMessage = form.querySelector('.success-msg');

      let step = 1;
      const formData = { email: '', name: '', phone: '', website: '' };

      function isValid(value) {
        if (step === 1) return /^\S+@\S+\.\S+$/.test(value);
        if (step === 2) return value.length >= 2;
        if (step === 3) return /^[0-9]{10,15}$/.test(value);
        if (step === 4) return value.length >= 3;
        return false;
      }

      function updateStep() {
        successMessage.style.display = "none";
        prevBtn.style.display = step === 1 ? "none" : "inline-block";

        switch (step) {
          case 1:
            inputField.type = "email";
            inputField.placeholder = "Email";
            inputField.value = formData.email;
            progressBar.style.width = "25%";
            nextBtn.textContent = "Next";
            break;
          case 2:
            inputField.type = "text";
            inputField.placeholder = "Name";
            inputField.value = formData.name;
            progressBar.style.width = "50%";
            nextBtn.textContent = "Next";
            break;
          case 3:
            inputField.type = "tel";
            inputField.placeholder = "Phone Number";
            inputField.value = formData.phone;
            progressBar.style.width = "75%";
            nextBtn.textContent = "Next";
            break;
          case 4:
            inputField.type = "text";
            inputField.placeholder = "Website";
            inputField.value = formData.website;
            progressBar.style.width = "100%";
            nextBtn.textContent = "Send";
            break;
        }
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = inputField.value.trim();
        if (!isValid(value)) {
          alert("Please enter a valid " + inputField.placeholder.toLowerCase());
          return;
        }

        switch (step) {
          case 1: formData.email = value; break;
          case 2: formData.name = value; break;
          case 3: formData.phone = value; break;
          case 4:
            formData.website = value;
            successMessage.style.display = "block";
            inputField.disabled = true;
            nextBtn.disabled = true;
            prevBtn.disabled = true;
            setTimeout(() => {
              step = 1;
              inputField.disabled = false;
              nextBtn.disabled = false;
              prevBtn.disabled = false;
              inputField.value = "";
              updateStep();
            }, 2500);
            return;
        }

        step++;
        updateStep();
      });

      prevBtn.addEventListener("click", () => {
        if (step > 1) {
          step--;
          updateStep();
        }
      });

      updateStep();
    });
