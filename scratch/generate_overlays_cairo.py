import os, math
import cairo

base_dir = "/home/jnavas/llumdelluna"
logo_path = os.path.join(base_dir, "images/logo IG 1.png")
scratch_dir = os.path.join(base_dir, "scratch")

steps = [
    {"num": 1, "title": "Turbante & Leche Limpiadora", "desc": "Protegemos el cabello y retiramos suavemente las impurezas acumuladas."},
    {"num": 2, "title": "Exfoliante & Limpieza Profunda", "desc": "Renovamos la capa córnea para devolver la luminosidad a la piel."},
    {"num": 3, "title": "Tónico Reequilibrante", "desc": "Bruma refrescante que calma y restablece el pH de la epidermis."},
    {"num": 4, "title": "Principio Activo & Radiofrecuencia", "desc": "Aplicación de principio activo adaptado a las necesidades de la piel."},
    {"num": 5, "title": "Crema Hidratante & Masaje Facial", "desc": "Maniobras remodelantes y drenantes que activan la microcirculación."},
    {"num": 6, "title": "Mascarilla Geloide", "desc": "Sello intensivo que calma, reconforta y le da luz a la piel."},
    {"num": 7, "title": "Masaje Corporal & Capilar", "desc": "Relajación en hombros, escote y zona craneal."},
    {"num": 8, "title": "Retirado, Factor Solar & Bálsamo", "desc": "Protección solar e hidratación labial."}
]

# Cargar logo png con cairo
logo_surface = cairo.ImageSurface.create_from_png(logo_path)
lw = logo_surface.get_width()
lh = logo_surface.get_height()
scale_logo = 75.0 / lh

def add_rounded_rectangle(ctx, x, y, width, height, radius):
    degrees = math.pi / 180.0
    ctx.new_sub_path()
    ctx.arc(x + width - radius, y + radius, radius, -90 * degrees, 0 * degrees)
    ctx.arc(x + width - radius, y + height - radius, radius, 0 * degrees, 90 * degrees)
    ctx.arc(x + radius, y + height - radius, radius, 90 * degrees, 180 * degrees)
    ctx.arc(x + radius, y + radius, radius, 180 * degrees, 270 * degrees)
    ctx.close_path()

for step in steps:
    num = step["num"]
    title_text = step["title"]
    desc_text = step["desc"]
    
    surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, 1080, 1350)
    ctx = cairo.Context(surface)
    
    # 1. Fondo Malva Completo (#C9B3B9)
    ctx.set_source_rgba(201/255.0, 179/255.0, 185/255.0, 1.0)
    ctx.paint()
    
    # 2. Recortar la ventana del vídeo en x=27, y=145, w=1026, h=1175 con radio 30
    add_rounded_rectangle(ctx, 27, 145, 1026, 1175, 30)
    ctx.set_operator(cairo.OPERATOR_CLEAR)
    ctx.fill()
    ctx.set_operator(cairo.OPERATOR_OVER)
    
    # 3. Borde redondeado del vídeo (2px, #E3DCD1 al 45% opacidad)
    add_rounded_rectangle(ctx, 27, 145, 1026, 1175, 30)
    ctx.set_source_rgba(227/255.0, 220/255.0, 209/255.0, 0.45)
    ctx.set_line_width(3)
    ctx.stroke()
    
    # 4. Cabecera Superior: Línea separadora a y=125
    ctx.move_to(0, 125)
    ctx.line_to(1080, 125)
    ctx.set_source_rgba(227/255.0, 220/255.0, 209/255.0, 0.45)
    ctx.set_line_width(2)
    ctx.stroke()
    
    # Dibujar Logo a x=45, y=25 (escalado a alto 75px)
    ctx.save()
    ctx.translate(45, 25)
    ctx.scale(scale_logo, scale_logo)
    ctx.set_source_surface(logo_surface, 0, 0)
    ctx.paint()
    ctx.restore()
    
    # Dibujar Título del Paso (Peso NORMAL / Elegante, NO negrita forzada)
    ctx.select_font_face("Serif", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_NORMAL)
    ctx.set_font_size(42)
    ctx.set_source_rgba(1.0, 1.0, 1.0, 0.98)
    
    extents = ctx.text_extents(title_text)
    title_x = 1035 - extents.width - extents.x_bearing
    title_y = 75
    ctx.move_to(title_x, title_y)
    ctx.show_text(title_text)
    
    # 5. Gradiente inferior y Descripción sobre la ventana del vídeo
    ctx.save()
    add_rounded_rectangle(ctx, 27, 145, 1026, 1175, 30)
    ctx.clip()
    
    # Gradiente desde y=980 a y=1320 (negro translúcido)
    pat = cairo.LinearGradient(0, 980, 0, 1320)
    pat.add_color_stop_rgba(0, 0, 0, 0, 0)
    pat.add_color_stop_rgba(1, 0, 0, 0, 0.85)
    ctx.rectangle(27, 980, 1026, 340)
    ctx.set_source(pat)
    ctx.fill()
    
    # Texto de descripción en 1 línea centrado (Peso NORMAL / Regular, NO negrita)
    ctx.select_font_face("Sans", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_NORMAL)
    ctx.set_font_size(25)
    ctx.set_source_rgba(1.0, 1.0, 1.0, 0.92)
    
    d_extents = ctx.text_extents(desc_text)
    desc_x = 540 - (d_extents.width / 2.0) - d_extents.x_bearing
    desc_y = 1255
    ctx.move_to(desc_x, desc_y)
    ctx.show_text(desc_text)
    
    ctx.restore()
    
    out_file = os.path.join(scratch_dir, f"overlay_step_{num:02d}.png")
    surface.write_to_png(out_file)
    print(f"Cairo generated clean REGULAR WEIGHT overlay PNG for Step {num}: {out_file}")

print("ALL REGULAR WEIGHT OVERLAYS GENERATED SUCCESSFULLY!")
