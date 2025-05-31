import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail, Phone, MapPin, User, BookOpen, Award, Clock,} from 'lucide-react';
import ContactForm from './ContactForm';
import MobileNavigation from './MobileNavigation';
import './mobile.css';

const EducatorWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('ru');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const translations = {
    ru: {
      nav: {
        home: 'Главная',
        news: 'Новости',
        about: 'Об авторе',
        contact: 'Обратная связь',
        services: 'Продукты и услуги'
      },
      header: {
        title: 'Педагог ЮФУ',
        subtitle: 'Современное образование для успешного будущего'
      },
      footer: {
        contact: 'Контакты',
        email: 'pedagogyufu@example.com',
        phone: '+7 (863) 250-59-00',
        address: 'г. Ростов-на-Дону, ул. Большая Садовая, 105/42'
      },
      tags: ['Математика', 'Физика', 'Репетиторство', 'ЕГЭ', 'ОГЭ', 'Олимпиады', 'ЮФУ'],
      pages: {
        home: {
          title: 'Добро пожаловать!',
          content: 'Преподаватель Южного федерального университета с многолетним опытом работы. Специализируюсь на подготовке к экзаменам и развитии математических и физических способностей учащихся.'
        },
        news: {
          title: 'Новости',
          items: [
            { date: '20.05.2025', title: 'Открыт набор на летние курсы ЮФУ', content: 'Начинается запись на интенсивные курсы подготовки к ЕГЭ по математике и физике при ЮФУ.' },
            { date: '15.05.2025', title: 'Успехи учеников на олимпиаде ЮФУ', content: 'Мои ученики заняли призовые места на региональной олимпиаде по математике ЮФУ.' },
            { date: '10.05.2025', title: 'Новая методика преподавания', content: 'Внедрена инновационная методика изучения высшей математики, разработанная на базе ЮФУ.' },
            { date: '05.05.2025', title: 'Научная конференция в ЮФУ', content: 'Участие в международной конференции по современным методам обучения математике.' }
          ]
        },
        about: {
          title: 'Обо мне',
          content: 'Доцент кафедры высшей математики Южного федерального университета, кандидат физико-математических наук. Стаж преподавательской деятельности - 12 лет.',
          education: 'ЮФУ, механико-математический факультет, кандидат физико-математических наук',
          experience: '12 лет преподавательской деятельности в ЮФУ',
          achievements: 'Автор 25+ научных публикаций, подготовил более 150 студентов к успешной сдаче экзаменов'
        },
        contact: {
          title: 'Обратная связь',
          subtitle: 'Свяжитесь со мной для консультации',
          form: {
            name: 'Имя',
            email: 'Email',
            message: 'Сообщение',
            send: 'Отправить'
          }
        },
        services: {
          title: 'Продукты и услуги',
          items: [
            { service: 'Индивидуальные занятия', price: '2500 руб/час', description: 'Персональный подход к каждому студенту' },
            { service: 'Групповые занятия', price: '1500 руб/час', description: 'Занятия в малых группах (2-4 человека)' },
            { service: 'Подготовка к ЕГЭ', price: '3000 руб/час', description: 'Интенсивная подготовка к экзамену с преподавателем ЮФУ' },
            { service: 'Подготовка к ОГЭ', price: '2500 руб/час', description: 'Подготовка к государственной итоговой аттестации' },
            { service: 'Подготовка к поступлению в ЮФУ', price: '3500 руб/час', description: 'Специализированная подготовка для поступления в ЮФУ' },
            { service: 'Онлайн-консультации', price: '2000 руб/час', description: 'Дистанционные занятия через видеосвязь' }
          ]
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        news: 'News',
        about: 'About',
        contact: 'Contact',
        services: 'Products & Services'
      },
      header: {
        title: 'SFU Educator',
        subtitle: 'Modern education for a successful future'
      },
      footer: {
        contact: 'Contacts',
        email: 'pedagogyufu@example.com',
        phone: '+7 (863) 250-59-00',
        address: 'Rostov-on-Don, Bolshaya Sadovaya St., 105/42'
      },
      tags: ['Mathematics', 'Physics', 'Tutoring', 'Exams', 'Competitions', 'Online', 'SFU'],
      pages: {
        home: {
          title: 'Welcome!',
          content: 'Southern Federal University professor with years of experience. Specializing in exam preparation and developing mathematical and physical abilities of students.'
        },
        news: {
          title: 'News',
          items: [
            { date: '20.05.2025', title: 'SFU summer courses enrollment open', content: 'Registration for intensive mathematics and physics exam preparation courses at SFU has begun.' },
            { date: '15.05.2025', title: 'Student achievements at SFU olympiad', content: 'My students won prizes at the regional mathematics olympiad at SFU.' },
            { date: '10.05.2025', title: 'New teaching methodology', content: 'Innovative methodology for studying higher mathematics developed at SFU has been implemented.' },
            { date: '05.05.2025', title: 'Scientific conference at SFU', content: 'Participation in international conference on modern methods of teaching mathematics.' }
          ]
        },
        about: {
          title: 'About Me',
          content: 'Associate Professor of Higher Mathematics Department at Southern Federal University, PhD in Physics and Mathematics. 12 years of teaching experience.',
          education: 'SFU, Faculty of Mathematics and Mechanics, PhD in Physics and Mathematics',
          experience: '12 years of teaching experience at SFU',
          achievements: 'Author of 25+ scientific publications, prepared over 150 students for successful exam completion'
        },
        contact: {
          title: 'Contact',
          subtitle: 'Get in touch for consultation',
          form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send'
          }
        },
        services: {
          title: 'Products & Services',
          items: [
            { service: 'Individual lessons', price: '2500 RUB/hour', description: 'Personal approach to each student' },
            { service: 'Group lessons', price: '1500 RUB/hour', description: 'Small group classes (2-4 people)' },
            { service: 'Exam preparation', price: '3000 RUB/hour', description: 'Intensive exam preparation with SFU professor' },
            { service: 'State exam prep', price: '2500 RUB/hour', description: 'Preparation for state final attestation' },
            { service: 'SFU admission preparation', price: '3500 RUB/hour', description: 'Specialized preparation for SFU admission' },
            { service: 'Online consultations', price: '2000 RUB/hour', description: 'Remote lessons via video call' }
          ]
        }
      }
    }
  };

  const t = translations[language];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const Logo = () => (
    <div className="logo-container">
      <svg width="40" height="40" viewBox="0 0 200 200" className="logo-svg">
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        
        {/* Book pages */}
        <path d="M40 120 Q100 100 160 120 L160 170 Q100 150 40 170 Z" fill="url(#bookGradient)" opacity="0.8"/>
        <path d="M40 130 Q100 110 160 130 L160 180 Q100 160 40 180 Z" fill="url(#bookGradient)"/>
        
        {/* Plant stem */}
        <rect x="98" y="80" width="4" height="60" fill="url(#leafGradient)"/>
        
        {/* Leaves */}
        <ellipse cx="85" cy="70" rx="12" ry="20" fill="url(#leafGradient)" transform="rotate(-30 85 70)"/>
        <ellipse cx="100" cy="50" rx="12" ry="25" fill="url(#leafGradient)"/>
        <ellipse cx="115" cy="70" rx="12" ry="20" fill="url(#leafGradient)" transform="rotate(30 115 70)"/>
        
        {/* Leaf veins */}
        <line x1="85" y1="55" x2="85" y2="85" stroke="#16a34a" strokeWidth="1" transform="rotate(-30 85 70)"/>
        <line x1="100" y1="30" x2="100" y2="70" stroke="#16a34a" strokeWidth="1"/>
        <line x1="115" y1="55" x2="115" y2="85" stroke="#16a34a" strokeWidth="1" transform="rotate(30 115 70)"/>
      </svg>
    </div>
  );

  const renderNavigation = () => {
  if (isMobile) {
    return (
      <>
        <div 
          className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-items">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => navigateTo(key)}
                className={`mobile-nav-item ${currentPage === key ? 'active' : ''}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  return (
    <nav className="desktop-nav">
      {Object.entries(t.nav).map(([key, value]) => (
        <button
          key={key}
          onClick={() => navigateTo(key)}
          className={`nav-item ${currentPage === key ? 'active' : ''}`}
        >
          {value}
        </button>
      ))}
    </nav>
  );
};

  const renderTagCloud = () => (
    <div className="tag-cloud">
      <h4>Теги</h4>
      <div className="tags">
        {t.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    const page = t.pages[currentPage];
    
    switch (currentPage) {
      case 'home':
        return (
          <div className="page-content">
            <h2>{page.title}</h2>
            <p className="intro-text">{page.content}</p>
            <div className="features">
              <div className="feature">
                <BookOpen className="feature-icon" />
                <h3>Экспертный подход</h3>
                <p>Обучение от преподавателя ведущего университета ЮФО</p>
              </div>
              <div className="feature">
                <Award className="feature-icon" />
                <h3>Высокие результаты</h3>
                <p>95% учеников успешно поступают в ведущие вузы</p>
              </div>
              <div className="feature">
                <Clock className="feature-icon" />
                <h3>Гибкий график</h3>
                <p>Удобное время занятий, включая выходные дни</p>
              </div>
            </div>
          </div>
        );
      
      case 'news':
        return (
          <div className="page-content">
            <h2>{page.title}</h2>
            <div className="news-list">
              {page.items.map((item, index) => (
                <article key={index} className="news-item">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="page-content">
            <h2>{page.title}</h2>
            <div className="about-content">
              <div className="about-text">
                <p>{page.content}</p>
              </div>
              <div className="about-details">
                <div className="detail-item">
                  <User className="detail-icon" />
                  <div>
                    <h4>Образование</h4>
                    <p>{page.education}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <BookOpen className="detail-icon" />
                  <div>
                    <h4>Опыт</h4>
                    <p>{page.experience}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <Award className="detail-icon" />
                  <div>
                    <h4>Достижения</h4>
                    <p>{page.achievements}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="page-content">
            <h2>{page.title}</h2>
            <p className="contact-subtitle">{page.subtitle}</p>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>{t.footer.email}</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>{t.footer.phone}</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>{t.footer.address}</span>
                </div>
              </div>
              <ContactForm translations={page.form} />
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="page-content">
            <h2>{page.title}</h2>
            <div className="services-grid">
              {page.items.map((item, index) => (
                <div key={index} className="service-card">
                  <h3 className="service-name">{item.service}</h3>
                  <div className="service-price">{item.price}</div>
                  <p className="service-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return (
    <div className="educator-website">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .educator-website {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          color: #2c3e50;
        }

        /* Logo Styles */
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-svg {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-btn {
          display: none;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .mobile-menu-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          justify-content: center;
        }

        .logo-text {
          text-align: left;
        }

        .logo h1 {
          font-size: 1.8rem;
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .logo p {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: 400;
        }

        .lang-toggle {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .lang-toggle:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-1px);
        }

        /* Mobile Navigation */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          z-index: 200;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: -320px;
          width: 320px;
          height: 100vh;
          background: linear-gradient(180deg, #34495e 0%, #2c3e50 100%);
          z-index: 201;
          transition: left 0.3s ease;
          padding: 2rem 0;
          box-shadow: 4px 0 20px rgba(0,0,0,0.3);
        }

        .mobile-nav.open {
          left: 0;
        }

        .mobile-nav-items {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.mobile-nav-item {
  display: block;
  width: 100%;
  padding: 1.25rem 2rem;
  background: none;
  border: none;
  color: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.1rem;
  font-weight: 500;
  border-left: 4px solid transparent;
}

.mobile-nav-item:hover {
  background: rgba(52, 152, 219, 0.2);
  border-left-color: #3498db;
  padding-left: 2.5rem;
}

.mobile-nav-item.active {
  background: rgba(52, 152, 219, 0.3);
  border-left-color: #3498db;
  color: #74b9ff;
}

        /* Desktop Layout */
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 250px 1fr 280px;
          gap: 2rem;
          padding: 2rem 1rem;
          min-height: calc(100vh - 200px);
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .desktop-nav .nav-item {
          background: white;
          border: none;
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          font-size: 1rem;
          font-weight: 500;
          color: #2c3e50;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .desktop-nav .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .desktop-nav .nav-item:hover::before {
          left: 100%;
        }

        .desktop-nav .nav-item:hover {
          background: #3498db;
          color: white;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }

        .desktop-nav .nav-item.active {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }

        /* Content Area */
        .content-area {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        .content-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #9b59b6, #e74c3c, #f39c12);
        }

        .page-content h2 {
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-size: 2.2rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 1rem;
        }

        .page-content h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #9b59b6);
          border-radius: 2px;
        }

        /* Home Page Features */
        .intro-text {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: #555;
          text-align: justify;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .feature {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16px;
          transition: all 0.3s ease;
          border: 1px solid rgba(52, 152, 219, 0.1);
        }

        .feature:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(52, 152, 219, 0.15);
          background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          color: #3498db;
          margin: 0 auto 1.5rem;
          padding: 12px;
          background: rgba(52, 152, 219, 0.1);
          border-radius: 16px;
        }

        .feature h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .feature p {
          color: #666;
          line-height: 1.6;
        }

        /* News Styles */
        .news-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .news-item {
          background: linear-gradient(135deg, #f8f9fa 0%, white 100%);
          padding: 2rem;
          border-radius: 12px;
          border-left: 5px solid #3498db;
          transition: all 0.3s ease;
          position: relative;
        }

        .news-item:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
        }

        .news-date {
          color: #7f8c8d;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          background: rgba(52, 152, 219, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          display: inline-block;
        }

        .news-item h3 {
          color: #2c3e50;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .news-item p {
          line-height: 1.6;
          color: #555;
        }

        /* About Page */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #555;
          text-align: justify;
        }

        .about-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: linear-gradient(135deg, #f8f9fa 0%, white 100%);
          padding: 2rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(52, 152, 219, 0.1);
        }

        .detail-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
        }

        .detail-icon {
          width: 48px;
          height: 48px;
          color: #3498db;
          padding: 8px;
          background: rgba(52, 152, 219, 0.1);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .detail-item h4 {
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .detail-item p {
          color: #666;
          line-height: 1.6;
        }

        /* Contact Page */
        .contact-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, white 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(52, 152, 219, 0.1);
  word-break: break-word;
  overflow: hidden;
}

.contact-icon {
  width: 24px;
  height: 24px;
  color: #3498db;
  flex-shrink: 0;
  min-width: 24px;
}

.contact-item span {
  color: #555;
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

        /* Contact Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-input,
        .form-textarea {
          padding: 1.25rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          border: none;
          padding: 1.25rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }

        /* Services Page */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(52, 152, 219, 0.1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.05), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(52, 152, 219, 0.15);
          border-color: #3498db;
        }

        .service-name {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .service-price {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .service-desc {
          color: #666;
          line-height: 1.6;
        }

        /* Sidebar */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Banner */
        .banner {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }

        .banner h4 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .banner p {
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Tag Cloud */
        .tag-cloud {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .tag-cloud h4 {
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tag {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 2rem 0;
          margin-top: 3rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }

        .footer h4 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0.9;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .main-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1rem;
          }

          .desktop-nav {
            display: none;
          }

          .sidebar {
            order: -1;
          }

          .logo {
            justify-content: flex-start;
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          .logo p {
            font-size: 0.8rem;
          }

          .page-content h2 {
            font-size: 1.8rem;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .about-details {
            gap: 1rem;
          }

          .detail-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .content-area {
            padding: 1.5rem;
          }

          .banner {
            padding: 1.5rem;
          }

          .tag-cloud {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 0.5rem;
          }

          .main-container {
            padding: 0.5rem;
          }

          .content-area {
            padding: 1rem;
          }

          .page-content h2 {
            font-size: 1.6rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .feature {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="logo">
            <Logo />
            <div className="logo-text">
              <h1>{t.header.title}</h1>
              <p>{t.header.subtitle}</p>
            </div>
          </div>

          <button className="lang-toggle" onClick={toggleLanguage}>
            <Globe size={18} />
            {language.toUpperCase()}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
{isMobile && (
  <MobileNavigation 
    isOpen={isMobileMenuOpen}
    onClose={() => setIsMobileMenuOpen(false)}
    currentPage={currentPage}
    onNavigate={navigateTo}
    translations={t.nav}
  />
)}

      {/* Main Content */}
      <div className="main-container">
        {!isMobile && renderNavigation()}
        
        <main className="content-area">
          {renderContent()}
        </main>

        <aside className="sidebar">
          {renderBanner("Добро пожаловать!", "Качественное образование от опытного преподавателя ЮФУ")}
          {renderTagCloud()}
        </aside>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h4>{t.footer.contact}</h4>
          <div className="footer-info">
            <div>{t.footer.email}</div>
            <div>{t.footer.phone}</div>
            <div>{t.footer.address}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducatorWebsite;
