export default function requestReducer (state, action){

    switch(action.requestType){
        case  "posts":
            return 1;
        case  "todos":
            return 2;
        case "users":
            return 3;
    }
    
}