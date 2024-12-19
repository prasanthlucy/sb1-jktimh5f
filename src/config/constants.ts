export const EMAIL_CONFIG = {
  RECIPIENT_EMAIL: 'prasanth88868@gmail.com',
  SUBJECT: 'Laptop Acknowledgment',
};

export const ACKNOWLEDGMENT_MESSAGES = {
  received_working: 'Laptop received and working properly',
  received_not_working: 'Laptop received but not working properly',
  not_received: 'Laptop not received',
} as const;

export const API_CONFIG = {
  TIMEOUT: 1000, // milliseconds
  RETRY_ATTEMPTS: 3,
};