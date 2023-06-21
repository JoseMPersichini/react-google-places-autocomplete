import { AutocompletionRequest } from '../types';

export default (
  autocompletionRequest: AutocompletionRequest,
  input: string,
  sessionToken?: google.maps.places.AutocompleteSessionToken,
): google.maps.places.AutocompletionRequest => {
  const { locationRestriction, locationBias, locationBiasRadius, ...rest } = autocompletionRequest;

  const res: google.maps.places.AutocompletionRequest= {
    input,
    ...rest,
  };

  if (sessionToken) {
    res.sessionToken = sessionToken;
  }

  if (locationRestriction) {
    res.locationRestriction = new google.maps.LatLngBounds(...locationRestriction);
  }
  
  if (locationBias) {
    console.warn(location);
    res.locationBias = new google.maps.Circle({
      radius: locationBiasRadius, 
      center: new google.maps.LatLng(locationBias)
    });
  }

  return res;
};
