# Expected image assets

Place local copies under `public/images/` when shipping. Until then, pages use Steam CDN URLs or CSS placeholders.

## Site header / OG (home, silver, contact)
- Working Steam CDN (verified 200): `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3624140/1af8e0906799b8c9063d0e5031571aef48b55605/header_alt_assets_2.jpg`
- Plain `/header.jpg` and raw `ss_*.jpg` CDN paths returned 404 without the asset hash folder — prefer local sync from designer pack

## /best-modules/ hero (Choose New Module)
- Local path (from IMAGE-MAPPING): `steam/ss_36b03816140674eb040db96cec090854044dff5d.1920x1080.jpg`
- Steam CDN pattern: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3624140/ss_36b03816140674eb040db96cec090854044dff5d.1920x1080.jpg`
- Press/official: `press/22.png`, `official/Wanderburg_Screenshot_02-2048x1152.png`

## /silver-farming/ hero (Steam/official only — not YT)
- Primary: `steam/ss_036989f9c5ee7df8dc8dbbbd7f22b5e9109dda31.1920x1080.jpg` (camp hub / shop)
- Map alt: `steam/ss_8986a649578cc74e3ced53e6d76724152de0c5ce.1920x1080.jpg`
- Official map: `official/Wanderburg_Screenshot_01-2048x1152.png`
- YT silver/Overtime UI frames are **secondary only** — do not use as hero

## /captains-tier-list/ (YT frames — caption source before live)
Root on designer side: `assets/captains/`

### EN main roster (10)
- Lumberjack — `captain_Lumberjack_-p5m-EkPUT4_0.jpg`
- The Count — `captain_TheCount_-p5m-EkPUT4_1.jpg`
- Racer Ruth — `captain_RacerRuth_-p5m-EkPUT4_6.jpg`
- Norbert The Normal — `captain_NorbertTheNormal_Jeh4-Sdx_3A_466.jpg`
- Patchy The Pirate — `captain_PatchyThePirate_Jeh4-Sdx_3A_466.jpg`
- Huntress — `captain_Huntress_Jeh4-Sdx_3A_468.jpg`
- Tankbert — `captain_Tankbert_tXa2csqQUbA_99.jpg`
- Time Witch — `captain_TimeWitch_T0vP215Rg_U_1876.jpg`
- Duelist — `captain_Duelist_T0vP215Rg_U_1882.jpg`
- Pyromaniac — `captain_Pyromaniac_T0vP215Rg_U_1888.jpg`

### PT UI — not main tier (3)
- Kapitalistus Maximus — `captain_KapitalistusMaximus_QoQuTI8CpDQ_2100.jpg`
- Sire Jonah — `captain_SireJonah_QoQuTI8CpDQ_2110.jpg`
- Empress — `captain_Empress_QoQuTI8CpDQ_2120.jpg`

### Exclude
- Demo Dieter — `captain_Dieter_DEMO_oi3HuZHwZ78_11.jpg` (demo; not on this page)

### Roster ref
- `captain_roster_icons_Jeh4-Sdx_3A_466.jpg`

## Placeholders currently in repo
- `og-modules.svg` — conceptual Choose New Module OG
- `og-header.svg` — header-style OG for home/silver
- `placeholder.svg` — generic

Sync real assets from the designer pack when ready. Confirm Tier-2 rights for any YT-derived frames before live publish.
