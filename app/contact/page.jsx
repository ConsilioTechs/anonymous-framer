import Footer from "@/components/footer/Footer";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Anonymous%20Framer%20Area%201%20Garki%20Abuja";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Anonymous%20Framer%20Area%201%20Garki%20Abuja&output=embed";

const contactItems = [
  {
    label: "Email",
    value: "evarestuschidi23@gmail.com",
    href: "mailto:evarestuschidi23@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+234 708 202 1049",
    href: "tel:+2347082021049",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message the studio",
    href: "https://wa.me/2347082021049?text=Hello%20Anonymous%20Framer!%20I%20would%20like%20to%20make%20an%20inquiry%20about%20your%20services.",
    icon: MessageCircle,
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/anonymous_framer?stkn=MTZpODk4MWtvbXJ4NA==", icon: Instagram, color: "text-pink-500" },
  { label: "TikTok", href: "https://www.tiktok.com/@anonymous_framer?_r=1&_t=ZS-99whD370Rr0", icon: Music2, color: "text-ink" },
  { label: "Facebook", href: "https://www.facebook.com/share/1BoMMaS9cX/?mibextid=wwXIfr", icon: Facebook, color: "text-blue-600" },
  { label: "WhatsApp", href: "https://wa.me/2347082021049?text=Hello%20Anonymous%20Framer!%20I%20would%20like%20to%20make%20an%20inquiry%20about%20your%20services.", icon: MessageCircle, color: "text-green-600" },
  { label: "Twitter", href: "https://x.com/anonymouzframer?s=11", icon: Twitter, color: "text-sky-500" },
];

export default function ContactPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-ink pt-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_55%,rgba(255,255,255,0.18),rgba(9,9,9,0)_42%)]" />
        <div className="container-x relative z-10 flex min-h-[380px] items-center py-14 md:py-18">
          <div className="max-w-4xl">
            
            <h1 className="mt-8 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-[58px]">
              What are we <span className="text-ember">creating?</span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              From bold brand identities to beautifully finished print materials,
              Anonymous Framer turns ideas into visual experiences people remember.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form
            action="mailto:evarestuschidi23@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl bg-white p-6 shadow-soft sm:p-10"
          >
            <p className="text-[16px] lg:text-[16px] text-[#FF3B1F] uppercase">Project inquiry, tell us everything</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+234 708 202 1049" />
              <Field label="Company/Business Name" name="company" placeholder="Your company" />
            </div>

            <label className="mt-5 block">
              <span className="text-xs font-semibold text-ink">Service</span>
              <select
                name="service"
                className="mt-2 h-12 w-full rounded border border-neutral-200 bg-white px-4 text-sm text-neutral-500 outline-none transition focus:border-ember"
                defaultValue=""
              >
                <option value="" disabled>
                  Select service
                </option>
                <option>Branding</option>
                <option>Printing</option>
                <option>Logo Design</option>
                <option>Art work</option>
                <option>Framing</option>
              </select>
            </label>

            <label className="mt-5 block">
              <span className="text-xs font-semibold text-ink">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your brand, campaign or print project..."
                className="mt-2 w-full resize-none rounded border border-neutral-200 px-4 py-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-ember"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 text-xs font-black uppercase text-white transition hover:bg-ember"
            >
              <Send size={16} />
              Send inquiry
            </button>
          </form>

          <aside className="rounded-2xl border border-neutral-200 bg-[#F1F1F1] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:p-10">
            <p className="text-[16px] lg:text-[16px] text-[#FF3B1F] uppercase">General contact</p>
           
            <p className="mt-3 text-sm leading-7 text-neutral-600">
             Prefer to talk first? Reach the studio directly through any of these channels.
            </p>

            <div className="mt-8 divide-y divide-neutral-200">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 py-5 transition"
                  >
                    
                    <span>
                      <span className="block font-semibold text-[0.65rem] uppercase text-[#000000]/60">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[#838E9E] text-sm font-medium">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-[0.65rem] font-medium uppercase text-neutral-[#00000]/60">
                Follow
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-ember ${social.color}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="group relative min-h-[420px] overflow-hidden rounded-2xl bg-neutral-200 shadow-soft md:min-h-[560px]">
            <iframe
              title="Anonymous Framer on Google Maps"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

            <div className="pointer-events-none absolute left-6 top-6 rounded-xl bg-white/90 p-5 shadow-soft backdrop-blur sm:left-10 sm:top-10">
              {/* <img
                src="/icons/logo.png"
                alt="Anonymous Framer"
                className="h-12 w-auto object-contain object-left"
              /> */}
              <div className="mt-5 flex items-start gap-3">
                <MapPin className="mt-1 text-ember" size={26} fill="currentColor" />
                <div>
                  <p className="text-3xl font-black uppercase">
                    Find <span className="text-ember">Us</span>
                  </p>
                  <p className="mt-3 max-w-[240px] text-sm font-bold leading-6">
                    shop E23/22 area 7 and 10 informal market
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-8 left-6 right-6 flex flex-col gap-3 rounded-xl bg-ink p-5 text-white shadow-soft sm:left-auto sm:right-10 sm:w-[360px]">
              <p className="section-label">Anonymous Framer</p>
              <p className="text-sm leading-6 text-white/75">
                Tap the map to open directions in Google Maps.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase text-white">
                Open Google Maps
                <MapPin size={16} className="text-ember" />
              </span>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Anonymous Framer on Google Maps"
              className="absolute inset-0 z-10"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded border border-neutral-200 px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-ember"
      />
    </label>
  );
}
