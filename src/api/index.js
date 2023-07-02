import { ref } from 'vue'
import axios from 'axios'

export const getData = async (url, config = {}) => {
  const data = ref(null)
  const response = ref(null)

  try {
    const result = await axios.request({
      url,
      ...config
    })

    response.value = result
    data.value = result.data
  } catch (error) {
    console.error(error)
  }

  return { response, data, fetch }
}