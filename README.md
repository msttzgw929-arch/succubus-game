# サキュバスから逃げて！ (first-person 3D chase game)

Open `index.html` via any static web server (e.g. `python3 -m http.server`), or open the
self-contained single file `dist/succubus-game.html` directly (works offline / file://).

## Controls
- Mobile: left stick = move, right stick = turn (fast). When caught, tap the belly repeatedly.
- PC: WASD / arrow keys to move, mouse drag (or Q/E, ←/→) to turn, Space / click to tap the belly.

## Rules
Survive as long as possible. If she reaches you, you get pressed into her belly: tap it ~8–12 times
before the timer runs out to escape (brief invincibility afterwards). The longer you evade her,
the more irritated she gets; she casts magic and her belly grows (endlessly, in stages), and she
starts plowing through buildings, which dissolve away without debris.

## Credits
- Character art: user-supplied image (background removed, layered and rigged; lower legs/shoes drawn procedurally).
- Voice: AivisSpeech Engine 1.2.0, voice model 「みちのくあいり」 (pre-rendered mp3 in assets/voice).
- three.js r169 (MIT), vendored in vendor/.
- SFX and BGM are synthesized at runtime with WebAudio.
