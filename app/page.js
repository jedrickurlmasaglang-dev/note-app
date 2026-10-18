'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EMAIL = 'equals@gmail.com';
const MIN_PASSWORD_LENGTH = 8;

export default function HomePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailValid = formData.email.trim() !== '' && formData.email === EMAIL;
    const isPasswordValid = formData.password.length > MIN_PASSWORD_LENGTH;

    if (!isEmailValid || !isPasswordValid) {
      setError('Email must be equals@gmail.com and password must be more than 8 characters long.');
      return;
    }

    setError('');
    router.push('/notes');
  };

  return (
    <main className="page-shell">
      <section className="login-card">
        <h1 className="login-title">Login</h1>

        <form className="form-grid" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="equals@gmail.com"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          {error ? <p className="inline-error">{error}</p> : <p className="form-error">&nbsp;</p>}

          <button type="submit" className="primary-btn">Login</button>
        </form>
      </section>
    </main>
  );
}
