import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BankLogo({ src, alt, fallback }) {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return (
      <div className="h-14 w-14 bg-midnight-navy text-off-white grid place-items-center font-black text-xs tracking-wider border border-midnight-navy/20">
        {fallback}
      </div>
    );
  }

  return (
    <div className="h-14 w-14 overflow-hidden">
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="h-full w-full object-contain p-1"
      />
    </div>
  );
}

export default function Give() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get("type");
  const [copiedAccount, setCopiedAccount] = React.useState("");

  const bankAccounts = [
    {
      bankKey: "give.banks.cbe",
      logoSrc: "/bank-logos/cbe.png",
      logoFallback: "CBE",
      entries: [
        {
          labelKey: "give.categories.titheOffering",
          account: "1000007220581",
          receiptHref: "https://docs.google.com/forms/d/e/1FAIpQLSegAkQ7cGow1aqSREUpCjBO80cDi2UZF9oc4KheupolXuOzow/viewform?usp=publish-editor",
        },
        {
          labelKey: "give.categories.gift",
          account: "1000007220409",
          receiptHref: "https://docs.google.com/forms/d/e/1FAIpQLSfJU764pk6A4xxluMYurNfrFOGmKTjcsnaFTonBbE9ocuEFeQ/viewform?usp=publish-editor",
        },
      ],
    },
    {
      bankKey: "give.banks.awash",
      logoSrc: "/bank-logos/awash.png",
      logoFallback: "AW",
      entries: [
        {
          labelKey: "give.categories.mission",
          account: "013521306869400",
          receiptHref: "https://docs.google.com/forms/d/e/1FAIpQLScggt2_K_Y9xOHxHFm8nsXfbHy__5-qYydA47yjrRdU4YbHCQ/viewform?usp=publish-editor",
        },
      ],
    },
    {
      bankKey: "give.banks.birhan",
      logoSrc: "/bank-logos/birhan.png",
      logoFallback: "BR",
      entries: [
        {
          labelKey: "give.categories.titheOffering",
          account: "2600010000572",
          receiptHref: "https://docs.google.com/forms/d/e/1FAIpQLSegAkQ7cGow1aqSREUpCjBO80cDi2UZF9oc4KheupolXuOzow/viewform?usp=publish-editor",
        },
        {
          labelKey: "give.categories.titheOffering",
          account: "1500010001725",
          receiptHref: "https://docs.google.com/forms/d/e/1FAIpQLSegAkQ7cGow1aqSREUpCjBO80cDi2UZF9oc4KheupolXuOzow/viewform?usp=publish-editor",
        },
      ],
    },
  ];

  const handleCopy = async (account) => {
    try {
      await navigator.clipboard.writeText(account);
      setCopiedAccount(account);
      window.setTimeout(() => setCopiedAccount(""), 2000);
    } catch {
      // no-op
    }
  };

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("give.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("give.title")}
          </h1>
          {/* <p className="text-off-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            {t("give.description")}
          </p> */}
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto mb-12 md:mb-16 border-y border-midnight-navy/10 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-red mb-2">
                {t("give.instruction")}
              </p>
              <p className="text-midnight-navy/80 text-base md:text-lg leading-relaxed max-w-xl">
                {selectedType ? t("give.selected", { type: selectedType }) : t("give.prompt")}
              </p>
            </div>
            <div className="md:col-span-3 flex md:justify-end">
              <div className="h-0.5 w-20 bg-sky-blue" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {bankAccounts.map((bank, bankIndex) => (
            <article
              key={bank.bankKey}
              className="group relative overflow-hidden border border-midnight-navy/10 bg-white p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-coral-red/50"
            >
              <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-sky-blue" />
              <div className="pointer-events-none absolute top-6 right-6 font-mono text-midnight-navy/10 text-4xl leading-none">
                {String(bankIndex + 1).padStart(2, "0")}
              </div>

              <div className="relative flex items-start justify-between mb-6">
                <div className="pr-3">
                  <h3 className="text-2xl md:text-3xl font-black text-midnight-navy leading-tight">
                    {t(bank.bankKey)}
                  </h3>
                </div>
                <BankLogo
                  src={bank.logoSrc}
                  alt={t(bank.bankKey)}
                  fallback={bank.logoFallback}
                />
              </div>

              <div className="space-y-4">
                {bank.entries.map((entry, entryIndex) => (
                  <div
                    key={`${bank.bankKey}-${entry.account}`}
                    className="relative border border-midnight-navy/10 bg-off-white/40 p-4 transition-colors hover:border-sky-blue/40"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-sm text-midnight-navy/70 font-semibold">{t(entry.labelKey)}</p>
                      <span className="text-[11px] font-bold text-midnight-navy/40 tracking-widest">
                        {String(entryIndex + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(entry.account)}
                      className="w-full text-left bg-white hover:bg-sky-blue/10 border border-midnight-navy/10 transition-colors px-3 py-2"
                      title={t("give.copyAccount")}
                    >
                      <span className="font-black text-midnight-navy tracking-wide break-all">{entry.account}</span>
                    </button>
                    {copiedAccount === entry.account && (
                      <p className="text-xs text-sky-blue font-bold mt-2">
                        {t("give.copied")}
                      </p>
                    )}
                    <a
                      href={entry.receiptHref} target="_blank"
                      className="inline-flex mt-3 w-full justify-center text-sm font-bold text-off-white bg-midnight-navy hover:bg-deep-blue px-4 py-2 transition-colors"
                    >
                      {t("give.sendReceipt")}
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
