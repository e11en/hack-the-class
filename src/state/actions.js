// GAME
export const GameActionTypes = {
    GAME_OVER: "GAME_OVER",
    SET_LANGUAGE: "SET_LANGUAGE",
    SET_MAP: "SET_MAP",
    SET_LEVEL: "SET_LEVEL"
}

export const GameOver = (isGameOver) => (dispatch) => dispatch({type: GameActionTypes.GAME_OVER, payload: isGameOver});
export const SetLanguage = (language) => (dispatch) => dispatch({type: GameActionTypes.SET_LANGUAGE, payload: language});
export const SetMap = (map) => (dispatch) => dispatch({type: GameActionTypes.SET_MAP, payload: map});
export const SetLevel = (level) => (dispatch) => dispatch({type: GameActionTypes.SET_LEVEL, payload: level});

// CHARACTER
export const CharacterActionTypes = {
    GO_LEFT: "GO_LEFT",
    GO_RIGHT: "GO_RIGHT",
    GO_UP: "GO_UP",
    GO_DOWN: "GO_DOWN",
    SET_COLLIDING: "SET_COLLIDING",
    GET_DAMAGE: "GET_DAMAGE",
    GET_HEALTH: "GET_HEALTH",
    RESET_HEALTH: "RESET_HEALTH",
    SET_POSITION: "SET_POSITION",
    SET_CHARACTER_IMAGE: "SET_CHARACTER_IMAGE",
};

export const SetPosition = (x, y) => (dispatch) => dispatch({type: CharacterActionTypes.SET_POSITION, payload: {x: x, y: y}});
export const GoLeft = (speed) => (dispatch) => dispatch({type: CharacterActionTypes.GO_LEFT, payload: speed});
export const GoRight = (speed) => (dispatch) => dispatch({type: CharacterActionTypes.GO_RIGHT, payload: speed});
export const GoUp = (speed) => (dispatch) => dispatch({type: CharacterActionTypes.GO_UP, payload: speed});
export const GoDown = (speed) => (dispatch) => dispatch({type: CharacterActionTypes.GO_DOWN, payload: speed});

export const SetColliding = (isColliding, collidingWith, collidingDirection) => 
(dispatch) => dispatch({type: CharacterActionTypes.SET_COLLIDING, payload: {isColliding, collidingWith, collidingDirection}});

export const ResetHealth = () => (dispatch) => dispatch({type: CharacterActionTypes.RESET_HEALTH});
export const GetDamage = (damage) => (dispatch) => dispatch({type: CharacterActionTypes.GET_DAMAGE, payload: damage});
export const GetHealth = (health) => (dispatch) => dispatch({type: CharacterActionTypes.GET_HEALTH, payload: health});
export const SetCharacterImage = (image) => (dispatch) => dispatch({type: CharacterActionTypes.SET_CHARACTER_IMAGE, payload: image});

// MAP OBJECTS
export const MapObjectActionTypes = {
    REPLACE_OBJECTS: "REPLACE_OBJECTS",
    DISABLE_OBJECT: "DISABLE_OBJECT"
};

export const ReplaceObjects = (objects) => (dispatch) => dispatch({type: MapObjectActionTypes.REPLACE_OBJECTS, payload: objects});
export const DisableObject = (id) => (dispatch) => dispatch({type: MapObjectActionTypes.DISABLE_OBJECT, payload: id});