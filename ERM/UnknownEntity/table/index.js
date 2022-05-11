import React from 'react'
// import Pagination from './pagination/pagination'
import TBody from './tbody'
import TableCard from './tCard'
import THead from './thead'

export default function UnkwoneEntityTable() {
  let tableXml = (
    <div className="table-wrapper">
        <table className="fl-table">
            <THead />
            <TBody />
        </table>
        <div>
          {/* <Pagination /> */}
        </div>
    </div>
  )
  return (
    <TableCard table={tableXml} />
  )
}
