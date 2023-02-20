import axios from "axios";
import config from "@/config";

export default function(query) {
  return axios.post(config.graphQlUrl, {
    query,
    variables: null,
  })

}
