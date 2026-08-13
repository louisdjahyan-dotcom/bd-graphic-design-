import React, { useState, useEffect, useMemo } from "react";
import {
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Star,
  Sparkles,
  Gem,
  Zap,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Send,
  ImageOff,
} from "lucide-react";

/* =========================================================
   IMAGES DU PORTFOLIO
   Toutes les images sont dans /public/images/
   ========================================================= */
const IMG_NOU_BOUKE = "/images/nou-bouke.jpg";

const IMG_BIERE_HAITIEN = "/images/biere-haitien.jpg";

const IMG_NANA_ALOE = "/images/nana-aloe.jpg";

const IMG_HAITIEN_EAU = "/images/haitien-eau.jpg";

const IMG_LUNDI_LEARNIX = "/images/lundi-learnix.jpg";

const IMG_DIRI_LAKAY = "/images/diri-lakay.jpg";

const IMG_PASTA_HAITIENNE = "/images/pasta-haitienne.jpg";

const IMG_JEAN_CHLOE = "/images/jean-chloe.jpg";

const IMG_DAHANA_MAIS = "/images/dahana-mais.jpg";

const IMG_BON_DEBUT_FEMME = "/images/bon-debut-femme.jpg";

const IMG_TRAYIZON = "/images/trayizon.jpg";

const IMG_BON_DEBUT_HOMME = "/images/bon-debut-homme.jpg";

const IMG_SOUTIEN_PSY = "/images/soutien-psy.jpg";

const IMG_TI_LARI = "/images/ti-lari.jpg";

const IMG_DESIGN_TRANSFORME = "/images/design-transforme.jpg";

const IMG_HAPPY_MOTHERS_DAY = "/images/happy-mothers-day.jpg";

const IMG_BON_WEEKEND_SOURIRE = "/images/bon-weekend-sourire.jpg";

const IMG_PANTENE = "/images/pantene.jpg";

const IMG_SORAYA_BIRTHDAY = "/images/soraya-birthday.jpg";

const IMG_CONSTRUISEZ = "/images/construisez.jpg";

const IMG_PHOTOGRAPHY_CARLIN = "/images/photography-carlin.jpg";

const IMG_THE_VENTRE = "/images/the-ventre.jpg";

const IMG_BON_LUNDI_ATOUS = "/images/bon-lundi-atous.jpg";

