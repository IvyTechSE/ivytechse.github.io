#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGES_DIR="${1:-"$ROOT_DIR/public/images"}"

WEBP_QUALITY="${WEBP_QUALITY:-80}"
JPG_QUALITY="${JPG_QUALITY:-3}"
AVIF_CRF="${AVIF_CRF:-30}"
AVIF_CPU_USED="${AVIF_CPU_USED:-6}"
SIZES="${SIZES:-"320 640"}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg not found in PATH" >&2
  exit 1
fi

if [[ ! -d "$IMAGES_DIR" ]]; then
  echo "Error: images dir not found: $IMAGES_DIR" >&2
  exit 1
fi

while IFS= read -r -d '' input; do
  [[ -z "$input" ]] && continue
  case "$input" in
    *-320.jpg|*-640.jpg) continue ;;
  esac
  base="${input%.*}"

  for size in $SIZES; do
    jpg_out="${base}-${size}.jpg"
    webp_out="${base}-${size}.webp"
    avif_out="${base}-${size}.avif"

    scale_filter="scale=${size}:${size}:force_original_aspect_ratio=increase,crop=${size}:${size}"

    ffmpeg -hide_banner -loglevel error -nostdin -y \
      -i "$input" \
      -map_metadata -1 \
      -frames:v 1 \
      -vf "$scale_filter" \
      -q:v "$JPG_QUALITY" \
      "$jpg_out"

    ffmpeg -hide_banner -loglevel error -nostdin -y \
      -i "$input" \
      -map_metadata -1 \
      -frames:v 1 \
      -vf "$scale_filter" \
      -c:v libwebp \
      -preset photo \
      -quality "$WEBP_QUALITY" \
      -pix_fmt yuv420p \
      "$webp_out"

    ffmpeg -hide_banner -loglevel error -nostdin -y \
      -i "$input" \
      -map_metadata -1 \
      -frames:v 1 \
      -vf "$scale_filter" \
      -c:v libaom-av1 \
      -still-picture 1 \
      -cpu-used "$AVIF_CPU_USED" \
      -crf "$AVIF_CRF" \
      -b:v 0 \
      -pix_fmt yuv420p \
      "$avif_out"
  done
done < <(find "$IMAGES_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

echo "Done."
