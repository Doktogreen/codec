import React from 'react'
import { 
  InvalidIconButton, 
  MessageIconButton, 
  ValidIconButton, 
  WebIconButton
} from './buttonIcons'
// import data from './data'

export default function TD() {
  return (
    <React.Fragment>
        <tr>
          <td>
            Email 
          </td>
          <td>
            Name
          </td>
          <td>
            Company
          </td>
          <td>
            Phone number
            <ValidIconButton />
            <InvalidIconButton />
          </td>
          <td>
            Email 
            <ValidIconButton />
            <InvalidIconButton />
          </td>
          <td>
            City
          </td>
          <td>
            State
          </td>
          <td>
            Weblink
            <WebIconButton />
          </td>
          <td>
            Campaign 
          </td>
          <td>
            Status 
          </td>
          <td>
            <MessageIconButton />
            <InvalidIconButton />
            <InvalidIconButton />
          </td>
        </tr> 
        <tr>
          <td>
            Email 
          </td>
          <td>
            Name
          </td>
          <td>
            Company
          </td>
          <td>
            Phone number
            <ValidIconButton />
            <InvalidIconButton />
          </td>
          <td>
            Email 
            <ValidIconButton />
            <InvalidIconButton />
          </td>
          <td>
            City
          </td>
          <td>
            State
          </td>
          <td>
            Weblink
            <WebIconButton />
          </td>
          <td>
            Campaign 
          </td>
          <td>
            Status 
          </td>
          <td>
            <MessageIconButton />
            <InvalidIconButton />
            <InvalidIconButton />
          </td>
        </tr> 
    </React.Fragment>
  )
}