/* =========================================================
   DONNÉES DU PORTFOLIO
   ---------------------------------------------------------
   Pour ajouter un nouveau flyer : copiez un objet ci-dessous,
   changez les valeurs, et il apparaîtra automatiquement dans
   le portfolio (aucun autre changement de code nécessaire).
   ========================================================= */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Nou Bouke — Kanpay Konsyantizasyon",
    category: "Autres",
    year: "2024",
    client: "Kanpay Sosyal",
    // Mete fichye a nan dosye public/images/ epi ranplase chemen an anba a
    image: IMG_NOU_BOUKE,
    description:
      "Afich konsyantizasyon pou ensekirite an Ayiti, ak referans istorik 1804/2024.",
  },
  {
    id: 2,
    title: "Bière Haïtien — Bière Pam",
    category: "Business",
    year: "2024",
    client: "Bière Pam",
    image: IMG_BIERE_HAITIEN,
    description:
      "Etikèt ak visuel pwomosyonèl pou yon mak byè lokal, style produit shot.",
  },
  {
    id: 3,
    title: "Nana — L'huile d'aloe",
    category: "Business",
    year: "2024",
    client: "Nana",
    image: IMG_NANA_ALOE,
    description:
      "Design etikèt pou yon pwodwi swen chve ak lwil aloe vera.",
  },
  {
    id: 4,
    title: "Haïtien Eau",
    category: "Business",
    year: "2024",
    client: "Haïtien Eau",
    image: IMG_HAITIEN_EAU,
    description:
      "Branding ak visuel pwomosyonèl pou yon mak dlo pirifye.",
  },
  {
    id: 5,
    title: "C'est un autre Lundi — Learnix",
    category: "Social Media",
    year: "2024",
    client: "Learnix",
    image: IMG_LUNDI_LEARNIX,
    description:
      "Post motivasyonèl pou rezo sosyal, ak yon mesaj sou valè tan.",
  },
  {
    id: 6,
    title: "Diri Lakay",
    category: "Business",
    year: "2024",
    client: "Diri Lakay",
    image: IMG_DIRI_LAKAY,
    description:
      "Branding ak afich pwomosyonèl pou yon mak manje lokal.",
  },
  {
    id: 7,
    title: "Pasta Haïtienne",
    category: "Business",
    year: "2024",
    client: "Pasta Haïtienne",
    image: IMG_PASTA_HAITIENNE,
    description:
      "Visuel pwodwi pou yon mak pat alimantè lokal, style produit shot.",
  },
  {
    id: 8,
    title: "Happy Birthday — Jean Chloé",
    category: "Événements",
    year: "2024",
    client: "Jean Chloé",
    image: IMG_JEAN_CHLOE,
    description:
      "Afich anivèsè pèsonalize ak foto ak dat espesyal.",
  },
  {
    id: 9,
    title: "Dahana — Maïs Haïtien",
    category: "Business",
    year: "2024",
    client: "Dahana",
    image: IMG_DAHANA_MAIS,
    description:
      "Kanpay pwomosyonèl pou yon mak farin mayi lokal.",
  },
  {
    id: 10,
    title: "Bon Début de Semaine",
    category: "Social Media",
    year: "2024",
    client: "Post Motivasyonèl",
    image: IMG_BON_DEBUT_FEMME,
    description:
      "Post motivasyonèl pou kòmanse semèn nan ak bon enèji.",
  },
  {
    id: 11,
    title: "Trayizon — Joe Style",
    category: "Musique",
    year: "2024",
    client: "Joe Style",
    image: IMG_TRAYIZON,
    description:
      "Afich \"Coming Soon\" pou yon nouvo mizik ki ap soti.",
  },
  {
    id: 12,
    title: "Bon Début de Semaine à Tous",
    category: "Social Media",
    year: "2024",
    client: "Post Motivasyonèl",
    image: IMG_BON_DEBUT_HOMME,
    description:
      "Dezyèm vèsyon post motivasyonèl pou kòmansman semèn nan.",
  },
  {
    id: 13,
    title: "Soutien Psychologique — Sansibilizasyon",
    category: "Autres",
    year: "2024",
    client: "Kanpay Sosyal",
    image: IMG_SOUTIEN_PSY,
    description:
      "Post sansibilizasyon sou jan pou jwenn bon sipò sikolojik.",
  },
  {
    id: 14,
    title: "Ti Lari Komedyen — WenWenn Promo",
    category: "Autres",
    year: "2024",
    client: "Ti Lari Komedyen",
    image: IMG_TI_LARI,
    description:
      "Flyer pwomosyonèl pou yon komedyen ak pwomosyon WenWenn.",
  },
  {
    id: 15,
    title: "Le Design Transforme l'Ordinaire",
    category: "Business",
    year: "2024",
    client: "B.D Graphic Design",
    image: IMG_DESIGN_TRANSFORME,
    description:
      "Kat pwomosyonèl pèsonèl pou prezante sèvis design ak yon konsèy kreyasyon.",
  },
  {
    id: 16,
    title: "Happy Mother's Day",
    category: "Événements",
    year: "2024",
    client: "Kanpay Sosyal",
    image: IMG_HAPPY_MOTHERS_DAY,
    description:
      "Afich selebrasyon pou fèt manman yo ak yon kolaj foto.",
  },
  {
    id: 17,
    title: "Bon Week-end — Un Sourire",
    category: "Social Media",
    year: "2024",
    client: "Post Motivasyonèl",
    image: IMG_BON_WEEKEND_SOURIRE,
    description:
      "Post motivasyonèl pou wikenn ak yon mesaj pozitif sou souri.",
  },
  {
    id: 18,
    title: "Pantene — Soins Auto-Administrés",
    category: "Business",
    year: "2024",
    client: "Pantene",
    image: IMG_PANTENE,
    description:
      "Visuel pwomosyonèl pou pwodwi swen chve ak po.",
  },
  {
    id: 19,
    title: "Happy Birthday — Soraya",
    category: "Événements",
    year: "2024",
    client: "Soraya",
    image: IMG_SORAYA_BIRTHDAY,
    description:
      "Afich anivèsè elegant ak dat espesyal make.",
  },
  {
    id: 20,
    title: "Construisez Avec Nous",
    category: "Business",
    year: "2024",
    client: "Konstriksyon / BTP",
    image: IMG_CONSTRUISEZ,
    description:
      "Brochure pwomosyonèl pou yon konpayi konstriksyon.",
  },
  {
    id: 21,
    title: "Photography Carlin",
    category: "Business",
    year: "2024",
    client: "Carlin",
    image: IMG_PHOTOGRAPHY_CARLIN,
    description:
      "Afich sèvis pou yon fotograf pwofesyonèl (shoot, events, fashion, weddings).",
  },
  {
    id: 22,
    title: "Thé — Ventre Plat",
    category: "Business",
    year: "2024",
    client: "Produit Naturel",
    image: IMG_THE_VENTRE,
    description:
      "Visuel pwodwi pou yon te natirèl.",
  },
  {
    id: 23,
    title: "Bon Lundi à Tous",
    category: "Social Media",
    year: "2024",
    client: "Post Motivasyonèl",
    image: IMG_BON_LUNDI_ATOUS,
    description:
      "Post motivasyonèl pou kòmanse semèn nan ak yon sitasyon enspirasyon.",
  },
];

