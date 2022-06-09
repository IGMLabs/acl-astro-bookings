export interface Trip {
  id?: string;
  agency?: string;
  agencyTripCode?: string;
  destination?: string;
  places?: number;
  start_date?: string;
  end_date?: string;
  flightPrice?: number;
  stayingNightPrice?: number;
  kind?: string;
  status?: string;
  extraLuggagePricePerKilo?: number;
  premiumFoodPrice?: number;
}
