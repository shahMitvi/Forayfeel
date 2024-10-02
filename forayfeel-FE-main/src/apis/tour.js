import api from "./axiosMain"
import axios from "axios"

export const createTour = async (data) => {
    console.log(data)
    const user = localStorage.getItem('user') || null;
    let token = ""
    if (user) {
        token = JSON.parse(user)['accessToken'];
    }
    var tour_data = new FormData();
    tour_data.append('tour_name',data.tour_name)
    tour_data.append('place_from',data.place_from)
    tour_data.append('place_to',data.place_to)
    tour_data.append('days',data.days)
    tour_data.append('state',data.state)
    tour_data.append('nights',data.nights)
    tour_data.append('price',data.price)
    tour_data.append('tour_descriptions',data.tour_descriptions)
    tour_data.append('cover_image',data.cover_image)
    tour_data.append('is_featured',data.is_featured)
    return await axios({
        method: "post",
        url: `${process.env.REACT_APP_URL}/api/tour/create`,
        data: tour_data,
        headers: { "Content-Type": "multipart/form-data" , "x-access-token":token},
      })
}

export const getTours = async () =>{
    return await api.get('/api/tour/all')
}