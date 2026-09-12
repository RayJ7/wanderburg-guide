# Home header — 1:1 slice (element 1)

Source: `mock-home-v2.png` (1280×720)
Crop: `y=0..71` full width → `home-header.png` (1280×71)

## Asset
| File | Size | Use |
|------|------|-----|
| `home-header.png` | 1280×71 | Entire top bar as first pass (logo + 5 nav + gem + settings) |

## Assembly (Coder — HEADER ONLY)
1. Replace current `.site-header` content with a single `<img>` or background using `/images/ui/slices/home/home-header.png` at 1:1 aspect (width 100% max 1280, height auto).
2. Overlay invisible/hit-area links on the 5 nav regions (approximate x% on 1280 canvas):
   - Home ~22–30%
   - Best Modules ~31–42%
   - Silver Farming ~43–55%
   - Captains ~56–65%
   - Contact ~66–74%
3. Do NOT restyle with CSS wood gradients for this element — use the slice.
4. Redeploy and ping 设计师 for QA vs mock.

Next element (after pass): hero section.
