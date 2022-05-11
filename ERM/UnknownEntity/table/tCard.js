import React from "react";
import { 
    FilterIconButton, 
    UploadIconButton 
} from "./buttonIcons";

export default function TableCard({table}) {

    return(
        <div class="table_container back">
            <div className="card_header">
                <b>Search Result - {" 1046 "} Records</b>
                <b><UploadIconButton /><FilterIconButton /></b>
            </div>
            {table}
        </div>
    )
}