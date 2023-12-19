import styled from "styled-components";
import { theme } from "@/styles/theme";
import Modal from "../common/Modal";

interface ContactProps {
  showModal: boolean;
  closeModal: () => void;
}

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  grid-template-rows: 1fr 1fr 0.5fr;
  grid-column-gap: 30px;
  align-items: end;
  font-family: "SUIT-Regular";
  font-size: 18px;

  > * {
    &:first-child {
      grid-area: 1/1/2/2;
      width: 210px;
      margin: 2rem 0 0 2rem;
      align-self: start;
    }

    &:nth-child(2) {
      grid-area: 2/1/3/2;
      width: 210px;
      margin: 0 0 0 2rem;
      align-self: start;
    }

    &:nth-child(3) {
      grid-area: 3/1/4/2;
      all: unset;
      width: 132px;
      height: 17px;
      margin-left: 2.5rem;
      padding: 1rem 1.75rem;
      font-size: 17px;
      text-align: center;
      border: 1px solid ${theme.colors.darkLow};
    }

    &:last-child {
      grid-area: 1/2/4/3;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.label`
  margin-bottom: 20px;
`;

const ContactInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  width: 210px;
  height: 22px;
`;

const Text = styled.textarea`
  height: 330px;
  border: 1px solid #d9d9d9;
  resize: none;
  border-radius: 20px;
`;

const Contact: React.FC<ContactProps> = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <Modal show={showModal} onCancel={closeModal}>
          <ContactBox>
            <ContactItem>
              <ContactLabel>NAME</ContactLabel>
              <ContactInput type="text" name="name" />
            </ContactItem>
            <ContactItem>
              <ContactLabel>EMAIL</ContactLabel>
              <ContactInput type="text" name="email" />
            </ContactItem>
            <button>SEND MESSAGE</button>
            <ContactItem>
              <ContactLabel>MESSAGE</ContactLabel>
              <Text name="message" />
            </ContactItem>
          </ContactBox>
        </Modal>
      )}
    </>
  );
};

export default Contact;
