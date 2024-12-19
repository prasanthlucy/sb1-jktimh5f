export interface LaptopDetails {
  serialNumber: string;
  model: string;
  assignedDate: string;
}

export type AcknowledgmentStatus = 'received_working' | 'received_not_working' | 'not_received';