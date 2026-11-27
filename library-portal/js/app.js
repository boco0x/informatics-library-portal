const translations = {
    id: {
        btnText: "English",
        navDashboard: "Dashboard",
        navBooks: "Buku Dosen & Materi",
        navPresentations: "Presentasi Terbaik",
        navGradProjects: "Proyek Tugas Akhir",
        navNewProjects: "Proyek Pilihan",
        logoutText: "Keluar",
        dashboardTitle: "Dashboard",
        subtitle: "Pusat arsip akademik, presentasi, dan proyek tim",
        searchPlaceholder: "Cari modul, topik, atau tag...",
        filterAll: "Semua",
        filterBooks: "Buku",
        filterPresentations: "Presentasi",
        filterProjects: "Proyek",
        progressLabel: "Kesiapan Konten & Prototipe Portal",
        statBooksLabel: "Buku Dosen",
        statBooksTag: "+2 minggu ini",
        statPresLabel: "Presentasi Terbaik",
        statPresTag: "Pilihan dosen",
        statGradLabel: "Proyek Tugas Akhir",
        statGradTag: "Diarsipkan",
        statSelLabel: "Proyek Pilihan",
        statSelTag: "Sprint aktif",
        booksTitle: "Buku Dosen & Materi",
        booksDesc: "Buku referensi dan materi kuliah yang direkomendasikan atau dipilih.",
        booksLink: "Buka Buku →",
        presTitle: "Presentasi Terbaik",
        presDesc: "Presentasi mahasiswa terbaik yang menjadi rujukan di kelas.",
        presLink: "Lihat Slide →",
        gradTitle: "Proyek Tugas Akhir",
        gradDesc: "Arsip proyek tugas akhir mahasiswa sebelumnya dan dokumentasi sistem.",
        gradLink: "Jelajahi Arsip →",
        selTitle: "Proyek Pilihan",
        selDesc: "Proyek bagus dan inovatif yang dipilih oleh tim kami.",
        selLink: "Lihat Pilihan →",
        // Books page
        book1Title: "Pengantar Informatika",
        book1Desc: "Buku referensi inti untuk konsep dasar komputasi dan informatika.",
        book2Title: "Rekayasa Perangkat Lunak & SDLC",
        book2Desc: "Panduan desain sistem, pengujian, dan alur kerja Agile.",
        // Presentations page
        presPageTitle: "Presentasi Mahasiswa Terbaik",
        pres1Title: "Scrum & Perencanaan Sprint",
        pres1Desc: "Presentasi mahasiswa yang menyoroti peran, backlog, dan review sprint.",
        pres2Title: "Dasar Desain Basis Data",
        pres2Desc: "Penjelasan jelas tentang tabel, primary key, dan struktur relasional.",
        // Graduation projects page
        gradPageTitle: "Proyek Tugas Akhir",
        grad1Title: "Sistem Arsip Kampus Pintar",
        grad1Desc: "Platform web untuk mengatur dokumen akademik dan catatan tugas akhir.",
        grad2Title: "Pelacakan Peminjaman Digital",
        grad2Desc: "Sistem untuk melacak riwayat peminjaman dan ketersediaan sumber daya.",
        // Selected projects page
        selPageTitle: "Proyek Bagus & Pilihan",
        sel1Title: "Pusat Sumber Daya Open-Source",
        sel1Desc: "Repositori terkurasi untuk buku, slide, dan karya mahasiswa.",
        sel2Title: "Etalase Proyek Mahasiswa",
        sel2Desc: "Etalase bersih yang menampilkan ide terbaik dan prototipe tim."
    },
    en: {
        btnText: "Bahasa Indonesia",
        navDashboard: "Dashboard",
        navBooks: "Lecturer Books",
        navPresentations: "Top Presentations",
        navGradProjects: "Graduation Projects",
        navNewProjects: "Selected Projects",
        logoutText: "Logout",
        dashboardTitle: "Dashboard",
        subtitle: "Academic archive, presentations, and team projects hub",
        searchPlaceholder: "Search modules, topics, or tags...",
        filterAll: "All",
        filterBooks: "Books",
        filterPresentations: "Presentations",
        filterProjects: "Projects",
        progressLabel: "Portal Content & Prototype Readiness",
        statBooksLabel: "Lecturer Books",
        statBooksTag: "+2 this week",
        statPresLabel: "Top Presentations",
        statPresTag: "Lecturer picked",
        statGradLabel: "Graduation Projects",
        statGradTag: "Archived",
        statSelLabel: "Selected Projects",
        statSelTag: "Active sprint",
        booksTitle: "Lecturer Books",
        booksDesc: "Books and references recommended or written by lecturers for core coursework.",
        booksLink: "Open Books →",
        presTitle: "Top Presentations",
        presDesc: "High-rated student presentations praised by lecturers as references.",
        presLink: "View Slides →",
        gradTitle: "Graduation Projects",
        gradDesc: "Archive of previous student graduation projects and system documentation.",
        gradLink: "Browse Archive →",
        selTitle: "Selected Projects",
        selDesc: "Good and innovative projects chosen by our team to showcase and build.",
        selLink: "Explore Picks →",
        // Books page
        book1Title: "Introduction to Informatics",
        book1Desc: "Core reference book assigned for foundational computing concepts.",
        book2Title: "Software Engineering & SDLC",
        book2Desc: "Guide covering system design, testing, and Agile workflows.",
        // Presentations page
        presPageTitle: "Top Student Presentations",
        pres1Title: "Scrum & Sprint Planning",
        pres1Desc: "Student presentation highlighting roles, backlogs, and sprint reviews.",
        pres2Title: "Database Design Basics",
        pres2Desc: "Clear walkthrough of tables, primary keys, and relational structure.",
        // Graduation projects page
        gradPageTitle: "Graduation Projects",
        grad1Title: "Smart Campus Archiving System",
        grad1Desc: "Web platform for organizing academic documents and thesis records.",
        grad2Title: "Digital Lending & Tracking",
        grad2Desc: "System built to track borrowing history and resource availability.",
        // Selected projects page
        selPageTitle: "Good & Selected Projects",
        sel1Title: "Open-Source Resource Hub",
        sel1Desc: "Curated repository for books, slides, and student work.",
        sel2Title: "Student Project Showcase",
        sel2Desc: "Clean showcase highlighting top ideas and team prototypes."
    }
};

