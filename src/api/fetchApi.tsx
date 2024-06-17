import axios from 'axios'

interface Activity {
    startTime: string
    endTime: string
    activity: string
    location: string
}

interface ApiResponse {
    activities: Activity[]
}

export async function fetchApi(url: string) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error fetching data: ", error.message)
        } else {
            console.log("Unexpected error: ", error)
        }
        return []
    }
}
