import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.TODOIST_TOKEN

class ApiRequest {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,  // Set the base URL here
      timeout: 10000,  // Optional timeout for requests
      headers: {
        'Content-Type': 'application/json',  // Default headers
        'X-Request-Id': uuidv4() ,
        'Authorization': `Bearer ${TOKEN}`
      }
    });
  }

  // GET request
  async get({endpoint, headers = {}}) {
    try {
      const response = await this.api.get(endpoint, { headers });
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  // POST request
  async post({endpoint, data, headers = {}}) {
    try {
      const response = await this.api.post(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  // PUT request
  async put({endpoint, data, headers = {}}) {
    try {
      const response = await this.api.put(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }

  // DELETE request
  async delete({endpoint}) {
    try {
      const response = await this.api.delete(endpoint, { headers: {'Authorization': `Bearer ${TOKEN}`}});
      return response.data;
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }
}


export default new ApiRequest();  
