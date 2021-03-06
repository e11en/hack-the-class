export const getPixelSize = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue("--pixel-size"));

export const MovementSpeed = 1;

export const Direction = {
    DOWN: 0,
    LEFT : 1,
    RIGHT : 2,
    UP : 3
};

export const ObjectType = {
    PLAYER: 0,
    CONSOLE: 1,
    WALL: 2,
    LASER: 3,
    FLAG: 4,
    DOOR: 5,
    CHARACTER: 6,
    ITEM: 7
};