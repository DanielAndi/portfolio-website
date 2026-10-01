// Configuration constants for the portfolio website
export const config = {
  social: {
    // Matches the contact page and the existing main resume.
    linkedin: 'https://www.linkedin.com/in/daniel-grijalva/',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'danielgrijalva374@gmail.com',
  },
} as const
