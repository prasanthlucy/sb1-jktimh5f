import { EMAIL_CONFIG } from '../config/constants';
import type { AcknowledgmentStatus, LaptopDetails } from '../types/laptop';
import { generateEmailBody } from './emailTemplates';

export const sendAcknowledgmentEmail = async (
  status: AcknowledgmentStatus,
  laptopDetails: LaptopDetails
): Promise<void> => {
  const body = generateEmailBody(status, laptopDetails);

  // Create mailto URL
  const mailtoLink = `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}`
    + `?subject=${encodeURIComponent(EMAIL_CONFIG.SUBJECT)}`
    + `&body=${encodeURIComponent(body)}`;

  // Open email client
  window.location.href = mailtoLink;

  // Small delay to allow email client to open
  await new Promise(resolve => setTimeout(resolve, 1000));
};