// @flow

/**
 * This is an autogenerated file, do not edit directly
 * to add additional locales run "gulp messages"
 **/

import { addLocaleData } from 'react-intl';

const addLocale = (locale, messages, callback) => {
  addLocaleData(locale);
  callback(messages);
};

const addIntl = (callback) => {
  // $FlowFixMe
  require.ensure(['intl'], (require) => {
    if (!window.addIntl) {
      require('intl');
    }
    callback();
  }, 'intl');
};

const localeData = {
  // $FlowFixMe
  en: (callback) => require.ensure([
    'react-intl/locale-data/en',
  ], (require) =>
    addLocale(require('react-intl/locale-data/en'), {}, callback),
  'en'),

  // $FlowFixMe
  en_polyfill: (callback) => addIntl(() => require.ensure([
    'intl/locale-data/jsonp/en.js',
    'react-intl/locale-data/en',
  ], (require) => {
    require('intl/locale-data/jsonp/en.js');
    addLocale(require('react-intl/locale-data/en'), {}, callback);
  }, 'intl-en')),

  // $FlowFixMe
  cs: (callback) => require.ensure([
    'react-intl/locale-data/cs',
    '../../messages/cs.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/cs'),
      require('../../messages/cs.js').default,
    callback), 'cs'),

  cs_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/cs.js',
      'react-intl/locale-data/cs',
      '../../messages/cs.js',
    ], (require) => {
      require('intl/locale-data/jsonp/cs.js');
      addLocale(
        require('react-intl/locale-data/cs'),
        require('../../messages/cs.js').default,
      callback);
    }, 'intl-cs')),

  // $FlowFixMe
  de: (callback) => require.ensure([
    'react-intl/locale-data/de',
    '../../messages/de.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/de'),
      require('../../messages/de.js').default,
    callback), 'de'),

  de_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/de.js',
      'react-intl/locale-data/de',
      '../../messages/de.js',
    ], (require) => {
      require('intl/locale-data/jsonp/de.js');
      addLocale(
        require('react-intl/locale-data/de'),
        require('../../messages/de.js').default,
      callback);
    }, 'intl-de')),

  // $FlowFixMe
  es: (callback) => require.ensure([
    'react-intl/locale-data/es',
    '../../messages/es.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/es'),
      require('../../messages/es.js').default,
    callback), 'es'),

  es_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/es.js',
      'react-intl/locale-data/es',
      '../../messages/es.js',
    ], (require) => {
      require('intl/locale-data/jsonp/es.js');
      addLocale(
        require('react-intl/locale-data/es'),
        require('../../messages/es.js').default,
      callback);
    }, 'intl-es')),

  // $FlowFixMe
  fr: (callback) => require.ensure([
    'react-intl/locale-data/fr',
    '../../messages/fr.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/fr'),
      require('../../messages/fr.js').default,
    callback), 'fr'),

  fr_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/fr.js',
      'react-intl/locale-data/fr',
      '../../messages/fr.js',
    ], (require) => {
      require('intl/locale-data/jsonp/fr.js');
      addLocale(
        require('react-intl/locale-data/fr'),
        require('../../messages/fr.js').default,
      callback);
    }, 'intl-fr')),

  // $FlowFixMe
  pt: (callback) => require.ensure([
    'react-intl/locale-data/pt',
    '../../messages/pt.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/pt'),
      require('../../messages/pt.js').default,
    callback), 'pt'),

  pt_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/pt.js',
      'react-intl/locale-data/pt',
      '../../messages/pt.js',
    ], (require) => {
      require('intl/locale-data/jsonp/pt.js');
      addLocale(
        require('react-intl/locale-data/pt'),
        require('../../messages/pt.js').default,
      callback);
    }, 'intl-pt')),

  // $FlowFixMe
  ro: (callback) => require.ensure([
    'react-intl/locale-data/ro',
    '../../messages/ro.js',
  ], (require) =>
    addLocale(
      require('react-intl/locale-data/ro'),
      require('../../messages/ro.js').default,
    callback), 'ro'),

  ro_polyfill: (callback) => addIntl(() =>
    // $FlowFixMe
    require.ensure([
      'intl/locale-data/jsonp/ro.js',
      'react-intl/locale-data/ro',
      '../../messages/ro.js',
    ], (require) => {
      require('intl/locale-data/jsonp/ro.js');
      addLocale(
        require('react-intl/locale-data/ro'),
        require('../../messages/ro.js').default,
      callback);
    }, 'intl-ro')),

};

export const loadLocale = (locale: string) => new Promise((resolve) => {
  if (!localeData[locale]) {
    locale = 'en';
  }

  if (!window.Intl || window.IntlPolyfill) {
    locale += '_polyfill';
  }

  return localeData[locale](resolve);
});
