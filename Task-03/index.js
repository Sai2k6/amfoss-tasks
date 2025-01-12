function playSound(key) {
  const sounds = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3",
  };

  if (sounds[key]) {
    const audio = new Audio(sounds[key]);
    audio.play();
  } else {
    console.error(`No sound mapped for key: ${key}`);
  }
}
