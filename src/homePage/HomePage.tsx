import { HomePageView } from "./HomePageView";
import { useState } from "react";
import axios from "axios";

export const HomePage = () => {
    const [link, setLink] = useState('');
    const [isShortened, setIsShortened] = useState(false);


        const handlePost = async () => {
            const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
            const cleanUriApiUrl = 'https://cleanuri.com/api/v1/shorten';

            try {
            const response = await axios.post(corsAnywhereUrl + cleanUriApiUrl, {
                url: link
            });
            console.log('Shortened URL:', response.data.result_url);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    }

    return (
        <HomePageView link={link} setLink={setLink} handlePost={handlePost} />
    );
}
