interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Bad Horsie',
    details: {
        author: 'John Doe',
        year: 2020
    }
}

/** Destructuring
 * coger de AudioPlayer ciertas piezas  */
const song = 'New Song';

const {
    song: nameSong,
    songDuration,
    details: { author }
} = audioPlayer;
// console.log('Song 1:', song); // New Song
// console.log('Song 2:', nameSong); // Bad Horsie
// console.log('SongDuration:', songDuration);
// console.log('Author:', author); // John Doe

/** Destructuracion de arreglos */
const [p1, p2, trunks]: string[] = ['Goku','Vegetta','Trunks'];

console.log('Personajes:', p1, p2, trunks);
// const trunks = dbz[3] || 'No hay ni chimba';
console.log('dbz:', trunks);

export{};