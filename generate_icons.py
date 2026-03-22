from PIL import Image, ImageDraw
import math, os

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]
OUT_DIR = os.path.join(os.path.dirname(__file__), 'icons')
os.makedirs(OUT_DIR, exist_ok=True)

def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def draw_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # --- Rounded rectangle background with gradient (simulate via bands) ---
    radius = int(size * 0.1875)  # ~96px radius at 512
    blue  = (59, 130, 246)
    purple = (124, 58, 237)

    # Draw gradient by horizontal bands
    for y in range(size):
        t = y / size
        color = lerp_color(blue, purple, t)
        draw.line([(0, y), (size, y)], fill=color + (255,))

    # Mask to rounded rect
    mask = Image.new('L', (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    img.putalpha(mask)

    # --- Seedling icon ---
    cx, cy = size // 2, size // 2
    s = size / 512  # scale factor

    # Stem
    stem_w = max(2, int(20 * s))
    stem_h = int(120 * s)
    stem_x = cx - stem_w // 2
    stem_y = cy - int(60 * s)
    draw.rounded_rectangle(
        [stem_x, stem_y, stem_x + stem_w, stem_y + stem_h],
        radius=stem_w // 2,
        fill=(255, 255, 255, 230)
    )

    # Left leaf (ellipse, rotated -30°)
    def draw_leaf(draw, img, cx, cy, dx, dy, rx, ry, angle, alpha=217):
        leaf = Image.new('RGBA', img.size, (0, 0, 0, 0))
        ld = ImageDraw.Draw(leaf)
        lx, ly = cx + int(dx * s), cy + int(dy * s)
        lrx, lry = int(rx * s), int(ry * s)
        ld.ellipse([lx - lrx, ly - lry, lx + lrx, ly + lry], fill=(255, 255, 255, alpha))
        leaf = leaf.rotate(-angle, center=(lx, ly), resample=Image.BICUBIC, expand=False)
        return leaf

    left_leaf  = draw_leaf(draw, img, cx, cy, -48, -20, 44, 24, -30)
    right_leaf = draw_leaf(draw, img, cx, cy,  48, -20, 44, 24,  30)

    img = Image.alpha_composite(img, left_leaf)
    img = Image.alpha_composite(img, right_leaf)

    # Ground line
    draw2 = ImageDraw.Draw(img)
    gw, gh = int(160 * s), max(2, int(12 * s))
    gx = cx - gw // 2
    gy = cy + int(60 * s)
    draw2.rounded_rectangle([gx, gy, gx + gw, gy + gh], radius=gh // 2, fill=(255, 255, 255, 102))

    return img

for size in SIZES:
    icon = draw_icon(size)
    path = os.path.join(OUT_DIR, f'icon-{size}x{size}.png')
    icon.save(path, 'PNG')
    print(f'  Generated {path}')

print('Done.')
