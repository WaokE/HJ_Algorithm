function splitScale(scaleString) {
  const result = [];

  for (let i = 0; i < scaleString.length; i++) {
    let note = scaleString[i];
    if (i < scaleString.length - 1 && scaleString[i + 1] === '#') {
      note += '#';
      i++;
    }
    result.push(note);
  }

  return result;
}

function timeToMinute(timeStr) {
  const [hour, minute] = timeStr.split(':');
  return Number(hour) * 60 + Number(minute);
}

function solution(m, musicinfos) {
  let result = '';
  let maxLength = -1;

  function isMelodyMatch(playedMelody, m) {
    for (let i = 0; i <= playedMelody.length - m.length; i++) {
      if (playedMelody.slice(i, i + m.length).join('') === m.join('')) {
        return true;
      }
    }
    return false;
  }

  musicinfos.forEach((data) => {
    const [start, end, name, melody] = data.split(',');
    const playedTime = timeToMinute(end) - timeToMinute(start);
    const melodyArray = splitScale(melody);

    // 트랙 전부가 두 번 이상 재생되었을 경우
    let playedMelody = [];
    if (playedTime >= melodyArray.length * 2) {
      const fullMelodyCount = Math.floor(playedTime / melodyArray.length);
      const remainder = playedTime % melodyArray.length;
      for (let i = 0; i < fullMelodyCount; i++) {
        playedMelody = playedMelody.concat(melodyArray);
      }
      playedMelody = playedMelody.concat(melodyArray.slice(0, remainder));
    }
    // 트랙 전부가 한 번 이상 재생되었을 경우
    else if (playedTime >= melodyArray.length) {
      playedMelody = melodyArray.concat(melodyArray.slice(0, playedTime - melodyArray.length));
    }
    // 트랙이 전부 재생되지 못했을 경우
    else {
      playedMelody = melodyArray.slice(0, playedTime);
    }

    if (isMelodyMatch(playedMelody, splitScale(m))) {
      if (maxLength < playedTime) {
          result = name;
          maxLength = playedTime;
      }
    }
  });

  return result !== '' ? result : "(None)";
}
