import type { AcknowledgmentStatus, LaptopDetails } from '../types/laptop';
import { ACKNOWLEDGMENT_MESSAGES } from '../config/constants';

export const generateEmailBody = (status: AcknowledgmentStatus, laptopDetails: LaptopDetails): string => {
  const message = ACKNOWLEDGMENT_MESSAGES[status];
  return `Hi Prasanth,

I hope this email finds you well.

Laptop Acknowledgment Details:
Status: ${message}

Laptop Information:
Serial Number: ${laptopDetails.serialNumber}
Model: ${laptopDetails.model}
Assigned Date: ${laptopDetails.assignedDate}

Best regards`;
};