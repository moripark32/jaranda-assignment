import React, { useState } from 'react';
import styled from 'styled-components'
import Modal from 'Components/modal'

const Td = styled.td`
  padding-right:18px;
  padding-top: 20px;
`
const Table = styled.table`
`
const THead = styled.thead`
  margin: 8px 0px;
`
const TBody = styled.tbody`
`

const User = ({user, onClickhandler})=> {
  const {id,userName,address,cardNumber,role,isAdmin} = user
  return (
    <tr onClick={onClickhandler}>
      <Td>{id}</Td>
      <Td>{userName}</Td>
      <Td>{address}</Td>
      <Td>{cardNumber}</Td>
      <Td>{role}</Td>
      <Td>{isAdmin ? '관리자' : ''}</Td>
    </tr>
  )
}


const UserTable = ({users}) => {
  const [ isModal , setIsModal ] = useState(false)
  const [ modalId, setModalId ] = useState(0)
  const openModal = (idx) => {
    setIsModal(true)
    setModalId(idx)
  }
  return (
    <>
      <Table>
        <THead>
          <tr>
            <Td>USERID</Td>
            <Td>이름</Td>
            <Td>주소</Td>
            <Td>카드번호</Td>
            <Td>접근게시판</Td>
            <Td>admin</Td>
          </tr>
        </THead>
        <TBody>
          {users.map((user,idx)=> (
            <User 
              key= {idx}
              user={user}
              onClickhandler={() => openModal(idx)}
            />
          ))}
        </TBody>
      </Table>
      <Modal
        show={isModal}
      >
        {isModal && users[modalId].userName}
      </Modal>
    </>
  );
}

export default UserTable;