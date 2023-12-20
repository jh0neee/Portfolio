import React, { FormEvent, ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import BackDrop from "./BackDrop";
import { CSSTransition } from "react-transition-group";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  show: boolean;
  onCancel: () => void;
  className?: string;
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
  formRef?: React.RefObject<HTMLFormElement>;
}

const ModalLayout = styled.div`
  z-index: 100;
  position: fixed;
  left: 55%;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  width: 700px;
  height: 500px;
  background: white;
  top: 50%;
  padding: 2.125rem 2.75rem;
  border-radius: 40px;
`;

const ModalCloseIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  height: 400px;
  font-size: 0.94rem;
  padding: 1.125rem 0.5rem;
  line-height: 1.4rem;
`;

const ModalOverlay: React.FC<ModalProps> = ({
  className,
  onCancel,
  children,
  onSubmit,
  formRef,
}) => {
  const content = (
    <ModalLayout className={className}>
      <ModalCloseIcon onClick={onCancel}>
        <IoCloseOutline size="30px" />
      </ModalCloseIcon>
      <form
        onSubmit={onSubmit ? onSubmit : e => e.preventDefault()}
        ref={formRef}
      >
        <ModalContent>{children}</ModalContent>
      </form>
    </ModalLayout>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("portal") as HTMLElement,
  );
};

const Modal: React.FC<ModalProps> = props => {
  return (
    <>
      {props.show && <BackDrop />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
