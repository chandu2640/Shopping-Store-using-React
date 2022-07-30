import axios from "axios";

export function fetchData(url) {
    axios.get(url).then((resp) => {
        return resp.data;
    });
}
