export const getGifs = async(category) =>{ 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FXaIBACQNKNPvlEz9GLTNLl8ZQTu1YAx`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        console.log(img);
        return {
            id: img.id,
            tittle: img?.tittle,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}