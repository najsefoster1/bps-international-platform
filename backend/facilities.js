const facilities = [
  {
    id: 'ks_atchison_county',
    name: "Atchison County Sheriff's Office",
    state: 'Kansas',
    maxPhotosPerMailing: 10,
    photoSize: '4x6',
    colorAllowed: true,
    allowCollages: false,
    maxMailingsPerWeek: 1,
    notes: 'No polaroids; photos may not exceed 4x6 inches. No gang signs or nudity.'
  },
  {
    id: 'il_cook_county',
    name: 'Cook County Jail',
    state: 'Illinois',
    maxPhotosPerMailing: 5,
    photoSize: '4x6',
    colorAllowed: true,
    allowCollages: false,
    maxMailingsPerWeek: 1,
    notes: 'No obscene content, weapons, or gang symbols. Max five photos per mailing.'
  },
  {
    id: 'tx_travis_county',
    name: 'Travis County Jail',
    state: 'Texas',
    maxPhotosPerMailing: 5,
    photoSize: '4x6',
    colorAllowed: false,
    allowCollages: false,
    maxMailingsPerWeek: 2,
    notes: 'Only black-and-white photos allowed; no Polaroids; no collages.'
  },
  {
    id: 'pa_luzerne_county',
    name: 'Luzerne County Correctional Facility',
    state: 'Pennsylvania',
    maxPhotosPerMailing: 4,
    photoSize: '4x6',
    colorAllowed: false,
    allowCollages: false,
    maxMailingsPerWeek: 1,
    notes: 'Photos are scanned; only 4 photos per day; black-and-white copies; no polaroids.'
  }
];

module.exports = facilities;
