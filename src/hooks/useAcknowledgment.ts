import { toast } from 'react-hot-toast';
import { sendAcknowledgmentEmail } from '../utils/emailService';
import type { AcknowledgmentStatus, LaptopDetails } from '../types/laptop';

export const useAcknowledgment = (laptopDetails: LaptopDetails) => {
  const handleAcknowledgment = async (status: AcknowledgmentStatus) => {
    const loadingToast = toast.loading('Opening email client...');
    
    try {
      await sendAcknowledgmentEmail(status, laptopDetails);
      
      const messages = {
        received_working: 'Email client opened! Please send the email to confirm everything is working.',
        received_not_working: 'Email client opened! Please send the email to report issues.',
        not_received: 'Email client opened! Please send the email to report non-receipt.'
      };
      
      toast.dismiss(loadingToast);
      toast.success(messages[status]);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Failed to open email client. Please try again.');
    }
  };

  return { handleAcknowledgment };
};