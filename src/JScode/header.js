class header{
    constructor(){

    }

    linkClicked(text){
        alert('יעביר לעמוד: '+text)
    }
    getWindowWidth(innerWidth){

        // console.log(innerWidth)
        return innerWidth>895;
        }
}
export default header;