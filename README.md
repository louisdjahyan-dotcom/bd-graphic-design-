# B.D GRAPHIC DESIGN — Sit Portfolio

Pwojè React/Vite/Tailwind ki pare pou pwodiksyon.

## Anvan w deploye — 3 bagay pou verifye/chanje

1. **Fòm kontak la** (`src/App.jsx`, chèche `CONTACT.email`) — mete VRÈ email ou a
   olye de `louisdjahyan@gmail.com`. Fòm nan sèvi ak [FormSubmit.co](https://formsubmit.co),
   yon sèvis gratis ki voye mesaj fòm nan dirèkteman nan email ou, san bezwen backend.
   ⚠️ **Premye fwa yon moun voye yon mesaj**, FormSubmit ap voye w yon email pou
   konfime/aktive fòm nan — klike sou lyen konfimasyon an yon sèl fwa, apre sa tout
   lòt mesaj ap rive otomatikman.

2. **Rezo sosyal** — nan menm objè `CONTACT`, mete vrè lyen Instagram ak Facebook ou.

3. **Foto "À propos"** — chèche `bddesigner` nan `src/App.jsx`, ranplase ak pwòp
   foto pèsonèl ou nan `public/images/`.

## Enstale ak teste lokal

Ou bezwen [Node.js](https://nodejs.org) enstale sou òdinatè w (vèsyon 18 oswa plis).

```bash
npm install
npm run dev
```

Sa ap louvri sit la sou `http://localhost:5173` pou w ka teste l anvan w deploye.

## Deploye sit la — jwenn yon lyen piblik (PI FASIL: Netlify Drop)

Sa a se metòd ki pi senp — pa bezwen konte, pa bezwen konfigirasyon.

1. Nan tèminal ou, nan dosye pwojè a, kouri:
   ```bash
   npm install
   npm run build
   ```
   Sa ap kreye yon dosye `dist/` ki gen tout sit la konpile, pare pou entènèt.

2. Ale sou **[app.netlify.com/drop](https://app.netlify.com/drop)** nan navigatè w.

3. **Trennen dosye `dist/`** a (glise-lage li) dirèkteman sou paj la.

4. An kèk segonn, Netlify ap ba w yon lyen piblik (egzanp:
   `https://random-name-123.netlify.app`) — sit la deja an liy!

5. (Opsyonèl) Kreye yon kont Netlify gratis pou w ka:
   - Chanje non lyen an pou yon bagay tankou `bdgraphicdesign.netlify.app`
   - Konekte yon vrè domèn (egzanp `bdgraphicdesign.com`) si w achte youn

Lyen sa a ou ka voye bay nenpòt moun — yo louvri l nan nenpòt navigatè
(telefòn, òdinatè) san yo pa bezwen enstale okenn aplikasyon.

## Altènativ: Vercel (pou mizajou otomatik)

Si w vle sit la mizajou otomatikman chak fwa w chanje kòd la:

1. Mete kòd la sou yon repo GitHub (kreye yon kont GitHub gratis si w poko genyen)
2. Ale sou [vercel.com](https://vercel.com), konekte kont GitHub ou
3. Klike "Add New Project", chwazi repo a
4. Vercel detekte Vite otomatikman — klike "Deploy"
5. Ou resevwa yon lyen piblik (egzanp `bdgraphicdesign.vercel.app`)

## Estrikti pwojè a

```
bd-graphic-design/
├── public/
│   ├── images/          ← 23 flyer yo (fichye reyèl, pa base64)
│   └── favicon.svg
├── src/
│   ├── App.jsx           ← tout sit la
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Ajoute yon nouvo flyer pita

1. Mete imaj la nan `public/images/`
2. Nan `src/App.jsx`, ajoute yon nouvo objè nan `portfolioProjects` (pou seksyon
   "MES DESIGNS EN ACTION") ak/oswa `PORTFOLIO_ITEMS` (pou seksyon "MES CRÉATIONS")