const CATEGORIES = [
  "TOUT",
  "ÉVÉNEMENTS",
  "MUSIQUE",
  "ÉGLISE",
  "BUSINESS",
  "SOCIAL MEDIA",
  "AUTRES",
];

const CATEGORY_MAP = {
  "ÉVÉNEMENTS": "Événements",
  MUSIQUE: "Musique",
  "ÉGLISE": "Église",
  BUSINESS: "Business",
  "SOCIAL MEDIA": "Social Media",
  AUTRES: "Autres",
};

const SERVICES = [
  {
    n: "01",
    title: "FLYER DESIGN",
    desc: "Flyers professionnels pour vos événements et promotions.",
  },
  {
    n: "02",
    title: "SOCIAL MEDIA",
    desc: "Visuels adaptés à Instagram, Facebook, WhatsApp et autres plateformes.",
  },
  {
    n: "03",
    title: "AFFICHES",
    desc: "Des affiches percutantes pour faire passer votre message.",
  },
  {
    n: "04",
    title: "INVITATIONS",
    desc: "Invitations pour anniversaires, mariages, cérémonies et événements.",
  },
  {
    n: "05",
    title: "BRANDING",
    desc: "Création d'une identité visuelle complète pour votre marque.",
  },
  {
    n: "06",
    title: "PUBLICITÉ",
    desc: "Visuels publicitaires qui boostent votre visibilité.",
  },
];

const TESTIMONIALS = [
  {
    text: "Travail exceptionnel ! Il a compris mon idée et l'a transformée en un visuel vraiment professionnel.",
    name: "Jean R.",
  },
  {
    text: "Très professionnel, à l'écoute et toujours prêt à apporter les meilleurs designs.",
    name: "Marie D.",
  },
  {
    text: "Créatif, rapide et efficace. Je continuerai à travailler avec lui pour tous mes projets graphiques.",
    name: "Samuel P.",
  },
];

/* =========================================================
   PLACEHOLDERS — À REMPLACER
   ========================================================= */
const CONTACT = {
  whatsappLink: "https://wa.me/message/M5IDTXXARJJ6N1", // vrè lyen WhatsApp B.D Graphic Design
  email: "contact@bdgraphic.com", // REMPLACEZ par votre email
  instagram: "https://instagram.com/bdgraphic", // REMPLACEZ
  facebook: "https://facebook.com/bdgraphic", // REMPLACEZ
};

const NAV_LINKS = ["ACCUEIL", "PORTFOLIO", "SERVICES", "À PROPOS", "CONTACT"];

/* =========================================================
   COMPOSANT: HEADER
   ========================================================= */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (label) => {
    setOpen(false);
    const id = label === "ACCUEIL" ? "hero" : label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(247,247,245,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <button onClick={() => goTo("ACCUEIL")} className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-[#111111]">
            BD
          </span>
          <span className="hidden sm:inline text-xs tracking-[0.3em] text-[#666666] group-hover:text-violet-600 transition-colors">
            GRAPHIC DESIGN
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => goTo(l)}
              className="text-sm tracking-wide text-[#666666] hover:text-violet-600 transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-violet-600 border border-violet-600/50 px-5 py-2.5 rounded-full hover:bg-violet-700 hover:text-white hover:border-violet-700 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]"
        >
          TRAVAILLER AVEC MOI <ArrowRight size={15} />
        </a>

        <button className="md:hidden text-[#111111]" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5 border-t border-violet-600/10"
          style={{ backgroundColor: "#F7F7F5" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => goTo(l)}
              className="text-left text-[#666666] text-base pt-4 hover:text-violet-600"
            >
              {l}
            </button>
          ))}
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-sm font-semibold text-white bg-violet-600 px-5 py-3 rounded-full flex items-center justify-center gap-2"
          >
            TRAVAILLER AVEC MOI <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   COMPOSANT: HERO
   ========================================================= */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      {/* glow ambiant */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ backgroundColor: "#7C3AED" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Colonne gauche */}
        <div className="fade-in-up">
          <p className="text-violet-600 text-sm tracking-[0.3em] mb-6 font-medium">
            BONJOUR, JE SUIS B.D GRAPHIC DESIGN
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.05] mb-8">
            JE TRANSFORME VOS IDÉES EN{" "}
            <span className="text-violet-600 relative">VISUELS</span> QUI
            MARQUENT.
          </h1>
          <p className="text-[#666666] text-lg mb-10 tracking-wide">
            Flyers • Affiches • Réseaux sociaux • Branding
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold px-7 py-4 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
            >
              VOIR MON PORTFOLIO <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <SocialIcon href={CONTACT.instagram} icon={<Instagram size={18} />} />
            <SocialIcon href={CONTACT.facebook} icon={<Facebook size={18} />} />
            <SocialIcon
              href={CONTACT.whatsappLink}
              icon={<MessageCircle size={18} />}
            />
            <SocialIcon href={`mailto:${CONTACT.email}`} icon={<Mail size={18} />} />
          </div>
        </div>

        {/* Colonne droite — collage */}
        <div className="relative h-[520px] hidden md:block">
          {PORTFOLIO_ITEMS.slice(0, 4).map((item, i) => {
            const positions = [
              "top-0 left-8 w-56 rotate-[-6deg] z-10",
              "top-16 right-0 w-52 rotate-[5deg] z-20",
              "bottom-16 left-0 w-48 rotate-[4deg] z-30",
              "bottom-0 right-10 w-56 rotate-[-4deg] z-20",
            ];
            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`absolute ${positions[i]} rounded-xl shadow-2xl border border-violet-600/20 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 cursor-pointer`}
                style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.25)" }}
              />
            );
          })}
        </div>
      </div>

      <FloatingWhatsApp />
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#666666] hover:text-violet-600 hover:border-violet-600 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:bg-violet-700 hover:scale-110 transition-all duration-300"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* =========================================================
   COMPOSANT: PORTFOLIO
   ========================================================= */
