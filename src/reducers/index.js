import {combineReducers} from 'redux';

const songsReducer=()=>{
    return[
        {title:'Hi',duration:'4:05'},
        {title:'Hello',duration:'1:05'},
        {title:'Bye',duration:'2:05'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})
