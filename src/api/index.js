import { ref } from 'vue'
import axios from 'axios'

export const useRequest = async (url, config = {}) => {
  const data = ref(null)
  const response = ref(null)
  const onError = ref(null)

  try {
    const result = await axios.request({
      url,
      ...config
    })

    response.value = result
    data.value = result.data
  } catch (error) {
    console.log('error: ' + error)
    onError.value = error
  }

  return { response, data, onError }
}