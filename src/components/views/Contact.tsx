import styled from "styled-components";
import { theme } from "@/styles/theme";
import Modal from "../common/Modal";

interface ContactProps {
  showModal: boolean;
  closeModal: () => void;
}

const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "SUIT-Regular";
  font-size: 18px;
`;

const LeftBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > * {
    &:last-child {
      all: unset;
      padding: 1rem 1.75rem;
      font-size: 17px;
      text-align: center;
      border: 1px solid ${theme.colors.darkLow};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;

  &.name {
    margin-top: 27px;
  }

  &.email {
    margin-top: 65px;
  }

  &.message {
    width: 55%;
  }
`;

const ContactLabel = styled.label`
  margin-bottom: 20px;
`;

const ContactInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
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
            <LeftBox>
              <div>
                <ContactItem className="name">
                  <ContactLabel>NAME</ContactLabel>
                  <ContactInput type="text" name="name" />
                </ContactItem>
                <ContactItem className="email">
                  <ContactLabel>EMAIL</ContactLabel>
                  <ContactInput type="text" name="email" />
                </ContactItem>
              </div>
              <button>SEND MESSAGE</button>
            </LeftBox>
            <ContactItem className="message">
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
