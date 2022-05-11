import React from "react";
import { 
    FilterIcon,
    InvalidIcon, 
    MessageIcon, 
    UploadIcon, 
    ValidIcon, 
    WebIcon 
} from "./tIcons";

export const InvalidIconButton = () => {
    return(
        <button  
            type="button"
        >
            <InvalidIcon  />
        </button>
    )
}

export const ValidIconButton = () => {
    return(
        <button 
            type="button"
        >
            <ValidIcon  />
        </button>
    )
}

export const WebIconButton = () => {
    return(
        <button className="icons_button_cover_one" 
            type="button"
        >
            <WebIcon  />
        </button>
    )
}

export const MessageIconButton = () => {
    return(
        <button className="icons_button_cover_one" 
            type="button"
        >
            <MessageIcon  />
        </button>
    )
}

export const UploadIconButton = () => {
    return(
        <button className="icons_button_cover_two" 
            type="button"
        >
            <UploadIcon  />
        </button>
    )
}

export const FilterIconButton = () => {
    return(
        <button className="icons_button_cover_two" 
            type="button"
        >
            <FilterIcon  />
        </button>
    )
}