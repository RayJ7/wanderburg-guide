# Wanderburg Guide — UI decoration sprites (v2)

Procedural PNGs tuned to confirmed **mock-home-v2 / mock-modules-v2**:
grass green accents, warm wood & stone frames, bright yellow CTAs.
RGBA / transparent where useful for CSS `border-image` and layered UI.

Refs: `/workspace/wanderburg/preview/mock-home-v2.png`, `mock-modules-v2.png`.
Palette: `src/styles/global.css` (`--stone*`, `--wood*`, `--yellow*`, `--rivet`, `--purple-accent`).

## Required files

### Stone 9-slice (`frame-stone/`)

| File | Size | Use |
|------|------|-----|
| `corner-tl.png` | 64×64 | Top-left stone corner (recess + rivet + moss) |
| `corner-tr.png` | 64×64 | Top-right corner |
| `corner-bl.png` | 64×64 | Bottom-left corner |
| `corner-br.png` | 64×64 | Bottom-right corner |
| `edge-h.png` | 128×32 | Tileable horizontal stone edge |
| `edge-v.png` | 32×128 | Tileable vertical stone edge |

CSS: `border-image` (~64px slices) or position corners + repeat edges.

### Root sprites

| File | Size | Use |
|------|------|-----|
| `panel-frame.png` | 1024×640 | Assembled stone panel (center nearly transparent) |
| `wood-plank.png` | 512×128 | Dark horizontal wood fill (headers / card interiors) |
| `btn-yellow.png` | 256×64 | Bright yellow CTA strip (chamfer + brass bevel); text-free |
| `rivet.png` | 32×32 | Metal rivet overlay |
| `divider-ornament.png` | 480×48 | Title divider: purple gem + tapering lines |
| `nav-btn-wood.png` | 192×48 | Wood nav chip (chamfer + four rivets); text-free |

## Notes

- Pillow-generated clean RGBA (mock composites too baked for transparent crops).
- Prefer CSS tokens for hover/active; PNGs are base materials.
