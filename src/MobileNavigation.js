import React, { useState } from 'react';

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    // Скрываем меню при клике на ссылку
    setIsMenuOpen(false);
    
    // Плавная прокрутка к секции
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'education', label: 'Образование' },
    { id: 'experience', label: 'Опыт работы' },
    { id: 'achievements', label: 'Достижения' },
    { id: 'courses', label: 'Курсы' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <nav className="mobile-nav">
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMenu}
        aria-label="Открыть меню навигации"
      >
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        Меню
      </button>
      
      <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : 'hidden'}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="mobile-nav-item"
            onClick={() => handleLinkClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Overlay для закрытия меню при клике вне его */}
      {isMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <style jsx>{`
        .mobile-nav {
          display: none;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #343a40;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        @media screen and (max-width: 768px) {
          .mobile-nav {
            display: block;
          }
        }

        .mobile-nav-toggle {
          background: #007bff;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background-color 0.3s ease;
        }

        .mobile-nav-toggle:hover {
          background-color: #0056b3;
        }

        .hamburger-icon {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .hamburger-icon span {
          width: 20px;
          height: 2px;
          background-color: white;
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .mobile-nav-menu {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          background: white;
          border-radius: 6px;
          margin-top: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          overflow: hidden;
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease;
        }

        .mobile-nav-menu.hidden {
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
        }

        .mobile-nav-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .mobile-nav-item {
          display: block;
          width: 100%;
          padding: 15px 20px;
          text-decoration: none;
          color: #333;
          border: none;
          background: none;
          text-align: left;
          font-size: 16px;
          cursor: pointer;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
        }

        .mobile-nav-item:hover {
          background-color: #f8f9fa;
          color: #007bff;
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-nav-item:active {
          background-color: #e9ecef;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          z-index: 999;
        }

        /* Анимация гамбургер иконки */
        .mobile-nav-toggle:active .hamburger-icon span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-nav-toggle:active .hamburger-icon span:nth-child(2) {
          opacity: 0;
        }

        .mobile-nav-toggle:active .hamburger-icon span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      `}</style>
    </nav>
  );
};

export default MobileNavigation;
