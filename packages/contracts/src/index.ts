export interface HealthResponse {
  status: "ok";
  service: string;
  timestamp: string;
}

export interface HotelSummary {
  id: string;
  name: string;
  destination: string;
  rating: number;
  /** Decimal amount as a string to avoid binary floating point for money. */
  nightlyRate: string;
  currency: string;
  imageUrl: string;
}
