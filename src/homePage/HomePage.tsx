import { HomePageView } from "./HomePageView";
import {useCallback, useState} from "react";
import axios from "axios";

export const HomePage = () => {
    const [link, setLink] = useState('');
    const [isShortened, setIsShortened] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleReset = useCallback(()=>{
        setLink('');
        setIsShortened(false);
    }, []);

    const handleShorten = useCallback(async () => {
        const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
        const cleanUriApiUrl = 'https://cleanuri.com/api/v1/shorten';
        setIsloading(true);

        try {
            const response = await axios.post(corsAnywhereUrl + cleanUriApiUrl, {
                url: link
            });
            setLink(response.data?.result_url);
            setIsShortened(true);
            setIsloading(false);
        } catch (error) {
            setIsloading(false);
            setIsError(true);
            handleReset();
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }, [handleReset, link]);

    const handleShowModal = useCallback(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000)
    }, []);

    return (
        <HomePageView
            link={link}
            setLink={setLink}
            handleShorten={handleShorten}
            isShortened={isShortened}
            handleReset={handleReset}
            copied={copied}
            handleShowModal={handleShowModal}
            isLoading={isLoading}
            isError={isError}
        />
    );
}
