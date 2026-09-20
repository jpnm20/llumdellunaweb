import os, subprocess, time

steps = [
    {"num": 1, "video": "paso-01.mp4", "y_crop": "ih*0.35"},
    {"num": 2, "video": "paso-02.mp4", "y_crop": "ih*0.35"},
    {"num": 3, "video": "paso-03.mp4", "y_crop": "ih*0.35"},
    {"num": 4, "video": "paso-04.mp4", "y_crop": "ih*0.35"},
    {"num": 5, "video": "paso-05.mp4", "y_crop": "ih*0.15"},
    {"num": 6, "video": "paso-06.mp4", "y_crop": "ih*0.15"},
    {"num": 7, "video": "paso-07.mp4", "y_crop": "ih*0.15"},
    {"num": 8, "video": "paso-08.mp4", "y_crop": "ih*0.15"}
]

base_dir = "/home/jnavas/llumdelluna"
video_dir = os.path.join(base_dir, "instagram-posts/videos/paso-a-paso-ritual-facial")
scratch_dir = os.path.join(base_dir, "scratch")

t_start = time.time()

for step in steps:
    num = step["num"]
    in_vid = os.path.join(video_dir, step["video"])
    in_overlay = os.path.join(scratch_dir, f"overlay_step_{num:02d}.png")
    out_vid = os.path.join(video_dir, f"post-paso-{num:02d}.mp4")
    
    y_crop = step["y_crop"]
    filter_str = (
        f"[0:v]crop=720:825:0:{y_crop},scale=1026:1175[vid];"
        f"color=c=#C9B3B9:s=1080x1350[bg];"
        f"[bg][vid]overlay=27:145[comp];"
        f"[comp][1:v]overlay=0:0[out]"
    )
    
    cmd = [
        "ffmpeg", "-v", "error", "-y",
        "-i", in_vid,
        "-i", in_overlay,
        "-filter_complex", filter_str,
        "-map", "[out]",
        "-map", "0:a?",
        "-c:v", "libx264", "-preset", "ultrafast", "-crf", "22", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
        out_vid
    ]
    
    t0 = time.time()
    print(f"Rendering post-paso-{num:02d}.mp4 (1080x1350)...")
    subprocess.run(cmd, check=True)
    print(f"  -> Done in {time.time() - t0:.2f}s")

print(f"ALL 8 POST VIDEOS (1080x1350) RENDERED IN {time.time() - t_start:.2f}s!")
