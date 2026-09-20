import os
from PIL import Image, ImageDraw, ImageFont

base_dir = "/home/jnavas/llumdelluna"
logo_path = os.path.join(base_dir, "images/logo IG 1.png")
scratch_dir = os.path.join(base_dir, "scratch")
fonts_dir = os.path.join(scratch_dir, "fonts")

title_font_path = os.path.join(fonts_dir, "CormorantGaramond-Bold.ttf")
desc_font_path = os.path.join(fonts_dir, "Montserrat-Medium.ttf")

steps = [
    {
        "num": 1,
        "title": "Turbante & Leche Limpiadora",
        "desc": "Protegemos el cabello y retiramos suavemente las impurezas acumuladas."
    },
    {
        "num": 2,
        "title": "Exfoliante & Limpieza Profunda",
        "desc": "Renovamos la capa córnea para devolver la luminosidad a la piel."
    },
    {
        "num": 3,
        "title": "Tónico Reequilibrante",
        "desc": "Bruma refrescante que calma y restablece el pH de la epidermis."
    },
    {
        "num": 4,
        "title": "Principio Activo & Radiofrecuencia",
        "desc": "Aplicación de principio activo adaptado a las necesidades de la piel."
    },
    {
        "num": 5,
        "title": "Crema Hidratante & Masaje Facial",
        "desc": "Maniobras remodelantes y drenantes que activan la microcirculación."
    },
    {
        "num": 6,
        "title": "Mascarilla Geloide",
        "desc": "Sello intensivo que calma, reconforta y le da luz a la piel."
    },
    {
        "num": 7,
        "title": "Masaje Corporal & Capilar",
        "desc": "Relajación en hombros, escote y zona craneal."
    },
    {
        "num": 8,
        "title": "Retirado, Factor Solar & Bálsamo",
        "desc": "Protección solar e hidratación labial."
    }
]

logo_img = Image.open(logo_path).convert("RGBA")
# Redimensionar logo a altura 75px manteniendo aspect ratio
w, h = logo_img.size
new_h = 75
new_w = int(w * (75.0 / h))
logo_img = logo_img.resize((new_w, new_h), Image.Resampling.LANCZOS)

title_font = ImageFont.truetype(title_font_path, 46)
desc_font = ImageFont.truetype(desc_font_path, 25)

for step in steps:
    num = step["num"]
    title_text = step["title"]
    desc_text = step["desc"]
    
    # Crear imagen RGBA transparente 1080x1350
    overlay = Image.new("RGBA", (1080, 1350), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # 1. Rellenar fondo Malva (#C9B3B9 -> (201, 179, 185, 255))
    malva_color = (201, 179, 185, 255)
    draw.rectangle([0, 0, 1080, 1350], fill=malva_color)
    
    # 2. Recortar la ventana del vídeo en x=27, y=145, w=1026, h=1175 con bordes redondeados rx=30
    # Para recortar, creamos una máscara de transparencia
    hole_box = [27, 145, 27 + 1026, 145 + 1175]
    mask = Image.new("L", (1080, 1350), 255)
    mask_draw = ImageDraw.Draw(mask)
    # Dibujar rectángulo redondeado transparente (0) en la máscara
    mask_draw.rounded_rectangle(hole_box, radius=30, fill=0)
    
    # Aplicar la máscara al canal Alpha del overlay (haciendo el agujero del vídeo 100% transparente)
    # Obtener alpha actual del overlay
    r, g, b, a = overlay.split()
    overlay.putalpha(mask)
    
    # Ahora volver a dibujar elementos sobre la imagen con transparencia
    draw = ImageDraw.Draw(overlay)
    
    # 3. Dibujar borde redondeado del vídeo (2px, #E3DCD1 al 40% opacidad -> (227, 220, 209, 102))
    draw.rounded_rectangle(hole_box, radius=30, outline=(227, 220, 209, 115), width=3)
    
    # 4. Cabecera Superior: Línea separadora a y=125
    draw.line([(0, 125), (1080, 125)], fill=(227, 220, 209, 115), width=2)
    
    # Pegar Logo a x=45, y=25
    overlay.paste(logo_img, (45, 25), logo_img)
    
    # Dibujar Título del Paso (alineado a la derecha x=1035)
    # Calcular tamaño del texto
    bbox = draw.textbbox((0, 0), title_text, font=title_font)
    title_w = bbox[2] - bbox[0]
    title_x = 1035 - title_w
    title_y = 38
    draw.text((title_x, title_y), title_text, font=title_font, fill=(255, 255, 255, 255))
    
    # 5. Gradiente inferior y Descripción del Paso
    # Crear capa para la banda inferior oscura translúcida
    desc_layer = Image.new("RGBA", (1080, 1350), (0, 0, 0, 0))
    desc_draw = ImageDraw.Draw(desc_layer)
    
    # Máscara para recortar el gradiente al rectángulo redondeado del vídeo
    video_clip_mask = Image.new("L", (1080, 1350), 0)
    vcm_draw = ImageDraw.Draw(video_clip_mask)
    vcm_draw.rounded_rectangle(hole_box, radius=30, fill=255)
    
    # Dibujar gradiente oscuro desde y=1000 hasta y=1320
    grad_top = 1000
    grad_bottom = 1320
    for y in range(grad_top, grad_bottom):
        alpha_val = int(200 * ((y - grad_top) / float(grad_bottom - grad_top)))
        desc_draw.line([(27, y), (1053, y)], fill=(0, 0, 0, alpha_val))
        
    # Texto de descripción en 1 sola línea centrado horizontalmente
    d_bbox = desc_draw.textbbox((0, 0), desc_text, font=desc_font)
    desc_w = d_bbox[2] - d_bbox[0]
    desc_x = 540 - (desc_w // 2)
    desc_y = 1248
    desc_draw.text((desc_x, desc_y), desc_text, font=desc_font, fill=(255, 255, 255, 245))
    
    # Aplicar la máscara del área del vídeo al desc_layer
    r_d, g_d, b_d, a_d = desc_layer.split()
    # Interseccionar alpha_d con video_clip_mask
    final_alpha = Image.eval(a_d, lambda val: val)
    desc_layer.putalpha(Image.composite(a_d, Image.new("L", (1080, 1350), 0), video_clip_mask))
    
    # Combinar desc_layer con overlay
    overlay = Image.alpha_composite(overlay, desc_layer)
    
    out_file = os.path.join(scratch_dir, f"overlay_step_{num:02d}.png")
    overlay.save(out_file, "PNG")
    print(f"Generated clean overlay PNG for Step {num}: {out_file}")

print("All PIL overlay PNGs generated successfully with TRANSPARENT VIDEO WINDOW & TYPOGRAPHY!")
