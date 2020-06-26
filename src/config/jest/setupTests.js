/* eslint-disable import/no-extraneous-dependencies */

// import 'isomorphic-fetch';
// import localStorage from 'mock-local-storage'

// global.window = document.defaultView;
// global.navigator = window.navigator;
// global.localStorage = window.localStorage;
// global.sessionStorage = window.sessionStorage;
// global.fetch = require('jest-fetch-mock');

import 'jest-enzyme';
import { JSDOM } from 'jsdom';
import 'isomorphic-fetch';

const DEFAULT_HTML = '<html><body></body></html>';

global.document = new JSDOM(DEFAULT_HTML);
global.window = document.defaultView;
global.navigator = window.navigator;
global.sessionStorage = window.sessionStorage;
global.localStorage = window.localStorage;
global.window.google = {
  maps: {
    Geocoder: class { },
    GeocoderStatus: {
      OK: true,
    },
    places: {
      AutocompleteService: class { },
      PlacesServiceStatus: {
        OK: true,
      },
    },
  },
};
global.fetch = require('jest-fetch-mock');
