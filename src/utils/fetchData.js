
export const exerciseOptions ={
  headers: {
    
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host':process.env.REACT_APP_RAPID_API_HOST,
  }
};


export const youtubeOptions = {
  method: 'GET',
   headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

//fetch API  - alternative way to Axios
export const fetchData = async (url, options) => {

    try {
        const response = await fetch(url, options)
        const data = await response.json()
    
        return data
    
    } catch (error) {
        console.log(error)
    }

}