function PortfolioCard({ item, onOpen }) {
  return (
    <div
      onClick={() => onOpen(item)}
      className="group relative rounded-xl overflow-hidden cursor-pointer border border-gray-200 hover:border-violet-600/40 transition-all duration-500 fade-in-up"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,8,0.95) 10%, rgba(8,8,8,0.4) 60%, transparent 100%)",
        }}
      >
        <span className="text-violet-600 text-xs tracking-widest mb-1">
          {item.category.toUpperCase()}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{item.title}</h3>
          <span className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
            <ArrowUpRight size={16} className="text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Portfolio({ onOpen }) {
  const [filter, setFilter] = useState("TOUT");

  const filtered = useMemo(() => {
    if (filter === "TOUT") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((i) => i.category === CATEGORY_MAP[filter]);
  }, [filter]);

  return (
    <section id="portfolio" className="py-28 px-6 md:px-10" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14 fade-in-up">
          <p className="text-violet-600 text-xs tracking-[0.3em] mb-3">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-5">MES CRÉATIONS</h2>
          <p className="text-[#666666] text-lg">
            Découvrez une sélection de mes créations graphiques réalisées pour
            différents projets, événements et marques.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest font-semibold transition-all duration-300 border ${
                filter === c
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-gray-300 text-[#666666] hover:border-violet-600 hover:text-violet-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={onOpen} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="inline-flex items-center gap-2 border border-violet-600/50 text-violet-600 px-7 py-3.5 rounded-full hover:bg-violet-700 hover:text-white hover:border-violet-700 transition-all duration-300">
            VOIR TOUTES MES CRÉATIONS <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPOSANT: MODAL PROJET / LIGHTBOX
   ========================================================= */
function ProjectModal({ project, onClose, onNav }) {
  if (!project) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 fade-in"
      style={{ backgroundColor: "rgba(8,8,8,0.92)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
      >
        <X size={30} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        className="hidden md:flex absolute left-6 w-11 h-11 rounded-full border border-gray-700 text-gray-300 items-center justify-center hover:border-violet-600 hover:text-violet-600 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        className="hidden md:flex absolute right-6 w-11 h-11 rounded-full border border-gray-700 text-gray-300 items-center justify-center hover:border-violet-600 hover:text-violet-600 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div
        className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[70vh] object-cover rounded-xl border border-violet-600/20 shadow-[0_0_50px_rgba(124,58,237,0.25)]"
        />
        <div>
          <span className="text-violet-600 text-xs tracking-widest">
            {project.category.toUpperCase()}
          </span>
          <h3 className="text-3xl font-black text-white mt-3 mb-5">{project.title}</h3>
          <div className="space-y-2 text-sm text-gray-400 mb-6">
            <p>
              <span className="text-gray-500">Client :</span> {project.client}
            </p>
            <p>
              <span className="text-gray-500">Année :</span> {project.year}
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed mb-8">{project.description}</p>
          <div className="flex gap-4 text-sm">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNav(-1);
              }}
              className="flex items-center gap-1 text-gray-400 hover:text-violet-600"
            >
              <ChevronLeft size={16} /> PROJET PRÉCÉDENT
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNav(1);
              }}
              className="flex items-center gap-1 text-gray-400 hover:text-violet-600 ml-auto"
            >
              PROJET SUIVANT <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPOSANT: SERVICES
   ========================================================= */
function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14 fade-in-up">
          <p className="text-violet-600 text-xs tracking-[0.3em] mb-3">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">MES SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="group p-8 rounded-xl border border-gray-200 hover:border-violet-600/40 transition-all duration-500 fade-in-up"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <span className="text-violet-600/50 text-4xl font-black">{s.n}</span>
              <h3 className="text-[#111111] font-bold text-xl mt-4 mb-3 tracking-wide">
                {s.title}
              </h3>
              <p className="text-[#666666] leading-relaxed mb-6">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-violet-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                EN SAVOIR PLUS <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPOSANT: À PROPOS
   ========================================================= */
function About() {
  return (
    <section id="propos" className="py-28 px-6 md:px-10" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative fade-in-up">
          <div
            className="aspect-square rounded-2xl border border-violet-600/20 overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(124,58,237,0.2)" }}
          >
            <img
              src="https://picsum.photos/seed/bddesigner/700/700"
              alt="B.D — Graphic Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="fade-in-up">
          <p className="text-violet-600 text-xs tracking-[0.3em] mb-3">À PROPOS</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-8">
            À PROPOS DE MOI
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed mb-5">
            Je suis B.D, designer graphique passionné par la création de
            visuels modernes, créatifs et mémorables.
          </p>
          <p className="text-[#666666] leading-relaxed mb-10">
            Mon objectif est de transformer chaque idée en une création qui
            attire l'attention et transmet clairement le message.
          </p>
          <p className="text-[#111111] font-black text-xl tracking-wide">
            B.D GRAPHIC DESIGN
          </p>
        </div>
      </div>

      {/* Vitrine — aperçu du travail */}
      <div className="max-w-7xl mx-auto mt-20 fade-in-up">
        <p className="text-violet-600 text-xs tracking-[0.3em] mb-3 text-center md:text-left">
          UN APERÇU DE MON UNIVERS CRÉATIF
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: IMG_TRAYIZON, label: "Musique" },
            { img: IMG_PASTA_HAITIENNE, label: "Business" },
            { img: IMG_SORAYA_BIRTHDAY, label: "Événements" },
            { img: IMG_PHOTOGRAPHY_CARLIN, label: "Business" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-violet-600/50 transition-all duration-500"
              style={{
                boxShadow: "0 10px 40px rgba(124,58,237,0.12)",
              }}
            >
              <div className="aspect-[3/4]">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                />
              </div>
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.9) 15%, transparent 70%)",
                }}
              >
                <span className="text-violet-500 text-xs tracking-widest font-semibold">
                  {item.label.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm text-violet-600 border border-violet-600/40 px-6 py-3 rounded-full hover:bg-violet-700 hover:text-white hover:border-violet-600 transition-all duration-300"
          >
            VOIR TOUT LE PORTFOLIO <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPOSANT: POURQUOI ME CHOISIR
   ========================================================= */
function WhyChooseMe() {
  const items = [
    { icon: <Sparkles size={22} />, title: "CRÉATIVITÉ", desc: "Des designs uniques adaptés à chaque projet." },
    { icon: <Gem size={22} />, title: "QUALITÉ", desc: "Une attention particulière aux détails." },
    { icon: <Zap size={22} />, title: "RAPIDITÉ", desc: "Des créations livrées dans les meilleurs délais." },
    { icon: <BadgeCheck size={22} />, title: "PROFESSIONNALISME", desc: "Une communication claire du début à la fin." },
  ];
  return (
    <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-7 rounded-xl border border-gray-200 hover:border-violet-600/40 hover:-translate-y-1 transition-all duration-500 fade-in-up"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="w-11 h-11 rounded-full bg-violet-600/10 text-violet-600 flex items-center justify-center mb-5">
              {it.icon}
            </div>
            <h3 className="text-[#111111] font-bold tracking-wide mb-2">{it.title}</h3>
            <p className="text-[#666666] text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   COMPOSANT: MES DESIGNS EN ACTION
   ========================================================= */
const portfolioProjects = [
  { id: 1, title: "Nou Bouke — Kanpay Konsyantizasyon", category: "flyers", image: IMG_NOU_BOUKE, description: "Afich konsyantizasyon pou ensekirite an Ayiti, ak referans istorik 1804/2024." },
  { id: 2, title: "Ti Lari Komedyen — WenWenn Promo", category: "flyers", image: IMG_TI_LARI, description: "Flyer pwomosyonèl pou yon komedyen ak pwomosyon WenWenn." },
  { id: 3, title: "Trayizon — Joe Style", category: "flyers", image: IMG_TRAYIZON, description: "Afich \"Coming Soon\" pou yon nouvo mizik ki ap soti." },
  { id: 4, title: "Soutien Psychologique", category: "flyers", image: IMG_SOUTIEN_PSY, description: "Post sansibilizasyon sou jan pou jwenn bon sipò sikolojik." },
  { id: 5, title: "Construisez Avec Nous", category: "flyers", image: IMG_CONSTRUISEZ, description: "Brochure pwomosyonèl pou yon konpayi konstriksyon." },
  { id: 6, title: "Thé — Ventre Plat", category: "flyers", image: IMG_THE_VENTRE, description: "Visuel pwodwi pou yon te natirèl." },
  { id: 7, title: "C'est un Autre Lundi — Learnix", category: "social-media", image: IMG_LUNDI_LEARNIX, description: "Post motivasyonèl pou rezo sosyal, ak yon mesaj sou valè tan." },
  { id: 8, title: "Bon Début de Semaine", category: "social-media", image: IMG_BON_DEBUT_FEMME, description: "Post motivasyonèl pou kòmanse semèn nan ak bon enèji." },
  { id: 9, title: "Bon Début de Semaine à Tous", category: "social-media", image: IMG_BON_DEBUT_HOMME, description: "Dezyèm vèsyon post motivasyonèl pou kòmansman semèn nan." },
  { id: 10, title: "Bon Week-end — Un Sourire", category: "social-media", image: IMG_BON_WEEKEND_SOURIRE, description: "Post motivasyonèl pou wikenn ak yon mesaj pozitif sou souri." },
  { id: 11, title: "Bon Lundi à Tous", category: "social-media", image: IMG_BON_LUNDI_ATOUS, description: "Post motivasyonèl pou kòmanse semèn nan ak yon sitasyon enspirasyon." },
  { id: 12, title: "Le Design Transforme l'Ordinaire", category: "social-media", image: IMG_DESIGN_TRANSFORME, description: "Kat pwomosyonèl pèsonèl pou prezante sèvis design ak yon konsèy kreyasyon." },
  { id: 13, title: "Bière Haïtien", category: "branding", image: IMG_BIERE_HAITIEN, description: "Etikèt ak visuel pwomosyonèl pou yon mak byè lokal." },
  { id: 14, title: "Nana — L'huile d'aloe", category: "branding", image: IMG_NANA_ALOE, description: "Design etikèt pou yon pwodwi swen chve ak lwil aloe vera." },
  { id: 15, title: "Haïtien Eau", category: "branding", image: IMG_HAITIEN_EAU, description: "Branding ak visuel pwomosyonèl pou yon mak dlo pirifye." },
  { id: 16, title: "Diri Lakay", category: "branding", image: IMG_DIRI_LAKAY, description: "Branding ak afich pwomosyonèl pou yon mak manje lokal." },
  { id: 17, title: "Pasta Haïtienne", category: "branding", image: IMG_PASTA_HAITIENNE, description: "Visuel pwodwi pou yon mak pat alimantè lokal." },
  { id: 18, title: "Dahana — Maïs Haïtien", category: "branding", image: IMG_DAHANA_MAIS, description: "Kanpay pwomosyonèl pou yon mak farin mayi lokal." },
  { id: 19, title: "Pantene — Soins Auto-Administrés", category: "branding", image: IMG_PANTENE, description: "Visuel pwomosyonèl pou pwodwi swen chve ak po." },
  { id: 20, title: "Photography Carlin", category: "branding", image: IMG_PHOTOGRAPHY_CARLIN, description: "Afich sèvis pou yon fotograf pwofesyonèl." },
  { id: 21, title: "Happy Birthday — Jean Chloé", category: "invitations", image: IMG_JEAN_CHLOE, description: "Afich anivèsè pèsonalize ak foto ak dat espesyal." },
  { id: 22, title: "Happy Birthday — Soraya", category: "invitations", image: IMG_SORAYA_BIRTHDAY, description: "Afich anivèsè elegant ak dat espesyal make." },
  { id: 23, title: "Happy Mother's Day", category: "invitations", image: IMG_HAPPY_MOTHERS_DAY, description: "Afich selebrasyon pou fèt manman yo ak yon kolaj foto." },
  // Egzanp: ajoute yon nouvo pwojè san imaj ankò — placeholder la ap parèt otomatikman
  // { id: 24, title: "Nouvo Pwojè", category: "flyers", image: null, description: "Deskripsyon pwojè a." },
];

const DESIGN_FILTERS = [
  { key: "tous", label: "TOUS" },
  { key: "flyers", label: "FLYERS" },
  { key: "social-media", label: "SOCIAL MEDIA" },
  { key: "branding", label: "BRANDING" },
  { key: "invitations", label: "INVITATIONS" },
];

function ProjectImagePlaceholder({ className }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, #111111 60%)",
      }}
    >
      <div className="w-12 h-12 rounded-full bg-violet-600/10 flex items-center justify-center">
        <ImageOff size={20} className="text-violet-600" />
      </div>
      <span className="text-[#666666] text-xs tracking-widest">
        VISUEL À VENIR
      </span>
    </div>
  );
}

function DesignProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 fade-in"
      style={{ backgroundColor: "rgba(8,8,8,0.92)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative max-w-3xl w-full grid md:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden border border-violet-600/20 p-5 md:p-8"
        style={{ backgroundColor: "#FFFFFF" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-[#666666] hover:text-[#111111] hover:bg-[#EAEAEA] transition-all duration-300"
        >
          <X size={20} />
        </button>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[65vh] object-cover rounded-xl border border-violet-600/20"
            style={{ boxShadow: "0 20px 50px rgba(124,58,237,0.25)" }}
          />
        ) : (
          <ProjectImagePlaceholder className="w-full aspect-[4/5] max-h-[65vh] rounded-xl border border-violet-600/20" />
        )}
        <div>
          <span className="text-violet-600 text-xs tracking-widest">
            {project.category.replace("-", " ").toUpperCase()}
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-[#111111] mt-3 mb-4">
            {project.title}
          </h3>
          <p className="text-[#666666] leading-relaxed mb-8">{project.description}</p>
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre du projet"
            className="inline-flex items-center gap-2 border border-violet-600/50 text-violet-600 text-sm font-semibold px-6 py-3 rounded-full hover:bg-violet-700 hover:text-white hover:border-violet-700 transition-all duration-300"
          >
            <X size={15} /> FERMER
          </button>
        </div>
      </div>
    </div>
  );
}

function DesignsInAction() {
  const [filter, setFilter] = useState("tous");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "tous"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section className="py-28 px-6 md:px-10" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-10 fade-in-up">
          <p className="text-violet-600 text-xs tracking-[0.3em] mb-3">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-5">
            MES DESIGNS EN ACTION
          </h2>
          <p className="text-[#666666] text-lg">
            Découvrez une sélection de mes créations graphiques réalisées pour
            différents projets, événements et marques.
          </p>
        </div>

        {/* Filtres — scroll horizontal sou mobile */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible" role="tablist" aria-label="Filtrer les designs par catégorie">
          {DESIGN_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              role="tab"
              aria-selected={filter === f.key}
              aria-label={`Filtrer par ${f.label}`}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-xs tracking-widest font-semibold transition-all duration-300 border ${
                filter === f.key
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-gray-300 text-[#666666] hover:border-violet-600 hover:text-violet-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Galerie */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group rounded-xl overflow-hidden border border-gray-200 hover:border-violet-600/40 transition-all duration-500 fade-in-up"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <ProjectImagePlaceholder className="w-full h-full" />
                  )}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.75) 0%, rgba(91,33,182,0.35) 55%, rgba(8,8,8,0.15) 100%)",
                    }}
                  >
                    <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                      VOIR LE PROJET <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-violet-600 text-xs tracking-widest font-semibold">
                    {p.category.replace("-", " ").toUpperCase()}
                  </span>
                  <h3 className="text-[#111111] font-bold text-base mt-1 mb-4">
                    {p.title}
                  </h3>
                  <button
                    onClick={() => setSelected(p)}
                    aria-label={`Voir le projet ${p.title}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors duration-300"
                  >
                    VOIR LE PROJET <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="rounded-xl border border-gray-200 py-16 text-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <p className="text-[#666666]">Bientôt de nouvelles créations.</p>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-20 rounded-2xl border border-violet-600/20 p-10 md:p-14 text-center fade-in-up"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 20px 60px rgba(124,58,237,0.12)",
          }}
        >
          <h3 className="text-2xl md:text-4xl font-black text-[#111111] mb-4">
            VOUS AVEZ UN PROJET EN TÊTE ?
          </h3>
          <p className="text-[#666666] mb-8 max-w-xl mx-auto">
            Transformons votre idée en un design professionnel qui attire l'attention.
          </p>
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold px-7 py-4 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]"
          >
            DÉMARRER UN PROJET <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {selected && (
        <DesignProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

/* =========================================================
   COMPOSANT: TESTIMONIALS
   ========================================================= */
function Testimonials() {
  return (
    <section className="py-28 px-6 md:px-10" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14 fade-in-up">
          <p className="text-violet-600 text-xs tracking-[0.3em] mb-3">TÉMOIGNAGES</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">
            CE QUE DISENT MES CLIENTS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-xl border border-gray-200 hover:border-violet-600/40 transition-all duration-500 fade-in-up"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex gap-1 text-violet-600 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#666666] leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-[#111111] font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPOSANT: CONTACT
   ========================================================= */
function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          message: form.message,
          _subject: `Nouveau message de ${form.nom} — B.D Graphic Design`,
        }),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("sent");
      setForm({ nom: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-10" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto text-center mb-16 fade-in-up">
        <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 leading-tight">
          UN PROJET EN TÊTE ? <span className="text-violet-600">PARLONS-EN.</span>
        </h2>
        <p className="text-[#666666] text-lg max-w-xl mx-auto mb-10">
          Vous avez une idée, un événement ou une marque à mettre en valeur ?
          Je suis prêt à donner vie à votre projet.
        </p>
        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]"
        >
          💬 ME CONTACTER SUR WHATSAPP
        </a>
        <div className="flex justify-center gap-5 mt-8">
          <SocialIcon href={CONTACT.instagram} icon={<Instagram size={18} />} />
          <SocialIcon href={CONTACT.facebook} icon={<Facebook size={18} />} />
          <SocialIcon href={`mailto:${CONTACT.email}`} icon={<Mail size={18} />} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-8 rounded-xl border border-gray-200 fade-in-up"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="mb-5">
          <label className="block text-xs tracking-widest text-[#666666] mb-2">NOM</label>
          <input
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-[#111111] focus:border-violet-600 focus:outline-none transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-5">
          <label className="block text-xs tracking-widest text-[#666666] mb-2">EMAIL</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-[#111111] focus:border-violet-600 focus:outline-none transition-colors"
            placeholder="votre@email.com"
          />
        </div>
        <div className="mb-7">
          <label className="block text-xs tracking-widest text-[#666666] mb-2">MESSAGE</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-[#111111] focus:border-violet-600 focus:outline-none transition-colors resize-none"
            placeholder="Parlez-moi de votre projet..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white font-semibold py-3.5 rounded-full hover:bg-violet-700 transition-all duration-300 disabled:opacity-60"
        >
          {status === "sending"
            ? "ENVOI EN COURS..."
            : status === "sent"
            ? "MESSAGE ENVOYÉ ✓"
            : status === "error"
            ? "ERREUR — RÉESSAYEZ"
            : "ENVOYER LE MESSAGE"}{" "}
          <Send size={16} />
        </button>
      </form>
    </section>
  );
}

/* =========================================================
   COMPOSANT: FOOTER
   ========================================================= */
function Footer() {
  return (
    <footer
      className="py-14 px-6 md:px-10 border-t border-gray-200"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-[#111111] font-black text-xl tracking-tight">
            B.D | GRAPHIC DESIGN
          </p>
          <p className="text-[#666666] text-xs tracking-widest mt-1">
            GRAPHIC DESIGNER
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#666666]">
          {["Accueil", "Portfolio", "Services", "À propos", "Contact"].map((l) => (
            <a key={l} href={`#${l === "Accueil" ? "hero" : l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-violet-600 transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <SocialIcon href={CONTACT.instagram} icon={<Instagram size={16} />} />
          <SocialIcon href={CONTACT.facebook} icon={<Facebook size={16} />} />
          <SocialIcon href={`mailto:${CONTACT.email}`} icon={<Mail size={16} />} />
        </div>
      </div>
      <p className="text-center text-[#666666] text-xs mt-10 tracking-wide">
        © 2026 B.D GRAPHIC. Tous droits réservés.
      </p>
    </footer>
  );
}

/* =========================================================
   APP PRINCIPALE
   ========================================================= */
export default function App() {
  const [selected, setSelected] = useState(null);

  const openProject = (item) => setSelected(item);
  const closeProject = () => setSelected(null);
  const navProject = (dir) => {
    if (!selected) return;
    const idx = PORTFOLIO_ITEMS.findIndex((i) => i.id === selected.id);
    const next =
      (idx + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelected(PORTFOLIO_ITEMS[next]);
  };

  return (
    <div style={{ backgroundColor: "#F7F7F5", fontFamily: "Poppins, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { scroll-behavior: smooth; }
        .fade-in-up { animation: fadeInUp 0.8s ease both; }
        .fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up, .fade-in { animation: none; }
        }
      `}</style>

      <Header />
      <Hero />
      <Portfolio onOpen={openProject} />
      <Services />
      <About />
      <WhyChooseMe />
      <DesignsInAction />
      <Testimonials />
      <Contact />
      <Footer />

      {selected && (
        <ProjectModal project={selected} onClose={closeProject} onNav={navProject} />
      )}
    </div>
  );
}
