export const checkBeforeZero = (time: number) => (time > 9 ? `${time}` : `0${time}`);

const convertMinToSec = (minutes: number) => minutes * 60;

export const getRecallTiming = (counter: number) => {
    switch (counter) {
    case 0:
    case 1:
    case 2:
        return convertMinToSec(1);
    case 3:
        return convertMinToSec(2);
    case 4:
        return convertMinToSec(4);
    case 5:
        return convertMinToSec(10);
    default:
        return convertMinToSec(30);
    }
};

export const convertSecToMinAndSce = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec - minutes * 60;
    return `${checkBeforeZero(minutes)}:${checkBeforeZero(seconds)}`;
};
