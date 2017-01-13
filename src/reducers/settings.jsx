export default function(state = {}, action) {
    Object.freeze(state);
    if (action.type === 'SETTINGCHANGE') {

        // Also store value in localStorage
        let valToStore = JSON.stringify({value: action.value});
        localStorage.setItem(action.setting, valToStore);

        console.debug('Changed setting', action.setting, 'to', action.value);
        return Object.assign({}, state, {
            [action.setting]: action.value
        });
    }
    return state;
}
