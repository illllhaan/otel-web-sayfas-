/* =====================================================
   İlhan Hotel Kapadokya - Ana JavaScript Dosyası
   Amaç: Menü, form doğrulama, filtreleme ve lightbox etkileşimleri
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initStickyHeaderEffect();
    initReservationForm();
    initRoomFiltering();
    initGalleryLightbox();
    initSmoothScroll();
});

/**
 * Mobil görünümde hamburger menüyü açıp kapatır.
 * Parametre almaz, sayfadaki .menu-toggle ve .nav-list elemanlarını kullanır.
 */
function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!toggle || !navList) return;

    toggle.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navList.addEventListener("click", (event) => {
        if (event.target.matches("a")) {
            navList.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}

/**
 * Sayfa aşağı kaydırıldığında sticky menüye gölge ve daha belirgin arka plan verir.
 * Parametre almaz, scroll event dinler.
 */
function initStickyHeaderEffect() {
    const header = document.querySelector("#site-header");

    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 60);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader);
}

/**
 * Rezervasyon formundaki zorunlu alanları, e-posta bilgisini ve tarih sırasını kontrol eder.
 * Form geçerliyse sayfa yenilenmeden başarı mesajı gösterir.
 */
function initReservationForm() {
    const form = document.querySelector("#reservation-form");
    const message = document.querySelector("#form-message");

    if (!form || !message) return;

    const fields = Array.from(form.querySelectorAll("input[required], select[required]"));
    const checkin = form.querySelector("#checkin");
    const checkout = form.querySelector("#checkout");

    const showMessage = (text, type) => {
        message.textContent = text;
        message.className = `form-message show ${type}`;
    };

    const markField = (field, isValid) => {
        field.classList.toggle("error", !isValid);
        field.setAttribute("aria-invalid", String(!isValid));
    };

    const validateField = (field) => {
        let isValid = field.value.trim() !== "";

        if (field.type === "email" && isValid) {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }

        markField(field, isValid);
        return isValid;
    };

    const validateDates = () => {
        if (!checkin || !checkout || !checkin.value || !checkout.value) return false;

        const startDate = new Date(checkin.value);
        const endDate = new Date(checkout.value);
        const isValid = startDate < endDate;

        markField(checkin, Boolean(checkin.value));
        markField(checkout, isValid);
        return isValid;
    };

    fields.forEach((field) => {
        field.addEventListener("input", () => validateField(field));
        field.addEventListener("change", () => {
            validateField(field);
            if (field === checkin || field === checkout) validateDates();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const requiredFieldsAreValid = fields.every(validateField);
        const datesAreValid = validateDates();

        if (!requiredFieldsAreValid || !datesAreValid) {
            showMessage("Lütfen eksik veya hatalı alanları düzeltin. Çıkış tarihi giriş tarihinden sonra olmalıdır.", "error");
            return;
        }

        const name = form.querySelector("#fullname").value.trim();
        const room = form.querySelector("#room-type").selectedOptions[0].textContent;
        showMessage(`${name}, ${room} için rezervasyon talebiniz alınmıştır. En kısa sürede sizinle iletişime geçilecektir.`, "success");
        form.reset();
        fields.forEach((field) => markField(field, true));
    });
}

/**
 * Odalar sayfasındaki kartları kapasite ve maksimum fiyat bilgisine göre filtreler.
 * Parametre almaz, kartların data-capacity ve data-price değerlerini okur.
 */
function initRoomFiltering() {
    const filterForm = document.querySelector("#room-filter-form");
    const cards = Array.from(document.querySelectorAll(".room-card"));
    const result = document.querySelector("#filter-result");

    if (!filterForm || cards.length === 0 || !result) return;

    const capacityFilter = filterForm.querySelector("#capacity-filter");
    const priceFilter = filterForm.querySelector("#price-filter");

    const applyFilters = () => {
        const minCapacity = Number(capacityFilter.value);
        const maxPrice = Number(priceFilter.value);
        let visibleCount = 0;

        cards.forEach((card) => {
            const capacity = Number(card.dataset.capacity);
            const price = Number(card.dataset.price);
            const isVisible = capacity >= minCapacity && price <= maxPrice;
            card.classList.toggle("hidden", !isVisible);
            if (isVisible) visibleCount += 1;
        });

        result.textContent = `${visibleCount} oda listeleniyor.`;
    };

    filterForm.addEventListener("change", applyFilters);
    filterForm.addEventListener("reset", () => {
        setTimeout(applyFilters, 0);
    });

    applyFilters();
}

/**
 * Galeri görsellerine tıklanınca büyük görseli modal/lightbox içinde gösterir.
 * Escape tuşu, kapatma butonu ve arka plan tıklaması ile modal kapanır.
 */
function initGalleryLightbox() {
    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = document.querySelector("#lightbox-image");
    const lightboxCaption = document.querySelector("#lightbox-caption");
    const closeButton = document.querySelector("#lightbox-close");
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));

    if (!lightbox || !lightboxImage || !lightboxCaption || !closeButton || galleryItems.length === 0) return;

    const openLightbox = (button) => {
        lightboxImage.src = button.dataset.full;
        lightboxImage.alt = button.querySelector("img").alt;
        lightboxCaption.textContent = button.dataset.caption;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        closeButton.focus();
    };

    const closeLightbox = () => {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
    };

    galleryItems.forEach((button) => {
        button.addEventListener("click", () => openLightbox(button));
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
}

/**
 * Aynı sayfa içindeki bağlantılarda akıcı kaydırma davranışı uygular.
 * Harici sayfa bağlantılarına müdahale etmez.
 */
function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}
