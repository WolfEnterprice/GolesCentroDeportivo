
export enum FieldType {
  V5 = '5v5',
  V7 = '7v7',
  V11 = '11v11'
}

export enum BookingStatus {
  CONFIRMED = 'Confirmed',
  PENDING = 'Pending',
  CANCELLED = 'Cancelled',
  BOOKED = 'Booked',
  AVAILABLE = 'Available'
}

export interface TimeSlot {
  id: string;
  time: string;
  price: number;
  status: BookingStatus;
  period: 'Morning' | 'Afternoon' | 'Night';
  isPremium?: boolean;
}

export interface Reservation {
  id: string;
  customerName: string;
  avatar: string;
  fieldType: FieldType;
  dateTime: string;
  price: number;
  status: BookingStatus;
}
