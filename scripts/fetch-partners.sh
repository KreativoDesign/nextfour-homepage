#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$BASE_DIR/assets/img/partners"
mkdir -p "$OUT_DIR"

urls=(
  "https://www.openv.co.za/wp-content/uploads/2021/10/microsoft.jpeg"
  "https://www.openv.co.za/wp-content/uploads/2021/10/Vodacom-logo.jpg"
  "https://www.openv.co.za/wp-content/uploads/2021/10/mtn.png"
  "https://www.openv.co.za/wp-content/uploads/2021/10/1200px-Cisco_logo_blue_2016.svg.png"
  "https://www.openv.co.za/wp-content/uploads/2025/06/Dell_Logo.svg.png"
  "https://www.openv.co.za/wp-content/uploads/2022/08/1024px-HP_logo_2012.svg.png"
  "https://www.openv.co.za/wp-content/uploads/2022/09/Ubiquiti_Networks-Logo.wine_.png"
  "https://www.openv.co.za/wp-content/uploads/2021/10/Vox.jpg"
  "https://www.openv.co.za/wp-content/uploads/2022/08/ers_logo2.png"
  "https://www.openv.co.za/wp-content/uploads/2021/10/ECN-logo.jpg"
  "https://www.openv.co.za/wp-content/uploads/2021/10/mitel-logo.jpg"
  "https://www.openv.co.za/wp-content/uploads/2021/10/siemon-logo.jpg"
  "https://www.openv.co.za/wp-content/uploads/2025/06/brother_logo.png"
)

names=(
  "microsoft.png"
  "vodacom.png"
  "mtn.png"
  "cisco.png"
  "dell.png"
  "hp.png"
  "unifi.png"
  "vox.png"
  "ers.png"
  "ecn.png"
  "mitel.png"
  "siemon.png"
  "brother.png"
)

for i in "${!urls[@]}"; do
  out="$OUT_DIR/${names[$i]}"
  curl -L --fail --silent --show-error "${urls[$i]}" -o "$out"
done

if command -v magick >/dev/null 2>&1; then
  OPTIMIZER="magick"
elif command -v convert >/dev/null 2>&1; then
  OPTIMIZER="convert"
elif command -v cwebp >/dev/null 2>&1; then
  OPTIMIZER="cwebp"
else
  echo "No ImageMagick, cwebp, or sharp available; leaving downloaded originals in place."
  exit 0
fi

for file in "$OUT_DIR"/*.png; do
  [ -e "$file" ] || continue
  base="${file%.png}"
  if [ "$OPTIMIZER" = "cwebp" ]; then
    cwebp -q 82 "$file" -o "$base.webp"
  else
    "$OPTIMIZER" "$file" -strip -resize x96 -quality 82 "$base.webp"
  fi
done

ls -lh "$OUT_DIR" | sort
