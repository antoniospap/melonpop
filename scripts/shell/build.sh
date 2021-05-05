#!/bin/bash

npx google-closure-compiler \
--language_in ECMASCRIPT5_STRICT \
--language_out ECMASCRIPT5_STRICT \
--warning_level DEFAULT \
--compilation_level WHITESPACE_ONLY \
--isolation_mode IIFE \
--js "./../../lib/rune.js" \
--js "./../../src/scope/Manifest.js" \
--js "./../../src/data/manifest/Resources.js" \
--js "./../../src/Entity/Bullet.js" \
--js "./../../src/Entity/Character.js" \
--js "./../../src/Entity/Melons/Melon.js" \
--js "./../../src/Entity/Melons/type/MelonL.js" \
--js "./../../src/Entity/Melons/type/MelonM.js" \
--js "./../../src/Entity/Melons/type/MelonS.js" \
--js "./../../src/wave/Wave.js" \
--js "./../../src/wave/type/Wave01.js" \
--js "./../../src/wave/type/Wave02.js" \
--js "./../../src/scene/Game.js" \
--js "./../../src/scene/Menu.js" \
--js "./../../src/system/Main.js" \
--js "./../../src/scope/Alias.js" \
--js_output_file "./../../dist/game.js";