import {HomePageView} from "./HomePageView";
import {useState} from "react";
import axios from "axios";

export const HomePage = () => {
    const [link, setLink] = useState('');

    const handlePost = () => {
        axios.post('https://cleanuri.com/api/v1/shorten', {
            url: link
        })
            .then(response => {
                console.log('Shortened URL:', response.data.result_url);
            })
            .catch(error => {
                console.error('Error shortening URL:', error);
            });
    }

    return (
            <HomePageView link={link} setLink={setLink} handlePost={handlePost}/>
    )
}
