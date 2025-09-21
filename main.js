// Основной код JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Элементы DOM
  const mobileMenuButtons = document.querySelectorAll(
    ".md\\:hidden.flex.items-center"
  );
  const mobileMenu = document.getElementById("mobileMenu");
  const privacyPolicyBtn = document.getElementById("privacyPolicyBtn");
  const privacyPolicyModal = document.getElementById("privacyPolicyModal");
  const closePrivacyPolicy = document.getElementById("closePrivacyPolicy");

  const cookieConsent = document.getElementById("cookieConsent");
  const cookieInfoBtn = document.getElementById("cookieInfo");
  const cookieInfoModal = document.getElementById("cookieInfoModal");
  const closeCookieInfo = document.querySelector(".closeCookieInfo");
  const acceptCookies = document.getElementById("acceptCookies");
  const declineCookies = document.getElementById("declineCookies");

  // Функции для мобильного меню
  function toggleMobileMenu() {
    const isHidden =
      mobileMenu.style.display === "none" || mobileMenu.style.display === "";
    mobileMenu.style.display = isHidden ? "block" : "none";
  }

  // Функции для модальных окон (используем display)
  function openModal(modal) {
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function setupModal(openButton, modal, closeButton) {
    if (openButton && modal) {
      openButton.addEventListener("click", () => openModal(modal));
    }

    if (closeButton && modal) {
      closeButton.addEventListener("click", () => closeModal(modal));
    }

    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  }

  // Функции для cookie
  function checkCookieConsent() {
    if (!localStorage.getItem("cookieConsent")) {
      cookieConsent.style.display = "block";
    } else {
      cookieConsent.style.display = "none";
    }
  }

  function setCookieConsent(status) {
    localStorage.setItem("cookieConsent", status);
    cookieConsent.style.display = "none";
  }

  // Инициализация
  function init() {
    // Мобильное меню
    mobileMenuButtons.forEach((button) => {
      button.addEventListener("click", toggleMobileMenu);
    });

    // Модальные окна
    setupModal(privacyPolicyBtn, privacyPolicyModal, closePrivacyPolicy);
    setupModal(cookieInfoBtn, cookieInfoModal, closeCookieInfo);

    // Cookie consent
    checkCookieConsent();

    if (acceptCookies) {
      acceptCookies.addEventListener("click", () =>
        setCookieConsent("accepted")
      );
    }

    if (declineCookies) {
      declineCookies.addEventListener("click", () =>
        setCookieConsent("declined")
      );
    }
  }

  // Запуск инициализации
  init();
});
