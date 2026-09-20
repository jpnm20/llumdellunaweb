import os, subprocess, time
from concurrent.futures import ProcessPoolExecutor

steps = [
    {"num": 1, "video": "paso-01.mp4", "y_crop": 100},
    {"num": 2, "video": "paso-02.mp4", "y_crop": 100},
    {"num": 3, "video": "paso-03.mp4", "y_crop": 100},
    {"num": 4, "video": "paso-04.mp4", "y_crop": 100},
    {"num": 5, "video": "paso-05.mp4", "y_crop": 100},
    {"num": 6, "video": "paso-06.mp4", "y_crop": 100},
    {"num": 7, "video": "paso-07.mp4", "y_crop": 100},
    {"num": 8, "video": "paso-08.mp4", "y_crop": 100}
]

base_dir = "/home/jnavas/llumdelluna"
video_dir = os.path.join(base_dir, "instagram-posts/videos/paso-a-paso-ritual-facial")
scratch_dir = os.path.join(base_dir, "scratch")

def render_step(step):
    num = step["num"]
    in_vid = os.path.join(video_dir, step["video"])
    in_overlay = os.path.join(scratch_dir, f"overlay_step_{num:02d}.png")
    out_vid = os.path.join(video_dir, f"post-paso-{num:02d}.mp4")
    
    y_crop = step["y_crop"]
    # crop 720x825 a y=100 para centrar la cara y las manos de la especialista en el visor
    # -loop 1 en el overlay PNG para que no corte la reproducción del vídeo en el frame 1
    filter_str = (
        f"[0:v]crop=720:825:0:{y_crop},scale=1026:1175[vid];"
        f"color=c=#C9B3B9:s=1080x1350[bg];"
        f"[bg][vid]overlay=27:145:shortest=1[comp];"
        f"[comp][1:v]overlay=0:0:shortest=1[out]"
    )
    
    cmd = [
        "ffmpeg", "-v", "error", "-y",
        "-i", in_vid,
        "-loop", "1",
        "-i", in_overlay,
        "-filter_complex", filter_str,
        "-map", "[out]",
        "-map", "0:a?",
        "-c:v", "libx264", "-preset", "superfast", "-crf", "22", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
        "-threads", "4",
        out_vid
    ]
    
    t0 = time.time()
    print(f"Rendering animated centered video post-paso-{num:02d}.mp4 (1080x1350)...")
    subprocess.run(cmd, check=True)
    dt = time.time() - t0
    print(f"✓ Completed animated video post-paso-{num:02d}.mp4 in {dt:.1f}s")
    return num

if __name__ == "__main__":
    t_start = time.time()
    print("Launching parallel rendering of all 8 MP4 ANIMATED & CENTERED post videos (1080x1350)...")
    with ProcessPoolExecutor(max_workers=8) as executor:
        results = list(executor.map(render_step, steps))
    print(f"🎉 ALL 8 ANIMATED & CENTERED POST VIDEOS (1080x1350) RENDERED SUCCESSFULLY IN {time.time() - t_start:.2f}s!")
