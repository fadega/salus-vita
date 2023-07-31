
export const exerciseOptions ={
  headers: {
    // 'X-RapidAPI-Key': '8c108752edmsh6c47492a682309fp134bfdjsncc7928457a39',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
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
