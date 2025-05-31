import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Замените YOUR_FORM_ID на ваш реальный ID из Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-form-container">
      <h3>Свяжитесь со мной</h3>
      
      {submitStatus === 'success' && (
        <div className="alert alert-success">
          Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-error">
          Произошла ошибка при отправке сообщения. Попробуйте еще раз.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Введите ваше имя"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Введите ваш email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Тема</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            placeholder="Тема сообщения"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
            rows="5"
            placeholder="Введите ваше сообщение"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
        </button>
      </form>

      <style jsx>{`
        .contact-form-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .contact-form-container h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #343a40;
        }

        .alert {
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 1rem;
          text-align: center;
        }

        .alert-success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #495057;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        .form-control:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0,123,255,0.3);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #0056b3;
          transform: translateY(-1px);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media screen and (max-width: 768px) {
          .contact-form-container {
            margin: 1rem;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
