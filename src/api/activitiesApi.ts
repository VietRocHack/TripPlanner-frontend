import axiosClient from './axiosClient'

export const getActivities = async () => {
    const url = "generate_itinerary?prompt=Hanoi%20Vietnam"
    const response = await axiosClient.get(url)
    return response.data
}