import os, subprocess, xml.sax.saxutils

steps = [
    {
        "num": 1,
        "title": "Turbante & Leche Limpiadora",
        "desc": "Protegemos el cabello y retiramos suavemente las impurezas acumuladas.",
        "video": "paso-01.mp4",
        "y_crop": 0.35
    },
    {
        "num": 2,
        "title": "Exfoliante & Limpieza Profunda",
        "desc": "Renovamos la capa córnea para devolver la luminosidad a la piel.",
        "video": "paso-02.mp4",
        "y_crop": 0.35
    },
    {
        "num": 3,
        "title": "Tónico Reequilibrante",
        "desc": "Bruma refrescante que calma y restablece el pH de la epidermis.",
        "video": "paso-03.mp4",
        "y_crop": 0.35
    },
    {
        "num": 4,
        "title": "Principio Activo & Radiofrecuencia",
        "desc": "Aplicación de principio activo adaptado a las necesidades de la piel.",
        "video": "paso-04.mp4",
        "y_crop": 0.35
    },
    {
        "num": 5,
        "title": "Crema Hidratante & Masaje Facial",
        "desc": "Maniobras remodelantes y drenantes que activan la microcirculación.",
        "video": "paso-05.mp4",
        "y_crop": 0.15
    },
    {
        "num": 6,
        "title": "Mascarilla Geloide",
        "desc": "Sello intensivo que calma, reconforta y le da luz a la piel.",
        "video": "paso-06.mp4",
        "y_crop": 0.15
    },
    {
        "num": 7,
        "title": "Masaje Corporal & Capilar",
        "desc": "Relajación en hombros, escote y zona craneal.",
        "video": "paso-07.mp4",
        "y_crop": 0.15
    },
    {
        "num": 8,
        "title": "Retirado, Factor Solar & Bálsamo",
        "desc": "Protección solar e hidratación labial.",
        "video": "paso-08.mp4",
        "y_crop": 0.15
    }
]

base_dir = "/home/jnavas/llumdelluna"
video_dir = os.path.join(base_dir, "instagram-posts/videos/paso-a-paso-ritual-facial")
logo_path = os.path.join(base_dir, "images/logo IG 1.png")
scratch_dir = os.path.join(base_dir, "scratch")

os.makedirs(scratch_dir, exist_ok=True)

for step in steps:
    num = step["num"]
    title_esc = xml.sax.saxutils.escape(step["title"])
    desc_esc = xml.sax.saxutils.escape(step["desc"])
    
    svg_content = f"""<svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&amp;family=Montserrat:wght@400;600&amp;display=swap');
        .title {{ font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 46px; fill: #FFFFFF; text-anchor: end; }}
        .desc {{ font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 26px; fill: #FFFFFF; text-anchor: middle; }}
    </style>
    <!-- Fondo Malva Oficial -->
    <rect width="1080" height="1350" fill="#C9B3B9"/>
    
    <!-- Cabecera Superior -->
    <rect width="1080" height="125" fill="#C9B3B9"/>
    <line x1="0" y1="125" x2="1080" y2="125" stroke="#E3DCD1" stroke-width="2" stroke-opacity="0.45"/>
    <image href="{logo_path}" x="45" y="25" height="75"/>
    <text x="1035" y="78" class="title">{title_esc}</text>

    <!-- Ventana transparente para el vídeo -->
    <mask id="video-mask">
        <rect width="1080" height="1350" fill="white"/>
        <rect x="27" y="145" width="1026" height="1175" rx="30" ry="30" fill="black"/>
    </mask>
    <rect width="1080" height="1350" fill="#C9B3B9" mask="url(#video-mask)"/>

    <!-- Borde redondeado del vídeo -->
    <rect x="27" y="145" width="1026" height="1175" rx="30" ry="30" fill="none" stroke="#E3DCD1" stroke-width="2" stroke-opacity="0.4"/>

    <!-- Gradiente inferior sobre el vídeo -->
    <defs>
        <linearGradient id="overlay-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.85"/>
        </linearGradient>
        <clipPath id="video-clip">
            <rect x="27" y="145" width="1026" height="1175" rx="30" ry="30"/>
        </clipPath>
    </defs>
    <rect x="27" y="980" width="1026" height="340" fill="url(#overlay-grad)" clip-path="url(#video-clip)"/>
    <text x="540" y="1260" class="desc" clip-path="url(#video-clip)">{desc_esc}</text>
</svg>"""

    svg_file = os.path.join(scratch_dir, f"overlay_step_{num:02d}.svg")
    png_file = os.path.join(scratch_dir, f"overlay_step_{num:02d}.png")
    
    with open(svg_file, "w", encoding="utf-8") as f:
        f.write(svg_content)
        
    print(f"Converting SVG to PNG for Step {num}...")
    subprocess.run(["magick", svg_file, png_file], check=True)

print("All overlay PNGs generated successfully!")
