/**
 * Centralized API configuration connecting frontend to the Node.js Express backend.
 *
 * In development: defaults to 'http://localhost:5000'
 * In production: set NEXT_PUBLIC_BACKEND_URL in your Vercel / hosting dashboard
 * (e.g. 'https://portfolio-backend.onrender.com' or custom backend domain)
 */
export const BACKEND_URL = (
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'
).replace(/\/$/, '');

export const API_ENDPOINTS = {
  contact: `${BACKEND_URL}/api/contact`,
  chatMessage: `${BACKEND_URL}/api/chat/message`,
  chatHistory: (sessionId: string) => `${BACKEND_URL}/api/chat/history/${sessionId}`,
  projects: `${BACKEND_URL}/api/projects`,
  services: `${BACKEND_URL}/api/services`,
  health: `${BACKEND_URL}/api/health`,
};
