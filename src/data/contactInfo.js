export const CONTACT_ITEMS = [
  {
    id: "email",
    values: [
      {
        value: "Bolefullgospelchurch@gmail.com",
        href: "mailto:bolefullgospelchurch@gmail.com",
      },
    ],
  },
  {
    id: "telegram",
    value: "t.me/yourchurch",
    href: "/",
  },
  {
    id: "instagram",
    value: "instagram.com/yourchurch",
    href: "/",
  },
  {
    id: "tiktok",
    value: "tiktok.com/@yourchurch",
    href: "/",
  },
  {
    id: "facebook",
    value: "facebook.com/yourchurch",
    href: "/",
  },
  {
    id: "youtube",
    value: "youtube.com/@yourchurch",
    href: "/",
  },
  {
    id: "telephones",
    values: [{ value: "+251116622968" }, { value: "+251995550777" }],
  },
  {
    id: "posta",
    value: "",
  },
  {
    id: "location",
    value: "ቦሌ ሩዋንዳ ድልድይ አካባቢ  ከኦሮሚያ ባንክ ጀርባ 100 ሜትር ገባ ብሎ",
  },
];

export const CONTACT_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.6290939093703!2d38.77861433148785!3d8.991098311157714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859a42d74a7b%3A0x6db92443d960c37f!2sBole%20Full%20Gospel%20Believers%20Church!5e0!3m2!1sen!2set!4v1770973775139!5m2!1sen!2set";

export const getItemEntries = (item) => {
  if (Array.isArray(item?.values) && item.values.length > 0) return item.values;
  if (item?.value) return [{ value: item.value, href: item.href }];
  return [];
};

export const getContactItem = (id) =>
  CONTACT_ITEMS.find((item) => item.id === id) || {};
