import React from 'react'
import { ArrowDownIcon } from './tIcons'

export default function TH() {
  return (
      <React.Fragment>
          <tr>
            <th>Entity ID <ArrowDownIcon /></th>
            <th>Name <ArrowDownIcon /></th>
            <th>Company <ArrowDownIcon /></th>
            <th>Phone number <ArrowDownIcon /></th>
            <th>Email <ArrowDownIcon /></th>
            <th>City <ArrowDownIcon /></th>
            <th>State <ArrowDownIcon /></th>
            <th>Weblink <ArrowDownIcon /></th>
            <th>Campaign <ArrowDownIcon /></th>
            <th>Status <ArrowDownIcon /></th>
            <th></th>
        </tr>
      </React.Fragment>
  )
}
