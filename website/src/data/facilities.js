const facilities = [
  {
    id: "ks_atchison_county_sheriff",
    name: "Atchison County Sheriff's Office",
    state: "KS",
    maxPhotosPerMailing: 5,
    photoSize: "4x6",
    colorAllowed: true,
    allowCollages: false,
    maxMailingsPerWeek: 1,
    notes: "No Polaroids. Photos must be 4x6. No nude or obscene photos. Photos may not exceed 4x6 in size and Polaroids not accepted."
  },
  {
    id: "il_cook_county_jail",
    name: "Cook County Jail",
    state: "IL",
    maxPhotosPerMailing: 10,
    photoSize: "4x6",
    colorAllowed: true,
    allowCollages: false,
    maxMailingsPerWeek: 2,
    notes: "No gang signs, weapons, or money depicted in photos. No Polaroids. Photos must be 4x6, up to 10 photos per envelope."
  },
  {
    id: "tx_travis_county_jail",
    name: "Travis County Jail",
    state: "TX",
    maxPhotosPerMailing: 10,
    photoSize: "4x6",
    colorAllowed: false,
    allowCollages: false,
    maxMailingsPerWeek: 2,
    notes: "Photos must be printed in black and white. No collages or Polaroids. Up to 10 photos per envelope."
  },
  {
    id: "pa_luzerne_county_correctional_facility",
    name: "Luzerne County Correctional Facility",
    state: "PA",
    maxPhotosPerMailing: 4,
    photoSize: "4x6",
    colorAllowed: false,
    allowCollages: false,
    maxMailingsPerWeek: 1,
    notes: "No Polaroids. Only 4 photos per day. Inmates receive colored copies of photos but black & white copies of printed correspondences."
  }
];

export default facilities;
