import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
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
      cursor: pointer;
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const { name, email, message } = form;
  const disabledValue = !name || !email || !message;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });

    closeModal();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );

      alert("메일이 전송되었습니다.");

      resetForm();
    } catch (err) {
      alert("메일이 발송되지 않았습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          show={showModal}
          onCancel={resetForm}
          onSubmit={onSubmit}
          formRef={formRef}
        >
          <ContactBox>
            <LeftBox>
              <div>
                <ContactItem className="name">
                  <ContactLabel>NAME</ContactLabel>
                  <ContactInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </ContactItem>
                <ContactItem className="email">
                  <ContactLabel>EMAIL</ContactLabel>
                  <ContactInput
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </ContactItem>
              </div>
              <button type="submit" disabled={disabledValue}>
                SEND MESSAGE
              </button>
            </LeftBox>
            <ContactItem className="message">
              <ContactLabel>MESSAGE</ContactLabel>
              <Text name="message" value={message} onChange={onChange} />
            </ContactItem>
          </ContactBox>
        </Modal>
      )}
    </>
  );
};

export default Contact;
