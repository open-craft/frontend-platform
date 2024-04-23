/* eslint-disable import/extensions */
import COUNTRIES, { langs as countryLangs } from 'i18n-iso-countries';

import { getPrimaryLanguageSubtag } from './lib';

/*
 * COUNTRY LISTS
 *
 * Lists of country names localized in supported languages.
 *
 * TODO: When we start dynamically loading translations only for the current locale, change this.
 */

import arCountries from 'i18n-iso-countries/langs/ar.json';
COUNTRIES.registerLocale(arCountries);
import enCountries from 'i18n-iso-countries/langs/en.json';
COUNTRIES.registerLocale(enCountries);
import esCountries from 'i18n-iso-countries/langs/es.json';
COUNTRIES.registerLocale(esCountries);
import frCountries from 'i18n-iso-countries/langs/fr.json';
COUNTRIES.registerLocale(frCountries);
import zhCountries from 'i18n-iso-countries/langs/zh.json';
COUNTRIES.registerLocale(zhCountries);
import caCountries from 'i18n-iso-countries/langs/ca.json';
COUNTRIES.registerLocale(caCountries);
import heCountries from 'i18n-iso-countries/langs/he.json';
COUNTRIES.registerLocale(heCountries);
import idCountries from 'i18n-iso-countries/langs/id.json';
COUNTRIES.registerLocale(idCountries);
import koCountries from 'i18n-iso-countries/langs/ko.json';
COUNTRIES.registerLocale(koCountries);
import plCountries from 'i18n-iso-countries/langs/pl.json';
COUNTRIES.registerLocale(plCountries);
import ptCountries from 'i18n-iso-countries/langs/pt.json';
COUNTRIES.registerLocale(ptCountries);
import ruCountries from 'i18n-iso-countries/langs/ru.json';
COUNTRIES.registerLocale(ruCountries);
// COUNTRIES.registerLocale(require('i18n-iso-countries/langs/th.json')); // Doesn't exist in lib.
import ukCountries from 'i18n-iso-countries/langs/uk.json';
COUNTRIES.registerLocale(ukCountries);

/**
 * Provides a lookup table of country IDs to country names for the current locale.
 *
 * @memberof module:I18n
 */
export function getCountryMessages(locale) {
  const primaryLanguageSubtag = getPrimaryLanguageSubtag(locale);
  const languageCode = countryLangs().includes(primaryLanguageSubtag) ? primaryLanguageSubtag : 'en';

  return COUNTRIES.getNames(languageCode);
}

/**
 * Provides a list of countries represented as objects of the following shape:
 *
 * {
 *   key, // The ID of the country
 *   name // The localized name of the country
 * }
 *
 * TODO: ARCH-878: The list should be sorted alphabetically in the current locale.
 * This is useful for populating dropdowns.
 *
 * @memberof module:I18n
 */
export function getCountryList(locale) {
  const countryMessages = getCountryMessages(locale);
  return Object.entries(countryMessages).map(([code, name]) => ({ code, name }));
}
