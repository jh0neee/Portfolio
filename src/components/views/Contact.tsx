import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Modal from "../common/Modal";
import { BeatLoader } from "react-spinners";

interface ContactProps {
  showModal: boolean;
  closeModal: () => void;
}

const Contact = ({ showModal, closeModal }: ContactProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
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
                {isLoading ? (
                  <BeatLoader color="#5d5d5d" size={13} />
                ) : (
                  <div>SEND MESSAGE</div>
                )}
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
      padding: 18px 1.75rem 1rem;
      font-size: 17px;
      text-align: center;
      width: 131.19px;
      border: 1px solid #5d5d5d;
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