const applyLanguage = (lang) => {
    const t = translations[lang] || translations.en;
    sessionStorage.setItem("portalLang", lang);

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = t.btnText;

    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    };

    // Sidebar translation across all pages
    const navLinks = document.querySelectorAll(".sidebar .nav-links a");
    if (navLinks[0]) navLinks[0].textContent = t.navDashboard;
    if (navLinks[1]) navLinks[1].textContent = t.navBooks;
    if (navLinks[2]) navLinks[2].textContent = t.navPresentations;
    if (navLinks[3]) navLinks[3].textContent = t.navGradProjects;
    if (navLinks[4]) navLinks[4].textContent = t.navNewProjects;
    setText(".sidebar .logout-btn", t.logoutText);

    // Dashboard specific elements
    const isDashboard = Boolean(document.getElementById("dashCardsGrid"));
    if (isDashboard) {
        setText(".header-bar h1", t.dashboardTitle);
        setText(".subtitle", t.subtitle);
        setText('.filter-btn[data-filter="all"]', t.filterAll);
        setText('.filter-btn[data-filter="books"]', t.filterBooks);
        setText('.filter-btn[data-filter="presentations"]', t.filterPresentations);
        setText('.filter-btn[data-filter="projects"]', t.filterProjects);
        setText(".progress-info span", t.progressLabel);

        const statCards = document.querySelectorAll(".stats-grid .stat-card");
        if (statCards[0]) {
            statCards[0].querySelector(".stat-label").textContent = t.statBooksLabel;
            statCards[0].querySelector(".stat-tag").textContent = t.statBooksTag;
        }
        if (statCards[1]) {
            statCards[1].querySelector(".stat-label").textContent = t.statPresLabel;
            statCards[1].querySelector(".stat-tag").textContent = t.statPresTag;
        }
        if (statCards[2]) {
            statCards[2].querySelector(".stat-label").textContent = t.statGradLabel;
            statCards[2].querySelector(".stat-tag").textContent = t.statGradTag;
        }
        if (statCards[3]) {
            statCards[3].querySelector(".stat-label").textContent = t.statSelLabel;
            statCards[3].querySelector(".stat-tag").textContent = t.statSelTag;
        }

        const cardsList = document.querySelectorAll("#dashCardsGrid .card");
        if (cardsList[0]) {
            cardsList[0].querySelector("h3").textContent = t.booksTitle;
            cardsList[0].querySelector("p").textContent = t.booksDesc;
            cardsList[0].querySelector(".card-link").textContent = t.booksLink;
        }
        if (cardsList[1]) {
            cardsList[1].querySelector("h3").textContent = t.presTitle;
            cardsList[1].querySelector("p").textContent = t.presDesc;
            cardsList[1].querySelector(".card-link").textContent = t.presLink;
        }
        if (cardsList[2]) {
            cardsList[2].querySelector("h3").textContent = t.gradTitle;
            cardsList[2].querySelector("p").textContent = t.gradDesc;
            cardsList[2].querySelector(".card-link").textContent = t.gradLink;
        }
        if (cardsList[3]) {
            cardsList[3].querySelector("h3").textContent = t.selTitle;
            cardsList[3].querySelector("p").textContent = t.selDesc;
            cardsList[3].querySelector(".card-link").textContent = t.selLink;
        }

        const searchEl = document.getElementById("dashSearch");
        if (searchEl) searchEl.placeholder = t.searchPlaceholder;
    }

    // Subpages translation
    const path = window.location.pathname;
    const subCards = document.querySelectorAll(".cards-grid .card");

    if (path.endsWith("books.html")) {
        setText(".header-bar h1", t.booksTitle);
        if (subCards[0]) {
            subCards[0].querySelector("h3").textContent = t.book1Title;
            subCards[0].querySelector("p").textContent = t.book1Desc;
        }
        if (subCards[1]) {
            subCards[1].querySelector("h3").textContent = t.book2Title;
            subCards[1].querySelector("p").textContent = t.book2Desc;
        }
    } else if (path.endsWith("presentations.html")) {
        setText(".header-bar h1", t.presPageTitle);
        if (subCards[0]) {
            subCards[0].querySelector("h3").textContent = t.pres1Title;
            subCards[0].querySelector("p").textContent = t.pres1Desc;
        }
        if (subCards[1]) {
            subCards[1].querySelector("h3").textContent = t.pres2Title;
            subCards[1].querySelector("p").textContent = t.pres2Desc;
        }
    } else if (path.endsWith("grad-projects.html")) {
        setText(".header-bar h1", t.gradPageTitle);
        if (subCards[0]) {
            subCards[0].querySelector("h3").textContent = t.grad1Title;
            subCards[0].querySelector("p").textContent = t.grad1Desc;
        }
        if (subCards[1]) {
            subCards[1].querySelector("h3").textContent = t.grad2Title;
            subCards[1].querySelector("p").textContent = t.grad2Desc;
        }
    } else if (path.endsWith("new-projects.html")) {
        setText(".header-bar h1", t.selPageTitle);
        if (subCards[0]) {
            subCards[0].querySelector("h3").textContent = t.sel1Title;
            subCards[0].querySelector("p").textContent = t.sel1Desc;
        }
        if (subCards[1]) {
            subCards[1].querySelector("h3").textContent = t.sel2Title;
            subCards[1].querySelector("p").textContent = t.sel2Desc;
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const roleSelect = document.getElementById("userRole");
            const role = roleSelect ? roleSelect.value : "student";
            const userInput = document.getElementById("username");
            const user = (userInput && userInput.value.trim()) ? userInput.value.trim() : "Student";

            sessionStorage.setItem("portalUser", user);
            sessionStorage.setItem("portalRole", role);
            window.location.href = "pages/dashboard.html";
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("regName");
            const roleSelect = document.getElementById("regRole");
            const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "New User";
            const role = roleSelect ? roleSelect.value : "student";

            sessionStorage.setItem("portalUser", name);
            sessionStorage.setItem("portalRole", role);
            window.location.href = "index.html";
        });
    }

    const welcomeText = document.getElementById("welcomeText");
    if (welcomeText) {
        const savedUser = sessionStorage.getItem("portalUser") || "Guest";
        const savedRole = sessionStorage.getItem("portalRole") || "user";
        welcomeText.textContent = `${savedUser} • ${savedRole}`;
    }

    const searchInput = document.getElementById("dashSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll("#dashCardsGrid .card");

    if (searchInput && cards.length > 0) {
        let activeFilter = "all";

        const applyFilters = () => {
            const query = searchInput.value.trim().toLowerCase();
            cards.forEach((card) => {
                const category = card.getAttribute("data-category");
                const text = card.textContent.toLowerCase();
                const matchesCategory = activeFilter === "all" || category === activeFilter;
                const matchesQuery = !query || text.includes(query);
                card.style.display = (matchesCategory && matchesQuery) ? "" : "none";
            });
        };

        searchInput.addEventListener("input", applyFilters);

        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                filterButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                activeFilter = btn.getAttribute("data-filter") || "all";
                applyFilters();
            });
        });
    }

    const savedLang = sessionStorage.getItem("portalLang") || "en";
    applyLanguage(savedLang);

    const langToggleBtn = document.getElementById("langToggle");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const current = sessionStorage.getItem("portalLang") || "en";
            applyLanguage(current === "en" ? "id" : "en");
        });
    }
});