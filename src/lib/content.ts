import type { Locale } from './i18n';

import { site as enSite } from '../content/en/site';
import { services as enServices } from '../content/en/services';
import { pricingPlans as enPricingPlans, disclaimer as enDisclaimer } from '../content/en/pricing';
import { faqItems as enFaqItems, faqCategories as enFaqCategories } from '../content/en/faq';
import { contactMethods as enContactMethods, contactNote as enContactNote } from '../content/en/contact';

import { site as jaSite } from '../content/ja/site';
import { services as jaServices } from '../content/ja/services';
import { pricingPlans as jaPricingPlans, disclaimer as jaDisclaimer } from '../content/ja/pricing';
import { faqItems as jaFaqItems, faqCategories as jaFaqCategories } from '../content/ja/faq';
import { contactMethods as jaContactMethods, contactNote as jaContactNote } from '../content/ja/contact';

export function getSiteContent(locale: Locale) {
  return locale === 'ja' ? jaSite : enSite;
}

export function getServicesContent(locale: Locale) {
  return locale === 'ja' ? jaServices : enServices;
}

export function getPricingContent(locale: Locale) {
  return {
    plans: locale === 'ja' ? jaPricingPlans : enPricingPlans,
    disclaimer: locale === 'ja' ? jaDisclaimer : enDisclaimer,
  };
}

export function getFaqContent(locale: Locale) {
  return {
    items: locale === 'ja' ? jaFaqItems : enFaqItems,
    categories: locale === 'ja' ? jaFaqCategories : enFaqCategories,
  };
}

export function getContactContent(locale: Locale) {
  return {
    methods: locale === 'ja' ? jaContactMethods : enContactMethods,
    note: locale === 'ja' ? jaContactNote : enContactNote,
  };
}
