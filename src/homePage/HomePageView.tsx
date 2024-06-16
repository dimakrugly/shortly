import './background.css';
import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/tailwind.css';

interface Props {
    link: string;
    setLink: (text: string) => void;
    handleShorten: () => void;
    isShortened: boolean;
    handleReset: () => void;
    copied: boolean;
    handleShowModal: () => void;
    isLoading: boolean;
    isError: boolean;
}
export const HomePageView: React.FC<Props> = ({link, setLink, handleShorten, isShortened, handleReset, copied, handleShowModal, isLoading, isError}) => (
    <>
        <div className="flex flex-col items-center justify-center h-screen w-screen z-1 absolute gap-1 z-10">
            <h2 className="text-black text-3xl">Shortly!</h2>
            <p className="font-glitch">Provide a link to shortify</p>
            <div className="flex gap-2">
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                    ) : (
                    <input placeholder="Enter Link" disabled={isShortened} type="text" className="rounded p-1 outline-none" value={link} onChange={e => setLink(e.target.value)} />
                )}
                {
                    isShortened ? (
                        <CopyToClipboard text={link} onCopy={handleShowModal}>
                            <button className="bg-amber-200 rounded p-1">Copy</button>
                        </CopyToClipboard>
                        ) : (
                        <button disabled={!link} className="bg-amber-200 rounded p-1" onClick={handleShorten}>Shortify</button>
                    )
                }
                <button className={`bg-red-500 rounded p-1 ${!link && `bg-gray-800`}`} onClick={handleReset} disabled={!link}>Reset</button>
            </div>
            {copied && <h3 className="absolute bg-amber-300 bottom-10 rounded p-2 text-2xl">copied to clipboard</h3>}
            {isError && <h3 className="absolute bg-red-600 bottom-10 rounded p-2 text-2xl">error, try another link</h3>}
        </div>
        <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </>
)
